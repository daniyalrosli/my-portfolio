"use client";
import Head from "next/head";
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

const experiences: Experience[] = [
  {
    role: "product development engineer",
    company: "advanced micro devices (amd)",
    location: "penang, malaysia",
    period: "september 2025 — present",
    isRemote: false,
    logo: "/img/amd.png",
    points: [
      "developing and optimizing product solutions for next-generation semiconductor technologies.",
      "collaborating with cross-functional teams to drive product innovation and technical excellence.",
      "analyzing product performance data and implementing improvements for enhanced functionality.",
      "contributing to product roadmap planning and technical decision-making processes.",
      "supporting product validation, testing, and quality assurance initiatives.",
    ],
  },
  {
    role: "data analyst software engineer intern",
    company: "advanced micro devices (amd)",
    location: "penang, malaysia",
    period: "march 2025 — september 2025",
    isRemote: false,
    logo: "/img/amd.png",
    points: [
      "collected, cleaned, and analyzed large datasets to drive business decisions, identify trends, and improve processes.",
      "developed interactive power bi dashboards with ai and machine learning features to deliver predictive insights to stakeholders.",
      "automated data workflows and reporting using sql, python, power automate, and power query, improving efficiency and accuracy.",
      "extracted, integrated, and managed data from apis and sql server databases for real-time and scheduled analytics.",
      "collaborated with cross-functional teams to ensure data quality, maintain governance standards, and design user-friendly dashboard interfaces.",
      "documented data processes, analysis workflows, and dashboard functionalities to support project continuity and knowledge sharing.",
    ],
  },
  {
    role: "member of tech team",
    company: "gdsc malaysia",
    location: "malaysia",
    period: "2023 — 2023",
    isRemote: true,
    logo: "/img/gdsc.jpeg",
    points: [
      "responsible for frontend development for kitahack 2024's website with other team members.",
      "utilized angular for the front-end development.",
      "optimized web performance with other team members.",
      "collaborated with other team members to find and fix bugs.",
    ],
  },
  {
    role: "it intern",
    company: "dinamiq agency",
    location: "bayan lepas, pulau pinang",
    period: "2022 — 2023",
    isRemote: false,
    logo: "/img/da.jpeg",
    points: [
      "managed multiple tasks efficiently, including creating visually engaging content using davinci resolve, adobe premiere pro, canva, and adobe photoshop.",
      "collaborated within a team environment, contributing to web design projects using elementor and wordpress.",
      "assisted in various it tasks for dinamiq agency employees.",
      "designed impactful posters and visual materials, demonstrating creativity and design expertise.",
      "enhanced website functionality and aesthetics using javascript, html, and css.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main
        className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen relative overflow-hidden"
        style={{ fontFamily: "'inter', sans-serif" }}
      >
        <Navbar />
        <section className="min-h-screen flex flex-col items-center px-4 py-28 max-w-2xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-3xl font-medium tracking-widest text-gray-900 dark:text-white">work experiences</h1>
            <div className="w-12 h-[1px] bg-gray-300 dark:bg-white/20 mx-auto" />
          </div>
          <div className="relative w-full">
            <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-white/10" />
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-16 group hover:scale-[1.02] transition-transform duration-300 ease-in-out"
              >
                <div className="absolute left-10 top-3 w-3 h-3 bg-gray-400 dark:bg-white/40 rounded-full" />
                <div className="ml-20">
                  <div className="flex items-center gap-4 mb-3">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-base font-medium text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className="text-sm text-gray-600 dark:text-white/70">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-white/70 space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <FaClock className="text-gray-500 dark:text-white/50" size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.isRemote ? (
                        <>
                          <FaLaptopCode className="text-gray-500 dark:text-white/50" size={12} />
                          <span>remote</span>
                        </>
                      ) : (
                        <>
                          <FaMapMarkerAlt className="text-gray-500 dark:text-white/50" size={12} />
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  {exp.points && (
                    <ul className="list-none text-gray-600 dark:text-white/70 text-sm space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="leading-relaxed flex gap-3">
                          <span className="text-gray-400 dark:text-white/40">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.7s ease-in-out;
          }
          html,
          body,
          * {
            box-sizing: border-box;
          }
        `}</style>
      </main>
    </>
  );
}