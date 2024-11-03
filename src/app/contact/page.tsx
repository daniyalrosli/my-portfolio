import Navbar from '../components/navbar';

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="py-20 px-5">
        <h2 className="text-3xl mb-6 text-center">Contact Me</h2>
        <p className="mb-8 text-center text-gray-300">
          Have a question or want to say hi? Feel free to drop me a message!
        </p>
        <form className="space-y-4 max-w-md mx-auto">
          <input 
            type="text" 
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            placeholder="Your Name" 
            required 
          />
          <input 
            type="email" 
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            placeholder="Your Email" 
            required 
          />
          <textarea 
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            rows={4} 
            placeholder="Your Message" 
            required 
          ></textarea>
          <button 
            type="submit" 
            className="w-full p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded hover:bg-gradient-to-l transition duration-300">
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-400">Or you can reach me directly at:</p>
          <a 
            href="mailto:your-email@example.com" 
            className="text-indigo-400 hover:text-indigo-300 transition duration-300">
           daniyalrosli@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}