"use client";
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Inter, Poppins } from 'next/font/google';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

// Font configuration
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ loading: true, submitted: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ loading: false, submitted: true });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ loading: false, submitted: false });
      }, 5000);
    }, 1500);
  };
  
  return (
    <main className={`bg-gradient-to-br from-gray-950 to-gray-900 text-white min-h-screen ${inter.variable} ${poppins.variable} font-inter`}>
      <Navbar />
      
      <motion.section 
        className="py-20 px-6 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="text-center mb-12">
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold font-poppins mb-4 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Contact Me
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 max-w-xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            className="md:col-span-2 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300"
              variants={fadeIn}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <FaEnvelope className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold font-poppins text-lg text-gray-100">Email</h3>
                  <p className="text-gray-400 mt-1">Feel free to email me anytime</p>
                  <a 
                    href="mailto:daniyalrosli@gmail.com" 
                    className="block mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    daniyalrosli@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300"
              variants={fadeIn}
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold font-poppins text-lg text-gray-100">Location</h3>
                  <p className="text-gray-400 mt-1">Based in</p>
                  <p className="text-gray-300 mt-2">
                   Penang,Malaysia
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300"
              variants={fadeIn}
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <FaPhone className="text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold font-poppins text-lg text-gray-100">Best Way to Reach Me</h3>
                  <p className="text-gray-400 mt-1">Preferred contact method</p>
                  <p className="text-gray-300 mt-2">
                    Email or LinkedIn message
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="md:col-span-3 bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {formStatus.submitted ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
                  <FaPaperPlane className="text-green-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold font-poppins mb-3">Message Sent!</h3>
                <p className="text-gray-300">Thanks for reaching out. I&#39;ll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800/80 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800/80 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-800/80 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                    rows={5} 
                    placeholder="Hi Daniyal, I'd like to talk about..." 
                    required 
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transform transition duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/20 disabled:opacity-70"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}