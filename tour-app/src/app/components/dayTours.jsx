'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const inspirationData = [
  {
    id: 1,
    title: "Mirissa Whale Watching day tour",
    description: "Explore modernist concrete complexes across France, Germany and Switzerland.",
    image: "/image_20.jpg",
    link: "/excursions/le-corbusier-tour"
  },
  {
    id: 2,
    title: "Polonnaruwa, Minnariaya National Park Day Tour",
    description: "Spring travel, minus the downpour.",
    image: "/image_21.jpg",
    link: "/excursions/spring-destinations"
  },
  {
    id: 3,
    title: "Explore Negombo",
    description: "Top literature from Jamaica, Dominica and beyond.",
    image: "/image_22.jpg",
    link: "/excursions/caribbean-literature"
  },
  {
    id: 4,
    title: "Jeep Safari in Udawalawa National Park",
    description: "From Fresco Cycles to Ducal Palaces",
    image: "/image_23.jpg",
    link: "/excursions/renaissance-art"
  },
  {
    id: 5,
    title: "A Tour of Little England",
    description: "To go or not to go, that is the question...",
    image: "/image_24.jpg",
    link: "/excursions/shakespeare-tour"
  },
 
  {
    id: 6,
    title: "Anuradhapura Day Tour",
    description: "How to implement the cosy Scandinavian practice into your travels.",
    image: "/image_26.jpg",
    link: "/excursions/danish-hygge"
  }
];

const TravelInspirationCard = ({ title, description, image, link }) => {
  return (
    <Link href={link} className="block group">
      <div className="bg-white overflow-hidden rounded-lg shadow-md transition-all duration-300 h-full hover:shadow-xl transform hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-950 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const TravelInspirationSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-2">
        Day Tours ~ Discover the Extraordinary
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans text-base">
          {inspirationData.map((item) => (
            <TravelInspirationCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/excursions" className="inline-flex items-center px-6 py-3 bg-blue-950 text-white rounded-3xl hover:bg-orange-400 transition font-sans tracking-widest uppercase">
            FOR MORE
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravelInspirationSection;