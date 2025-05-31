"use client";
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaGithub, FaCode, FaTools, FaChevronRight } from 'react-icons/fa';

export default function ProjectsPage() {
  const projects = [
    {
      title: "HeartCare",
      subtitle: "Predictive Analytics for Early Detection and Prevention",
      description: "A web-based application designed to monitor heart health and provide users with insights based on their heart rate data. It utilizes machine learning algorithms to predict potential heart-related issues and offers recommendations for lifestyle improvements.",
      techStack: ["Next.js", "Django", "Machine Learning", "Jupyter Notebook"],
      link: "https://github.com/daniyalrosli/Final-Year-Project",
      image: "/img/heartcare.jpg", // Add your image path here
      category: "Final Year Project",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Customer Creditworthiness Prediction",
      subtitle: "Machine Learning Risk Assessment System",
      description: "A comprehensive machine learning system that evaluates customer creditworthiness to assist financial institutions in making informed lending decisions. The model analyzes various financial and demographic factors to predict default risk and credit scores.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Data Analysis"],
      link: "https://github.com/daniyalrosli/Customer-Creditworthiness-Prediction-Using-Machine-Learning",
      image: "/img/creditworthiness.jpg", // Add your image path here
      category: "Financial Analytics",
      gradient: "from-emerald-600 to-green-600"
    },
    {
      title: "ML-Powered Property Investment Analysis",
      subtitle: "Real Estate Investment Intelligence for Penang",
      description: "An advanced analytics platform that leverages machine learning to analyze property investment opportunities in Penang. The system evaluates market trends, property values, rental yields, and investment potential to guide real estate investment decisions.",
      techStack: ["Python", "Machine Learning", "Data Analysis", "Real Estate Analytics", "Predictive Modeling"],
      link: "https://github.com/daniyalrosli/propertydata.git", // Replace with your actual GitHub repo link when available
      image: "/img/property.jpg", // Add your image path here
      category: "Real Estate Analytics",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Suicidal Tweet Detection",
      subtitle: "NLP-based Sentiment Analysis",
      description: "An AI-driven project that analyzes tweets to identify potential suicidal sentiments. It uses natural language processing and machine learning techniques to classify tweets and provide insights for mental health awareness.",
      techStack: ["Python", "Flask", "NLTK"],
      link: "https://github.com/daniyalrosli/Suicidal-Tweet-Detection-on-X",
      image: "/img/tweet.jpg", // Add your image path here
      category: "Natural Language Processing",
      gradient: "from-red-600 to-yellow-600"
    },
    {
      title: "MyPredictC",
      subtitle: "Analyzing COVID-19 Clusters in Malaysia (2020-2023)",
      description: "An analytical tool focused on identifying and analyzing COVID-19 clusters across Malaysia from 2020 to 2023. It utilizes various data sources and statistical methods to visualize the spread and impact of the pandemic, providing insights for policymakers and the public.",
      techStack: ["Microsoft Power BI", "Data Analysis"],
      link: "https://app.powerbi.com/groups/f1fb6dab-282e-4f03-ae22-2ccef7441ddb/reports/b58c525e-7b5d-4a66-bf90-0c8bbdeabbf8?ctid=cdcbb0e2-9fea-4f54-8670-672707797ada&pbi_source=linkShare&bookmarkGuid=cb8da368-55f5-4a95-9e5e-40eda0066448",
      image: "/img/covid.jpg", // Add your image path here
      category: "Data Visualization",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Sentiment Analysis of Reddit Users",
      subtitle: "Opinions on the Israel-Palestine Conflict",
      description: "This project explores and analyzes the sentiments of Reddit users regarding the Israel-Palestine conflict. It provides insights into public perception and sentiment on this complex geopolitical issue through social media data.",
      techStack: ["EDA", "Python", "NLP", "RapidMiner"],
      link: "https://drive.google.com/file/d/1MXGckPvos-ILC72FxCWcDN1MVba8GZpx/view?usp=sharing",
      image: "/img/sentiment.jpg", // Add your image path here
      category: "Data Analytics",
      gradient: "from-violet-600 to-indigo-600"
    },
    {
      title: "InsureXpert",
      subtitle: "Insurance Predictive System",
      description: "InsureXpert is an AI-powered application that predicts insurance claim amounts using machine learning. It helps insurance companies improve decision-making by forecasting claim amounts based on various factors like age, BMI, smoking status, and more.",
      techStack: ["Next.js", "Python", "Machine Learning", "Jupyter Notebook"],
      link: "https://github.com/daniyalrosli/isp624-project",
      image: "/img/insurance.jpg", // Add your image path here
      category: "Predictive Analytics",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Predictive Maintenance System",
      subtitle: "Machine Failure Prediction using Sensor Data",
      description: "A system designed to predict equipment failures before they occur, allowing for timely maintenance and reducing downtime. It uses machine learning algorithms to analyze sensor data and predict potential issues.",
      techStack: ["Python", "TensorFlow", "Machine Learning", "IoT"],
      link: "https://github.com/daniyalrosli/Machine-Failure-Prediction-using-Sensor-data",
      image: "/img/maintenance.jpg", // Add your image path here
      category: "IoT & Machine Learning",
      gradient: "from-amber-600 to-orange-600"
    },
    {
      title: "TextFilter",
      subtitle: "SMS Spam Classification",
      description: "A machine learning model that classifies SMS messages as either \"Spam\" or \"Real (Ham),\" improving message filtering efficiency and ensuring a cleaner, spam-free inbox.",
      techStack: ["Python", "Scikit-learn", "NLP", "Machine Learning"],
      link: "https://github.com/daniyalrosli/TextFilter",
      image: "/img/textfilter.jpg", // Add your image path here
      category: "Classification",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "BookLens",
      subtitle: "Personalized Book Recommendation System",
      description: "An intelligent recommendation engine that suggests books based on user preferences using metadata like author, publisher, and publication year, helping users discover new reads effortlessly.",
      techStack: ["Python", "FastAPI", "Flask", "Next.js", "MySQL", "MongoDB", "Machine Learning"],
      link: "https://github.com/daniyalrosli/BookLens", // Replace with your actual GitHub repo link
      image: "/img/booklens.jpg", // Add your image path here
      category: "Recommendation System",
      gradient: "from-green-500 to-blue-500"
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      
      <section className="max-w-6xl mx-auto py-16 px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full my-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my technical work, research, and development projects
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
            >
              <div className="backdrop-blur-sm bg-gray-800/40 rounded-xl shadow-lg border border-gray-700/60 overflow-hidden transition-all duration-300 h-full flex flex-col hover:border-blue-500/40 hover:shadow-blue-900/20 hover:shadow-lg">
                {/* Project header with gradient */}
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category tag */}
                  <div className="mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-700/70 text-gray-300">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Title and subtitle */}
                  <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-purple-300 mb-4 font-medium">
                    {project.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="mt-auto">
                    <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 flex items-center">
                      <FaTools className="mr-2" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="inline-block text-xs px-3 py-1 rounded-full bg-gray-700/70 text-gray-300 hover:bg-gray-600 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Link */}
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
                    >
                      <span>View Project</span>
                      <FaChevronRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="backdrop-blur-sm bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-xl border border-blue-500/20">
            <h2 className="text-2xl font-bold mb-3">Interested in my work?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my GitHub repository for more projects and code samples. I&#39;m always working on something new!
            </p>
            <a 
              href="https://github.com/daniyalrosli"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium transition-transform hover:scale-105 shadow-lg"
            >
              <FaGithub className="text-lg" />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}