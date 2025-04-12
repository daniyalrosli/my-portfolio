"use client";
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
import { HiOutlineChevronRight } from 'react-icons/hi';

export default function SkillsPage() {
  const categories = [
    {
      title: "Data Science & Analytics",
      skills: [
        {
          name: 'Data Analysis 📊',
          description: 'Interpreting complex data sets to inform business decisions and identify trends.',
          techStack: ['Python', 'R', 'Pandas', 'NumPy', 'Tableau'],
          color: "from-blue-500 to-cyan-400"
        },
        {
          name: 'Machine Learning 🤖',
          description: 'Developing algorithms that enable systems to learn and make predictions from data.',
          techStack: ['Python', 'TensorFlow', 'scikit-learn', 'Keras'],
          color: "from-purple-500 to-pink-400"
        },
        {
          name: 'Data Visualization 📈',
          description: 'Creating meaningful visual representations of data to communicate insights effectively.',
          techStack: ['Matplotlib', 'Seaborn', 'Power BI', 'Tableau', 'Plotly'],
          color: "from-green-500 to-emerald-400"
        }
      ]
    },
    {
      title: "Engineering & Infrastructure",
      skills: [
        {
          name: 'Data Engineering 🛠️',
          description: 'Building infrastructure and architecture for data generation, storage, and processing.',
          techStack: ['Python', 'SQL', 'Apache Spark', 'Kafka', 'Airflow'],
          color: "from-amber-500 to-yellow-400"
        },
        {
          name: 'Cloud Computing ☁️',
          description: 'Deploying, managing, and scaling applications in the cloud.',
          techStack: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Docker'],
          color: "from-sky-500 to-blue-400"
        },
        {
          name: 'Version Control & Project Management 📁',
          description: 'Collaborating on code and managing project tasks effectively.',
          techStack: ['Git', 'GitHub', 'GitLab'],
          color: "from-indigo-500 to-violet-400"
        }
      ]
    },
    {
      title: "Development & Programming",
      skills: [
        {
          name: 'Web Development 🌐',
          description: 'Creating responsive and interactive websites and applications using modern technologies.',
          techStack: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
          color: "from-rose-500 to-pink-400"
        },
        {
          name: 'Python 🐍',
          description: 'A versatile programming language widely used for data analysis, machine learning, and web development.',
          techStack: ['Python 3.x', 'Flask', 'Django'],
          color: "from-teal-500 to-emerald-400"
        },
        {
          name: 'SQL 🗄️',
          description: 'A domain-specific language used in programming and managing relational databases.',
          techStack: ['MySQL', 'PostgreSQL', 'SQLite'],
          color: "from-fuchsia-500 to-purple-400"
        }
      ]
    }
  ];

  return (
    <main className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full my-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of my technical expertise and capabilities across various domains
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex}
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-8 border-l-4 border-purple-500 pl-4">{category.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 overflow-hidden group"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                    borderColor: "rgba(139, 92, 246, 0.5)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Subtle gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
                  
                  {/* Colored accent line */}
                  <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${skill.color} mb-4`}></div>
                  
                  <h3 className="text-xl font-medium mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">{skill.name}</h3>
                  
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">{skill.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-gray-700/70 text-gray-200 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Subtle arrow icon on hover */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HiOutlineChevronRight className="text-purple-400 text-xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
        
        {/* Skills proficiency section */}
        <motion.div
          className="mt-16 bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Technical Proficiency</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { name: "Python", level: 90 },
              { name: "Data Analysis", level: 85 },
              { name: "Machine Learning", level: 80 },
              { name: "SQL", level: 85 },
              { name: "Web Development", level: 75 },
              { name: "Cloud Services", level: 70 }
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-200">{item.name}</span>
                  <span className="text-gray-400 text-sm">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: 0.8 + (index * 0.1) }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}