'use client';

import { useState, useMemo } from 'react';
import { useProgress } from '@/hooks/use-progress';
import { hiraganaLessons, katakanaLessons } from '@/data/kana';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { generateSentencesAction } from '@/app/actions';
import { BotMessageSquare, Sparkles } from 'lucide-react';

const allKana = [...hiraganaLessons, ...katakanaLessons].flatMap(l => l.kana);

export function SentenceBuilder() {
  const { learnedKana } = useProgress();
  const [selectedKana, setSelectedKana] = useState<Set<string>>(new Set());
  const [generatedSentences, setGeneratedSentences] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleGenerate = async () => {
    if (selectedKana.size === 0) {
      setError('Please select at least one kana character.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setGeneratedSentences([]);
    
    try {
      const result = await generateSentencesAction(Array.from(selectedKana));
      if (result.sentences) {
          setGeneratedSentences(result.sentences);
      } else {
          setError(result.error || 'An unknown error occurred.');
      }
    } catch (e: any) {
        setError(e.message || 'Failed to generate sentences.');
    } finally {
        setIsLoading(false);
    }
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
            <Button onClick={handleGenerate} disabled={isLoading || selectedKana.size === 0} className="w-full" size="lg">
                {isLoading ? 'Generating...' : 'Generate with AI'}
                <Sparkles className="ml-2 h-4 w-4"/>
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
                {isLoading && <div className="flex items-center justify-center pt-8"><p className="text-muted-foreground">AI is thinking...</p></div>}
                {!isLoading && generatedSentences.length > 0 && (
                    <ul className="space-y-4">
                        {generatedSentences.map((sentence, index) => (
                            <li key={index} className="text-lg p-3 bg-secondary rounded-md">{sentence}</li>
                        ))}
                    </ul>
                )}
                 {!isLoading && generatedSentences.length === 0 && (
                    <p className="text-muted-foreground text-center pt-8">Your generated sentences will appear here.</p>
                )}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
