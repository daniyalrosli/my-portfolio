"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inter, Poppins } from "next/font/google";
import Link from "next/link";

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
            tech enthusiast & forever learner
          </motion.span>

          <motion.p
            className="text-md md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed pt-3 px-4"
            variants={itemVariants}
          >
            a passionate student and tech explorer dedicated to transforming
            ideas into impactful digital experiences. currently working at{" "}
            <span className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
              <Image
                src="/img/amd.png"
                alt="AMD"
                width={24}
                height={24}
                className="inline-block"
              />
              
            </span>{" "}
            as a product development engineer, building tools that empower
            decisions.
          </motion.p>

          <motion.div
            className="flex justify-center pt-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-900 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-3">
                  <Image
                    src="/img/amd.png"
                    alt="AMD Logo"
                    width={32}
                    height={32}
                    className="opacity-90"
                  />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      Product Development Engineer
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Advanced Micro Devices
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="pt-8"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <Link href="/projects" passHref>
              <motion.a
                className="inline-block border border-gray-900 dark:border-white px-8 py-3 rounded-full text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                check out my projects
              </motion.a>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}