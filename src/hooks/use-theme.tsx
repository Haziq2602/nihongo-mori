'use client';

import * as React from 'react';

const THEME_STORAGE_KEY = 'nihongo-mori-theme';
const DEFAULT_THEME = 'theme-green';

type Theme = 'theme-green' | 'theme-blue' | 'theme-red' | 'theme-orange' | 'theme-yellow' | 'theme-lavender';

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeProviderContext = React.createContext<ThemeProviderState>({
  theme: DEFAULT_THEME,
  setTheme: () => null,
});

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = React.useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_THEME;
    }
    return (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || DEFAULT_THEME;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(...root.classList); // Remove all classes
    
    if (theme) {
      root.classList.add(theme);
    }

  }, [theme]);

  const value = {
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
