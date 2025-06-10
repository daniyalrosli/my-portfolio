"use client";
import Navbar from '../components/navbar';
import { HiOutlineChevronRight } from 'react-icons/hi';

export default function SkillsPage() {
  const categories = [
    {
      title: "Data Science & Analytics",
      skills: ['Data Analysis 📊', 'Machine Learning 🤖', 'Data Visualization 📈']
    },
    {
      title: "Engineering & Infrastructure",
      skills: ['Data Engineering 🛠️', 'Cloud Computing ☁️', 'Version Control & Project Management 📁']
    },
    {
      title: "Development & Programming",
      skills: ['Web Development 🌐', 'Python 🐍', 'SQL 🗄️']
    }
  ];

 

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Reusing About Page's background style */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rotate-45 animate-pulse" />
        <div className="absolute top-60 right-32 w-24 h-24 border border-white rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-40 left-1/3 w-16 h-16 border border-white animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white rotate-12 animate-pulse" style={{ animationDelay: '2s' }} />
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
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <Navbar />

      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-16 relative z-10 space-y-16 max-w-5xl mx-auto">
        {/* Page Title */}
        <div className="text-center group space-y-6">
          <div className="inline-block p-3 rounded-full border border-white/20 hover:border-white/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 cursor-pointer">
            <HiOutlineChevronRight size={20} className="text-white transition-transform duration-300 group-hover:scale-125" />
          </div>
          <h1 className="text-3xl md:text-4xl font-thin tracking-wider hover:tracking-widest transition-all duration-700 cursor-default">
            My Skills
          </h1>
          <div className="w-24 h-px bg-white mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
        </div>

        {/* Skill Categories */}
        <div className="w-full grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group border border-white/10 hover:border-white/30 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-white/5 cursor-pointer transform hover:scale-[1.01] hover:-translate-y-1">
              <h2 className="text-xl font-thin tracking-wide mb-4">{category.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-white/70 group-hover:text-white/90 transition-colors duration-300">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="hover:text-white transition-colors duration-200 cursor-default">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
      </section>
    </main>
  );
}
