import React, { useState, useRef } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useAnalytics } from '../hooks/useAnalytics';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { trackFormSubmission, trackContactMethod } = useAnalytics();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      if (!formRef.current) return;

      const result = await emailjs.sendForm(
        'service_boiy2mf',
        'template_f7xr7rr',
        formRef.current,
        'Y97HNm-QBVSX8kjA0'
      );

      if (result.text === 'OK') {
        setStatus({ loading: false, success: true, error: false });
        trackFormSubmission('contact_form', true);
        setFormData({ name: '', email: '', message: '' });
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: true });
      trackFormSubmission('contact_form', false);
      console.error('Error sending message:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300/20 dark:via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300/20 dark:via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in <span className="text-gray-600 dark:text-white/70">Touch</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-200/20 dark:border-white/5 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-white/50 mb-8">
                Feel free to reach out if you want to collaborate on a project, 
                have a job opportunity, or just want to say hi!
              </p>
              
              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail />}
                  title="Email"
                  content="hariomkhonde@gmail.com"
                />
                <ContactInfo
                  icon={<Phone />}
                  title="Phone"
                  content="+91 7676126256"
                />
                <ContactInfo
                  icon={<MapPin />}
                  title="Location"
                  content="Bangalore, India"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-200/20 dark:border-white/5 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/50 dark:bg-black/50 border border-gray-300/20 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400/20 dark:focus:ring-white/10 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/50 dark:bg-black/50 border border-gray-300/20 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400/20 dark:focus:ring-white/10 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-white/50 dark:bg-black/50 border border-gray-300/20 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400/20 dark:focus:ring-white/10 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg transition-colors flex items-center justify-center gap-2 ${
                    status.loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 dark:hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status.loading ? (
                    <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send size={20} />
                  )}
                  {status.loading ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Status messages */}
                {status.success && (
                  <motion.div 
                    className="p-4 bg-green-50 dark:bg-white/5 border border-green-200/20 dark:border-white/10 rounded-lg text-green-700 dark:text-white/70 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {status.error && (
                  <motion.div 
                    className="p-4 bg-red-50 dark:bg-white/5 border border-red-200/20 dark:border-white/10 rounded-lg text-red-700 dark:text-white/70 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => {
  const { trackContactMethod } = useAnalytics();
  
  // Determine if this is an email, phone, or location contact
  const isEmail = title.toLowerCase() === 'email';
  const isPhone = title.toLowerCase() === 'phone';
  const isLocation = title.toLowerCase() === 'location';
  
  // Create appropriate link
  const getLink = () => {
    if (isEmail) {
      return `mailto:${content}`;
    }
    if (isPhone) {
      return `tel:${content}`;
    }
    if (isLocation) {
      // Create Google Maps link for the location
      const encodedLocation = encodeURIComponent(content);
      return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    }
    return null;
  };

  const link = getLink();
  const Component = link ? 'a' : 'div';
  const props = link ? {
    href: link,
    target: '_blank',
    rel: 'noopener noreferrer',
    onClick: () => {
      if (isEmail) trackContactMethod('email');
      if (isPhone) trackContactMethod('phone');
      if (isLocation) trackContactMethod('location');
    },
  } : {};

  return (
    <Component
      {...props}
      className={`flex items-start gap-4 group ${link ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''}`}
    >
      <div className="text-gray-500 dark:text-white/50 p-2 bg-gray-100/50 dark:bg-white/5 rounded-lg group-hover:bg-gray-200/20 dark:group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-medium mb-1 text-gray-700 dark:text-white/70">{title}</h4>
        <p className={`text-gray-500 dark:text-white/50 ${link ? 'hover:text-gray-700 dark:hover:text-white transition-colors' : ''}`}>
          {content}
        </p>
      </div>
    </Component>
  );
};

export default Contact;