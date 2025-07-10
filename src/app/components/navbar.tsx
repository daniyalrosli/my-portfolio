"use client"; // Ensure client-side functionality

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        {/* Logo or Brand Name - No longer a link */}
        <div className="text-gray-900 dark:text-white text-2xl font-bold">
 
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="text-gray-900 dark:text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Links and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <ul className={`md:flex md:space-x-8 space-y-6 md:space-y-0 absolute md:static left-0 right-0 bg-white/90 dark:bg-black/90 p-4 md:p-0 md:bg-transparent md:flex-row flex-col items-center transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : '-top-96'}`}>
            <li><Link href="/" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">home</Link></li>
            <li><Link href="/about" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">about</Link></li>
            <li><Link href="/skills" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">skills</Link></li>
            <li><Link href="/experiences" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">experiences</Link></li>
            <li><Link href="/projects" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">projects</Link></li>
            <li><Link href="/contact" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">contacts</Link></li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}