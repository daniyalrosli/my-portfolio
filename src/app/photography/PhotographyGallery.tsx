"use client";

import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

const photos = Array.from({ length: 24 }, (_, i) => ({
  src: `/img/photography/photo${i + 1}.jpeg`,
  alt: `Frame ${String(i + 1).padStart(2, "0")}`,
}));

const captions = [
  "oops, perfect",
  "golden hour cheat code",
  "engineer goes outside",
  "accidentally artistic",
  "this wasn't planned",
  "main character energy",
  "no filter needed (okay maybe one)",
  "proof i touch grass",
  "shutter speed: vibes",
  "ISO: infinite",
  "focus? never heard of her",
  "raw file energy",
  "exposure therapy",
  "rule of thirds? rule of vibes",
  "aperture wide open",
  "darkroom escape",
  "pixel peeping later",
  "bokeh or broke",
  "histogram looks happy",
  "chimping approved",
  "decisive moment-ish",
  "f/ around and find out",
  "negative space, positive vibes",
  "developed with love",
];

const tapeColors = [
  "bg-amber-200/80 dark:bg-amber-700/50",
  "bg-rose-200/80 dark:bg-rose-700/50",
  "bg-sky-200/80 dark:bg-sky-700/50",
  "bg-lime-200/80 dark:bg-lime-700/50",
];

function getRotation(index: number, shuffleSeed: number) {
  const base = ((index * 13 + shuffleSeed * 7) % 17) - 8;
  return base * 0.4;
}

function getOffset(index: number, shuffleSeed: number) {
  const x = ((index * 11 + shuffleSeed * 3) % 9) - 4;
  const y = ((index * 7 + shuffleSeed * 5) % 7) - 3;
  return { x: x * 2, y: y * 2 };
}

export default function PhotographyGallery() {
  const prefersReducedMotion = useReducedMotion();
  const [introDone, setIntroDone] = useState(false);
  const [flash, setFlash] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const polaroids = useMemo(
    () =>
      photos.map((photo, i) => ({
        ...photo,
        caption: captions[i % captions.length],
        rotation: getRotation(i, shuffleSeed),
        offset: getOffset(i, shuffleSeed),
        tape: tapeColors[i % tapeColors.length],
      })),
    [shuffleSeed]
  );

  useEffect(() => {
    const seen = sessionStorage.getItem("photography-intro-seen");
    if (seen === "true" || prefersReducedMotion) {
      setIntroDone(true);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((i) => (i === null ? 0 : (i + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setSelectedIndex((i) =>
          i === null ? 0 : (i - 1 + photos.length) % photos.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  const triggerFlash = useCallback(() => {
    setFlash(true);
    setTimeout(() => setFlash(false), 280);
  }, []);

  const enterGallery = () => {
    triggerFlash();
    sessionStorage.setItem("photography-intro-seen", "true");
    setTimeout(() => setIntroDone(true), 200);
  };

  const surpriseMe = () => {
    const random = Math.floor(Math.random() * photos.length);
    triggerFlash();
    setTimeout(() => setSelectedIndex(random), 150);
  };

  const shakeDesk = () => {
    setShuffleSeed((s) => s + 1);
  };

  const openPhoto = (index: number) => {
    triggerFlash();
    setTimeout(() => setSelectedIndex(index), 120);
  };

  return (
    <>
      {/* Shutter flash */}
      <AnimatePresence>
        {flash && (
          <motion.div
            initial={{ opacity: 0.95 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-white pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Viewfinder intro */}
      <AnimatePresence>
        {!introDone && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-black flex items-center justify-center cursor-pointer"
            onClick={enterGallery}
          >
            <div className="absolute inset-0 opacity-30">
              <Image
                src={photos[3].src}
                alt=""
                fill
                className="object-cover blur-md scale-110"
                priority
              />
            </div>

            {/* Viewfinder frame */}
            <div className="relative w-[min(88vw,420px)] aspect-[3/4] border-2 border-white/80 rounded-sm">
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-white" />
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-white" />
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-white" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-white" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-full bg-white/20 absolute left-1/2" />
                <div className="h-px w-full bg-white/20 absolute top-1/2" />
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                  className="w-16 h-16 rounded-full border border-white/40"
                />
              </div>
              <p className="absolute -bottom-14 left-0 right-0 text-center text-white/90 text-sm font-light tracking-wide">
                tap to develop the roll
              </p>
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                className="absolute top-4 left-4 text-[10px] text-red-400 font-mono tracking-widest"
              >
                ● REC
              </motion.p>
              <p className="absolute top-4 right-4 text-[10px] text-white/60 font-mono">
                1/{photos.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        animate={introDone ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-10"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400 mb-2 font-mono">
              roll #042 · 35mm vibes
            </p>
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
              through the{" "}
              <span className="italic text-amber-700 dark:text-amber-300">
                viewfinder
              </span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 max-w-md font-light leading-relaxed">
              engineering by day, light-chasing goblin by weekend. hover a
              polaroid. shake the desk. let chaos develop.
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            <button
              type="button"
              onClick={surpriseMe}
              className="px-4 py-2 text-xs rounded-full border border-amber-300/60 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 hover:scale-105 active:scale-95 transition-transform"
            >
              🎲 surprise me
            </button>
            <button
              type="button"
              onClick={shakeDesk}
              className="px-4 py-2 text-xs rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:scale-105 active:scale-95 transition-transform"
            >
              📸 shake the desk
            </button>
          </div>
        </div>
      </motion.header>

      {/* Polaroid wall */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={introDone ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative min-h-[60vh] pb-16"
      >
        {/* Cork board texture hint */}
        <div
          className="absolute inset-0 -mx-6 rounded-2xl opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, #92400e 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, #78350f 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-y-14 pt-4">
          {polaroids.map((photo, index) => (
            <motion.button
              key={`${photo.src}-${shuffleSeed}`}
              type="button"
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 40, rotate: photo.rotation * 2 }
              }
              animate={
                introDone
                  ? {
                      opacity: 1,
                      y: photo.offset.y,
                      x: photo.offset.x,
                      rotate:
                        hoveredIndex === index ? 0 : photo.rotation,
                      scale: hoveredIndex === index ? 1.06 : 1,
                      zIndex: hoveredIndex === index ? 10 : 1,
                    }
                  : {}
              }
              transition={{
                delay: prefersReducedMotion ? 0 : index * 0.04,
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => openPhoto(index)}
              className="group relative text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
              style={{ transformOrigin: "center center" }}
            >
              {/* Tape strip */}
              <div
                className={`absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 ${photo.tape} rotate-[-2deg] shadow-sm z-10 opacity-90`}
              />

              {/* Polaroid frame */}
              <div className="bg-white dark:bg-neutral-100 p-2 pb-10 shadow-lg shadow-black/10 dark:shadow-black/30 group-hover:shadow-xl transition-shadow">
                <div className="relative aspect-square overflow-hidden bg-neutral-200">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={85}
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:saturate-110"
                  />
                  <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/5 transition-colors" />
                </div>
                <p className="absolute bottom-2 left-2 right-2 text-center text-[11px] text-neutral-500 font-light italic truncate px-1">
                  {photo.caption}
                </p>
              </div>

              {/* Frame number */}
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-gray-400 dark:text-gray-600 tracking-widest">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Lightbox viewfinder */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              type="button"
              className="absolute top-6 right-6 text-white/60 hover:text-white text-sm font-mono tracking-widest z-10"
              onClick={() => setSelectedIndex(null)}
            >
              ESC ×
            </button>

            <button
              type="button"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl z-10 p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  (selectedIndex - 1 + photos.length) % photos.length
                );
              }}
            >
              ‹
            </button>
            <button
              type="button"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl z-10 p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % photos.length);
              }}
            >
              ›
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Viewfinder corners */}
              <div className="absolute -inset-3 sm:-inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-white/50" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-white/50" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-white/50" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-white/50" />
              </div>

              <div className="relative aspect-[4/3] sm:aspect-[3/2] w-full max-h-[75vh]">
                <Image
                  src={photos[selectedIndex].src}
                  alt={photos[selectedIndex].alt}
                  fill
                  sizes="100vw"
                  quality={95}
                  priority
                  className="object-contain"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-white/50 text-xs font-mono">
                <span className="italic text-white/70">
                  {captions[selectedIndex % captions.length]}
                </span>
                <span>
                  {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                  {String(photos.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
