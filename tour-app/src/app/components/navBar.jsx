'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, User, Globe, Mail, MapPin, Target, Hotel, Calendar } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destination' },
  { name: 'Packages', href: '/packages' },
  { name: 'Excursions', href: '/excursions' },
  { name: 'Things To Do', href: '/thingsToDo' },
  { name: 'Tailor Made', href: '/tailorMade' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

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

  const handleJoinClick = () => {
    setIsModalOpen(true);
    setIsLogin(false); // Default to signup
  };

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsLogin(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white text-gray-800 shadow-md py-3'
            : 'bg-transparent text-white py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-bold text-xl">
              <img
                src="/image_logo.png"
                alt="BIMSAN TOURS Logo"
                className="mr-2 h-12"
              />
            </Link>

            <nav className="hidden lg:flex space-x-6 font-sans tracking-widest uppercase items-center">
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
              <button
                onClick={handleJoinClick}
                className="bg-blue-950 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-medium transition-colors uppercase tracking-wider"
              >
                Join
              </button>
            </nav>

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

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className={`px-4 py-5 shadow-lg ${isScrolled ? 'bg-white text-gray-800' : 'bg-gray-900 text-white'}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 font-medium hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={handleJoinClick}
                className="block w-full text-left py-2 font-medium bg-orange-500 hover:bg-blue-950 text-white px-4 rounded mt-4 transition-colors"
              >
                Join
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header with close button */}
            <div className="relative p-8 pb-6">
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              <div className="text-center text-4xl font-serif ">
                <h1 className="text-4xl font-bold text-slate-700 mb-2">
                  {isLogin ? 'Welcome back' : 'CONNECT WITH'}
                </h1>
                {!isLogin && (
                  <h2 className="text-4xl font-bold text-slate-700 mb-4">
                    BIMSAN
                  </h2>
                )}
                {!isLogin && (
                  <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
                )}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Left side - Benefits (only show for signup) */}
              {!isLogin && (
                <div className="w-full lg:w-1/2 bg-gradient-to-br from-slate-700 to-slate-950 p-8 text-white relative overflow-hidden ml-6 rounded-3xl mb-6 mt-8">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-8 text-center mt-16  font-serif ">Member benefits</h3>
                    <div className="w-16 h-1 bg-orange-500 mx-auto mb-16"></div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6 mt-8">
                      <div className="bg-gray-100 text-slate-800 rounded-2xl p-6 text-center">
                        <div className="flex justify-center mb-3">
                          <User size={32} className="text-slate-700" />
                        </div>
                        <div className="text-xs font-bold">VIP HOTEL</div>
                        <div className="text-xs">BENEFITS</div>
                      </div>
                      <div className="bg-gray-100 text-slate-800 rounded-2xl p-6 text-center">
                        <div className="flex justify-center mb-3">
                          <Globe size={32} className="text-slate-700" />
                        </div>
                        <div className="text-xs font-bold">GLOBAL</div>
                        <div className="text-xs">COMMUNITY</div>
                      </div>
                      <div className="bg-gray-100 text-slate-800 rounded-2xl p-6 text-center">
                        <div className="flex justify-center mb-3">
                          <Calendar size={32} className="text-slate-700" />
                        </div>
                        <div className="text-xs font-bold">MORE THAN</div>
                        <div className="text-xs">800 EVENTS</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mt-16">
                      <div className="bg-gray-100 text-slate-800 rounded-2xl p-6 text-center">
                        <div className="flex justify-center mb-3">
                          <MapPin size={32} className="text-slate-700" />
                        </div>
                        <div className="text-xs font-bold">DAILY TRAVEL</div>
                        <div className="text-xs">INSPIRATION</div>
                      </div>
                      <div className="bg-gray-100 text-slate-800 rounded-2xl p-6 text-center">
                        <div className="flex justify-center mb-3">
                          <Target size={32} className="text-slate-700" />
                        </div>
                        <div className="text-xs font-bold">TRAVEL</div>
                        <div className="text-xs">PRIVILEGES</div>
                      </div>
                      <div className="bg-gray-100 text-slate-800 rounded-2xl p-6 text-center">
                        <div className="flex justify-center mb-3">
                          <Hotel size={32} className="text-slate-700" />
                        </div>
                        <div className="text-xs font-bold">HOTEL</div>
                        <div className="text-xs">DEALS</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Background decoration with pin/location icons */}
                  <div className="absolute inset-0 opacity-20">
                    <MapPin className="absolute top-16 left-12 text-white" size={32} />
                    <MapPin className="absolute top-32 right-16 text-white" size={24} />
                    <MapPin className="absolute bottom-32 left-16 text-white" size={20} />
                    <MapPin className="absolute bottom-16 right-12 text-white" size={28} />
                    <MapPin className="absolute top-48 left-32 text-white" size={20} />
                    <MapPin className="absolute bottom-48 right-32 text-white" size={32} />
                  </div>

                  {/* Silhouette buildings at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-30"></div>
                </div>
              )}

              {/* Right side - Form */}
              <div className={`w-full ${isLogin ? 'lg:w-full' : 'lg:w-1/2'} p-8 ${isLogin ? 'flex justify-center' : ''}`}>
                <div className={`${isLogin ? 'max-w-md w-full' : 'w-full'}`}>
                  <form className="space-y-6">
                    {!isLogin && (
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="w-full px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="w-full px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                        />
                      </div>
                    )}

                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                    />

                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                    />

                    {!isLogin && (
                      <>
                        <input
                          type="password"
                          placeholder="Password confirmation"
                          className="w-full px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                        />

                       

                        <div className="flex items-start space-x-3">
                          <input type="checkbox" id="terms" className="mt-1 rounded" />
                          <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the <span className="text-orange-500 font-medium">BIMSAN</span> Terms of Service
                          </label>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <input type="checkbox" id="recaptcha" className="rounded" />
                              <label htmlFor="recaptcha" className="text-sm text-gray-600">
                                I'm not a robot
                              </label>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="text-xs text-blue-600 font-bold mb-1">reCAPTCHA</div>
                              <div className="text-xs text-gray-500">Privacy - Terms</div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 px-6 rounded-full font-bold text-lg transition-colors flex items-center justify-center shadow-lg font-sans tracking-widest uppercase"
                    >
                      <span className="text-white ">
                        {isLogin ? 'LOGIN' : 'CREATE FREE ACCOUNT'}
                      </span>
                      {!isLogin && <span className="ml-2 text-white">→</span>}
                    </button>

                    <div className="text-center pt-4">
                      <span className="text-gray-600">
                        {isLogin ? "Don't have an account? " : "Have an account? "}
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-orange-500 hover:text-orange-600 font-medium underline"
                      >
                        {isLogin ? 'Sign up.' : 'Log in.'}
                      </button>
                    </div>

                    {!isLogin && (
                      <p className="text-xs text-gray-500 text-center pt-4">
                        If you need any help creating your account please email{' '}
                        <span className="text-orange-500">support@bimsan.com</span>.
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;