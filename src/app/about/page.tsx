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
    "Statistics",
    "Visualization",
  ];

  return (
    <main
      className={`bg-black text-white min-h-screen ${inter.className} relative overflow-hidden`}
    >
      {/* Animated Geometric Patterns */}
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

      <section className="max-w-3xl mx-auto px-6 py-16 relative z-10">
  {/* Header */}
  <header className="text-center mb-12 group cursor-default">
    <FaBriefcase 
      className="mx-auto mb-4 text-white text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" 
    />
    <h1 className="text-4xl font-thin tracking-wide transition-all duration-500 group-hover:tracking-widest group-hover:text-white/80">
      About Me
    </h1>
    <div className="w-20 h-[2px] bg-white mx-auto mt-3 transition-all duration-500 group-hover:w-32 group-hover:bg-white/80"></div>
  </header>

        {/* Professional Journey */}
        <article className="mb-12 space-y-4 border border-white/10 rounded-xl p-6">
          <h2 className="flex items-center gap-2 text-xl font-thin mb-4">
            <FaBriefcase className="text-white" />
            Professional Journey
          </h2>
          <p className="text-white/70 leading-relaxed">
            I&apos;m{" "}
            <span className="text-white font-light border-b border-white/30">
              Daniyal Rosli
            </span>
            , a final-year{" "}
            <span className="text-white font-light border-b border-white/30">
              Intelligent Systems Engineering
            </span>{" "}
            student passionate about transforming complex data into meaningful insights.
          </p>
          <p className="text-white/70 leading-relaxed">
            Currently working as a{" "}
            <span className="text-white font-light border-b border-white/30">
              Data Analyst Software Engineer Intern
            </span>{" "}
            at{" "}
            <span className="text-white font-light border-b border-white/30">
              AMD
            </span>
            , specializing in building data-driven solutions and extracting actionable intelligence from complex datasets.
          </p>
        </article>

        {/* Core Skills */}
        <article className="mb-12 space-y-4 border border-white/10 rounded-xl p-6">
          <h2 className="flex items-center gap-2 text-xl font-thin mb-4">
            <FaCode className="text-white" />
            Core Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {skills.map((skill) => (
              <div
                key={skill}
                className="text-white/60 border border-white/10 rounded-lg py-2 text-sm hover:text-white hover:border-white transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </article>

        {/* Download Resume */}
        <div className="text-center">
          <a
            href="https://drive.google.com/file/d/1lQaexSBTtJ5Oa9UDebPJca4_IZ1tC3tW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg font-light text-sm hover:bg-white hover:text-black transition"
          >
            <FaFileDownload />
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}
