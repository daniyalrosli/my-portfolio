// app/experience/page.tsx
"use client";
import Navbar from "../components/navbar";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaLaptopCode } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  isRemote: boolean;
  logo: string;
  points?: string[];
}

const experiences: Experience[] = [
  {
    role: "Data Analyst Software Engineer Intern",
    company: "Advanced Micro Devices (AMD)",
    location: "Penang, Malaysia",
    period: "March 2025 — Present",
    isRemote: false,
    logo: "/img/amd.png",
    points: ["Will be coming"],
  },
  {
    role: "Member of Tech Team",
    company: "GDSC Malaysia",
    location: "Malaysia",
    period: "2023 — 2023",
    isRemote: true,
    logo: "/img/gdsc.jpeg",
    points: [
      "Responsible for frontend development for Kitahack 2024's website with other team members",
      "Utilized Angular for the front-end development",
      "Optimized web performance with other team members",
      "Collaborated with other team members to find and fix bugs",
    ],
  },
  {
    role: "IT Intern",
    company: "Dinamiq Agency",
    location: "Bayan Lepas, Pulau Pinang",
    period: "2022 — 2023",
    isRemote: false,
    logo: "/img/da.jpeg",
    points: [
      "Managed multiple tasks efficiently, including creating visually engaging content using DaVinci Resolve, Adobe Premiere Pro, Canva, and Adobe Photoshop",
      "Collaborated within a team environment, contributing to web design projects using Elementor and WordPress",
      "Assisted in various IT tasks for Dinamiq Agency employees",
      "Designed impactful posters and visual materials, demonstrating creativity and design expertise",
      "Enhanced website functionality and aesthetics using JavaScript, HTML, and CSS",
    ],
  },
];

const ExperiencePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-sans">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full my-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and work experience
          </p>
        </motion.div>

        {/* Timeline with connecting line */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>
          
          <motion.div 
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                } items-center sm:items-start gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg z-10"></div>
                
                {/* Experience card */}
                <div className="sm:w-1/2 w-full">
                  <div className="backdrop-blur-sm bg-gray-800/40 rounded-xl shadow-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gray-700/70 p-2 rounded-lg">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={50}
                          height={50}
                          className="rounded-md"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold text-white tracking-tight">
                          {exp.role}
                        </h2>
                        <h3 className="text-lg font-medium text-blue-300 mt-1">
                          {exp.company}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300 my-3">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-purple-400" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {exp.isRemote ? (
                          <>
                            <FaLaptopCode className="text-green-400" />
                            <span>Remote</span>
                          </>
                        ) : (
                          <>
                            <FaMapMarkerAlt className="text-red-400" />
                            <span>{exp.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {exp.points && exp.points.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-700/30">
                        <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                          <FaBriefcase />
                          <span>Responsibilities</span>
                        </h4>
                        <ul className="space-y-3">
                          {exp.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex gap-3 group">
                              <span className="h-5 w-5 mt-0.5 flex-shrink-0 rounded-full border border-blue-400/50 group-hover:border-blue-400 group-hover:bg-blue-900/20 flex items-center justify-center transition-colors duration-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                              </span>
                              <span className="text-sm text-gray-300 leading-relaxed">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 italic">
            More experiences coming soon...
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default ExperiencePage;