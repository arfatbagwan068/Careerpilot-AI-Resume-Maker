import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-card-bg hover:bg-hover-bg border border-border-color transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border-color)',
      }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <SunIcon className="h-5 w-5 transition-transform duration-300" style={{ color: 'var(--accent-color)' }} />
      ) : (
        <MoonIcon className="h-5 w-5 transition-transform duration-300" style={{ color: 'var(--accent-color)' }} />
      )}
    </button>
  );
};

export default ThemeToggle;
