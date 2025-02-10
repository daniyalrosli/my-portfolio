// app/experience/page.tsx
import Navbar from "../components/navbar"; // Ensure this path is correct

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  isRemote: boolean;
  points?: string[];
}

const experiences: Experience[] = [
  {
    role: "Member of Tech Team",
    company: "GDSC Malaysia",
    location: "Malaysia",
    period: "2023 — 2023",
    isRemote: true,
    points: [
      "Responsible for frontend development for Kitahack 2024's website with other team members",
      "Utilized Angular for the front-end development",
      "Optimized web performance with other team members",
      "Collaborated with other team members to find and fix bugs",
    ],
  },
  {
    role: "IT Intern",
    company: "Dinamiq Agency",
    location: "Bayan Lepas, Pulau Pinang",
    period: "2022 — 2023",
    isRemote: false,
    points: [
      "Managed multiple tasks efficiently, including creating visually engaging content using DaVinci Resolve, Adobe Premiere Pro, Canva, and Adobe Photoshop",
      "Collaborated within a team environment, contributing to web design projects using Elementor and WordPress",
      "Assisted in various IT tasks for Dinamiq Agency employees",
      "Designed impactful posters and visual materials, demonstrating creativity and design expertise",
      "Enhanced website functionality and aesthetics using JavaScript, HTML, and CSS",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <main className="min-h-screen bg-black text-white py-12 px-6 sm:px-12">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-100 mb-10 text-center">Work Experience</h1>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-800"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-100">{exp.role}</h2>
                  <p className="text-lg text-gray-400 mt-1">{exp.company}</p>
                </div>

                <div className="sm:text-right">
                  <p className="text-gray-400">{exp.period}</p>
                  <p className="text-gray-400 mt-1">{exp.isRemote ? "Remote" : exp.location}</p>
                </div>
              </div>

              {exp.points && (
                <ul className="mt-4 space-y-3">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="mt-2 mr-3 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ExperiencePage;