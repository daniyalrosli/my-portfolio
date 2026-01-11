"use client";
import Navbar from "../components/navbar";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "frontend",
      items: ["html, css, javascript", "react, next.js", "tailwind css"],
    },
    {
      title: "backend",
      items: ["python, flask, fastapi", "sql, postgresql", "rest apis"],
    },
    {
      title: "data science",
      items: ["pandas, numpy", "scikit-learn, tensorflow", "jupyter"],
    },
    {
      title: "tools",
      items: ["git, github", "docker", "aws, vercel"],
    },
    {
      title: "product engineering",
      items: ["power bi", "data analysis", "process automation"],
    },
  ];

  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen lowercase">
      <Navbar />

      <section className="pt-28 pb-20 px-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white mb-4">
          skills
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-12">
          tools and technologies i work with.
        </p>

        {/* Skills List */}
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="border-b border-gray-100 dark:border-gray-900 pb-6">
              <h2 className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                {category.title}
              </h2>
              <div className="space-y-1">
                {category.items.map((item, i) => (
                  <p key={i} className="text-gray-700 dark:text-gray-300 text-sm">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
