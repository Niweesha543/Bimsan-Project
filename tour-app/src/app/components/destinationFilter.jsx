"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample destination data - in a real app, this would come from an API or database
const destinations = [
  {
    id: 1,
    name: "Arugam Bay",
    category: "Beach",
    image: "/image_27.jpg", 
    description: "A surfer's paradise located on the southeast coast of Sri Lanka, famous for its perfect waves and laid-back atmosphere.",
    fullDescription: "Arugam Bay is considered one of the top surf spots in the world. The main surf break is at the point, which offers a long right-hand ride that's suitable for all levels. Beyond surfing, you can explore the nearby Kumana National Park, known for its abundant birdlife, or visit the ancient temple of Muhudu Maha Viharaya. The area's relaxed vibe and stunning coastline make it a favorite for beach lovers seeking both adventure and tranquility."
  },
  {
    id: 2,
    name: "Nilaveli",
    category: "Beach",
    image: "/image_28.jpg", 
    description: "Pristine white sandy beaches and crystal-clear waters make Nilaveli a tropical paradise for beach enthusiasts.",
    fullDescription: "Nilaveli Beach is a stretch of white sandy beach and turquoise shallow water. Its soft sand and clear water make it ideal for swimming and snorkeling. Just offshore lies Pigeon Island National Park, one of the two marine national parks in Sri Lanka, offering spectacular coral reefs and diverse marine life. The area is also home to several luxury resorts where you can indulge in spa treatments while enjoying ocean views."
  },
  {
    id: 3,
    name: "Passikudah",
    category: "Beach",
    image: "/image_29.jpg", 
    description: "Known for its remarkably shallow coastline where you can walk far into the sea, Passikudah offers breathtaking sunsets.",
    fullDescription: "Passikudah is famous for its shallow bay where the water stays at knee-level for a considerable distance into the sea, making it one of the safest spots for swimming. The beach is known for its stunning sunrises and sunsets that paint the sky in vibrant hues. The bay is protected by a reef, creating a natural swimming pool effect with calm waters. Passikudah is also home to several luxury resorts that offer various water sports and excursions to nearby attractions."
  },
  {
    id: 4,
    name: "Kalpitiya",
    category: "Beach",
    image: "/image_30.jpg", 
    description: "Home to the highest leopard density in the world, Yala offers unforgettable wildlife safari experiences.",
    fullDescription: "Yala National Park is Sri Lanka's most visited wildlife reserve, famous for having one of the highest leopard densities in the world. Besides leopards, the park is home to elephants, sloth bears, crocodiles, and over 200 bird species. The landscape varies from forests and grasslands to lagoons and beaches, creating diverse habitats for wildlife. Safari tours typically take place in the early morning or late afternoon when animals are most active."
  },
  {
    id: 5,
    name: "Sigiriya",
    category: "Culture & History",
    image: "/image_6.jpg", 
    description: "This ancient rock fortress with its frescoes and landscaped gardens is a UNESCO World Heritage site.",
    fullDescription: "Sigiriya (Lion Rock) is an ancient rock fortress and palace ruins situated in central Sri Lanka. This UNESCO World Heritage Site features remnants of a ruined palace complex at the top of a massive column of rock, surrounded by the remains of an extensive network of gardens and reservoirs. The site is renowned for its ancient frescoes, the mirror wall, and the lion gate. The climb to the top offers breathtaking panoramic views of the surrounding landscape."
  },
  {
    id: 6,
    name: "Kandy",
    category: "Culture & History",
    image: "/image_7.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 7,
    name: "Negombo",
    category: "Beach",
    image: "/image_38.jpg",
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 8,
    name: "Benthota",
    category: "Beach",
    image: "/image_31.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 9,
    name: "Yala National Park",
    category: "Safari",
    image: "/image_40.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 10,
    name: "Anuradhapura",
    category: "Culture & History",
    image: "/image_26.jpg",
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 11,
    name: "Balapitiya",
    category: "Beach",
    image: "/image_32.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 12,
    name: "Polonnaruwa",
    category: "Culture & History",
    image: "/image_41.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 13,
    name: "Wasgamuwa National Park",
    category: "Safari",
    image: "/image_21.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 14,
    name: "Hikkaduwa",
    category: "Beach",
    image: "/image_39.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 15,
    name: "Dambulla",
    category: "Culture & History",
    image: "/image_42.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 16,
    name: "Unawatuna",
    category: "Beach",
    image: "/image_36.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 17,
    name: "Minneriya National Park",
    category: "Safari",
    image: "/image_43.jpg",
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 18,
    name: "Katharagama",
    category: "Culture & History",
    image: "/image_44.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 19,
    name: "Galle",
    category: "Beach",
    image: "/image_33.jpg",
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 20,
    name: "Mirissa",
    category: "Beach",
    image: "/image_34.jpg",
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 21,
    name: "Kithulgala",
    category: "Landscapes",
    image: "/image_11.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 22,
    name: "Ella",
    category: "Landscapes",
    image: "/image_8.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 23,
    name: "Kumana National Park",
    category: "Safari",
    image: "/image_45.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 24,
    name: "Wilpaththu National Park",
    category: "Safari",
    image: "/image_46.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 25,
    name: "Adam's Peak",
    category: "Landscapes",
    image: "/image_47.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 26,
    name: "Nuwara Eliya",
    category: "Landscapes",
    image: "/image_48.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 27,
    name: "Udawalawe National Park",
    category: "Safari",
    image: "/image_50.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 28
    ,
    name: "Sinharaja Rain Forest",
    category: "Safari",
    image: "/image_49.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
 
];

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const categories = ["All", "Beach", "Safari", "Culture & History", "Landscapes"];

  // Filter destinations based on selected category
  const filteredDestinations = selectedCategory === "All" 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedDestination(null);
  };

  // Handle destination selection for details view
  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
  };

  // Close details modal
  const closeDetails = () => {
    setSelectedDestination(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-4xl font-serif">
      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category filter - horizontal layout */}
        <div className="flex border-l-4 border-gray-300 mb-10">
          <div className="flex">
            {categories.map((category, index) => (
              <div 
                key={category}
                className={`cursor-pointer py-2 px-6 text-lg ${
                  selectedCategory === category 
                    ? 'text-orange-500 font-semibold'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Beach category description */}
        {selectedCategory === "Beach" && (
          <div className="mb-10">
            <p className="text-lg leading-relaxed">
             </p>
          </div>
        )}

        {/* Destination cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div 
              key={destination.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={destination.image || "/api/placeholder/600/400"} 
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
                {/* Name overlay at bottom left */}
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                </div>
                
                {/* EXPLORE button centered on image - similar to reference */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity group">
                  <button 
                    onClick={() => handleDestinationSelect(destination)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md"
                  >
                    EXPLORE
                  </button>
                </div>
                
                {/* Semi-transparent overlay on hover */}
                <div 
                  className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all cursor-pointer"
                  onClick={() => handleDestinationSelect(destination)}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Details Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-72 w-full">
              <Image 
                src={selectedDestination.image || "/api/placeholder/1200/600"} 
                alt={selectedDestination.name}
                fill
                className="object-cover"
              />
              <button 
                onClick={closeDetails}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4 text-orange-500">
                <h2 className="text-3xl font-bold">{selectedDestination.name}</h2>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {selectedDestination.category}
                </span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-sans text-base">
                {selectedDestination.fullDescription}
              </p>
              <div className="flex justify-between items-center">
                <button 
                  onClick={closeDetails}
                  className="text-gray-600 hover:text-gray-800"
                >
              
                </button>
                <Link 
                  href={`/destinations/${selectedDestination.id}`}
                  className='bg-blue-950 text-white px-6 py-2 rounded-3xl hover:bg-orange-400 transition font-sans tracking-widest uppercase text-sm'>
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}