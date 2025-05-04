"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/navBar';

export default function AboutPage() {
  
  const images = [
    '/image_23.jpg',
    '/image_20.jpg',
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="relative h-screen w-full overflow-hidden">
        {/* Image Slider */}
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === currentIndex}
                className="object-cover"
              />
            </div>
          ))}
          
          {/* Overlay with Text */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white z-10">
            <h1 className="text-6xl md:text-8xl font-serif mb-8">About</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-center px-4">
              Discover the story behind BIMSAN TOURS and our commitment to providing unforgettable travel experiences.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full z-20"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full z-20"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          
          {/* Dots Navigation */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* About Content Section - Add your about content below the slider */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              Founded in 2010, BIMSAN TOURS has been committed to creating memorable travel experiences for adventurers from around the world. Our passion for exploration and cultural immersion drives everything we do.
            </p>
            <p className="text-lg mb-6">
              With a team of experienced travel experts, we curate journeys that combine must-see attractions with off-the-beaten-path experiences, allowing our travelers to connect deeply with each destination.
            </p>
          </div>
          <div>
            <p className="text-lg mb-6">
              We believe travel should be transformative, sustainable, and accessible. That's why we partner with local communities, support conservation efforts, and design itineraries that respect both the environment and local cultures.
            </p>
            <p className="text-lg">
              Whether you're seeking adventure, relaxation, cultural experiences, or a mix of everything, BIMSAN TOURS is here to make your travel dreams a reality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}