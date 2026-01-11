"use client";
import Navbar from "../components/navbar";

export default function AboutPage() {
  const skills = [
    "python",
    "machine learning",
    "data analysis",
    "sql",
    "full stack development",
  ];

  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen lowercase">
      <Navbar />

      <section className="pt-28 pb-20 px-6 max-w-2xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white mb-12">
          about
        </h1>

        {/* Bio */}
        <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            i&apos;m <span className="text-gray-900 dark:text-white">daniyal rosli</span>, a first class{" "}
            <span className="text-gray-900 dark:text-white">intelligent systems engineering</span>{" "}
            graduate from uitm passionate about transforming complex data into meaningful insights.
          </p>
          <p>
            currently product development engineer at{" "}
            <span className="text-gray-900 dark:text-white">amd</span>, i build tools that empower 
            data-driven decisions. always up for learning something new, working with awesome teams, 
            and writing on the side just for fun.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-900">
          <h2 className="text-sm text-gray-500 dark:text-gray-500 mb-4">core skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                {skill}
                {skill !== skills[skills.length - 1] && <span className="ml-2 text-gray-300 dark:text-gray-700">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Resume */}
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-900">
          <a
            href="/img/resume_daniyal.pdf"
            download
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            download resume →
          </a>
        </div>
      </section>
    </main>
  );
}
