'use client';
import React, { useState } from 'react';

const packages = [
  {
    title: 'Sri Lanka at a glance',
    description:
      'Explore the wonders of Sri Lanka with our Package 11 – Sri Lanka at a Glance! Prepare for an unforgettable adventure filled with ancient historical sites, breathtaking landscapes, cultural experienc....',
    image: '/image_6.jpg',
    days: 8,
    nights: 7,
  },
  {
    title: 'Short break tour in Sri Lanka',
    description:
      "Our Short Break Tour allows you to experience the essence of Sri Lanka. You'll experience the country's attractions and dig into its fascinating legacy in only a few days. Prepare for an action-packed....",
    image: '/image_7.jpg',
    days: 4,
    nights: 3,
  },
  {
    title: 'Yoga and Meditation Tour in Sri Lanka',
    description:
      "Welcome to Bimsan Tours' transformative Yoga and Meditation Tour in Sri Lanka! Embark on a soul-nourishing journey that combines the serene art of yoga with the profound practice of meditation, all am....",
    image: '/image_8.jpg',
    days: 7,
    nights: 6,
  },
  {
    title: 'Ramayana Trail',
    description:
      'Dive into Sri Lanka’s rich history and explore UNESCO World Heritage Sites. Visit ancient cities, temples, and royal gardens that tell stories of centuries past.',
    image: '/image_9.jpg',
    days: 7,
    nights: 6,
  },
  {
    title: 'Adventure Tour',
    description:
      'Experience Sri Lanka’s misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.',
    image: '/image_10.jpg',
    days: 7,
    nights: 6,
  },
  {
    title: 'Package 13',
    description:
      'Experience Sri Lanka’s misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.',
    image: '/image_11.jpg',
    days: 7,
    nights: 6,
  },
  {
    title: 'Paradise Gof Tour',
    description:
      'Experience Sri Lanka’s misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.',
    image: '/image_12.jpg',
    days: 10,
    nights: 9,
  },
  {
    title: 'Honeymoon Tour',
    description:
      'Experience Sri Lanka’s misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.',
    image: '/image_13.jpg',
    days: 11,
    nights: 10,
  },
  {
    title: 'Package 14',
    description:
      'Experience Sri Lanka’s misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.',
    image: '/image_14.jpg',
    days: 11,
    nights: 10,
  },
  {
    title: 'Family Tour in Sri Lanka',
    description:
      'Experience Sri Lanka’s misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.',
    image: '/image_15.jpg',
    days: 14,
    nights: 13,
  },
  {
    title: 'Unexplored North / East Tour of Sri Lanka',
    description:
      'Experience Sri Lanka’s misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.',
    image: '/image_16.jpg',
    days: 15,
    nights: 14,
  },
  {
    title: 'Off the Beaten Track Tour in Sri Lanka',
    description:
      'Experience Sri Lanka’s misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.',
    image: '/image_17.jpg',
    days: 15,
    nights: 14,
  },
  {
    title: 'Enchanting Sri Lanka',
    description:
      'Experience Sri Lanka’s misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.',
    image: '/image_18.jpg',
    days: 15,
    nights: 14,
  },
  {
    title: 'Wildlife & Beach Tour',
    description:
      'Experience Sri Lanka’s misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.',
    image: '/image_19.jpg',
    days: 15,
    nights: 14,
  },
];

export default function TravelPackages() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - visibleCount + packages.length) % packages.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount) % packages.length);
  };

  const visiblePackages = Array.from({ length: visibleCount }).map((_, i) => {
    return packages[(startIndex + i) % packages.length];
  });

  return (
    <section className="py-12 px-4 md:px-16 bg-white relative">
     
      <div className="flex items-center justify-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="text-3xl font-bold text-gray-600 hover:text-orange-500 transition"
        >
          &lt;
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePackages.map((pkg, index) => (
            <div
            key={index}
            className="w-full max-w-sm h-[450px] flex flex-col rounded-md shadow-md border border-gray-200 overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
          >
          
          <div className="relative h-48 w-full shrink-0">

                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              


              </div>
              <div className="p-4 flex flex-col justify-between flex-1 space-y-1">
  <div className="text-black font-semibold py-1 text-sm rounded font-sans tracking-widest uppercase mb-3">
    Days {pkg.days} | Nights {pkg.nights}
  </div> 

  <h3 className="text-xl font-semibold text-blue-900 font-serif">
    {pkg.title}
  </h3>

  <p className="text-gray-600 font-sans text-base flex-1">
    {pkg.description}
  </p>
</div>


            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="text-3xl font-bold text-gray-600 hover:text-orange-500 transition"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
