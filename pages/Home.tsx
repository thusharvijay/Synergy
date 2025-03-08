import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Lock, ArrowRight, ChevronDown, Globe, Database, Cpu } from 'lucide-react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  
  // For parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }
    }));
  }, [controls]);

  return (
    <div className="min-h-screen bg-black overflow-hidden" ref={containerRef}>
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

      {/* 3D Background with Three.js */}
      <ThreeBackground />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          {/* Digital Circuit Lines */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-blue-500 to-purple-500"
                style={{
                  width: `${Math.random() * 30 + 10}%`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 70}%`,
                  opacity: 0.4 + Math.random() * 0.6,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  width: [`${Math.random() * 20 + 10}%`, `${Math.random() * 40 + 20}%`, `${Math.random() * 20 + 10}%`],
                }}
                transition={{
                  duration: 3 + Math.random() * 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 relative z-10">
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
                <span className="relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                    Decentralized
                  </span>
                  <motion.span 
                    className="absolute -inset-1 block rounded-lg opacity-30 blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </span>
                <br/>
                <span className="relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                    Finance
                  </span>
                  <motion.span 
                    className="absolute -inset-1 block rounded-lg opacity-30 blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  />
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
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 rounded-xl overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  onClick={() => navigate('/dashboard')}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity bg-white"></span>
                  <span className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse opacity-30 blur group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center justify-center text-white font-semibold text-lg">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  onClick={() => navigate('/login')}
                >
                  <span className="absolute inset-0 border border-blue-500 rounded-xl opacity-50"></span>
                  <span className="relative text-blue-400 font-semibold text-lg flex items-center justify-center">
                    Learn More
                  </span>
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative z-10 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <HolographicCube />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="h-10 w-10 text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="relative py-32 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(25, 35, 90, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
            y: scrollY * 0.2
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex mb-3 items-center justify-center">
              <div className="h-px w-8 bg-blue-500 opacity-50"></div>
              <span className="px-4 text-blue-400 text-sm font-medium">ADVANCED TECHNOLOGY</span>
              <div className="h-px w-8 bg-blue-500 opacity-50"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Blockchain Redefined
              </span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Cpu className="h-8 w-8 text-blue-400" />}
              title="Zero-Knowledge Proofs"
              description="Enhanced privacy and security using advanced cryptographic techniques that protect your transaction data"
              index={0}
              imgSrc="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=500&q=60"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-blue-400" />}
              title="Quantum-Resistant Cryptography"
              description="Future-proof your assets with algorithms designed to withstand quantum computing attacks"
              index={1}
              imgSrc="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=500&q=60"
            />
            <FeatureCard
              icon={<Database className="h-8 w-8 text-blue-400" />}
              title="Smart Contract Insurance"
              description="Automated protection against contract vulnerabilities with AI-backed security audits"
              index={2}
              imgSrc="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 md:p-12 shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <StatItem value="$3.2B+" label="Total Value Locked" />
              <StatItem value="350K+" label="Active Users" />
              <StatItem value="25M+" label="Transactions" />
              <StatItem value="0.001%" label="Transaction Fee" />
            </div>
            
            <motion.div 
              className="w-full h-40 mt-12 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <GraphAnimation />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Token Section */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex mb-3 items-center">
                <div className="h-px w-8 bg-blue-500 opacity-50"></div>
                <span className="px-4 text-blue-400 text-sm font-medium">INNOVATION</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Join Our Ecosystem
              </h2>
              <p className="text-gray-300 mb-8">
                Our native token powers the entire ecosystem, enabling governance voting, staking rewards, and reduced transaction fees for holders.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800">
                  <p className="text-blue-400 text-sm mb-1">Staking APY</p>
                  <p className="text-3xl font-bold text-white">12.5%</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800">
                  <p className="text-blue-400 text-sm mb-1">Total Supply</p>
                  <p className="text-3xl font-bold text-white">100M</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl text-lg font-semibold flex items-center justify-center"
                onClick={() => navigate('/dashboard')}
              >
                <Globe className="mr-2 h-5 w-5" /> View Tokenomics
              </motion.button>
            </motion.div>
            
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <TokenModel />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3D Elements and Animation Components
const ThreeBackground = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Three.js scene setup
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    // Create grid of particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.5
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 3;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={containerRef} className="fixed inset-0 z-0" />;
};

const HolographicCube = () => {
  return (
    <div className="relative w-80 h-80">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="relative w-full h-full flex items-center justify-center"
        animate={{ 
          rotateY: 360, 
          rotateX: 15,
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear" 
        }}
      >
        <div className="w-48 h-48 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=300&h=300&q=80"
              alt="3D Crypto Model" 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          
          {/* Holographic scanlines */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full bg-blue-400 opacity-20"
              style={{ top: `${i * 10}%` }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          
          {/* Floating data points */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const TokenModel = () => {
  return (
    <div className="relative w-64 h-64">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="relative w-full h-full flex items-center justify-center"
        animate={{ 
          rotateY: 360,
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "linear" 
        }}
      >
        <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
          <div className="w-36 h-36 rounded-full bg-gray-900 flex items-center justify-center">
            <motion.div 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              DFIN
            </motion.div>
          </div>
        </div>
        
        {/* Orbiting particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-blue-400"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            style={{
              transformOrigin: "center center",
              width: "120%",
              height: "120%",
              left: "-10%",
              top: "-10%",
            }}
          >
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ 
                left: `${i * 30}%`,
                boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.5)" 
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, index, imgSrc }) => {
  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 40px -20px rgba(59, 130, 246, 0.3)",
      }}
      className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        
        <motion.div
          className="absolute bottom-0 left-0 w-full p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.3 + 0.2 }}
        >
          <div className="flex items-center space-x-3">
            <div className="bg-blue-900/50 backdrop-blur-sm p-2 rounded-lg">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-400">{description}</p>
        
        <motion.div
          className="mt-6 flex justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.3 + 0.4 }}
        >
          <div className="text-blue-400 text-sm font-medium">Learn more</div>
          <div className="w-8 h-px bg-blue-500"></div>
          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center">
            <ArrowRight className="h-4 w-4 text-blue-400" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const StatItem = ({ value, label }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
      >
        {value}
      </motion.div>
      <p className="text-gray-400 mt-1">{label}</p>
    </motion.div>
  );
};

const GraphAnimation = () => {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gray-900/50"></div>
      
      {/* Graph lines */}
      <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 800 200">
        <motion.path
          d="M0,100 C100,90 200,140 300,110 C400,80 500,120 600,100 C700,80 800,70 800,70"
          fill="none"
          stroke="url(#blue-gradient)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <motion.path
          d="M0,120 C100,110 200,130 300,140 C400,150 500,110 600,130 C700,150 800,120 800,120"
          fill="none"
          stroke="url(#purple-gradient)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        
        <defs>
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Data points */}
      {[...Array(5)].map(( _, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-blue-500"
          style={{
            bottom: `${30 + Math.random() * 40}%`,
            left: `${i * 20 + 5}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 + 0.5 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-400"
            animate={{ 
              scale: [1, 1.8, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        </motion.div>
      ))}
      
      {/* Grid lines */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className="absolute w-full h-px bg-gray-700/30" 
          style={{ top: `${20 + i * 20}%` }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <div 
          key={i} 
          className="absolute h-full w-px bg-gray-700/30" 
          style={{ left: `${10 + i * 10}%` }}
        />
      ))}
    </div>
  );
};

export default Home;