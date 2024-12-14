import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Linkedin, Github} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    // You might want to add actual form submission functionality
    alert('Message sent! (Note: This is a placeholder)');
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Get In Touch</h3>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-indigo-600" />
              <span>marypowsteenaj@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-indigo-600" />
              <span>+94 76-217 5713</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-indigo-600" />
              <span>Jaffna, Sri Lanka</span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/powsteenaj/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-indigo-600"
              >
                <Linkedin />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-indigo-600"
              >
                <Github />
              </a>
              <a 
                href="mailto:marypowsteenaj@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-indigo-600"
              >
                <Mail />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-white"
            ></textarea>
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;