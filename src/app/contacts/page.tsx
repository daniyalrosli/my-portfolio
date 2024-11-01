import Navbar from '../components/navbar';

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="py-20">
        <h2 className="text-3xl mb-4">Contact Me</h2>
        <form className="space-y-4">
          <input type="text" className="w-full p-2 bg-gray-800 text-white" placeholder="Your Name" />
          <input type="email" className="w-full p-2 bg-gray-800 text-white" placeholder="Your Email" />
          <textarea className="w-full p-2 bg-gray-800 text-white" rows={4} placeholder="Your Message"></textarea>
          <button type="submit" className="p-2 bg-gray-600">Send Message</button>
        </form>
      </section>
    </main>
  );
}