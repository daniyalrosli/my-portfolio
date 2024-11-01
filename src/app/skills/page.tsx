import Navbar from '../components/navbar';

export default function SkillsPage() {
  const skills = [
    'Data Analysis',
    'Machine Learning',
    'Data Engineering',
    'Web Development',
    'Python',
    'JavaScript',
    'SQL',
    
    // Add more skills as needed
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="flex items-center justify-center h-screen">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
          <div className="grid grid-cols-1 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600">
                <h3 className="text-xl font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}