import React from 'react';
import { Check } from 'lucide-react';

const aboutPoints = [
  "10+ years of industry experience",
  "Team of 50+ specialized professionals",
  "Over 250 successful project deliveries",
  "Global presence across 5 countries",
  "Award-winning solutions and methodologies",
  "Continuous innovation and research"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl shadow-white/5">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our company" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-white/5 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-1/2 h-1/2 border-2 border-white/10 rounded-2xl -z-10"></div>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="bg-white/5 inline-block px-4 py-1 rounded-full mb-4">
                <span className="text-white/80 font-medium">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                We're a Team of Digital Specialists
              </h2>
              <p className="text-white/70 mb-6">
                Founded in 2012, Innovex has been at the forefront of digital innovation, 
                helping businesses of all sizes navigate the complexities of technology 
                and harness its power for sustainable growth and competitive advantage.
              </p>
              <p className="text-white/70">
                Our mission is to democratize advanced technology, making it accessible 
                and actionable for businesses worldwide. We believe in the transformative 
                power of innovation when guided by strategic thinking and human-centered design.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {aboutPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1 bg-white/10 p-1 rounded-full">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/70">{point}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-8 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium backdrop-blur-sm">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;