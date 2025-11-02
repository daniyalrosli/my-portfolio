"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inter, Poppins } from "next/font/google";

// font setup
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 18,
      mass: 0.8,
    },
  },
};

export default function HomePage() {
  return (
    <main
      className={`relative bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen flex flex-col ${inter.variable} ${poppins.variable} font-inter antialiased`}
    >
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-6 text-center">
        <motion.div
          className="space-y-5 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="flex justify-center">
            <Image
              src="/img/ju.jpeg"
              alt="Daniyal Rosli"
              width={160}
              height={160}
              className="rounded-full shadow-lg border-4 border-white dark:border-gray-800 object-cover"
              priority
            />
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins leading-tight text-gray-900 dark:text-white tracking-tight"
            variants={itemVariants}
          >
            daniyal rosli
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-inter leading-relaxed px-4"
            variants={itemVariants}
          >
            curiosity, data driven, and code obsessed.
          </motion.p>

          <motion.span
            className="block text-xl md:text-2xl text-gray-700 dark:text-white/70 font-medium pt-2"
            variants={itemVariants}
          >
          
          </motion.span>

          <motion.p
            className="text-md md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed pt-3 px-4"
            variants={itemVariants}
          >
     
          </motion.p>

        </motion.div>
      </section>
    </main>
  );
}

         
    
