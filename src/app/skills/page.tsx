"use client";
import Navbar from '../components/navbar';

export default function SkillsPage() {
  // Array of skills with descriptions
  const skills = [
    {
      name: 'Data Analysis',
      description: 'Interpreting complex data sets to inform business decisions and identify trends.',
      techStack: ['Python', 'R', 'Pandas', 'NumPy', 'Tableau'],
    },
    {
      name: 'Machine Learning',
      description: 'Developing algorithms that enable systems to learn and make predictions from data.',
      techStack: ['Python', 'TensorFlow', 'scikit-learn', 'Keras'],
    },
    {
      name: 'Data Engineering',
      description: 'Building infrastructure and architecture for data generation, storage, and processing.',
      techStack: ['Python', 'SQL', 'Apache Spark', 'Kafka', 'Airflow'],
    },
    {
      name: 'Web Development',
      description: 'Creating responsive and interactive websites and applications using modern technologies.',
      techStack: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      name: 'Version Control & Project Management',
      description: 'Collaborating on code and managing project tasks effectively.',
      techStack: ['Git', 'GitHub', 'Jira', 'Trello'],
    },
    {
      name: 'Cloud Computing',
      description: 'Deploying, managing, and scaling applications in the cloud.',
      techStack: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Docker', 'Kubernetes'],
    },
    {
      name: 'Python',
      description: 'A versatile programming language widely used for data analysis, machine learning, and web development.',
      techStack: ['Python 3.x', 'Flask', 'Django'],
    },
    {
      name: 'SQL',
      description: 'A domain-specific language used in programming and managing relational databases.',
      techStack: ['MySQL', 'PostgreSQL', 'SQLite'],
    },

    {

      name: 'Data Visualization',
      description: 'Creating visual representations of data to communicate insights and findings.',
      techStack: ['Matplotlib', 'Seaborn', 'Microsoft Power BI', 'Tableau'],

    }


    // Add more skills and descriptions as needed
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="flex items-center justify-center h-screen p-8">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-100">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-300 mb-2">{skill.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skill.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styling for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </main>
  );
}