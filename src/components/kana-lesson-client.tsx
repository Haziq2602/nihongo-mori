
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { KanaLesson } from '@/data/kana';
import { useProgress } from '@/hooks/use-progress';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quiz } from '@/components/quiz';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface KanaLessonClientProps {
  lesson: KanaLesson;
  kanaType: 'hiragana' | 'katakana';
}

export function KanaLessonClient({ lesson, kanaType }: KanaLessonClientProps) {
  const { completeLesson, addLearnedKana } = useProgress();
  const [view, setView] = useState<'learn' | 'quiz' | 'completed'>('learn');

  const handleQuizComplete = () => {
    lesson.kana.forEach((k) => addLearnedKana(k.kana));
    completeLesson(lesson.slug, kanaType);
    setView('completed');
  };

  const playAudio = (audioSrc: string) => {
    try {
      const audio = new Audio(audioSrc);
      audio.play();
    } catch (error) {
      console.error('Failed to play audio:', error);
    }
  };

  if (view === 'quiz') {
    return (
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <Quiz
          kanaInLesson={lesson.kana}
          onQuizComplete={handleQuizComplete}
          onBackToLearn={() => setView('learn')}
        />
      </div>
    );
  }

  if (view === 'completed') {
    return (
      <div className="flex flex-1 flex-col items-center justify-center text-center p-4">
        <Card className="max-w-md">
            <CardHeader>
                <CardTitle className="text-2xl">Lesson Complete!</CardTitle>
                <CardDescription>You have mastered the {lesson.name} characters.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="mb-4">Great job! You can now move on to the next lesson or review what you've learned.</p>
                <Button asChild>
                    <Link href={`/learn/${kanaType}`}>Back to {kanaType} Lessons</Link>
                </Button>
            </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col p-4 md:p-8">
        <div className="mb-8">
            <Button variant="ghost" asChild>
                <Link href={`/learn/${kanaType}`} className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to {kanaType} Lessons</span>
                </Link>
            </Button>
        </div>
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Lesson: {lesson.name}</h1>
          <p className="text-muted-foreground">
            Learn the characters, then take the quiz to unlock the next lesson.
          </p>
        </div>

        <Carousel className="w-full max-w-sm md:max-w-md lg:max-w-lg">
          <CarouselContent>
            {lesson.kana.map((k) => (
              <CarouselItem key={k.kana}>
                <div className="p-1">
                  <Card className="shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                      <div className="flex items-center gap-4 w-full">
                        <button
                          onClick={() => playAudio(k.audio)}
                          className={cn(
                            'flex-1 text-8xl font-bold text-primary rounded-lg p-4 transition-all duration-200 text-center',
                            'border bg-card shadow-sm hover:shadow-md hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
                          )}
                          aria-label={`Play sound for ${k.romaji}`}
                        >
                          {k.kana}
                        </button>
                        <div className="w-24 h-24 relative flex-shrink-0">
                           <Image 
                            src={k.mnemonic_image}
                            alt={k.mnemonic}
                            width={100}
                            height={100}
                            className="rounded-md object-cover"
                            data-ai-hint={k.mnemonic_hint}
                           />
                        </div>
                      </div>
                      <div className="text-2xl text-muted-foreground">{k.romaji}</div>
                      <p className="text-center text-lg">"{k.mnemonic}"</p>
                      <Card className="bg-secondary w-full">
                        <CardHeader>
                          <CardTitle className="text-lg">Example Word</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xl font-semibold">{k.example.word}</p>
                                <p className="text-muted-foreground">{k.example.reading} - {k.example.meaning}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Button size="lg" onClick={() => setView('quiz')} className="bg-accent hover:bg-accent/90 text-accent-foreground">
          I'm Ready! Take the Quiz
        </Button>
      </div>
    </div>
  );
}
