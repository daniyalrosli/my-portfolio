"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Inter, Poppins } from 'next/font/google';
import Link from "next/link";// Import clean, modern fonts

// Font configuration
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 } 
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HomePage() {
  return (
    <main className={`bg-gradient-to-br from-gray-950 to-gray-900 text-white min-h-screen ${inter.variable} ${poppins.variable} font-inter`}>
      <Navbar />
      
      <section className="h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-20 max-w-7xl mx-auto">
        {/* Text Section */}
        <motion.div
          className="flex flex-col gap-6 max-w-lg text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div>
            <motion.div 
              className="inline-block bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Currently @ AMD
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold font-poppins text-white tracking-tight">
              Hi, I&apos;m <span className="text-blue-500">Daniyal Rosli</span>
            </h1>
            
            <p className="text-xl text-gray-300 mt-4 leading-relaxed">
              I&apos;m a student, lifelong learner, and passionate data enthusiast. Currently working as a Data Analyst Software Engineer Intern.
            </p>
          </div>
          
          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-2"
          >
          
            <Link href="/projects">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
                View My Projects
              </button>
            </Link>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center md:justify-start gap-6 mt-4"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              variants={itemAnimation}
              href="https://www.linkedin.com/in/daniyal-rosli-4384731b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              variants={itemAnimation}
              href="https://github.com/daniyalrosli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              variants={itemAnimation}
              href="mailto:daniyalrosli@gmail.com"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Image Section - Enhanced with glow effect */}
        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
            
            {/* Image */}
            <div className="relative w-full h-full rounded-full border-2 border-blue-500/30 p-1">
              <Image
                src="/img/oo.jpeg"
                alt="Daniyal Rosli"
                fill
                className="rounded-full object-cover shadow-lg"
                quality={90}
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}