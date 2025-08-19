
'use client';

import { useState, useMemo } from 'react';
import { useProgress } from '@/hooks/use-progress';
import { hiraganaLessons, katakanaLessons } from '@/data/kana';
import { exampleSentences } from '@/data/sentences';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { BotMessageSquare, Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { shuffle } from 'lodash';

const allKana = [...hiraganaLessons, ...katakanaLessons].flatMap(l => l.kana);

interface SentenceResult {
    sentence: string;
    romaji: string;
    translation: string;
}

export function SentenceBuilder() {
  const { learnedKana } = useProgress();
  const { toast } = useToast();
  const [selectedKana, setSelectedKana] = useState<Set<string>>(new Set());
  const [generatedSentences, setGeneratedSentences] = useState<SentenceResult[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
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
    setIsGenerating(true);
    setGeneratedSentences([]);

    setTimeout(() => {
        const selectedKanaArray = Array.from(selectedKana);
        
        const possibleSentences = exampleSentences.filter(s => 
            s.kana.every(k => selectedKana.has(k))
        );

        if (possibleSentences.length === 0) {
            setError("No example sentences can be made with the selected kana. Try selecting more characters!");
        } else {
            setGeneratedSentences(shuffle(possibleSentences).slice(0, 3));
        }

        setIsGenerating(false);
    }, 500); // Simulate generation time
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
            <h2 className="text-xl font-semibold">2. Generate Sentences</h2>
            <Button onClick={handleGenerate} disabled={isGenerating || selectedKana.size === 0} className="w-full" size="lg">
                {isGenerating ? <Loader2 className="animate-spin" /> : <Sparkles className="mr-2 h-4 w-4"/>}
                {isGenerating ? 'Generating...' : 'Generate Sentences'}
            </Button>
            {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
        
        <Card className="min-h-[200px]">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BotMessageSquare className="h-6 w-6 text-accent"/>
                    <span>Example Sentences</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {isGenerating && <div className="flex items-center justify-center pt-8"><p className="text-muted-foreground">Finding sentences...</p></div>}
                {!isGenerating && generatedSentences.length > 0 && (
                    <ul className="space-y-4">
                        {generatedSentences.map((s, index) => (
                            <li key={index} className="p-3 bg-secondary rounded-md space-y-2">
                               <div className="flex items-center gap-2">
                                 <p className="text-lg font-semibold">{s.sentence}</p>
                               </div>
                               <p className="text-sm text-muted-foreground italic pl-4">{s.romaji}</p>
                               <p className="text-sm pl-4">{s.translation}</p>
                            </li>
                        ))}
                    </ul>
                )}
                 {!isGenerating && generatedSentences.length === 0 && (
                    <p className="text-muted-foreground text-center pt-8">Your generated sentences will appear here.</p>
                )}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
