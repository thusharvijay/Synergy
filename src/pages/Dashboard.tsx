import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight, RefreshCcw, AlertCircle, CheckCircle, DollarSign, Activity, Zap } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  circulating_supply: number;
}

const CRYPTO_API = 'https://api.coingecko.com/api/v3';

const Dashboard = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const rotateX = useTransform(mouseY, [0, window.innerHeight], [5, -5]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-5, 5]);

  const { data: cryptocurrencies, isLoading, refetch } = useQuery({
    queryKey: ['cryptocurrencies'],
    queryFn: async () => {
      const response = await axios.get(`${CRYPTO_API}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 50,
          sparkline: false
        }
      });
      return response.data as Cryptocurrency[];
    }
  });

  const { data: chartData } = useQuery({
    queryKey: ['crypto-chart', selectedCrypto],
    queryFn: async () => {
      if (!selectedCrypto) return null;
      const response = await axios.get(`${CRYPTO_API}/coins/${selectedCrypto}/market_chart`, {
        params: {
          vs_currency: 'usd',
          days: 7,
          interval: 'daily'
        }
      });
      return response.data.prices.map(([timestamp, price]: [number, number]) => ({
        date: new Date(timestamp).toLocaleDateString(),
        price,
        volume: Math.random() * 1000000, // Simulated volume data
        volatility: Math.random() * 100 // Simulated volatility data
      }));
    },
    enabled: !!selectedCrypto
  });

  const selectedCryptoData = cryptocurrencies?.find(crypto => crypto.id === selectedCrypto);

  const getRecommendation = (crypto: Cryptocurrency) => {
    const volatility = Math.abs(crypto.price_change_percentage_24h);
    const volume = crypto.total_volume;
    const marketCap = crypto.market_cap;
    
    if (volatility > 10) {
      return {
        type: 'high_risk',
        message: 'High volatility - Trade with caution',
        color: 'text-yellow-500',
        gradient: 'from-yellow-500/20 to-transparent'
      };
    } else if (volume > 1000000000 && marketCap > 10000000000) {
      return {
        type: 'strong_buy',
        message: 'Strong fundamentals - Consider buying',
        color: 'text-green-500',
        gradient: 'from-green-500/20 to-transparent'
      };
    } else {
      return {
        type: 'neutral',
        message: 'Monitor market conditions',
        color: 'text-blue-400',
        gradient: 'from-blue-500/20 to-transparent'
      };
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pt-16" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <motion.h1 
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Cryptocurrency Dashboard
            </motion.h1>
            <motion.button 
              className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700 px-4 py-2 rounded-lg transition-all border border-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => refetch()}
            >
              <RefreshCcw className="h-4 w-4" />
              Refresh
            </motion.button>
          </div>

          <motion.div 
            className="mb-8 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg overflow-x-auto border border-gray-700"
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000
            }}
          >
            <div className="flex space-x-2">
              {isLoading ? (
                Array(10).fill(null).map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="h-10 w-32 bg-gray-700/50 rounded"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))
              ) : (
                cryptocurrencies?.map((crypto) => (
                  <motion.button
                    key={crypto.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap backdrop-blur-sm ${
                      selectedCrypto === crypto.id 
                        ? 'bg-blue-500/80 shadow-lg shadow-blue-500/20' 
                        : 'bg-gray-700/50 hover:bg-gray-600/50'
                    }`}
                    onClick={() => setSelectedCrypto(crypto.id)}
                  >
                    <span>{crypto.symbol.toUpperCase()}</span>
                    <motion.span 
                      className={crypto.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}
                      animate={{
                        opacity: [0.5, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </motion.span>
                  </motion.button>
                ))
              )}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {selectedCryptoData && (
              <motion.div
                key={selectedCryptoData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                  <StatCard
                    title="Current Price"
                    value={`$${selectedCryptoData.current_price.toLocaleString()}`}
                    change={`${selectedCryptoData.price_change_percentage_24h.toFixed(2)}%`}
                    isPositive={selectedCryptoData.price_change_percentage_24h > 0}
                    icon={<DollarSign className="h-6 w-6" />}
                  />
                  <StatCard
                    title="24h High"
                    value={`$${selectedCryptoData.high_24h.toLocaleString()}`}
                    change="24h High"
                    isPositive={true}
                    icon={<TrendingUp className="h-6 w-6" />}
                  />
                  <StatCard
                    title="24h Low"
                    value={`$${selectedCryptoData.low_24h.toLocaleString()}`}
                    change="24h Low"
                    isPositive={false}
                    icon={<Activity className="h-6 w-6" />}
                  />
                  <StatCard
                    title="Market Cap"
                    value={`$${(selectedCryptoData.market_cap / 1e9).toFixed(2)}B`}
                    change="Market Cap"
                    isPositive={true}
                    icon={<Wallet className="h-6 w-6" />}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-blue-400" />
                      Market Analysis
                    </h2>
                    <div className="h-[400px]">
                      {selectedCrypto && chartData ? (
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={chartData}>
                            <defs>
                              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="date" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: '#1F2937',
                                border: '1px solid #374151',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                              }}
                            />
                            <Area
                              type="monotone"
                              dataKey="price"
                              stroke="#0EA5E9"
                              strokeWidth={2}
                              fill="url(#colorPrice)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="h-full flex items-center justify-center text-gray-400">
                          Select a cryptocurrency to view its chart
                        </div>
                      )}
                    </div>
                  </div>

                  <motion.div 
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
                    style={{
                      rotateX,
                      rotateY,
                      transformPerspective: 1000
                    }}
                  >
                    <h2 className="text-xl font-semibold mb-4">Trading Insights</h2>
                    <div className="space-y-6">
                      <motion.div 
                        className={`p-4 rounded-lg bg-gradient-to-b ${getRecommendation(selectedCryptoData).gradient}`}
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <h3 className="text-lg font-semibold mb-2">AI Recommendation</h3>
                        <div className={`flex items-center gap-2 ${getRecommendation(selectedCryptoData).color}`}>
                          {getRecommendation(selectedCryptoData).type === 'strong_buy' ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <AlertCircle className="h-5 w-5" />
                          )}
                          <span>{getRecommendation(selectedCryptoData).message}</span>
                        </div>
                      </motion.div>

                      <div className="space-y-4">
                        <motion.div 
                          className="p-4 rounded-lg bg-gray-700/50"
                          whileHover={{ scale: 1.02 }}
                        >
                          <h4 className="text-sm text-gray-400">Volume (24h)</h4>
                          <p className="text-lg font-semibold">${selectedCryptoData.total_volume.toLocaleString()}</p>
                        </motion.div>
                        <motion.div 
                          className="p-4 rounded-lg bg-gray-700/50"
                          whileHover={{ scale: 1.02 }}
                        >
                          <h4 className="text-sm text-gray-400">Circulating Supply</h4>
                          <p className="text-lg font-semibold">
                            {selectedCryptoData.circulating_supply.toLocaleString()} {selectedCryptoData.symbol.toUpperCase()}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

const StatCard = ({ 
  title, 
  value, 
  change, 
  isPositive, 
  icon
}: {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 relative overflow-hidden group"
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
      initial={false}
      animate={{ scale: [0.95, 1.05], rotate: [0, 360] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <div className="flex items-start justify-between relative">
      <div>
        <p className="text-gray-400">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
      <motion.div 
        className="p-2 bg-gray-700/50 rounded-lg"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
    </div>
    <div className="flex items-center mt-4 relative">
      {typeof isPositive === 'boolean' && (
        isPositive ? (
          <ArrowUpRight className="h-4 w-4 text-green-400" />
        ) : (
          <ArrowDownRight className="h-4 w-4 text-red-400" />
        )
      )}
      <span className={`ml-1 ${
        typeof isPositive === 'boolean'
          ? isPositive ? 'text-green-400' : 'text-red-400'
          : 'text-gray-400'
      }`}>
        {change}
      </span>
    </div>
  </motion.div>
);

export default Dashboard;