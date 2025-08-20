
'use client';

import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SplashScreenProps {
  isFullScreen?: boolean;
  isBrandAnimation?: boolean;
}

export function SplashScreen({ isFullScreen = true, isBrandAnimation = true }: SplashScreenProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center bg-background',
        isFullScreen && 'fixed inset-0 z-50',
        isBrandAnimation && 'animate-out fade-out-50 duration-500'
      )}
    >
      <div className={cn(
        "flex items-center gap-4",
        isBrandAnimation ? "animate-brandish" : "animate-pulse"
      )}>
        <Leaf className="h-16 w-16 text-primary" />
        <span className="text-4xl font-bold tracking-tight">Nihongo Mori</span>
      </div>
    </div>
  );
}
