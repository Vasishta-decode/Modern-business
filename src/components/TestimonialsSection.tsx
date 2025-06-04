import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Jessica Parker",
    position: "CEO, TechSolutions Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    quote: "Working with Innovex has transformed our business operations. Their innovative solutions and dedicated team have given us a competitive edge in our industry."
  },
  {
    name: "Michael Johnson",
    position: "Director of IT, Global Retail",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    quote: "The custom software development from Innovex has streamlined our processes and significantly improved our efficiency. Their team truly understands our business needs."
  },
  {
    name: "Sarah Williams",
    position: "Marketing Director, StartUp Ventures",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 4,
    quote: "The data analytics solution provided by Innovex has given us invaluable insights into our customer behavior, helping us make informed decisions for our marketing strategies."
  },
  {
    name: "Robert Chen",
    position: "CTO, FinTech Innovations",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    quote: "Innovex's cybersecurity services have provided us with peace of mind. Their proactive approach to security has protected our sensitive data and strengthened our infrastructure."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.stars ? 'text-white fill-white' : 'text-white/20'}`} 
                        />
                      ))}
                    </div>
                    
                    <blockquote>
                      <p className="text-white/90 italic text-lg mb-6">"{testimonial.quote}"</p>
                    </blockquote>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        loading="lazy"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-white/70">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-10 bg-white/5 backdrop-blur-sm border border-white/10 text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-10 bg-white/5 backdrop-blur-sm border border-white/10 text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/20'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;