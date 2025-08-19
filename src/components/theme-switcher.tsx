'use client';

import * as React from 'react';
import { Check, Palette } from 'lucide-react';

import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const themes = [
  { name: 'Green', value: 'theme-green' },
  { name: 'Blue', value: 'theme-blue' },
  { name: 'Red', value: 'theme-red' },
  { name: 'Orange', value: 'theme-orange' },
  { name: 'Yellow', value: 'theme-yellow' },
  { name: 'Lavender', value: 'theme-lavender' },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <Palette />
          <span className="sr-only">Switch Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem key={t.value} onClick={() => setTheme(t.value)}>
            <div
              className={cn(
                'mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full'
              )}
            >
              {theme === t.value && <Check className="h-4 w-4" />}
            </div>
            {t.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
