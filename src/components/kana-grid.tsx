'use client';

import { KanaLesson } from '@/data/kana';
import { useProgress } from '@/hooks/use-progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Lock, CheckCircle2 } from 'lucide-react';

interface KanaGridProps {
  lessons: KanaLesson[];
  kanaType: 'hiragana' | 'katakana';
}

export function KanaGrid({ lessons, kanaType }: KanaGridProps) {
  const { isLessonUnlocked, learnedKana } = useProgress();

  return (
    <div className="space-y-8">
      {lessons.map((lesson) => {
        const unlocked = isLessonUnlocked(lesson.slug, kanaType);
        const allKanaInLessonLearned = lesson.kana.every(k => learnedKana.has(k.kana));

        return (
          <div key={lesson.slug}>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl font-bold">{lesson.name}</h2>
              {!unlocked && <Lock className="h-5 w-5 text-muted-foreground" />}
               {unlocked && allKanaInLessonLearned && <CheckCircle2 className="h-5 w-5 text-green-500" />}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {lesson.kana.map((k) => {
                const isLearned = learnedKana.has(k.kana);
                return (
                  <Link
                    key={k.kana}
                    href={unlocked ? `/learn/${kanaType}/${lesson.slug}` : '#'}
                    aria-disabled={!unlocked}
                    className={cn(
                      'transition-transform duration-200',
                      unlocked ? 'hover:scale-105' : 'cursor-not-allowed'
                    )}
                  >
                    <Card
                      className={cn(
                        'h-full transition-colors',
                        unlocked
                          ? 'hover:border-primary'
                          : 'bg-muted/50',
                        isLearned && unlocked ? 'border-primary/50 bg-primary/10' : ''
                      )}
                    >
                      <CardContent className="flex flex-col items-center justify-center p-6 aspect-square">
                        <div
                          className={cn(
                            'text-5xl font-bold',
                            !unlocked && 'text-muted-foreground/50'
                          )}
                        >
                          {k.kana}
                        </div>
                        <div
                          className={cn(
                            'text-lg text-muted-foreground',
                            !unlocked && 'text-muted-foreground/50'
                          )}
                        >
                          {k.romaji}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
