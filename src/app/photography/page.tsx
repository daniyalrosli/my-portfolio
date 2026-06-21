"use client";

import Navbar from "../components/navbar";
import PhotographyGallery from "./PhotographyGallery";

export default function PhotographyPage() {
  return (
    <main className="bg-[#faf8f5] dark:bg-[#0c0a09] text-gray-900 dark:text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Subtle film grain */}
      <div
        className="fixed inset-0 pointer-events-none z-30 opacity-[0.035] dark:opacity-[0.05] mix-blend-multiply dark:mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <section className="pt-28 pb-20 px-4 sm:px-6 max-w-5xl mx-auto relative">
        <PhotographyGallery />
      </section>
    </main>
  );
}
