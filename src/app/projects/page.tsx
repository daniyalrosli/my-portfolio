import Navbar from '../components/navbar';

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="py-20 px-5">
        <h2 className="text-3xl mb-8 text-center font-extrabold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Heartcare Project */}
          <div className="p-6 border border-gray-600 rounded-lg bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Heartcare</h3>
            <p className="mb-4">
              A web-based application designed to monitor heart health and provide users with insights based on their
              heart rate data. It utilizes machine learning algorithms to predict potential heart-related issues and
              offers recommendations for lifestyle improvements.
            </p>
            <h4 className="font-semibold">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-blue-600 text-xs text-white rounded-full px-3 py-1">Next.js</span>
              <span className="inline-block bg-green-600 text-xs text-white rounded-full px-3 py-1">Django</span>
              <span className="inline-block bg-purple-600 text-xs text-white rounded-full px-3 py-1">Machine Learning</span>
              <span className="inline-block bg-red-600 text-xs text-white rounded-full px-3 py-1">Jupyter Notebook</span>
            </div>
            <a 
              href="https://github.com/your-username/heartcare" // Replace with your project link
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>

          {/* Suicidal Tweet Detection Project */}
          <div className="p-6 border border-gray-600 rounded-lg bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Suicidal Tweet Detection</h3>
            <p className="mb-4">
              An AI-driven project that analyzes tweets to identify potential suicidal sentiments. It uses natural
              language processing and machine learning techniques to classify tweets and provide insights for mental
              health awareness.
            </p>
            <h4 className="font-semibold">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-blue-600 text-xs text-white rounded-full px-3 py-1">Python</span>
              <span className="inline-block bg-green-600 text-xs text-white rounded-full px-3 py-1">Flask</span>
              <span className="inline-block bg-red-600 text-xs text-white rounded-full px-3 py-1">NLTK</span>
            </div>
            <a 
              href="https://github.com/your-username/suicidal-tweet-detection" // Replace with your project link
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>

       

          {/* MyPredictC Project */}
          <div className="p-6 border border-gray-600 rounded-lg bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">MyPredictC - Analyzing COVID-19 Clusters in Malaysia (2020-2023)</h3>
            <p className="mb-4">
              An analytical tool focused on identifying and analyzing COVID-19 clusters across Malaysia from 2020 to 2023.
              It utilizes various data sources and statistical methods to visualize the spread and impact of the pandemic,
              providing insights for policymakers and the public.
            </p>
            <h4 className="font-semibold">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-blue-600 text-xs text-white rounded-full px-3 py-1">Microsoft Power BI</span>
              <span className="inline-block bg-green-600 text-xs text-white rounded-full px-3 py-1">Data Analysis</span>
             
            </div>
            <a 
              href="https://github.com/your-username/mypredictc" // Replace with your project link
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}