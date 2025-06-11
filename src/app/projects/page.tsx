"use client";
import Navbar from "../components/navbar";
import { FaTools } from "react-icons/fa";

const projects = [
  {
    title: "HeartCare",
    subtitle: "Predictive Analytics for Early Detection and Prevention",
    description:
      "A web-based application designed to monitor heart health and provide users with insights based on their heart rate data.",
    techStack: ["Next.js", "Django", "Machine Learning", "Jupyter Notebook"],
    link: "https://github.com/daniyalrosli/Final-Year-Project",
    category: "Final Year Project",
  },
  {
    title: "Customer Creditworthiness Prediction",
    subtitle: "Machine Learning Risk Assessment System",
    description:
      "Evaluates customer creditworthiness to assist financial institutions in making informed lending decisions.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Data Analysis"],
    link: "https://github.com/daniyalrosli/Customer-Creditworthiness-Prediction-Using-Machine-Learning",
    category: "Financial Analytics",
  },
  {
    title: "ML-Powered Property Investment Analysis",
    subtitle: "Real Estate Investment Intelligence for Penang",
    description:
      "Analyzes property investment opportunities in Penang using market trends, rental yields, and predictive modeling.",
    techStack: ["Python", "Machine Learning", "Data Analysis", "Real Estate Analytics"],
    link: "https://github.com/daniyalrosli/propertydata.git",
    category: "Real Estate Analytics",
  },
  {
    title: "Suicidal Tweet Detection",
    subtitle: "NLP-based Sentiment Analysis",
    description:
      "Analyzes tweets to identify suicidal sentiments using NLP and machine learning techniques.",
    techStack: ["Python", "Flask", "NLTK"],
    link: "https://github.com/daniyalrosli/Suicidal-Tweet-Detection-on-X",
    category: "Natural Language Processing",
  },
  {
    title: "MyPredictC",
    subtitle: "Analyzing COVID-19 Clusters in Malaysia (2020-2023)",
    description:
      "Identifies and visualizes COVID-19 clusters across Malaysia to support policy and public awareness.",
    techStack: ["Microsoft Power BI", "Data Analysis"],
    link: "https://app.powerbi.com/groups/f1fb6dab-282e-4f03-ae22-2ccef7441ddb/reports/b58c525e-7b5d-4a66-bf90-0c8bbdeabbf8",
    category: "Data Visualization",
  },
  {
    title: "Sentiment Analysis of Reddit Users",
    subtitle: "Opinions on the Israel-Palestine Conflict",
    description:
      "Analyzes Reddit user sentiment regarding the Israel-Palestine conflict using NLP techniques.",
    techStack: ["EDA", "Python", "NLP", "RapidMiner"],
    link: "https://drive.google.com/file/d/1MXGckPvos-ILC72FxCWcDN1MVba8GZpx/view?usp=sharing",
    category: "Data Analytics",
  },
  {
    title: "InsureXpert",
    subtitle: "Insurance Predictive System",
    description:
      "Predicts insurance claim amounts using ML models based on age, BMI, smoking status, and other features.",
    techStack: ["Next.js", "Python", "Machine Learning", "Jupyter Notebook"],
    link: "https://github.com/daniyalrosli/isp624-project",
    category: "Predictive Analytics",
  },
  {
    title: "Predictive Maintenance System",
    subtitle: "Machine Failure Prediction using Sensor Data",
    description:
      "Predicts equipment failures in advance using IoT sensor data and ML algorithms.",
    techStack: ["Python", "TensorFlow", "Machine Learning", "IoT"],
    link: "https://github.com/daniyalrosli/Machine-Failure-Prediction-using-Sensor-data",
    category: "IoT & Machine Learning",
  },
  {
    title: "TextFilter",
    subtitle: "SMS Spam Classification",
    description:
      'Classifies SMS messages as either "Spam" or "Ham" using a machine learning model.',
    techStack: ["Python", "Scikit-learn", "NLP", "Machine Learning"],
    link: "https://github.com/daniyalrosli/TextFilter",
    category: "Classification",
  },
  {
    title: "BookLens",
    subtitle: "Personalized Book Recommendation System",
    description:
      "Recommends books based on user preferences using metadata filtering techniques.",
    techStack: ["Python", "FastAPI", "Flask", "Next.js", "MySQL", "MongoDB"],
    link: "https://github.com/daniyalrosli/BookLens",
    category: "Recommendation System",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rotate-45 animate-pulse" />
        <div className="absolute top-60 right-32 w-24 h-24 border border-white rounded-full animate-ping" style={{ animationDuration: "3s" }} />
        <div className="absolute bottom-40 left-1/3 w-16 h-16 border border-white animate-bounce" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white rotate-12 animate-pulse" style={{ animationDelay: "2s" }} />
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

      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 z-10 relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center group space-y-6 mb-16">
          <div className="inline-block p-4 rounded-full border border-white/20 hover:border-white/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 cursor-pointer">
            <FaTools size={22} className="text-white transition-transform duration-300 group-hover:scale-125" />
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide group-hover:tracking-widest transition-all duration-700">
            My Projects
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            A curated showcase of my work in data science, machine learning, and full-stack development.
          </p>
          <div className="w-24 h-px bg-white mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/10 hover:border-white/30 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 bg-white/5 backdrop-blur-md"
            >
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs uppercase tracking-wide text-blue-400">{project.category}</p>
              </div>
              <p className="text-sm text-white/70 mb-2 italic">{project.subtitle}</p>
              <p className="text-sm text-white/60 leading-relaxed mb-4 group-hover:text-white/90 transition-colors">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-600/40 rounded-full px-3 py-1 text-white font-mono"
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