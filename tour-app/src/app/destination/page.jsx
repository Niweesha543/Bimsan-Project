"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/navBar';
import DestinationsFilter from '../components/destinationFilter';

export default function DestinationPage() {
  
  const images = [
    '/image_19.jpg',
    '/image_18.jpg',
    '/image_17.jpg',
    
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
          
            <p className="  max-w-3xl text-center px-4 text-[50px] font-serif">
            "Where dreams meet destinations."
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
      <DestinationsFilter/>
     
    </div>
  );
}