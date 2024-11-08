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
            <h3 className="text-2xl font-bold mb-2">HeartCare: Predictive Analytics for Early Detection and Prevention (Final Year Project)</h3>
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
              href="https://github.com/daniyalrosli/Final-Year-Project" // Replace with your project link
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
              href="https://github.com/daniyalrosli/Suicidal-Tweet-Detection-on-X" // Replace with your project link
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
              href="https://app.powerbi.com/groups/f1fb6dab-282e-4f03-ae22-2ccef7441ddb/reports/b58c525e-7b5d-4a66-bf90-0c8bbdeabbf8?ctid=cdcbb0e2-9fea-4f54-8670-672707797ada&pbi_source=linkShare&bookmarkGuid=cb8da368-55f5-4a95-9e5e-40eda0066448" // Replace with your project link
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>


          {/* SentimentAnalysisof
RedditUsers’Opinions
ontheIsrael-Palestine
Conflict */}
          <div className="p-6 border border-gray-600 rounded-lg bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg">
            
            <h3 className="text-2xl font-bold mb-2">Sentiment Analysis of
Reddit Users’ Opinions
on the Israel-Palestine
 Conflict</h3>
            <p className="mb-4">
            Redditors Opinion on Israel-Palestine Conflict project explores

and analyzes the sentiments of Reddit users regarding the Israel-
Palestine conflict. It aims to provide insights into public perception and

sentiment on this complex geopolitical issue through social media data.
            </p>
            <h4 className="font-semibold">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-blue-600 text-xs text-white rounded-full px-3 py-1">Exploratory Data Analysis (EDA)</span>
              <span className="inline-block bg-green-600 text-xs text-white rounded-full px-3 py-1">Python</span>
              <span className="inline-block bg-red-600 text-xs text-white rounded-full px-3 py-1">Natural Languange Processing</span>
               <span className="inline-block bg-red-600 text-xs text-white rounded-full px-3 py-1">Rapid Miner</span>

            </div>
            <a 
              href="https://drive.google.com/file/d/1MXGckPvos-ILC72FxCWcDN1MVba8GZpx/view?usp=sharing" // Replace with your project link
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