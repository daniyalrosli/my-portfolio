"use client"; // Ensure client-side functionality

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        {/* Logo or Brand Name - No longer a link */}
        <div className="text-white text-2xl font-bold">
 
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Links */}
        <ul className={`md:flex md:space-x-8 space-y-6 md:space-y-0 absolute md:static left-0 right-0 bg-black bg-opacity-90 p-4 md:p-0 md:bg-transparent md:flex-row flex-col items-center transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : '-top-96'}`}>
          <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link href="/skills" className="text-white hover:text-gray-300">Skills</Link></li>
          <li><Link href="/projects" className="text-white hover:text-gray-300">Projects</Link></li>
          <li><Link href="/contact" className="text-white hover:text-gray-300">Contacts</Link></li>
        </ul>
      </div>
    </nav>
  );
}