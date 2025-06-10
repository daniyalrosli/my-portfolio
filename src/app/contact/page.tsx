"use client";
import Navbar from "../components/navbar";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub size={28} />,
    url: "https://github.com/daniyalrosli",
    name: "GitHub",
  },
  {
    icon: <FaLinkedin size={28} />,
    url: "https://www.linkedin.com/in/daniyal-rosli-4384731b0/",
    name: "LinkedIn",
  },
  {
    icon: <FaInstagram size={28} />,
    url: "https://www.instagram.com/daniyalrsli_/",
    name: "Instagram",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
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

      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-16 relative z-10 max-w-4xl mx-auto space-y-12">
        <div className="text-center group space-y-6">
          <div className="inline-block p-3 rounded-full border border-white/20 hover:border-white/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 cursor-pointer">
            <FaEnvelope
              size={20}
              className="text-white transition-transform duration-300 group-hover:scale-125"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-thin tracking-wider hover:tracking-widest transition-all duration-700 cursor-default">
            Contact Me
          </h1>
          <div className="w-24 h-px bg-white mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-12">
          {socialLinks.map(({ icon, url, name }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              {icon}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
