"use client";

import Navbar from './components/navbar'; // Import the Navbar component
import Image from 'next/image'; // Import the Image component
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons
import { motion } from 'framer-motion'; // Import Framer Motion

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar /> {/* Render the Navbar here */}
      <section className="h-screen flex items-center justify-between px-5 bg-black">
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center gap-4 pr-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-6xl font-bold mb-2 transition-transform duration-500 ease-in-out transform hover:scale-105 text-white shadow-md"
            variants={fadeInUp}
          >
            Hi, I’m Daniyal Rosli
          </motion.h1>
          <motion.p
            className="text-4xl font-semibold mb-2 transition-opacity duration-700 ease-in-out hover:opacity-80 text-gray-300"
            variants={fadeInUp}
          >
            I’m a student, learner &
          </motion.p>
          <motion.p
            className="text-4xl font-semibold mb-2 transition-opacity duration-700 ease-in-out hover:opacity-80 text-gray-300"
            variants={fadeInUp}
          >
            data enthusiast
          </motion.p>

          {/* Social Links */}
          <motion.div className="flex gap-6 mt-6" variants={fadeInUp}>
            <a
              href="https://www.linkedin.com/in/daniyal-rosli-4384731b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/daniyalrosli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="mailto:daniyalrosli@gmail.com"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <FaEnvelope size={30} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-1/2 h-auto ml-[-20px]"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <Image
            src="/img/gambar.png" // Correct path to the image in the public folder
            alt="Daniyal Rosli"
            width={500}
            height={500}
            className="object-cover shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </motion.div>
      </section>
    </main>
  );
}