
'use client';

import { hiraganaLessons, katakanaLessons } from '@/data/kana';
import { notFound } from 'next/navigation';
import { KanaGrid } from '@/components/kana-grid';
import { AppShell } from '@/components/layout/app-shell';
import { withAuth } from '@/hooks/use-auth';
import React from 'react';

interface LearnPageProps {
  params: Promise<{
    kanaType: 'hiragana' | 'katakana';
  }>;
}

function LearnPage({ params }: LearnPageProps) {
  const { kanaType } = React.use(params);
  const lessons = kanaType === 'hiragana' ? hiraganaLessons : katakanaLessons;

  if (!lessons) {
    notFound();
  }

  const title = kanaType.charAt(0).toUpperCase() + kanaType.slice(1);

  return (
    <AppShell>
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Learn {title}</h1>
          <p className="text-muted-foreground">
            Click on a lesson to start learning the characters.
          </p>
        </div>
        <KanaGrid lessons={lessons} kanaType={kanaType} />
      </div>
    </AppShell>
  );
}

export default withAuth(LearnPage);
