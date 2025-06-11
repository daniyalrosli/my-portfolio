"use client";
import Navbar from "../components/navbar";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

export default function SkillsPage() {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden font-sans">
      {/* Background Shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rotate-45 animate-pulse" />
        <div className="absolute top-60 right-32 w-24 h-24 border border-white rounded-full animate-ping" style={{ animationDuration: "3s" }} />
        <div className="absolute bottom-40 left-1/3 w-16 h-16 border border-white animate-bounce" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white rotate-12 animate-pulse" style={{ animationDelay: "2s" }} />
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

      {/* Content Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative z-10 max-w-7xl mx-auto space-y-20">
        {/* Page Title */}
        <header className="text-center space-y-6 group cursor-default">
          <div className="inline-flex items-center justify-center w-14 h-14 border border-white/20 rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
            <HiOutlineChevronDoubleRight className="text-white text-xl group-hover:scale-125 transition-transform duration-300" />
          </div>
          <h1 className="text-5xl font-light tracking-wider transition-all duration-700 group-hover:tracking-widest">
            My Skills
          </h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-white/30 to-white/70 mx-auto group-hover:w-32 transition-all duration-700" />
        </header>

        {/* Tech Stack Section */}
        <div className="w-full space-y-12">
          <h2 className="text-3xl font-thin tracking-wider text-center">
            tech stack that uses in my projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Frontend",
                items: [
                  "HTML, CSS, JavaScript",
                  "React.js, Next.js",
                  "Tailwind CSS",
                  "Figma (UI/UX Design)",
                ],
              },
              {
                title: "Backend",
                items: [
                  "Python (Flask, FastAPI)",
                  "SQL (MySQL, PostgreSQL)",
                  "MongoDB",
                  "RESTful APIs",
                ],
              },
              {
                title: "Data & ML",
                items: [
                  "Python (Pandas, NumPy, Scikit-learn)",
                  "Data Analysis & Visualization",
                  "Machine Learning",
                  "Jupyter Notebook",
                ],
              },
              {
                title: "Tools",
                items: ["Git & GitHub", "Postman", "Docker (Basics)", "Power BI"],
              },
              {
                title: "Cloud & Infra",
                items: [
                  "AWS (Lambda, S3, EC2 - Basic)",
                  "Cloud Computing Concepts",
                  "CI/CD Concepts",
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="group border border-white/10 bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-white/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-xl font-light mb-4 text-white/90 group-hover:tracking-wide transition-all">
                  {section.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  {section.items.map((item, i) => (
                    <li key={i} className="hover:text-white transition-colors duration-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}