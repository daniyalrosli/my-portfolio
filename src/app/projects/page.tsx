import Navbar from '../components/navbar';

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="py-20">
        <h2 className="text-3xl mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-600 rounded">
            <h3 className="text-2xl">Project 1</h3>
            <p>Details about the project...</p>
          </div>
          <div className="p-4 border border-gray-600 rounded">
            <h3 className="text-2xl">Project 2</h3>
            <p>Details about the project...</p>
          </div>
        </div>
      </section>
    </main>
  );
}