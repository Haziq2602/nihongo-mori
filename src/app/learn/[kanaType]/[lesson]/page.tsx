
'use client';

import { hiraganaLessons, katakanaLessons } from '@/data/kana';
import { notFound } from 'next/navigation';
import { KanaLessonClient } from '@/components/kana-lesson-client';
import { withAuth } from '@/hooks/use-auth';
import { AppShell } from '@/components/layout/app-shell';
import React from 'react';

interface LessonPageProps {
  params: Promise<{
    kanaType: 'hiragana' | 'katakana';
    lesson: string;
  }>;
}

function LessonPage({ params }: LessonPageProps) {
  const { kanaType, lesson: lessonSlug } = React.use(params);
  const lessons = kanaType === 'hiragana' ? hiraganaLessons : katakanaLessons;
  const lesson = lessons.find((l) => l.slug === lessonSlug);

  if (!lesson) {
    notFound();
  }

  return (
    <AppShell>
      <KanaLessonClient lesson={lesson} kanaType={kanaType} />
    </AppShell>
  );
}

export default withAuth(LessonPage);
