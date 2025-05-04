'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    content: "Always available, extremely knowledgeable, and a tremendous \"can-do\" attitude. Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner.",
    name: "Sarah Johnson",
    company: "TechInnovate Inc.",
    image: "/image_11.jpg" 
  },
  {
    id: 2,
    content: "The expertise and professionalism shown throughout our Sri Lanka tour was exceptional. Every detail was carefully planned and the guides were incredibly informative. It was truly the trip of a lifetime!",
    name: "David Parker",
    company: "Global Traveler",
    image: "/image_12.jpg" 
  },
  {
    id: 3,
    content: "We were impressed by the value for money and the personalized service. Our accommodations were perfect for our budget, and the activities recommended matched our interests perfectly. We'll definitely be booking again!",
    name: "Michelle Chang",
    company: "Adventure Seekers",
    image: "/image_13.jpg" 
  },
  {
    id: 4,
    content: "From the moment we arrived, we felt in good hands. The guides were knowledgeable about local history and culture, making each site visit meaningful. The tailored itinerary perfectly matched our interests.",
    name: "Robert Fernandez",
    company: "Cultural Explorer",
    image: "/image_14.jpg" 
  }
];

const TestimonialCard = ({ content, name, company, image }) => {
  return (
    <div className="bg-white rounded shadow-lg p-8 mx-4 h-full flex flex-col relative">
      <div className="mb-6 flex-grow">
        <p className="text-gray-800 text-lg">{content}</p>
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
         
          <Image 
            src={image} 
            alt={name}
            width={48}
            height={48}
            className="object-cover"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
            }}
          />
        </div>
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          {company && <p className="text-gray-600 text-sm">{company}</p>}
        </div>
      </div>
      <div className="absolute right-8 bottom-8 text-orange-500 text-6xl font-serif">"</div>
    </div>
  );
};

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(2); // Default showing 2

  // Update number of visible testimonials based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1);
      } else {
        setVisibleTestimonials(2);
      }
    };

    // Set on initial load
    handleResize();

    // Update on resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        (prevIndex + 1) % (testimonials.length - visibleTestimonials + 1)
      );
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [visibleTestimonials]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div 
      className="relative py-16 overflow-hidden bg-cover bg-center bg-no-repeat h-83"
      style={{ 
        backgroundImage: "url('/image_10.jpg')" 
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-serif md:text-3xl uppercase tracking-wider mb-4">
            TESTIMONIALS ~ Happy Customers
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        </div>

        <div className="relative font-sans text-base">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${activeIndex * (100 / visibleTestimonials)}%)`,
              width: `${(testimonials.length / visibleTestimonials) * 100}%`
            }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-shrink-0"
                style={{ width: `${100 / testimonials.length * visibleTestimonials}%` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: testimonials.length - visibleTestimonials + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  activeIndex === index ? 'bg-orange-500' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;