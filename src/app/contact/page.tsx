"use client";
import Navbar from "../components/navbar";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub size={20} />,
    url: "https://github.com/daniyalrosli",
    name: "github",
  },
  {
    icon: <FaLinkedin size={20} />,
    url: "https://www.linkedin.com/in/daniyal-rosli-4384731b0/",
    name: "linkedin",
  },
  {
    icon: <FaInstagram size={20} />,
    url: "https://www.instagram.com/daniyalrsli_/",
    name: "instagram",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20 px-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white mb-4">
          contact
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-12">
          feel free to reach out.
        </p>

        {/* Social Links */}
        <div className="space-y-4">
          {socialLinks.map(({ icon, url, name }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
            >
              {icon}
              <span className="text-sm">{name}</span>
              <span className="text-gray-400 dark:text-gray-600 ml-auto">→</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
