import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const initTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const themeSource = localStorage.getItem('theme-source');
      
      if (savedTheme && themeSource === 'manual') {
        const isDark = savedTheme === 'dark';
        setIsDarkMode(isDark);
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        // Use system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        if (prefersDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme-source', 'system');
      }
    };

    initTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const themeSource = localStorage.getItem('theme-source');
      if (themeSource !== 'manual') {
        setIsDarkMode(e.matches);
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      const theme = newMode ? 'dark' : 'light';
      
      localStorage.setItem('theme', theme);
      localStorage.setItem('theme-source', 'manual');
      document.documentElement.setAttribute('data-theme', theme);
      
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newMode;
    });
  };

  const setTheme = (theme: 'light' | 'dark' | 'system') => {
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      localStorage.removeItem('theme');
      localStorage.setItem('theme-source', 'system');
    } else {
      const isDark = theme === 'dark';
      setIsDarkMode(isDark);
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      localStorage.setItem('theme-source', 'manual');
    }
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
