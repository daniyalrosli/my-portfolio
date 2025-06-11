"use client";
import Navbar from "../components/navbar";
import { FaFileDownload, FaBriefcase, FaCode } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  const skills = [
    "Python",
    "Machine Learning",
    "Data Analysis",
    "SQL",
    "Full Stack Development",
    "Visualization",
  ];

  return (
    <main
      className={`bg-black text-white min-h-screen ${inter.className} relative overflow-hidden`}
    >
      {/* Background Geometric Effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rotate-45 animate-pulse" />
        <div
          className="absolute top-60 right-32 w-24 h-24 border border-white rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-40 left-1/3 w-16 h-16 border border-white animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-20 h-20 border border-white rotate-12 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <header className="text-center mb-16 group cursor-default">
          <FaBriefcase className="mx-auto mb-4 text-white text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
          <h1 className="text-4xl md:text-5xl font-light tracking-wide group-hover:tracking-widest transition-all duration-500">
            About Me
          </h1>
          <div className="w-20 h-[2px] bg-white mx-auto mt-4 transition-all duration-500 group-hover:w-32 group-hover:bg-white/80" />
        </header>

        {/* Professional Journey */}
        <article className="mb-14 space-y-4 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
          <h2 className="flex items-center gap-2 text-xl font-light text-white mb-3">
            <FaBriefcase className="text-white/80" />
            <span>Professional Journey</span>
          </h2>
          <p className="text-white/70 leading-relaxed">
            I&apos;m{" "}
            <span className="text-white font-medium border-b border-white/30">
              Daniyal Rosli
            </span>
            , a final-year{" "}
            <span className="text-white font-medium border-b border-white/30">
              Intelligent Systems Engineering
            </span>{" "}
            student passionate about transforming complex data into meaningful insights.
          </p>
          <p className="text-white/70 leading-relaxed">
            Currently working as a{" "}
            <span className="text-white font-medium border-b border-white/30">
              Data Analyst Software Engineer Intern
            </span>{" "}
            at{" "}
            <span className="text-white font-medium border-b border-white/30">
              AMD
            </span>
            , where I build tools that empower better decisions through data.
          </p>
        </article>

        {/* Core Skills */}
        <article className="mb-14 space-y-4 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
          <h2 className="flex items-center gap-2 text-xl font-light text-white mb-3">
            <FaCode className="text-white/80" />
            <span>Core Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {skills.map((skill) => (
              <div
                key={skill}
                className="text-white/70 border border-white/10 rounded-lg py-2 px-3 text-sm hover:text-white hover:border-white hover:shadow-md hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </article>

        {/* Resume Download */}
        <div className="text-center">
          <a
            href="https://drive.google.com/file/d/1lQaexSBTtJ5Oa9UDebPJca4_IZ1tC3tW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-sm font-light hover:bg-white hover:text-black transition-all duration-300 shadow hover:shadow-xl"
          >
            <FaFileDownload />
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}