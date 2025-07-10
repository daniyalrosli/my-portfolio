"use client";

import { useEffect, useState } from 'react';

export default function TestTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
      setTheme(savedTheme);
    };
    
    checkTheme();
    window.addEventListener('storage', checkTheme);
    return () => window.removeEventListener('storage', checkTheme);
  }, []);

  const lightStyles = {
    backgroundColor: '#ffffff',
    color: '#171717',
    border: '1px solid #d1d5db'
  };

  const darkStyles = {
    backgroundColor: '#0a0a0a',
    color: '#ededed',
    border: '1px solid #4b5563'
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: '80px',
        left: '16px',
        padding: '16px',
        borderRadius: '8px',
        ...(theme === 'light' ? lightStyles : darkStyles)
      }}
    >
      <div>Theme Test: {theme}</div>
      <div style={{ color: theme === 'light' ? '#6b7280' : '#d1d5db' }}>
        This should change color
      </div>
      <div style={{ 
        backgroundColor: theme === 'light' ? '#f3f4f6' : '#1f2937',
        padding: '8px',
        borderRadius: '4px',
        marginTop: '8px'
      }}>
        Background test
      </div>
    </div>
  );
} 