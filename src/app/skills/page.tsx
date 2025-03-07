"use client";
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';

export default function SkillsPage() {
  const skills = [
    {
      name: 'Data Analysis 📊',
      description: 'Interpreting complex data sets to inform business decisions and identify trends.',
      techStack: ['Python', 'R', 'Pandas', 'NumPy', 'Tableau'],
    },
    {
      name: 'Machine Learning 🤖',
      description: 'Developing algorithms that enable systems to learn and make predictions from data.',
      techStack: ['Python', 'TensorFlow', 'scikit-learn', 'Keras'],
    },
    {
      name: 'Data Engineering 🛠️',
      description: 'Building infrastructure and architecture for data generation, storage, and processing.',
      techStack: ['Python', 'SQL', 'Apache Spark', 'Kafka', 'Airflow'],
    },
    {
      name: 'Web Development 🌐',
      description: 'Creating responsive and interactive websites and applications using modern technologies.',
      techStack: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      name: 'Data Visualization 📈',
      description: 'Creating meaningful visual representations of data to communicate insights effectively.',
      techStack: ['Matplotlib', 'Seaborn', 'Power BI', 'Tableau', 'Plotly'],
    },
    {
      name: 'Version Control & Project Management 📁',
      description: 'Collaborating on code and managing project tasks effectively.',
      techStack: ['Git', 'GitHub', 'GitLab'],
    },
    {
      name: 'Cloud Computing ☁️',
      description: 'Deploying, managing, and scaling applications in the cloud.',
      techStack: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Docker'],
    },
    {
      name: 'Python 🐍',
      description: 'A versatile programming language widely used for data analysis, machine learning, and web development.',
      techStack: ['Python 3.x', 'Flask', 'Django'],
    },
    {
      name: 'SQL 🗄️',
      description: 'A domain-specific language used in programming and managing relational databases.',
      techStack: ['MySQL', 'PostgreSQL', 'SQLite'],
    }
  ];

  return (
    <main className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen">
      <Navbar />
      <section className="flex items-center justify-center min-h-screen p-4 sm:p-8">
        <div className="max-w-6xl w-full">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 bg-opacity-60 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-300 mb-2 text-sm sm:text-base">{skill.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skill.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-xs sm:text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
