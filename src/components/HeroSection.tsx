import React from 'react';
import { ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatisticItem = ({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
        {inView ? (
          <CountUp
            end={value}
            duration={2.5}
            suffix={suffix}
            decimals={suffix === '%' ? 0 : 0}
            enableScrollSpy
          />
        ) : '0'}
      </p>
      <p className="text-white/70">{label}</p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="bg-white/10 backdrop-blur-sm inline-block px-4 py-1 rounded-full mb-4">
                <span className="text-white font-medium">Innovative Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transforming Ideas Into{' '}
                <span className="text-gray-400">Digital</span><br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/50 to-white">Reality</span>
              </h1>
              <p className="mt-6 text-lg text-white/70 max-w-lg">
                We help businesses leverage cutting-edge technology to drive growth, 
                efficiency, and innovation in today's competitive landscape.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-lg font-medium backdrop-blur-sm">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-white/5">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Business team working together" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/10 blur-[100px] rounded-full -z-10 opacity-30"></div>
          </div>
        </div>

        {/* Statistics Section - Moved to bottom */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <StatisticItem value={98} label="Client Satisfaction" suffix="%" />
          <StatisticItem value={250} label="Projects Completed" suffix="+" />
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold text-white mb-2">10+</p>
            <p className="text-white/70">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;