import Navbar from './components/navbar';

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="h-screen flex flex-col justify-center pl-5"> {/* Left aligned */}
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Daniyal Rosli</h1>
        <p className="text-5xl font-bold mb-4">I’m a student, learner &</p>
        <p className="text-5xl font-bold mb-4">data enthusiast</p>
      </section>
    </main>
  );
}