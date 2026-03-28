/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Smartphone, 
  Apple, 
  ChevronRight,
  Shield,
  Zap,
  Lock,
  Star,
  Heart,
  Share2,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  Sparkles
} from 'lucide-react';

type Page = 'home' | 'features' | 'about' | 'support';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleAndroidDownload = () => {
    setIsDownloading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Actual download
        const link = document.createElement('a');
        link.href = '/Cubbit.apk';
        link.download = 'Cubbit.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
          setIsDownloading(false);
          setDownloadProgress(0);
        }, 1000);
      }
      setDownloadProgress(progress);
    }, 200);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
    { id: 'support', label: 'Support' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8">
              <Sparkles className="w-4 h-4" />
              New Version 1.0.4 is here!
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              CUBBIT <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">EVERYWHERE</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              The most colorful social experience is now in your pocket. 
              Join millions of users sharing their world.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAndroidDownload}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-5 rounded-3xl flex items-center justify-center gap-4 shadow-2xl shadow-blue-500/20 group relative overflow-hidden"
              >
                <Smartphone className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Get it for</div>
                  <div className="text-xl font-bold">Android APK</div>
                </div>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-5 rounded-3xl flex items-center justify-center gap-4 opacity-40 cursor-not-allowed grayscale">
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">Coming Soon</div>
                  <div className="text-xl font-bold">iOS Store</div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'features':
        return (
          <motion.div
            key="features"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { icon: Star, title: "Colorful UI", desc: "A vibrant interface that matches your personality.", color: "from-yellow-400 to-orange-500" },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed, even on older devices.", color: "from-blue-400 to-cyan-500" },
              { icon: Shield, title: "Secure", desc: "End-to-end encryption for all your chats.", color: "from-green-400 to-emerald-500" },
              { icon: Heart, title: "Community", desc: "Find your tribe in thousands of active groups.", color: "from-pink-400 to-rose-500" },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>Cubbit started as a simple idea: what if social media was actually fun again? No algorithms, no stress, just pure connection.</p>
              <p>We built Cubbit to be the most colorful and expressive platform on the planet. From our custom themes to our unique community features, everything is designed to make you smile.</p>
              <div className="pt-8 flex justify-center gap-12">
                <div>
                  <div className="text-3xl font-bold text-white">5M+</div>
                  <div className="text-sm">Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-sm">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">4.9</div>
                  <div className="text-sm">Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'support':
        return (
          <motion.div
            key="support"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-xl mx-auto"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500" />
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500" />
                <textarea placeholder="How can we help?" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 resize-none" />
                <button className="w-full bg-blue-600 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors">Send Message</button>
              </form>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-pink-500/30 overflow-x-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-600/20 blur-[120px] rounded-full" 
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-6 backdrop-blur-md bg-black/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg group-hover:rotate-12 transition-transform">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = "https://picsum.photos/seed/cubbit/100/100"} />
            </div>
            <span className="text-2xl font-black tracking-tighter">CUBBIT</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id as Page)}
                className={`text-sm font-bold tracking-widest uppercase transition-colors ${currentPage === item.id ? 'text-blue-400' : 'text-gray-500 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 bg-white/5 rounded-lg"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setCurrentPage(item.id as Page); setIsMenuOpen(false); }}
                  className="text-4xl font-black tracking-tighter text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {renderPage()}
          </AnimatePresence>
        </div>
      </main>

      {/* Download Overlay */}
      <AnimatePresence>
        {isDownloading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 backdrop-blur-xl"
          >
            <div className="max-w-md w-full text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 border-4 border-blue-500/20 border-t-blue-500 rounded-full mx-auto mb-8"
              />
              <h2 className="text-3xl font-black mb-2">DOWNLOADING...</h2>
              <p className="text-gray-500 mb-8">Preparing your Cubbit experience</p>
              
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${downloadProgress}%` }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
              <div className="mt-4 text-sm font-mono text-blue-400">
                {Math.round(downloadProgress)}%
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black mb-2">CUBBIT</div>
            <p className="text-gray-600 text-sm">The world's most colorful social app.</p>
          </div>
          <div className="flex gap-6">
            <Share2 className="w-5 h-5 text-gray-600 hover:text-white cursor-pointer" />
            <Star className="w-5 h-5 text-gray-600 hover:text-white cursor-pointer" />
            <Heart className="w-5 h-5 text-gray-600 hover:text-white cursor-pointer" />
          </div>
          <p className="text-gray-600 text-sm">© 2026 Cubbit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
