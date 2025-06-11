"use client";
import Navbar from "../components/navbar";
import Image from "next/image";
import { FaMapMarkerAlt, FaClock, FaLaptopCode } from "react-icons/fa";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  isRemote: boolean;
  logo: string;
  points?: string[];
}

const experiences: Experience[] = [ {
  role: "Data Analyst Software Engineer Intern",
  company: "Advanced Micro Devices (AMD)",
  location: "Penang, Malaysia",
  period: "March 2025 — Present",
  isRemote: false,
  logo: "/img/amd.png",
  points: [
    "Collected, cleaned, and analyzed large datasets to drive business decisions, identify trends, and improve processes.",
    "Developed interactive Power BI dashboards with AI and machine learning features to deliver predictive insights to stakeholders.",
    "Automated data workflows and reporting using SQL, Python, Power Automate, and Power Query, improving efficiency and accuracy.",
    "Extracted, integrated, and managed data from APIs and SQL Server databases for real-time and scheduled analytics.",
    "Collaborated with cross-functional teams to ensure data quality, maintain governance standards, and design user-friendly dashboard interfaces.",
    "Documented data processes, analysis workflows, and dashboard functionalities to support project continuity and knowledge sharing."
  ]
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
    "Collaborated with other team members to find and fix bugs"
  ]
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
      "Enhanced website functionality and aesthetics using JavaScript, HTML, and CSS"
    ]
  }];

export default function ExperiencePage() {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rotate-45 animate-pulse" />
        <div className="absolute top-60 right-32 w-24 h-24 border border-white rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-40 left-1/3 w-16 h-16 border border-white animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white rotate-12 animate-pulse" style={{ animationDelay: '2s' }} />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <Navbar />

      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center group space-y-6">
          <div className="inline-block p-3 rounded-full border border-white/20 hover:border-white/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 cursor-pointer">
            <FaClock size={20} className="text-white group-hover:scale-125 transition-transform" />
          </div>
          <h1 className="text-3xl md:text-4xl font-light tracking-wider group-hover:tracking-widest transition-all duration-700">
            My Experience
          </h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-white/40 to-white/80 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
        </div>

        {/* Experience Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {experiences.map((exp, index) => (
            <div key={index} className="group border border-white/10 bg-white/5 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg hover:shadow-white/10 transition-all duration-500 transform hover:scale-[1.01] hover:-translate-y-1 cursor-pointer space-y-4">
              {/* Header */}
              <div className="flex items-center gap-4">
                <Image src={exp.logo} alt={exp.company} width={48} height={48} className="rounded-lg shadow-lg" />
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-blue-400">{exp.company}</p>
                </div>
              </div>

              {/* Details */}
              <div className="text-sm text-white/70 space-y-1">
                <p className="flex items-center gap-2">
                  <FaClock className="text-purple-400" />
                  {exp.period}
                </p>
                <p className="flex items-center gap-2">
                  {exp.isRemote ? (
                    <>
                      <FaLaptopCode className="text-green-400" />
                      Remote
                    </>
                  ) : (
                    <>
                      <FaMapMarkerAlt className="text-red-400" />
                      {exp.location}
                    </>
                  )}
                </p>
              </div>

              {/* Description Points */}
              {exp.points && (
                <ul className="list-disc list-inside text-white/60 group-hover:text-white/90 space-y-2 text-sm transition-colors duration-300">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}