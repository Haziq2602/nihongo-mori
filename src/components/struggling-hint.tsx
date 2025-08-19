
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Cloud } from 'lucide-react';

interface StrugglingHintProps {
  hasInteracted: boolean;
  text: string;
  delay?: number;
}

export function StrugglingHint({ hasInteracted, text, delay = 10000 }: StrugglingHintProps) {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!hasInteracted) {
      timer = setTimeout(() => {
        setShowHint(true);
      }, delay);
    } else {
      setShowHint(false);
    }

    return () => clearTimeout(timer);
  }, [hasInteracted, delay]);

  return (
    <div
      className={cn(
        'absolute -top-16 left-1/2 -translate-x-1/2 z-10 p-4 rounded-lg bg-card border shadow-lg transition-opacity duration-500 flex items-center gap-3',
        showHint ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
        <Cloud className="h-6 w-6 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
