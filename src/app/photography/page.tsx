"use client";
import Navbar from "../components/navbar";
import Image from "next/image";
import { useState } from "react";

const photos = [
  { src: "/img/photography/photo1.jpeg", alt: "photo 1" },
  { src: "/img/photography/photo2.jpeg", alt: "photo 2" },
  { src: "/img/photography/photo3.jpeg", alt: "photo 3" },
  { src: "/img/photography/photo4.jpeg", alt: "photo 4" },
  { src: "/img/photography/photo5.jpeg", alt: "photo 5" },
  { src: "/img/photography/photo6.jpeg", alt: "photo 6" },
  { src: "/img/photography/photo7.jpeg", alt: "photo 7" },
  { src: "/img/photography/photo8.jpeg", alt: "photo 8" },
  { src: "/img/photography/photo9.jpeg", alt: "photo 9" },
  { src: "/img/photography/photo10.jpeg", alt: "photo 10" },
  { src: "/img/photography/photo11.jpeg", alt: "photo 11" },
  { src: "/img/photography/photo12.jpeg", alt: "photo 12" },
  { src: "/img/photography/photo13.jpeg", alt: "photo 13" },
  { src: "/img/photography/photo14.jpeg", alt: "photo 14" },
  { src: "/img/photography/photo15.jpeg", alt: "photo 15" },
];

export default function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white mb-4">
          photography
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-12">
          moments captured through my lens. Using photography as a hobby to escape my engineering world 
        </p>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-900 cursor-pointer"
              onClick={() => setSelectedPhoto(photo.src)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Empty state - show this if no photos yet */}
        {photos.length === 0 && (
          <p className="text-gray-400 dark:text-gray-600 text-center py-20">
            coming soon...
          </p>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>

          {/* Full size image */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={selectedPhoto}
              alt="Full size photo"
              fill
              sizes="100vw"
              quality={100}
              priority
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
}
