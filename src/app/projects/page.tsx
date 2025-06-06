"use client";
import Navbar from "../components/navbar";
import { FaTools } from "react-icons/fa";

const projects = [
  {
    title: "HeartCare",
    subtitle: "Predictive Analytics for Early Detection and Prevention",
    description:
      "A web-based application designed to monitor heart health and provide users with insights based on their heart rate data. It utilizes machine learning algorithms to predict potential heart-related issues and offers recommendations for lifestyle improvements.",
    techStack: ["Next.js", "Django", "Machine Learning", "Jupyter Notebook"],
    link: "https://github.com/daniyalrosli/Final-Year-Project",
    category: "Final Year Project",
  },
  {
    title: "Customer Creditworthiness Prediction",
    subtitle: "Machine Learning Risk Assessment System",
    description:
      "A comprehensive machine learning system that evaluates customer creditworthiness to assist financial institutions in making informed lending decisions. The model analyzes various financial and demographic factors to predict default risk and credit scores.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Data Analysis"],
    link: "https://github.com/daniyalrosli/Customer-Creditworthiness-Prediction-Using-Machine-Learning",
    category: "Financial Analytics",
  },
  {
    title: "ML-Powered Property Investment Analysis",
    subtitle: "Real Estate Investment Intelligence for Penang",
    description:
      "An advanced analytics platform that leverages machine learning to analyze property investment opportunities in Penang. The system evaluates market trends, property values, rental yields, and investment potential to guide real estate investment decisions.",
    techStack: ["Python", "Machine Learning", "Data Analysis", "Real Estate Analytics", "Predictive Modeling"],
    link: "https://github.com/daniyalrosli/propertydata.git",
    category: "Real Estate Analytics",
  },
  {
    title: "Suicidal Tweet Detection",
    subtitle: "NLP-based Sentiment Analysis",
    description:
      "An AI-driven project that analyzes tweets to identify potential suicidal sentiments. It uses natural language processing and machine learning techniques to classify tweets and provide insights for mental health awareness.",
    techStack: ["Python", "Flask", "NLTK"],
    link: "https://github.com/daniyalrosli/Suicidal-Tweet-Detection-on-X",
    category: "Natural Language Processing",
  },
  {
    title: "MyPredictC",
    subtitle: "Analyzing COVID-19 Clusters in Malaysia (2020-2023)",
    description:
      "An analytical tool focused on identifying and analyzing COVID-19 clusters across Malaysia from 2020 to 2023. It utilizes various data sources and statistical methods to visualize the spread and impact of the pandemic, providing insights for policymakers and the public.",
    techStack: ["Microsoft Power BI", "Data Analysis"],
    link: "https://app.powerbi.com/groups/f1fb6dab-282e-4f03-ae22-2ccef7441ddb/reports/b58c525e-7b5d-4a66-bf90-0c8bbdeabbf8?ctid=cdcbb0e2-9fea-4f54-8670-672707797ada&pbi_source=linkShare&bookmarkGuid=cb8da368-55f5-4a95-9e5e-40eda0066448",
    category: "Data Visualization",
  },
  {
    title: "Sentiment Analysis of Reddit Users",
    subtitle: "Opinions on the Israel-Palestine Conflict",
    description:
      "This project explores and analyzes the sentiments of Reddit users regarding the Israel-Palestine conflict. It provides insights into public perception and sentiment on this complex geopolitical issue through social media data.",
    techStack: ["EDA", "Python", "NLP", "RapidMiner"],
    link: "https://drive.google.com/file/d/1MXGckPvos-ILC72FxCWcDN1MVba8GZpx/view?usp=sharing",
    category: "Data Analytics",
  },
  {
    title: "InsureXpert",
    subtitle: "Insurance Predictive System",
    description:
      "InsureXpert is an AI-powered application that predicts insurance claim amounts using machine learning. It helps insurance companies improve decision-making by forecasting claim amounts based on various factors like age, BMI, smoking status, and more.",
    techStack: ["Next.js", "Python", "Machine Learning", "Jupyter Notebook"],
    link: "https://github.com/daniyalrosli/isp624-project",
    category: "Predictive Analytics",
  },
  {
    title: "Predictive Maintenance System",
    subtitle: "Machine Failure Prediction using Sensor Data",
    description:
      "A system designed to predict equipment failures before they occur, allowing for timely maintenance and reducing downtime. It uses machine learning algorithms to analyze sensor data and predict potential issues.",
    techStack: ["Python", "TensorFlow", "Machine Learning", "IoT"],
    link: "https://github.com/daniyalrosli/Machine-Failure-Prediction-using-Sensor-data",
    category: "IoT & Machine Learning",
  },
  {
    title: "TextFilter",
    subtitle: "SMS Spam Classification",
    description:
      'A machine learning model that classifies SMS messages as either "Spam" or "Real (Ham)," improving message filtering efficiency and ensuring a cleaner, spam-free inbox.',
    techStack: ["Python", "Scikit-learn", "NLP", "Machine Learning"],
    link: "https://github.com/daniyalrosli/TextFilter",
    category: "Classification",
  },
  {
    title: "BookLens",
    subtitle: "Personalized Book Recommendation System",
    description:
      "An intelligent recommendation engine that suggests books based on user preferences using metadata like author, publisher, and publication year, helping users discover new reads effortlessly.",
    techStack: ["Python", "FastAPI", "Flask", "Next.js", "MySQL", "MongoDB", "Machine Learning"],
    link: "https://github.com/daniyalrosli/BookLens",
    category: "Recommendation System",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rotate-45 animate-pulse" />
        <div
          className="absolute top-60 right-32 w-24 h-24 border border-white rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-40 left-1/3 w-16 h-16 border border-white animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-20 h-20 border border-white rotate-12 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <Navbar />

      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-16 relative z-10 space-y-16 max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center group space-y-6">
          <div className="inline-block p-3 rounded-full border border-white/20 hover:border-white/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 cursor-pointer">
            <FaTools
              size={20}
              className="text-white transition-transform duration-300 group-hover:scale-125"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-thin tracking-wider hover:tracking-widest transition-all duration-700 cursor-default">
            My Projects
          </h1>
          <div className="w-24 h-px bg-white mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
        </div>

        {/* Project Cards Grid */}
        <div className="w-full grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/10 hover:border-white/30 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-white/5 cursor-pointer transform hover:scale-[1.01] hover:-translate-y-1"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-400">{project.category}</p>
              </div>

              <p className="text-white/70 mb-4 text-sm font-light">{project.subtitle}</p>

              <p className="text-white/60 mb-4 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-600/40 rounded-full px-3 py-1 text-white/90 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
