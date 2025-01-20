"use client";

import Navbar from '../components/navbar';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Content Wrapper */}
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide shadow-lg p-6 bg-gray-800 bg-opacity-30 rounded-lg text-justify"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            I’m Daniyal Rosli, a final-year Intelligent Systems Engineering student with a passion for data analysis, machine learning, and data engineering. I thrive on exploring datasets to uncover insights and create meaningful solutions.
            <br />
            <br />
            My journey into web development has allowed me to design interactive applications that prioritize user experience. With a strong foundation in programming, algorithms, and statistical modeling, I enjoy tackling real-world challenges and delivering impactful solutions.
            <br />
            <br />
            I’ve honed my problem-solving and time management skills through projects and internships, consistently balancing competing priorities while maintaining high-quality results. I’m always eager to learn, adapt, and grow in both technical and creative domains.
          </motion.p>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            <a
              href="https://drive.google.com/file/d/1PovNhTzgKBe51tuA2ozDn6b8lha_OLBA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}