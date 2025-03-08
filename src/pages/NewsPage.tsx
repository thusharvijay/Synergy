import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Shield, RefreshCw } from 'lucide-react';

const NewsPage = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace with your actual API implementation
        // For example, you might use:
        // - Alpha Vantage News API
        // - Financial Modeling Prep API
        // - Polygon.io
        // - MarketStack
        
        // const apiKey = 'your_api_key';
        // const response = await fetch(`https://financialnewsapi.com/api/v1/news?apikey=${apiKey}`);
        // const data = await response.json();
        // setNews(data.articles || []);
        
        // Fallback dummy data
        setTimeout(() => {
          setNews([
            {
              id: 1,
              title: 'Federal Reserve Announces New Interest Rate Policy',
              source: 'Financial Times',
              date: 'March 8, 2025',
              summary: 'The Federal Reserve announced a significant shift in its interest rate policy today, aiming to address growing concerns about inflation while supporting economic growth.',
              url: '#'
            },
            {
              id: 2,
              title: 'Tech Stocks Rally as Quantum Computing Breakthrough Announced',
              source: 'Bloomberg',
              date: 'March 7, 2025',
              summary: 'Major technology stocks saw significant gains following the announcement of a breakthrough in quantum computing that could revolutionize the industry.',
              url: '#'
            },
            {
              id: 3,
              title: 'Global Markets Respond to New Trade Agreement',
              source: 'CNBC',
              date: 'March 6, 2025',
              summary: 'Markets worldwide showed positive movement in response to a new international trade agreement aimed at reducing tariffs and promoting economic cooperation.',
              url: '#'
            },
            {
              id: 4,
              title: 'Cryptocurrency Adoption Reaches New Milestone',
              source: 'CoinDesk',
              date: 'March 5, 2025',
              summary: 'A record number of institutional investors have added cryptocurrency to their portfolios, signaling growing mainstream acceptance of digital assets.',
              url: '#'
            },
            {
              id: 5,
              title: 'Sustainable Investment Funds Set New Record',
              source: 'Reuters',
              date: 'March 4, 2025',
              summary: 'ESG-focused investment funds have reached an all-time high in total assets under management, reflecting increased investor interest in sustainable finance.',
              url: '#'
            },
            {
              id: 6,
              title: 'Major Bank Announces Blockchain-Based Payment System',
              source: 'Wall Street Journal',
              date: 'March 3, 2025',
              summary: 'One of the world\'s largest banks has unveiled a new payment system built on blockchain technology, promising faster and more secure transactions.',
              url: '#'
            }
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
        // Set some fallback news
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">FINOVA</span>
            </div>
            <button 
              onClick={() => navigate('/')}
              className="text-gray-300 hover:text-white flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            Financial News
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay informed with the latest updates from global financial markets
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center my-20">
            <RefreshCw className="h-12 w-12 text-blue-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="h-48 bg-gray-700/50 relative overflow-hidden">
                  <img 
                    src={`/api/placeholder/500/300?text=Financial+News`} 
                    alt="News thumbnail" 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                    <span>{item.source}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {item.summary}
                  </p>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    Read Full Article <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;