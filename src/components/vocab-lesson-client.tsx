
'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Volume2, Zap } from 'lucide-react';
import { KanaLesson } from '@/data/kana';
import { ScrollArea } from './ui/scroll-area';

interface VocabLessonClientProps {
  lesson: KanaLesson;
  kanaType: 'hiragana' | 'katakana';
}

export function VocabLessonClient({ lesson, kanaType }: VocabLessonClientProps) {

  const playAudio = (audioSrc: string) => {
    try {
      const audio = new Audio(audioSrc);
      audio.play();
    } catch (error) {
      console.error('Failed to play audio:', error);
    }
  };

  return (
    <div className="flex flex-1 flex-col p-4 md:p-8">
        <div className="mb-8">
            <Button variant="ghost" asChild>
                <Link href={`/tools/vocab`} className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Vocab Lessons</span>
                </Link>
            </Button>
        </div>
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Vocab Lesson: {lesson.name}</h1>
          <p className="text-muted-foreground">
            Study the words, then take the quiz to unlock the next lesson.
          </p>
        </div>

        <Card className="w-full max-w-2xl">
            <CardHeader>
                <CardTitle>Words in this lesson</CardTitle>
                <CardDescription>Click the speaker icon to hear the pronunciation.</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-72">
                    <div className="space-y-4">
                        {lesson.vocabulary.map(vocab => (
                            <div key={vocab.word} className="flex items-center justify-between rounded-md border p-4">
                                <div>
                                    <p className="text-xl font-bold">{vocab.word}</p>
                                    <p className="text-sm text-muted-foreground">{vocab.reading}</p>
                                    <p className="text-md">{vocab.meaning}</p>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => playAudio(vocab.audio)}>
                                    <Volume2 className="h-6 w-6" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>

        <Button size="lg" asChild>
          <Link href={`/tools/vocab/${lesson.slug}/quiz?type=${kanaType}`}>
            <Zap className="mr-2 h-4 w-4" />
            I'm Ready! Take the Quiz
          </Link>
        </Button>
      </div>
    </div>
  );
}
