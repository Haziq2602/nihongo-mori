
'use client';

import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SplashScreen() {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center bg-background fixed inset-0 z-50'
      )}
    >
      <div className={cn(
        "flex items-center gap-4"
      )}>
        <Leaf className="h-16 w-16 text-primary" />
        <span className="text-4xl font-bold tracking-tight">Nihongo Mori</span>
      </div>
    </div>
  );
}
