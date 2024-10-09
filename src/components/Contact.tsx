import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, url: 'https://www.facebook.com/Alvan.Rakib', label: 'Facebook' },
  { icon: Instagram, url: 'https://www.instagram.com/alvanalrakib/', label: 'Instagram' },
  { icon: Twitter, url: 'https://twitter.com/alvanalrakib', label: 'Twitter' },
  { icon: Youtube, url: 'https://www.youtube.com/channel/UChcrU22Q1FKFesDjr7thi_g', label: 'YouTube' },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-accent">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-background border-gray-700 shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-accent">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-background border-gray-700 shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-accent">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md bg-background border-gray-700 shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full btn btn-primary">Send Message</button>
            </div>
          </form>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Connect with Me</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-opacity-80 transition duration-300">
                  <link.icon className="w-8 h-8" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
              <a href="mailto:contact@alvanalrakib.com" className="text-accent hover:text-opacity-80 transition duration-300">
                <Mail className="w-8 h-8" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;