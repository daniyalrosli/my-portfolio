"use client";

import Navbar from '../components/navbar';

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="flex items-center justify-center h-screen p-8">
        <div className="max-w-2xl w-full">
          {/* Heading with animated underline */}
          <h2 className="text-4xl font-extrabold mb-8 text-center relative text-gradient">
            About Me
            <span className="block h-1 w-20 bg-white mt-2 mx-auto animate-pulse"></span>
          </h2>

          {/* Paragraphs with enhanced styling */}
          <p className="text-lg mb-6 opacity-0 animate-fadeIn transition-all duration-1000 delay-150">
            A final-year Intelligent Systems Engineering student with a strong passion for data analysis, machine learning, and data engineering.
            I enjoy exploring complex datasets to uncover meaningful insights and drive decision-making.
          </p>

          <p className="text-lg mb-6 opacity-0 animate-fadeIn transition-all duration-1000 delay-300 hover:text-gray-300">
            Alongside my primary focus on data, I have a budding interest in web development, which allows me to create interactive applications that enhance user experience.
          </p>

          <p className="text-lg mb-6 opacity-0 animate-fadeIn transition-all duration-1000 delay-450 transform transition-all duration-300 ease-in-out hover:scale-105 hover:text-gray-300">
            My academic journey has equipped me with a solid foundation in programming, algorithms, and statistical modeling, enabling me to tackle real-world problems with innovative solutions.
          </p>

          {/* Call to action button */}
          <div className="flex justify-center mt-8">
            <a 
              href="#"
              className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 px-6 rounded-md hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Fade-in animation keyframes */}
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
        .text-gradient {
          background: linear-gradient(to right, #6ee7b7, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </main>
  );
}