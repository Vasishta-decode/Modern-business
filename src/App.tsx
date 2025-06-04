import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFlash, setShowFlash] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Handle loading sequence
    const progressSteps = [
      { progress: 65, delay: 1000 },
      { progress: 95, delay: 1800 },
      { progress: 100, delay: 2300 }
    ];

    const timers: number[] = [];

    progressSteps.forEach(({ progress, delay }) => {
      const timer = setTimeout(() => {
        setLoadingProgress(progress);
      }, delay);
      timers.push(timer);
    });

    // Handle flash and loading screen removal
    const flashTimer = setTimeout(() => {
      setShowFlash(true);
      const removeLoadingTimer = setTimeout(() => {
        setIsLoading(false);
      }, 300); // Reduce this time to remove loading screen faster after flash
      timers.push(removeLoadingTimer);
    }, 2500);
    timers.push(flashTimer);

    // Cleanup all timers
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
        <div className={`fixed inset-0 bg-white transition-opacity duration-300 ${showFlash ? 'opacity-100' : 'opacity-0'} z-50`}></div>
        
        <div className={`relative text-center transition-opacity duration-300 ${showFlash ? 'opacity-0' : 'opacity-100'}`}>
          {/* Galaxy Loader */}
          <div className="flex justify-center items-center">
            <div className="relative w-24 h-24">
              <div className="w-full h-full rounded-full border-t-4 border-b-4 border-white animate-spin"></div>
              <div className="w-full h-full rounded-full border-r-4 border-l-4 border-white/30 animate-spin absolute top-0 left-0" 
                style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              <div className="w-full h-full rounded-full border-t-4 border-b-4 border-white/10 animate-spin absolute top-0 left-0" 
                style={{ animationDuration: '2s' }}></div>
            </div>
          </div>

          {/* Text Animation */}
          <div className="mt-12 space-y-3">
            <h2 className="text-2xl font-bold text-white animate-slide-down">
              Welcome to Vasishta Projects
            </h2>
            <p className="text-lg text-white/70 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Wait for the galaxy to unfold...
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 w-48 h-2 mx-auto bg-white/10 rounded-full overflow-hidden relative">
            <div 
              className="h-full bg-white/50 transition-all duration-500 ease-in-out rounded-full"
              style={{ width: `${loadingProgress}%` }}
            ></div>
            {/* Loading percentage */}
            <div className="absolute -bottom-6 left-0 right-0 text-white/70 text-sm">
              {loadingProgress}%
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_30%)]"></div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;