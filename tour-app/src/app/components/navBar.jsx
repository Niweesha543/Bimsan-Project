'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Destinations', href: '/destination' },
  { name: 'Packages', href: '/packages' },
  { name: 'Excursions', href: '/excursions' },
  { name: 'Things To Do', href: '/thingsToDo' },
  { name: 'Tailor Made', href: '/tailorMade' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white text-gray-800 shadow-md py-3' 
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
          <img 
          src="/image_logo.png" 
          alt="BIMSAN TOURS Logo" 
          className="mr-2 h-12"
        />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 font-sans tracking-widest uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-orange-500 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className={`px-4 py-5 shadow-lg ${isScrolled ? 'bg-white text-gray-800' : 'bg-gray-900 text-white'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 font-medium hover:text-orange-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;