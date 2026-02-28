"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

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

      <section className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-xl text-center space-y-8">
          {/* Profile Image with elegant frame */}
          <div className="relative w-48 h-48 mx-auto">
            {/* Outer decorative ring */}
            <div className="absolute -inset-2 rounded-full border-2 border-gray-200 dark:border-gray-700 opacity-50" />
            {/* Inner solid ring */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-300 dark:border-gray-600 shadow-lg" />
            {/* Image */}
            <Image
              src="/img/t.png"
              alt="Daniyal Rosli"
              width={192}
              height={192}
              className="relative rounded-full object-cover w-full h-full p-1"
              priority
            />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white">
              daniyal rosli
            </h1>

            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
              curiosity, data driven, and code obsessed.
            </p>
          </div>

          {/* Animated Quote */}
          <div className={`pt-6 transition-all duration-700 ${showQuoteBox ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-3">
              words i live by
            </p>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg px-6 py-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                &quot;{displayedText}
                <span className="opacity-100 transition-opacity">|</span>&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
