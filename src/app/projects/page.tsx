"use client";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "heartcare",
    description:
      "a web-based application designed to monitor heart health and provide users with insights based on their heart rate data.",
    techStack: ["next.js", "django", "ml"],
    link: "https://github.com/daniyalrosli/Final-Year-Project",
  },
  {
    title: "customer creditworthiness prediction",
    description:
      "evaluates customer creditworthiness to assist financial institutions in making informed lending decisions.",
    techStack: ["python", "scikit-learn", "ml"],
    link: "https://github.com/daniyalrosli/Customer-Creditworthiness-Prediction-Using-Machine-Learning",
  },
  {
    title: "ml-powered property investment analysis",
    description:
      "analyzes property investment opportunities in penang using market trends, rental yields, and predictive modeling.",
    techStack: ["python", "ml", "analytics"],
    link: "https://github.com/daniyalrosli/propertydata.git",
  },
  {
    title: "suicidal tweet detection",
    description:
      "analyzes tweets to identify suicidal sentiments using nlp and machine learning techniques.",
    techStack: ["python", "flask", "nlp"],
    link: "https://github.com/daniyalrosli/Suicidal-Tweet-Detection-on-X",
  },
  {
    title: "mypredictc",
    description:
      "identifies and visualizes covid-19 clusters across malaysia to support policy and public awareness.",
    techStack: ["power bi", "analytics"],
    link: "https://app.powerbi.com/groups/f1fb6dab-282e-4f03-ae22-2ccef7441ddb/reports/b58c525e-7b5d-4a66-bf90-0c8bbdeabbf8",
  },
  {
    title: "insurexpert",
    description:
      "predicts insurance claim amounts using ml models based on age, bmi, smoking status, and other features.",
    techStack: ["next.js", "python", "ml"],
    link: "https://github.com/daniyalrosli/isp624-project",
  },
  {
    title: "predictive maintenance system",
    description:
      "predicts equipment failures in advance using iot sensor data and ml algorithms.",
    techStack: ["python", "tensorflow", "iot"],
    link: "https://github.com/daniyalrosli/Machine-Failure-Prediction-using-Sensor-data",
  },
  {
    title: "textfilter",
    description:
      'classifies sms messages as either "spam" or "ham" using a machine learning model.',
    techStack: ["python", "nlp", "ml"],
    link: "https://github.com/daniyalrosli/TextFilter",
  },
  {
    title: "moodbite",
    description:
      "an ai-driven app that suggests food based on your mood — still a work in progress!",
    techStack: ["next.js", "openai", "python"],
    link: "https://github.com/daniyalrosli/moodbite",
  },
  {
    title: "zakat dashboard",
    description:
      "a simple intelligent system that helps users calculate zakat obligations based on income, savings, and assets.",
    techStack: ["next.js", "python", "analytics"],
    link: "https://github.com/daniyalrosli/zakat_project.git",
  },
  {
    title: "bnpl credit risk assessment",
    description:
      "analyzes customer data to assess credit risk for buy now pay later services.",
    techStack: ["next.js", "python", "ml"],
    link: "https://github.com/daniyalrosli/bnpl-.git",
  },
];

export default function ProjectsPage() {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      <Navbar />

      {/* Header */}
      <section className={`pt-28 pb-16 px-6 max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h1 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
          projects
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
          a collection of my work in data science, machine learning, and development.
        </p>
      </section>

      {/* Projects List - Single Column Minimalist */}
      <section className="max-w-3xl mx-auto px-6 pb-20 space-y-1">
        {displayedProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-5 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 -mx-4 px-4 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>
              <span className="text-gray-400 dark:text-gray-500 text-sm shrink-0">
                →
              </span>
            </div>
            
            {/* Tech stack - subtle */}
            <div className="flex gap-2 mt-3">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs text-gray-400 dark:text-gray-500"
                >
                  {tech}
                  {i < Math.min(project.techStack.length, 3) - 1 && " ·"}
                </span>
              ))}
            </div>
          </a>
        ))}

        {/* Show more/less toggle */}
        {projects.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-8 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {showAll ? "show less" : `show all ${projects.length} projects`}
          </button>
        )}
      </section>
    </main>
  );
}
