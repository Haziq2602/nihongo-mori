
'use client';

import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SplashScreen() {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center justify-center bg-background',
        'animate-out fade-out-50 duration-500'
      )}
    >
      <div className="flex animate-brandish items-center gap-4">
        <Leaf className="h-16 w-16 text-primary" />
        <span className="text-4xl font-bold tracking-tight">Nihongo Mori</span>
      </div>
    </div>
  );
}
