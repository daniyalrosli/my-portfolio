"use client";
import Navbar from "./components/navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-xl text-center space-y-8">
          {/* Profile Image with subtle ring */}
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900" />
            <Image
              src="/img/p.jpeg"
              alt="Daniyal Rosli"
              width={128}
              height={128}
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
        </div>
      </section>
    </main>
  );
}

         
    
