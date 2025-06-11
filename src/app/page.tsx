"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inter, Poppins } from "next/font/google";
import Link from "next/link";

// Font setup
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HomePage() {
  return (
    <main
      className={`relative bg-black text-white min-h-screen ${inter.variable} ${poppins.variable} font-inter overflow-hidden`}
    >
      {/* Layered Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-60 z-0" />

      {/* Floating Dots / Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full blur-sm opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col items-center gap-14 text-center">
        {/* Profile Image */}
        <motion.div
          className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl overflow-hidden group"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/img/q.jpeg"
            alt="Daniyal Rosli"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            quality={100}
            priority
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-30" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-6 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">
            Daniyal Rosli
          </h1>

          <p className="text-base md:text-lg text-white/70 font-inter">
            Turning curiosity into code — crafting data-driven solutions at AMD.
          </p>

          <span className="text-lg md:text-xl text-blue-400 font-semibold tracking-wide">
            Tech Enthusiast & Data Analyst Intern
          </span>

          <p className="text-sm md:text-lg text-white/80 leading-relaxed">
            A passionate student and tech explorer dedicated to transforming ideas
            into impactful digital experiences. Currently interning at AMD as a
            Data Analyst Software Engineer, building tools that empower decisions.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-4"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <Link href="/projects" passHref>
            <motion.a
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300"
              variants={itemAnimation}
            >
              🚀 Discover My Projects
            </motion.a>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}