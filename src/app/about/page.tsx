"use client";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen font-sans">
      <Navbar />
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl w-full space-y-8">
          {/* Simple header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">
              About Me
            </h1>
            <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full" />
          </motion.div>
          
          {/* Content card with cleaner design */}
          <motion.div
            className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-blue-400">
                Hello, I&apos;m Daniyal Rosli
              </h2>
              <p className="text-gray-300 leading-relaxed">
                A final-year <span className="text-blue-400">Intelligent Systems Engineering</span> student with a passion for data science.
              </p>
            </div>
            
            {/* Two columns of info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-medium text-blue-400 mb-2">Expertise</h3>
                <p className="text-gray-300">
                  I specialize in data analysis, machine learning, and data engineering, transforming raw data into actionable insights.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-blue-400 mb-2">Technical Skills</h3>
                <p className="text-gray-300">
                  My expertise spans statistical modeling, predictive analytics, and building machine learning models.
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 border-t border-gray-800 pt-6">
              I thrive in collaborative environments, leveraging both technical and interpersonal skills to contribute effectively to projects.
            </p>
          </motion.div>
          
          {/* Skills section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['Python', 'Machine Learning', 'Data Analysis', 'SQL'].map((skill) => (
              <div
                key={skill}
                className="bg-gray-900 py-3 px-2 rounded-lg text-center"
              >
                <span className="text-gray-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>
          
          {/* Resume button */}
          <div className="flex justify-center mt-8">
            <motion.a
              href="https://drive.google.com/file/d/1lQaexSBTtJ5Oa9UDebPJca4_IZ1tC3tW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}