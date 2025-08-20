
'use client';

import { WordGenerator } from '@/components/word-generator';
import { AppShell } from '@/components/layout/app-shell';
import { withAuth } from '@/hooks/use-auth';

function WordGeneratorPage() {
  return (
    <AppShell>
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">AI Word Generator</h1>
          <p className="text-muted-foreground">
            Select kana you've learned to generate example words.
          </p>
        </div>
        <WordGenerator />
      </div>
    </AppShell>
  );
}

export default withAuth(WordGeneratorPage);
