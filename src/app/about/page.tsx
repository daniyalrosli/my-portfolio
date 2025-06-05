"use client";
import Navbar from "../components/navbar";
import { FaFileDownload } from "react-icons/fa";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AboutPage() {
  return (
    <main className={`bg-black text-white min-h-screen ${inter.className}`}>
      <Navbar />
      
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-2xl w-full space-y-12 text-center">
          
          <h1 className="text-4xl font-light">About</h1>
          
          <div className="space-y-8">
            <p className="text-white/70 text-lg leading-relaxed">
              I&apos;m Daniyal Rosli, a final-year Intelligent Systems Engineering student 
              passionate about data science and machine learning.
            </p>
            
            <p className="text-white/70 text-lg leading-relaxed">
              Currently working as a Data Analyst Software Engineer Intern at AMD, 
              I specialize in transforming data into actionable insights.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-8">
              {['Python', 'Machine Learning', 'Data Analysis', 'SQL', 'Statistics', 'Visualization'].map((skill) => (
                <div key={skill} className="text-white/60 text-sm">
                  {skill}
                </div>
              ))}
            </div>
            
            <a
              href="https://drive.google.com/file/d/1lQaexSBTtJ5Oa9UDebPJca4_IZ1tC3tW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-300"
            >
              <FaFileDownload size={14} />
              Resume
            </a>
          </div>
          
        </div>
      </section>
    </main>
  );
}