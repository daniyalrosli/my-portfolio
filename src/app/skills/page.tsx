"use client";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaChartLine,
  FaTools,
  FaChevronRight,
  FaCogs, // icon for product development
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "frontend",
      icon: <FaCode className="text-blue-400" />,
      items: [
        "html, css, javascript",
        "react, next.js",
        "tailwind css",
        "figma, ui design",
      ],
    },
    {
      title: "backend",
      icon: <FaServer className="text-green-400" />,
      items: [
        "python, flask, fastapi",
        "sql, postgresql",
        "mongodb, redis",
        "rest & graphql",
      ],
    },
    {
      title: "data science",
      icon: <FaChartLine className="text-purple-400" />,
      items: [
        "pandas, numpy",
        "scikit-learn, tensorflow",
        "matplotlib, seaborn",
        "jupyter, colab",
      ],
    },
    {
      title: "devops & tools",
      icon: <FaTools className="text-yellow-400" />,
      items: [
        "git, github",
        "docker, ci/cd",
        "aws, vercel",
        "postman, vs code",
      ],
    },
    {
      title: "product development engineering",
      icon: <FaCogs className="text-red-400" />,
      items: [
        "semiconductor product validation & testing",
        "power bi dashboard design & reporting",
        "data analysis & root cause investigation",
        "cross-team collaboration & documentation",
        "process improvement & automation",
      ],
    },
  ];

  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen font-sans lowercase antialiased overflow-hidden relative">
      <Navbar />

      <section className="relative z-10 min-h-screen flex flex-col items-center px-4 sm:px-6 py-12 md:py-20 max-w-6xl mx-auto space-y-12">
        {/* header */}
        <motion.header
          className="text-center space-y-4 pt-10"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tighter">
            my skills
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-md mx-auto font-light leading-relaxed">
            the powerful tools and technologies I wield to{" "}
            <span className="font-medium text-blue-600 dark:text-blue-300">
              bring ideas to life
            </span>{" "}
            and solve complex challenges.
          </p>
          <div className="w-20 h-1 bg-gray-400 dark:bg-gray-600 mx-auto rounded-full mt-6" />
        </motion.header>

        {/* tech stack */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {skillCategories.map((section, index) => (
            <motion.div
              key={index}
              className="group relative p-7 bg-gray-50/50 dark:bg-gray-950/20 border border-gray-200/30 dark:border-gray-800/30 rounded-2xl backdrop-blur-md transition-all duration-500 hover:bg-gray-100/50 dark:hover:bg-gray-900/30 hover:border-blue-500/50 dark:hover:border-blue-700/50 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-900/20 transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="relative z-10 flex items-center mb-4">
                <span className="text-3xl mr-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {section.icon}
                </span>
                <h3 className="text-xl font-medium tracking-wide group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm font-light group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors duration-200"
                  >
                    <FaChevronRight className="text-xs mr-2 text-blue-500 dark:text-blue-500 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
