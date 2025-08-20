
'use client';

import { hiraganaLessons, katakanaLessons } from '@/data/kana';
import { notFound, useSearchParams } from 'next/navigation';
import { withAuth } from '@/hooks/use-auth';
import { AppShell } from '@/components/layout/app-shell';
import React from 'react';
import { VocabQuiz } from '@/components/vocab-quiz';

interface VocabQuizPageProps {
  params: Promise<{
    lessonSlug: string;
  }>;
}

function VocabQuizPage({ params }: VocabQuizPageProps) {
  const { lessonSlug } = React.use(params);
  const searchParams = useSearchParams();
  const kanaType = searchParams.get('type') as 'hiragana' | 'katakana' | null;

  if (!kanaType) {
    notFound();
  }
  
  const lessons = kanaType === 'hiragana' ? hiraganaLessons : katakanaLessons;
  const lesson = lessons.find((l) => l.slug === lessonSlug);

  if (!lesson || !lesson.vocabulary || lesson.vocabulary.length === 0) {
    notFound();
  }

  return (
    <AppShell>
      <div className="flex flex-1 items-center justify-center p-4">
        <VocabQuiz lesson={lesson} kanaType={kanaType} />
      </div>
    </AppShell>
  );
}

export default withAuth(VocabQuizPage);
