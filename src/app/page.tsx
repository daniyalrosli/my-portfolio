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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function HomePage() {
  return (
    <main
      className={`bg-black text-white min-h-screen ${inter.variable} ${poppins.variable} font-inter relative overflow-hidden`}
    >
      {/* Background Geometric Patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
        <div className="absolute top-24 left-20 w-32 h-32 border border-white rotate-45 animate-pulse" />
        <div
          className="absolute top-60 right-28 w-24 h-24 border border-white rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-36 left-1/3 w-16 h-16 border border-white animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-20 h-20 border border-white rotate-12 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col items-center gap-12">
        {/* Profile Image */}
        <motion.div
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/img/q.jpeg"
            alt="Daniyal Rosli"
            fill
            className="rounded-full object-cover"
            quality={90}
            priority
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-50" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex flex-col items-center text-center space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold font-poppins tracking-tight leading-tight">
            Daniyal Rosli
          </h1>

          {/* Tagline */}
          <span className="text-lg md:text-xl text-blue-400 font-semibold">
            Tech Enthusiast 
          </span>

          {/* Description */}
          <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
            A curious student and tech enthusiast, currently shaping the future of data at AMD as a Data Analyst Software Engineer Intern.
          </p>

          {/* CTA and Social Links */}
          <motion.div
            className="flex flex-col items-center gap-6"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            <Link href="/projects" passHref>
              <motion.a
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-10 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                variants={itemAnimation}
              >
                Discover My Projects
              </motion.a>
            </Link>

            <div className="flex gap-4">
            
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}