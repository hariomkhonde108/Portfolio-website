import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Get in <span className="text-blue-500">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's talk about everything!</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out if you want to collaborate on a project,
              have a job opportunity, or just want to say hi.
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
                content="Bengaluru"
              />
            </div>
          </div>
          
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
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
}) => (
  <div className="flex items-start gap-4">
    <div className="text-blue-500">{icon}</div>
    <div>
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-gray-400">{content}</p>
    </div>
  </div>
);

export default Contact;