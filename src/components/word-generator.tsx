
'use client';

import { useMemo } from 'react';
import { useProgress } from '@/hooks/use-progress';
import { hiraganaLessons, katakanaLessons, Vocabulary } from '@/data/kana';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Volume2 } from 'lucide-react';
import { LoadingIndicator } from './loading-indicator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const allLessons = [
  ...hiraganaLessons.map(l => ({ ...l, type: 'hiragana' })),
  ...katakanaLessons.map(l => ({ ...l, type: 'katakana' }))
];

const allVocab = allLessons.flatMap(l => l.vocabulary || []);

const playAudio = (audioSrc: string) => {
  try {
    const audio = new Audio(audioSrc);
    audio.play();
  } catch (error) {
    console.error('Failed to play audio:', error);
  }
};

export function VocabList() {
  const { isLessonUnlocked, loading } = useProgress();

  const unlockedLessonsWithVocab = useMemo(() => {
    return allLessons
      .filter(lesson => isLessonUnlocked(lesson.slug, lesson.type as 'hiragana' | 'katakana'))
      .filter(lesson => lesson.vocabulary && lesson.vocabulary.length > 0)
      .map(lesson => ({
        ...lesson,
        title: `${lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)} - ${lesson.name}`
      }));
  }, [isLessonUnlocked]);

  if (loading) {
    return <LoadingIndicator />;
  }
  
  if (unlockedLessonsWithVocab.length === 0) {
      return (
          <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                    You haven't unlocked any lessons with vocabulary yet. Complete a lesson to get started!
                </p>
              </CardContent>
          </Card>
      )
  }

  return (
    <Accordion type="multiple" defaultValue={unlockedLessonsWithVocab.map(l => l.title)} className="w-full space-y-4">
      {unlockedLessonsWithVocab.map(lesson => (
        <Card key={lesson.slug + lesson.type}>
          <AccordionItem value={lesson.title} className="border-b-0">
            <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex flex-col text-left">
                    <h2 className="text-xl font-semibold">{lesson.title}</h2>
                    <p className="text-sm text-muted-foreground">
                        {lesson.vocabulary.length} words
                    </p>
                </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {lesson.vocabulary.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => playAudio(item.audio)}
                    className="w-full text-left p-4 rounded-lg bg-secondary transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-2xl font-bold">{item.word}</p>
                            <p className="text-muted-foreground">{item.reading}</p>
                        </div>
                        <Volume2 className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <p className="mt-2 text-sm">{item.meaning}</p>
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Card>
      ))}
    </Accordion>
  );
}
