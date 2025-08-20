
'use client';

import { useMemo, useState } from 'react';
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
import { Lock, CheckCircle2, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const allLessons = {
  hiragana: hiraganaLessons,
  katakana: katakanaLessons,
};

export function VocabList() {
  const { isVocabLessonUnlocked, loading, completedVocabLessons, haveAllHiraganaKanaBeenLearned } = useProgress();
  const allHiraganaLearned = useMemo(() => haveAllHiraganaKanaBeenLearned(), [haveAllHiraganaKanaBeenLearned]);
  const [activeTab, setActiveTab] = useState('hiragana');
  
  const showKatakanaLockDialog = !allHiraganaLearned && activeTab === 'katakana';

  const lessonData = useMemo(() => {
    if (loading) return { hiragana: [], katakana: [] };

    const processLessons = (type: 'hiragana' | 'katakana') =>
      allLessons[type]
        .filter(lesson => lesson.vocabulary && lesson.vocabulary.length > 0)
        .map((lesson) => {
          const lessonId = `${lesson.slug}-${type}`;
          const unlocked = isVocabLessonUnlocked(lesson.slug, type);
          const passed = completedVocabLessons.has(lessonId);

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
  }, [isVocabLessonUnlocked, completedVocabLessons, loading]);


  if (loading) {
    return <LoadingIndicator />;
  }

  const renderLessonGrid = (lessons: typeof lessonData.hiragana) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {lessons.map(lesson => (
        <Card key={lesson.slug + lesson.type} className={cn("flex flex-col", !lesson.unlocked && "bg-muted/50 cursor-not-allowed")}>
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
              <Link href={lesson.unlocked ? `/tools/vocab/${lesson.slug}?type=${lesson.type}` : '#'}>
                <BookOpen className="mr-2 h-4 w-4" />
                {lesson.passed ? 'Review Lesson' : 'Start Lesson'}
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );


  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="hiragana">Hiragana</TabsTrigger>
        <TabsTrigger value="katakana">Katakana</TabsTrigger>
      </TabsList>
      <TabsContent value="hiragana">
        {renderLessonGrid(lessonData.hiragana)}
      </TabsContent>
      <TabsContent value="katakana">
        {renderLessonGrid(lessonData.katakana)}
        <AlertDialog open={showKatakanaLockDialog}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Katakana Vocabulary Locked</AlertDialogTitle>
                    <AlertDialogDescription>
                        You must first master all the Hiragana characters before moving on to Katakana vocabulary. Keep up the great work!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setActiveTab('hiragana')}>
                        OK
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
      </TabsContent>
    </Tabs>
  );
}
