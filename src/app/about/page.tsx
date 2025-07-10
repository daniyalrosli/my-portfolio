"use client";
import Navbar from "../components/navbar";
import { FaFileDownload, FaBriefcase, FaCode } from "react-icons/fa";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AboutPage() {
  const skills = [
    "python",
    "machine learning",
    "data analysis",
    "sql",
    "full stack development",
    "visualization",
  ];

  return (
    <main
      className={`bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen ${inter.className} flex flex-col antialiased lowercase`}
    >
      <Navbar />

      <motion.section
        className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {/* header */}
        <motion.header className="text-center mb-12" variants={fadeIn}>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white tracking-wide mb-4">
            about me
          </h1>
          <div className="w-16 h-0.5 bg-gray-400 dark:bg-gray-500 mx-auto rounded-full" />
        </motion.header>

        {/* professional journey */}
        <motion.article
          className="mb-10 p-6 bg-gray-50/50 dark:bg-gray-950/20 border border-gray-200/20 dark:border-gray-800/20 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5"
          variants={fadeIn}
        >
          <h2 className="flex items-center gap-2 text-xl font-light text-gray-700 dark:text-gray-200 mb-4">
            <FaBriefcase className="text-gray-500 dark:text-gray-400 text-lg" />
            <span>about myself</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
            i&apos;m <span className="text-gray-900 dark:text-white font-medium">daniyal rosli</span>, a first class {" "}
            <span className="text-gray-900 dark:text-white font-medium">intelligent systems engineering</span>{" "}
            graduate from uitm passionate about transforming complex data into meaningful insights.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
            currently interning at <span className="text-gray-900 dark:text-white font-medium">amd</span>,
            i build tools that empower data-driven decisions. always up for learning something new, working with awesome teams, and writing on the side just for fun.
          </p>
        </motion.article>

        {/* core skills */}
        <motion.article
          className="mb-10 p-6 bg-gray-50/50 dark:bg-gray-950/20 border border-gray-200/20 dark:border-gray-800/20 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5"
          variants={fadeIn}
        >
          <h2 className="flex items-center gap-2 text-xl font-light text-gray-700 dark:text-gray-200 mb-4">
            <FaCode className="text-gray-500 dark:text-gray-400 text-lg" />
            <span>core skills</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="text-gray-700 dark:text-gray-200 bg-gray-100/50 dark:bg-gray-900/30 border border-gray-300/30 dark:border-gray-700/30 rounded-full py-1.5 px-4 text-sm font-light tracking-wide transition-colors duration-200 hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
                variants={fadeIn}
                custom={index + 1}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.article>

        {/* resume download */}
        <motion.div
          className="text-center mt-12"
          variants={fadeIn}
          custom={skills.length + 1}
        >
          <motion.a
            href="https://drive.google.com/file/d/1lQaexSBTtJ5Oa9UDebPJca4_IZ1tC3tW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="download resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
              bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-base font-medium
              hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            <FaFileDownload className="text-lg" />
            download resume
          </motion.a>
        </motion.div>
      </motion.section>
    </main>
  );
}