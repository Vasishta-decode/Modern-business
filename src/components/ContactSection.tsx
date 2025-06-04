import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear any previous errors when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Form validation
      if (!formState.email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      // Form submission logic would go here
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formState);
      alert('Thank you for your message! We will get back to you soon.');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70">Email</p>
                    <a href="mailto:info@innovex.com" className="text-white hover:text-white/80 transition-colors duration-300">
                      info@innovex.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70">Phone</p>
                    <a href="tel:+12345678900" className="text-white hover:text-white/80 transition-colors duration-300">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70">Address</p>
                    <p className="text-white">
                      123 Innovation Street<br />
                      Tech Valley, CA 94043<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p className="text-white">
                  <span className="text-white/70">Monday - Friday:</span> 9:00 AM - 6:00 PM
                </p>
                <p className="text-white">
                  <span className="text-white/70">Saturday:</span> 10:00 AM - 2:00 PM
                </p>
                <p className="text-white">
                  <span className="text-white/70">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/50 focus:border-white/20 focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/50 focus:border-white/20 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/50 focus:border-white/20 focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/50 focus:border-white/20 focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 font-medium backdrop-blur-sm"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;