
'use client';

import * as React from 'react';

const COLOR_THEME_STORAGE_KEY = 'nihongo-mori-color-theme';
const THEME_STORAGE_KEY = 'nihongo-mori-theme';
const DEFAULT_COLOR_THEME = 'theme-green';
const DEFAULT_THEME = 'dark';

type ColorTheme = 'theme-green' | 'theme-blue' | 'theme-red' | 'theme-orange' | 'theme-yellow' | 'theme-lavender';
type Theme = 'dark' | 'light' | 'system';

interface ThemeProviderState {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeProviderContext = React.createContext<ThemeProviderState>({
  colorTheme: DEFAULT_COLOR_THEME,
  setColorTheme: () => null,
  theme: DEFAULT_THEME,
  setTheme: () => null,
});

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_COLOR_THEME;
    }
    return (localStorage.getItem(COLOR_THEME_STORAGE_KEY) as ColorTheme) || DEFAULT_COLOR_THEME;
  });

  const [theme, setTheme] = React.useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_THEME;
    }
    return (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || DEFAULT_THEME;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;

    // This ensures that the class is not removed on the initial render.
    // The class is set on the <html> tag in layout.tsx to prevent flash.
    root.classList.remove('light', 'dark');

    const classesToRemove = Array.from(root.classList).filter(cls => cls.startsWith('theme-'));
    root.classList.remove(...classesToRemove);
    
    if (colorTheme) {
      root.classList.add(colorTheme);
    }
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);

  }, [colorTheme, theme]);

  const value = {
    colorTheme,
    setColorTheme: (newTheme: ColorTheme) => {
      localStorage.setItem(COLOR_THEME_STORAGE_KEY, newTheme);
      setColorTheme(newTheme);
    },
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
