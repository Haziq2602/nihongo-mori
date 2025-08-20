
'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useProgress } from '@/hooks/use-progress';
import { hiraganaLessons, katakanaLessons } from '@/data/kana';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LoadingIndicator } from './loading-indicator';
import { Lock, CheckCircle2, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const allLessons = {
  hiragana: hiraganaLessons,
  katakana: katakanaLessons,
};

export function VocabList() {
  const { isVocabLessonUnlocked, loading, isLessonUnlocked } = useProgress();

  const lessonData = useMemo(() => {
    if (loading) return { hiragana: [], katakana: [] };
    
    const processLessons = (type: 'hiragana' | 'katakana') => 
        allLessons[type]
        .filter(lesson => lesson.vocabulary && lesson.vocabulary.length > 0)
        .map((lesson, index, arr) => {
            const unlocked = isVocabLessonUnlocked(lesson.slug, type);
            // A vocab lesson is considered "passed" if the *next* lesson is unlocked.
            const nextLesson = arr[index + 1];
            const passed = nextLesson ? isVocabLessonUnlocked(nextLesson.slug, type) : false; // Or check for 100% completion

            return {
                ...lesson,
                title: `${type.charAt(0).toUpperCase() + type.slice(1)} - ${lesson.name}`,
                type,
                unlocked,
                passed,
            };
        });

    return {
      hiragana: processLessons('hiragana'),
      katakana: processLessons('katakana'),
    };
  }, [isVocabLessonUnlocked, isLessonUnlocked, loading]);


  if (loading) {
    return <LoadingIndicator />;
  }
  
  const hasNoUnlocked = lessonData.hiragana.every(l => !l.unlocked) && lessonData.katakana.every(l => !l.unlocked);

  if (hasNoUnlocked) {
      return (
          <Card>
              <CardHeader>
                <CardTitle>No Vocabulary Unlocked</CardTitle>
                <CardDescription>
                    Complete your first kana lesson to unlock its vocabulary list and quiz.
                </CardDescription>
              </CardHeader>
          </Card>
      )
  }

  const renderLessonGrid = (lessons: typeof lessonData.hiragana) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map(lesson => (
            <Card key={lesson.slug + lesson.type} className={cn("flex flex-col", !lesson.unlocked && "bg-muted/50")}>
              <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-xl">{lesson.name}</CardTitle>
                        <CardDescription>{lesson.vocabulary.length} words</CardDescription>
                    </div>
                    {lesson.passed ? (
                         <CheckCircle2 className="h-6 w-6 text-green-500" />
                    ) : (
                        !lesson.unlocked && <Lock className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button asChild className="w-full" disabled={!lesson.unlocked}>
                  <Link href={`/tools/vocab/${lesson.slug}?type=${lesson.type}`}>
                    <Zap className="mr-2 h-4 w-4" />
                    {lesson.passed ? 'Review Quiz' : 'Take Quiz'}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
        ))}
    </div>
  );


  return (
    <Tabs defaultValue="hiragana" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="hiragana">Hiragana</TabsTrigger>
        <TabsTrigger value="katakana">Katakana</TabsTrigger>
      </TabsList>
      <TabsContent value="hiragana">
        {renderLessonGrid(lessonData.hiragana)}
      </TabsContent>
      <TabsContent value="katakana">
        {renderLessonGrid(lessonData.katakana)}
      </TabsContent>
    </Tabs>
  );
}
