"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SpotifyWidget } from "./components/spotify/SpotifyWidget";

export default function HomePage() {
  const quotes = [
    "Always keep learning and be curious",
    "Code is poetry written in logic",
    "Data tells a story, listen carefully",
    "Simplicity is the ultimate sophistication",
    "Build things that matter"
  ];
  
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showQuoteBox, setShowQuoteBox] = useState(false);

  const currentQuote = quotes[quoteIndex];

  // Show quote box with delay
  useEffect(() => {
    const timer = setTimeout(() => setShowQuoteBox(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    if (isTyping) {
      if (displayedText.length < currentQuote.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentQuote.slice(0, displayedText.length + 1));
        }, 80);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait then switch
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    } else {
      // Reset and move to next quote
      setDisplayedText("");
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
      setIsTyping(true);
    }
  }, [displayedText, isTyping, currentQuote, quotes.length]);

  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-md text-center space-y-6 w-full">
          {/* Profile Image */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
            {/* Simple border */}
            <div className="absolute inset-0 rounded-full border border-gray-400 dark:border-gray-600" />
            
            {/* Image */}
            <Image
              src="/img/t.png"
              alt="Daniyal Rosli"
              width={160}
              height={160}
              className="rounded-full object-cover w-full h-full"
              priority
            />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-900 dark:text-white">
              daniyal rosli
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-light">
              product engineer
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed font-light">
              data • design • code
            </p>
          </div>

          {/* Quote */}
          <div className={`pt-1 transition-all duration-700 ${showQuoteBox ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-3 bg-white dark:bg-gray-900/50">
              <p className="text-gray-700 dark:text-gray-300 text-xs font-light">
                &quot;{displayedText}<span className="animate-pulse">|</span>&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spotify Widget */}
      <section className="px-4 sm:px-6 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-md mx-auto">
          <SpotifyWidget />
        </div>
      </section>
    </main>
  );
}
