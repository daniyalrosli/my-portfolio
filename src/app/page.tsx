"use client";

import Navbar from "./components/navbar"; // Import the Navbar component
import Image from "next/image"; // Import the Image component
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Importing icons from react-icons
import { motion } from "framer-motion"; // Import the motion component

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-20">
        {/* Text Section */}
        <motion.div
          className="flex flex-col gap-4 max-w-lg text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Hi, I’m <span className="text-blue-500">Daniyal Rosli</span>
          </h1>
          <p className="text-xl text-gray-400">
            I’m a student, lifelong learner, and passionate data enthusiast.
          </p>
          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5 mt-5">
            <a
              href="https://www.linkedin.com/in/daniyal-rosli-4384731b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/daniyalrosli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:daniyalrosli@gmail.com"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 relative"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <Image
            src="/img/m.jpeg"
            alt="Daniyal Rosli"
            fill
            className="rounded-full object-cover shadow-md"
          />
        </motion.div>
      </section>
    </main>
  );
}