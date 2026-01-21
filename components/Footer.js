import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">ProConnect</h3>
            <p className="text-gray-400 leading-relaxed">Επαγγελματικές λύσεις για την ανάπτυξη της επιχείρησής σας. Είμαστε δίπλα σας σε κάθε βήμα.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Σύνδεσμοι</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Αρχική</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Υπηρεσίες</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Booking</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ProConnect. Όλα τα δικαιώματα διατηρούνται.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;