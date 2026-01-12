"use client";

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black border-b border-gray-100 dark:border-gray-900 z-50">
      <div className="flex justify-between items-center max-w-3xl mx-auto px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-gray-900 dark:text-white text-sm font-medium">
          dr
        </Link>

        {/* Hamburger for Mobile */}
        <button
          className="text-gray-900 dark:text-white md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '×' : '☰'}
        </button>

        {/* Links */}
        <div className="flex items-center gap-8">
          <ul className={`md:flex md:gap-6 space-y-4 md:space-y-0 absolute md:static left-0 right-0 bg-white dark:bg-black p-6 md:p-0 border-b md:border-0 border-gray-100 dark:border-gray-900 transition-all ${isOpen ? 'top-14' : '-top-96'}`}>
            <li><Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">home</Link></li>
            <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">about</Link></li>
            <li><Link href="/experiences" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">experience</Link></li>
            <li><Link href="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">projects</Link></li>
            <li><Link href="/photography" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">photography</Link></li>
            <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">contact</Link></li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}