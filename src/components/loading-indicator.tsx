
'use client';

import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LoadingIndicator() {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm'
      )}
    >
      <div className={cn(
        "flex items-center gap-4 animate-pulse"
      )}>
        <Leaf className="h-16 w-16 text-primary" />
        <span className="text-4xl font-bold tracking-tight">Nihongo Mori</span>
      </div>
    </div>
  );
}
