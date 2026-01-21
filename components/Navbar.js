import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Υπηρεσίες', href: '#services' },
    { name: 'Κλείστε Ραντεβού', href: '#booking' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg"><Calendar className="text-white w-6 h-6" /></div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">ProConnect</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">{link.name}</a>
            ))}
            <a href="#booking" className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-200">Booking</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-indigo-600 focus:outline-none">{isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;