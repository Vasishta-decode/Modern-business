import React, { useState, useRef } from 'react';
import { Linkedin, Twitter, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    name: "Alexander Mitchell",
    role: "Chief Executive Officer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Sophia Reynolds",
    role: "Chief Technology Officer",
    image: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "David Nguyen",
    role: "Chief Product Officer",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Olivia Thompson",
    role: "Chief Marketing Officer",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Lisa Hamilton",
    role: "Head of Design",
    image: "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Emma Brooks",
    role: "Head of Customer Success",
    image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  }
];

const TeamSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Leadership Team</h2>
          <div className="w-20 h-1 bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg">
            Meet the visionaries and experts behind our success, driving innovation and excellence.
          </p>
        </div>
        
        <div className="relative">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="flex space-x-6 pb-4">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="flex-none w-[300px]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    image: string;
    socials: {
      linkedin: string;
      twitter: string;
      email: string;
    }
  }
}

const TeamMemberCard = ({ member }: TeamMemberProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          loading="lazy"
          width={300}
          height={320}
          className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="text-white/70 mb-4">{member.role}</p>
        
        <div className="flex space-x-4">
          <a 
            href={member.socials.linkedin} 
            className="text-white/50 hover:text-white transition-colors duration-300"
            aria-label={`${member.name}'s LinkedIn profile`}
          >
            <Linkedin size={18} />
          </a>
          <a 
            href={member.socials.twitter} 
            className="text-white/50 hover:text-white transition-colors duration-300"
            aria-label={`${member.name}'s Twitter profile`}
          >
            <Twitter size={18} />
          </a>
          <a 
            href={member.socials.email} 
            className="text-white/50 hover:text-white transition-colors duration-300"
            aria-label={`Email ${member.name}`}
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

// Add this at the end of the file, before the export
const styles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default TeamSection;