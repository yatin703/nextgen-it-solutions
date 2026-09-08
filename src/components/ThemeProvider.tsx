'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeConfig, ThemePreset } from '@/lib/types';
import { INITIAL_THEME } from '@/lib/data';

interface ThemeContextType {
  theme: ThemeConfig;
  setThemePreset: (preset: ThemePreset) => Promise<void>;
  updateTheme: (newTheme: Partial<ThemeConfig>) => Promise<void>;
  loading: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: INITIAL_THEME,
  setThemePreset: async () => {},
  updateTheme: async () => {},
  loading: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeConfig>(INITIAL_THEME);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initial fetch from theme API
    fetch('/api/theme')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.theme) {
          setTheme(data.theme);
          document.documentElement.setAttribute('data-theme', data.theme.themePreset);
        }
      })
      .catch(err => console.error('Failed to load theme config:', err));
  }, []);

  const setThemePreset = async (preset: ThemePreset) => {
    document.documentElement.setAttribute('data-theme', preset);
    setTheme(prev => ({ ...prev, themePreset: preset }));

    try {
      await fetch('/api/theme', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ themePreset: preset }),
      });
    } catch (err) {
      console.error('Failed to persist theme preset:', err);
    }
  };

  const updateTheme = async (updates: Partial<ThemeConfig>) => {
    setLoading(true);
    try {
      const res = await fetch('/api/theme', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      const data = await res.json();
      if (data.success && data.theme) {
        setTheme(data.theme);
        if (data.theme.themePreset) {
          document.documentElement.setAttribute('data-theme', data.theme.themePreset);
        }
      }
    } catch (err) {
      console.error('Failed to update theme:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemePreset, updateTheme, loading }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
