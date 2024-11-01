import Navbar from '../components/navbar';

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="flex items-center justify-center h-screen p-8">
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg mb-4">
            A final-year Intelligent Systems Engineering student with a strong passion for data analysis, machine learning, and data engineering. 
            I enjoy exploring complex datasets to uncover meaningful insights and drive decision-making.
          </p>
          <p className="text-lg mb-4">
            Alongside my primary focus on data, I have a budding interest in web development, which allows me to create interactive applications that enhance user experience.
          </p>
          <p className="text-lg mb-4">
            My academic journey has equipped me with a solid foundation in programming, algorithms, and statistical modeling, enabling me to tackle real-world problems with innovative solutions.
          </p>
        </div>
      </section>
    </main>
  );
}