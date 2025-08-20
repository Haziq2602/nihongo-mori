
'use client';

import { VocabList } from '@/components/word-generator';
import { AppShell } from '@/components/layout/app-shell';
import { withAuth } from '@/hooks/use-auth';

function VocabPage() {
  return (
    <AppShell>
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Learn Vocabulary</h1>
          <p className="text-muted-foreground">
            Practice with words from the lessons you've unlocked. Click a word to hear its pronunciation.
          </p>
        </div>
        <VocabList />
      </div>
    </AppShell>
  );
}

export default withAuth(VocabPage);
