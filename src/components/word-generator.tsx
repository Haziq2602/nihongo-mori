
'use client';

import { useState, useMemo } from 'react';
import { useProgress } from '@/hooks/use-progress';
import { hiraganaLessons, katakanaLessons, allKana } from '@/data/kana';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { BotMessageSquare, Sparkles } from 'lucide-react';
import { shuffle } from 'lodash';

const allExampleWords = [...hiraganaLessons, ...katakanaLessons]
  .flatMap(l => l.kana)
  .map(k => k.example)
  // Remove duplicates
  .filter((value, index, self) => self.findIndex(v => v.word === value.word) === index);


interface WordResult {
    word: string;
    reading: string;
    meaning: string;
}

export function WordGenerator() {
  const { learnedKana } = useProgress();
  const [selectedKana, setSelectedKana] = useState<Set<string>>(new Set());
  const [generatedWords, setGeneratedWords] = useState<WordResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const learnedKanaList = useMemo(() => {
    return allKana.filter(k => learnedKana.has(k.kana));
  }, [learnedKana]);

  const toggleKana = (kana: string) => {
    setSelectedKana(prev => {
      const newSet = new Set(prev);
      if (newSet.has(kana)) {
        newSet.delete(kana);
      } else {
        newSet.add(kana);
      }
      return newSet;
    });
  };

  const handleGenerate = () => {
    if (selectedKana.size === 0) {
      setError('Please select at least one kana character.');
      return;
    }
    setError(null);
    setGeneratedWords([]);

    const selectedKanaString = Array.from(selectedKana).join('');
    const regex = new RegExp(`^[${selectedKanaString}]+$`);

    const possibleWords = allExampleWords.filter(ex => regex.test(ex.word));
    
    setGeneratedWords(shuffle(possibleWords).slice(0, 5));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>1. Select Learned Kana</CardTitle>
        </CardHeader>
        <CardContent>
          {learnedKanaList.length === 0 ? (
            <p className="text-muted-foreground">You haven't learned any kana yet. Go to a lesson to start!</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {learnedKanaList.map(k => (
                <button
                  key={k.kana}
                  onClick={() => toggleKana(k.kana)}
                  className={cn(
                    'flex flex-col items-center justify-center p-2 rounded-lg border-2 w-16 h-16 transition-all duration-200',
                    selectedKana.has(k.kana)
                      ? 'border-primary bg-primary/10'
                      : 'border-transparent bg-secondary'
                  )}
                >
                  <span className="text-2xl font-bold">{k.kana}</span>
                  <span className="text-xs text-muted-foreground">{k.romaji}</span>
                </button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="space-y-8">
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">2. Generate Words</h2>
            <Button onClick={handleGenerate} disabled={selectedKana.size === 0} className="w-full" size="lg">
                <Sparkles className="mr-2 h-4 w-4"/>
                Generate Words
            </Button>
            {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
        
        <Card className="min-h-[200px]">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BotMessageSquare className="h-6 w-6 text-accent"/>
                    <span>Example Words</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {generatedWords.length > 0 && (
                    <ul className="space-y-4">
                        {generatedWords.map((w, index) => (
                            <li key={index} className="p-3 bg-secondary rounded-md space-y-1">
                               <div className="flex items-baseline gap-3">
                                 <p className="text-xl font-bold">{w.word}</p>
                                 <p className="text-sm text-muted-foreground">{w.reading}</p>
                               </div>
                               <p className="text-sm">{w.meaning}</p>
                            </li>
                        ))}
                    </ul>
                )}
                 {generatedWords.length === 0 && (
                    <p className="text-muted-foreground text-center pt-8">Your generated words will appear here.</p>
                )}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
