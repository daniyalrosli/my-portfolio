"use client";

import Navbar from '../components/navbar';
import { motion } from 'framer-motion'; // Import framer-motion

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      {/* Framer Motion for the fade-in effect */}
      <motion.section
        className="flex flex-col items-center justify-center h-screen p-8"
        initial={{ opacity: 0, y: 20 }} // Initial state before animation
        animate={{ opacity: 1, y: 0 }} // Animation target state
        transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
      >
        <div className="max-w-4xl w-full text-center space-y-6">
          <motion.h2
            className="text-5xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: -20 }} // Initial state for heading
            animate={{ opacity: 1, y: 0 }} // Target animation state for heading
            transition={{ duration: 0.8, ease: "easeOut" }} // Separate timing for heading
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 leading-relaxed tracking-wide shadow-lg p-6 rounded-lg bg-gray-800 bg-opacity-20"
            initial={{ opacity: 0, y: 10 }} // Initial state for the paragraph
            animate={{ opacity: 1, y: 0 }} // Target animation state for paragraph
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }} // Delayed animation for the paragraph
          >
            A final-year Intelligent Systems Engineering student with a strong passion for data analysis, machine learning, and data engineering. I enjoy exploring complex datasets to uncover meaningful insights and drive decision-making.
            <br />
            <br />
            Alongside my primary focus on data, I have a budding interest in web development, which allows me to create interactive applications that enhance user experience. My academic journey has equipped me with a solid foundation in programming, algorithms, and statistical modeling, enabling me to tackle real-world problems with innovative solutions.
          </motion.p>
        </div>
      </motion.section>
    </main>
  );
}