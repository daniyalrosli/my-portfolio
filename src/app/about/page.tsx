"use client";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl w-full text-center space-y-12">
          {/* Header with animated underline */}
          <div className="relative">
            <motion.h1
              className="text-5xl sm:text-6xl font-bold text-white mb-2 font-heading tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About Me
            </motion.h1>
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            />
          </div>
          
          {/* Content card with better typography and spacing */}
          <motion.div
            className="backdrop-blur-sm bg-gray-800/40 p-8 rounded-2xl shadow-xl border border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Introduction with highlight */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Hello, I&apos;m Daniyal Rosli
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                  A final-year <span className="text-blue-300">Intelligent Systems Engineering</span> student with a deep passion for data science.
                </p>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-purple-300">Expertise</h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    I specialize in data analysis, machine learning, and data engineering, transforming raw data into actionable insights and developing innovative solutions to complex problems.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-blue-300">Technical Skills</h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    My expertise spans statistical modeling, predictive analytics, and building robust machine learning models that drive informed decision-making.
                  </p>
                </div>
              </motion.div>
              
              <motion.p
                className="text-base text-gray-300 leading-relaxed mt-4 border-t border-gray-700/50 pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                I thrive in collaborative environments, leveraging both technical and interpersonal skills to contribute effectively to projects. I am always exploring new technologies and methodologies, striving to expand my knowledge and bring fresh perspectives to the field of data science.
              </motion.p>
            </div>
          </motion.div>
          
          {/* Skills section */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {['Python', 'Machine Learning', 'Data Analysis', 'SQL'].map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-gray-800/50 p-3 rounded-lg text-center border border-gray-700/30 hover:border-blue-500/50 transition duration-300"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-gray-200 font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Resume button with enhanced hover effect */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8"
          >
            <motion.a
              href="https://drive.google.com/file/d/1lQaexSBTtJ5Oa9UDebPJca4_IZ1tC3tW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFileDownload className="text-lg" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}