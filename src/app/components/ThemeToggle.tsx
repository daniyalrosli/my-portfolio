"use client";

import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    const body = document.body;
    
    if (newTheme === 'light') {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#171717';
    } else {
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
      body.style.backgroundColor = '#0a0a0a';
      body.style.color = '#ededed';
    }
    
    // Also set the class for Tailwind
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
    
    localStorage.setItem('theme', newTheme);
  };

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('Manual theme toggle to:', newTheme);
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-700" />
      ) : (
        <Sun className="w-5 h-5 text-white" />
      )}
    </button>
  );
} 