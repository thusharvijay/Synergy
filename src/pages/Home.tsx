import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, TrendingUp, MessageCircle, Newspaper, Users, Upload, Receipt, CreditCard } from 'lucide-react';
import HolographicCube from '../components/HolographicCube';

const Home = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showExpenseModal, setShowExpenseModal] = useState(false);

  // Fetch financial news
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // You would replace this with your actual API call
        // Example using a placeholder API
        const response = await fetch('https://api.example.com/financial-news');
        const data = await response.json();
        setNews(data.articles?.slice(0, 3) || []);
      } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback news in case API fails
        setNews([
          {
            id: 1,
            title: 'Federal Reserve Announces New Interest Rate Policy',
            source: 'Financial Times',
            date: 'March 8, 2025',
            url: '#'
          },
          {
            id: 2,
            title: 'Tech Stocks Rally as Quantum Computing Breakthrough Announced',
            source: 'Bloomberg',
            date: 'March 7, 2025',
            url: '#'
          },
          {
            id: 3,
            title: 'Global Markets Respond to New Trade Agreement',
            source: 'CNBC',
            date: 'March 6, 2025',
            url: '#'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const redirectToUpstocks = () => {
    window.open('https://upstocks.com/account/demat', '_blank');
  };

  // New function to handle expense tracker modal
  const toggleExpenseModal = () => {
    setShowExpenseModal(!showExpenseModal);
  };

  // Function to navigate to manual expense entry
  const goToManualExpenseEntry = () => {
    navigate('/expenses/manual');
    setShowExpenseModal(false);
  };

  // Function to handle bill upload
  const handleBillUpload = () => {
    navigate('/expenses/upload');
    setShowExpenseModal(false);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">FINOVA</span>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => navigate('/contact')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  Contact Us
                </span>
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Launch App
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mb-2 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-400 text-sm border border-blue-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                Next Generation Financial Assistant
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-7xl font-bold mb-6 leading-tight text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                The Future of{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  Decentralized Finance
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Secure, transparent, and efficient financial services powered by quantum-resistant blockchain technology
              </motion.p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  onClick={() => navigate('/dashboard')}
                >
                  <span className="flex items-center justify-center text-lg font-semibold">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-green-500 text-green-400 px-8 py-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  onClick={toggleExpenseModal}
                >
                  <span className="flex items-center justify-center text-lg font-semibold">
                    <Receipt className="mr-2 h-5 w-5" />
                    Expense Tracker
                  </span>
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <HolographicCube />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expense Tracker Modal */}
      {showExpenseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={toggleExpenseModal}></div>
          <motion.div 
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-full max-w-lg z-10 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Expense Tracker</h3>
            <p className="text-gray-300 mb-6">
              Track your expenses easily and manage your finances. All payments made through FINOVA will be automatically recorded in your expense tracker.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button
                onClick={handleBillUpload}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <Upload className="h-8 w-8 mb-2 mx-auto" />
                <h4 className="text-lg font-semibold mb-1">Upload Bill</h4>
                <p className="text-sm text-gray-200">Scan your receipt or upload a photo of your bill</p>
              </button>
              
              <button
                onClick={goToManualExpenseEntry}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all"
              >
                <Receipt className="h-8 w-8 mb-2 mx-auto" />
                <h4 className="text-lg font-semibold mb-1">Manual Entry</h4>
                <p className="text-sm text-gray-200">Manually input your expense details</p>
              </button>
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <div className="flex items-center text-cyan-400 mb-4">
                <CreditCard className="h-5 w-5 mr-2" />
                <span className="font-medium">FINOVA Payments Integration</span>
              </div>
              <p className="text-gray-400 text-sm">
                All payments made through FINOVA will be automatically recorded in your expense tracker, saving you time and ensuring accurate financial records.
              </p>
            </div>
            
            <button 
              onClick={toggleExpenseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}

      {/* Financial News Section */}
      <div className="relative bg-gray-900/80 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-cyan-900/30 text-cyan-400 text-lg border border-cyan-800">
              <Newspaper className="mr-2 h-5 w-5" />
              Financial Market Updates
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Latest Financial News</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the most recent updates and trends in the financial markets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {loading ? (
              // Loading skeleton
              Array(3).fill().map((_, i) => (
                <div key={i} className="bg-gray-800/50 animate-pulse rounded-xl overflow-hidden">
                  <div className="h-48 bg-gray-700/50"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-700/50 rounded w-3/4"></div>
                    <div className="h-10 bg-gray-700/50 rounded"></div>
                    <div className="h-4 bg-gray-700/50 rounded w-1/2"></div>
                  </div>
                </div>
              ))
            ) : (
              // News cards
              news.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.id * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
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
                    <h3 className="text-xl font-semibold text-white mb-4 line-clamp-2">
                      {item.title}
                    </h3>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-950/30"
              onClick={() => navigate('/news')}
            >
              View All Financial News
            </motion.button>
          </div>
        </div>
      </div>

      {/* Trading Section */}
      <div className="relative bg-gray-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Trading?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Begin your investment journey today with our partner Upstocks. Create a demat account in minutes and access a world of financial opportunities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-xl"
              onClick={redirectToUpstocks}
            >
              <span className="flex items-center justify-center text-lg font-semibold">
                Create Demat Account <TrendingUp className="ml-2 h-5 w-5" />
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">How to Create a Demat Account</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-800/70 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">1</div>
                    <h4 className="text-xl font-semibold text-white">Complete KYC Verification</h4>
                  </div>
                  <p className="text-gray-300">
                    Prepare your identity and address proof documents (Aadhar, PAN, etc.). The KYC process is completely online and takes just a few minutes to complete.
                  </p>
                </div>

                <div className="bg-gray-800/70 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">2</div>
                    <h4 className="text-xl font-semibold text-white">Sign Digital Agreement</h4>
                  </div>
                  <p className="text-gray-300">
                    After KYC verification, you'll need to sign the digital account opening form and agreement. This can be done with a digital signature or OTP.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800/70 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">3</div>
                    <h4 className="text-xl font-semibold text-white">Fund Your Account</h4>
                  </div>
                  <p className="text-gray-300">
                    Once your account is created, you can add funds through UPI, NEFT, RTGS, or net banking. The minimum investment amount varies based on your chosen plan.
                  </p>
                </div>

                <div className="bg-gray-800/70 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">4</div>
                    <h4 className="text-xl font-semibold text-white">Start Investing</h4>
                  </div>
                  <p className="text-gray-300">
                    After funding, you can immediately start investing in stocks, mutual funds, bonds, and other financial instruments through your new demat account.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 text-blue-400 text-lg border border-blue-800">
                <MessageCircle className="mr-2 h-5 w-5" />
                Have questions? Our AI chatbot can answer all your demat account queries.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer with Contact Us link */}
      <footer className="bg-gray-900/70 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-bold text-white">FINOVA</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Dashboard
              </button>
              <button 
                onClick={() => navigate('/news')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Financial News
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} FINOVA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;