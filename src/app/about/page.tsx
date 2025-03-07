"use client";

import Navbar from "../components/navbar";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen">
      <Navbar />
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-3xl w-full text-center space-y-10">
          <motion.h2
            className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg text-justify"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            I’m Daniyal Rosli, a final-year Intelligent Systems Engineering student with a deep passion for data science, specializing in data analysis, machine learning, and data engineering. I am dedicated to transforming raw data into actionable insights and developing innovative solutions to complex problems.
            <br />
            <br />
            My expertise spans statistical modeling, predictive analytics, and building robust machine learning models. I enjoy diving into datasets, applying analytical techniques, and visualizing trends that drive informed decision-making.
            <br />
            <br />
            I thrive in collaborative environments, leveraging both technical and interpersonal skills to contribute effectively to projects. I am always exploring new technologies and methodologies, striving to expand my knowledge and bring fresh perspectives to the field of data science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            <a
              href="https://drive.google.com/file/d/1lQaexSBTtJ5Oa9UDebPJca4_IZ1tC3tW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition duration-300"
            >
              📄 Download Resume
            </a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
