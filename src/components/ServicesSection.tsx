import React from 'react';
import { Code, LineChart, Lightbulb, Rocket, ShieldCheck, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-10 h-10 text-white" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs and challenges."
  },
  {
    icon: <LineChart className="w-10 h-10 text-white" />,
    title: "Data Analytics",
    description: "Turn your data into actionable insights with our advanced analytics and visualization solutions."
  },
  {
    icon: <Smartphone className="w-10 h-10 text-white" />,
    title: "Mobile App Development",
    description: "Create engaging mobile experiences that connect with your audience on iOS and Android platforms."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    title: "Cybersecurity",
    description: "Protect your digital assets with our comprehensive security solutions and best practices."
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-white" />,
    title: "Digital Transformation",
    description: "Revolutionize your business processes with strategic digital initiatives and technologies."
  },
  {
    icon: <Rocket className="w-10 h-10 text-white" />,
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing for scalability, flexibility, and cost efficiency."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg">
            We offer a comprehensive range of solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl transition-all duration-300 hover:bg-white/10 group">
      <div className="p-4 bg-white/5 rounded-lg inline-block mb-6 group-hover:bg-white/10 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default ServicesSection;