"use client";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";

const experiences = [
  {
    role: "product development engineer",
    company: "amd",
    period: "2025 — present",
  },
  {
    role: "data analyst intern",
    company: "amd",
    period: "2025",
  },
  {
    role: "tech team member",
    company: "gdsc malaysia",
    period: "2023",
  },
  {
    role: "it intern",
    company: "dinamiq agency",
    period: "2022 — 2023",
  },
];

export default function ExperiencePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen lowercase">
      <Navbar />

      <section className={`pt-28 pb-20 px-6 max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h1 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white mb-12">
          experience
        </h1>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="flex items-start justify-between py-4 border-b border-gray-100 dark:border-gray-900"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <h3 className="text-base text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {exp.company}
                </p>
              </div>
              <span className="text-sm text-gray-400 dark:text-gray-600">
                {exp.period}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
