// app/experience/page.tsx
import Navbar from '../components/navbar'; // Ensure this path is correct

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
      "Responsible for frontend development for Kitahack 2024's website with other team members"
    ]
  },
  {
    role: "IT Intern",
    company: "Dinamiq Agency",
    location: "Bayan Lepas, Pulau Pinang",
    period: "2022 — 2023",
    isRemote: false,
    points: [
      "Proficiently managed time to handle multiple tasks, including creating visually engaging content using DaVinci Resolve, Adobe Premiere Pro, Canva, and Adobe Photoshop",
      "Collaborated effectively within a team environment, contributing to web design projects using Elementor and WordPress",
      "Demonstrated versatility by assisting in IT tasks for Dinamiq Agency employees",
      "Created impactful posters and visual materials, highlighting a blend of creativity and design expertise",
      "Applied JavaScript, HTML, and CSS to enhance website functionality and aesthetics"
    ]
  }
];

const ExperiencePage = () => {
  return (
    <main className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <Navbar /> {/* Include your Navbar component */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-100 mb-8">Work Experience</h1>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-100">{exp.role}</h2>
                  <div className="flex items-center gap-2 text-gray-400 mt-2">
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-400 justify-end">
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 justify-end">
                    <span>{exp.isRemote ? "Remote" : exp.location}</span>
                  </div>
                </div>
              </div>

              {exp.points && (
                <ul className="mt-4 space-y-3">
                  {exp.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex}
                      className="flex items-start"
                    >
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
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