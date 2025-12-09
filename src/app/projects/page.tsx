"use client";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const projects = [
  {
    title: "heartcare",
    subtitle: "predictive analytics for early detection and prevention",
    description:
      "a web-based application designed to monitor heart health and provide users with insights based on their heart rate data.",
    techStack: ["next.js", "django", "machine learning", "jupyter notebook"],
    link: "https://github.com/daniyalrosli/Final-Year-Project",
    category: "final year project",
  },
  {
    title: "customer creditworthiness prediction",
    subtitle: "machine learning risk assessment system",
    description:
      "evaluates customer creditworthiness to assist financial institutions in making informed lending decisions.",
    techStack: ["python", "scikit-learn", "pandas", "machine learning", "data analysis"],
    link: "https://github.com/daniyalrosli/Customer-Creditworthiness-Prediction-Using-Machine-Learning",
    category: "financial analytics",
  },
  {
    title: "ml-powered property investment analysis",
    subtitle: "real estate investment intelligence for penang",
    description:
      "analyzes property investment opportunities in penang using market trends, rental yields, and predictive modeling.",
    techStack: ["python", "machine learning", "data analysis", "real estate analytics"],
    link: "https://github.com/daniyalrosli/propertydata.git",
    category: "real estate analytics",
  },
  {
    title: "suicidal tweet detection",
    subtitle: "nlp-based sentiment analysis",
    description:
      "analyzes tweets to identify suicidal sentiments using nlp and machine learning techniques.",
    techStack: ["python", "flask", "nltk"],
    link: "https://github.com/daniyalrosli/Suicidal-Tweet-Detection-on-X",
    category: "natural language processing",
  },
  {
    title: "mypredictc",
    subtitle: "analyzing covid-19 clusters in malaysia (2020-2023)",
    description:
      "identifies and visualizes covid-19 clusters across malaysia to support policy and public awareness.",
    techStack: ["microsoft power bi", "data analysis"],
    link: "https://app.powerbi.com/groups/f1fb6dab-282e-4f03-ae22-2ccef7441ddb/reports/b58c525e-7b5d-4a66-bf90-0c8bbdeabbf8",
    category: "data visualization",
  },
  {
    title: "sentiment analysis of reddit users",
    subtitle: "opinions on the israel-palestine conflict",
    description:
      "analyzes reddit user sentiment regarding the israel-palestine conflict using nlp techniques.",
    techStack: ["eda", "python", "nlp", "rapidminer"],
    link: "https://drive.google.com/file/d/1MXGckPvos-ILC72FxCWcDN1MVba8GZpx/view?usp=sharing",
    category: "data analytics",
  },
  {
    title: "insurexpert",
    subtitle: "insurance predictive system",
    description:
      "predicts insurance claim amounts using ml models based on age, bmi, smoking status, and other features.",
    techStack: ["next.js", "python", "machine learning", "jupyter notebook"],
    link: "https://github.com/daniyalrosli/isp624-project",
    category: "predictive analytics",
  },
  {
    title: "predictive maintenance system",
    subtitle: "machine failure prediction using sensor data",
    description:
      "predicts equipment failures in advance using iot sensor data and ml algorithms.",
    techStack: ["python", "tensorflow", "machine learning", "iot"],
    link: "https://github.com/daniyalrosli/Machine-Failure-Prediction-using-Sensor-data",
    category: "iot & machine learning",
  },
  {
    title: "textfilter",
    subtitle: "sms spam classification",
    description:
      'classifies sms messages as either "spam" or "ham" using a machine learning model.',
    techStack: ["python", "scikit-learn", "nlp", "machine learning"],
    link: "https://github.com/daniyalrosli/TextFilter",
    category: "classification",
  },

  {
    title: "moodbite",
    subtitle: "ai-powered food mood matcher",
    description:
      "an ai-driven app that suggests food based on your mood — still a work in progress!",
    techStack: ["next.js", "openai api", "tailwind css", "python"],
    link: "https://github.com/daniyalrosli/moodbite", // replace if different
    category: "ai project",
  },

  {
title: "zakat dashboard",
subtitle: "zakat dashboard for poverty alleviation",
description:
"a simple intelligent system that helps users calculate zakat obligations based on income, savings, and assets.",
techStack: ["next.js", "python", "tailwind css", "data analysis"],
link: "https://github.com/daniyalrosli/zakat_project.git",
category: "islamic finance",
  },
  
  {
title: "bnpl credit risk assessment",
subtitle: "buy now pay later credit risk assessment",
description:
"analyzes customer data to assess credit risk for buy now pay later services.",
techStack: ["next.js", "python", "tailwind css", "data analysis"],
link: "https://github.com/daniyalrosli/bnpl-.git",
category: "islamic finance",
  }, 


];

export default function ProjectsPage() {
  return (
    <motion.main
      className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen font-sans"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      <Navbar />

      {/* Header */}
      <motion.section
        className="text-center pt-24 pb-12 md:py-16 space-y-3 px-4"
        variants={fadeIn}
        custom={0}
      >
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-900 dark:text-white">projects</h1>
        <p className="text-gray-600 dark:text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          A curated collection of my work in data science, machine learning, and full-stack development.
        </p>
      </motion.section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-8 lg:px-12 pb-16 md:pb-20">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn}
            custom={index + 1}
            className="bg-gray-50 dark:bg-[#121212] p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#1b1b1b]"
          >
            <div className="flex justify-between items-start flex-wrap gap-y-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-white/50">{project.category}</p>
              </div>
              <span className="text-sm text-gray-400 dark:text-white/40 text-right">{project.subtitle}</span>
            </div>

            <p className="text-gray-600 dark:text-white/70 text-sm mt-3 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-200/50 dark:bg-white/10 px-3 py-1 rounded-full text-gray-700 dark:text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </section>
    </motion.main>
  );
}