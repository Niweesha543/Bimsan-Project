import React from 'react';
import {
  Settings, // For "Taylor made tours" (customization of vacation)
  Percent, // For "Unbeatable Value for Money" (deals/discounts)
  Map, // For "Expert Personal Service" (planning with experts)
  BookOpen, // For "Experienced guides" (knowledge/storytelling)
  Home, // For "Accommodation for every budget" (lodging options)
  Layers // For "Enticing range of activities" (variety of experiences)
} from 'lucide-react';

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#ededed] rounded p-8 flex flex-col items-center text-center">
      <div className="mb-6 text-gray-800">
        {icon}
      </div>
      <h3 className="text-gray-800 uppercase font-medium tracking-wide mb-4">
        {title}
      </h3>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
};

const MemberBenefitCards = () => {
  const benefits = [
    {
      icon: <Settings size={40} />,
      title: "Taylor made tours",
      description: "Our team of travel experts offers the flexibility to customize your perfect vacation, carefully curating activities and destinations to match your unique interests."
    },
    {
      icon: <Percent size={40} />,
      title: "Unbeatable Value for Money",
      description: "Leveraging our trusted network, we secure the best prices on accommodations, transport, and activities, ensuring your Sri Lankan tour remains affordable without compromising comfort or quality."
    },
    {
      icon: <Map size={40} />,
      title: "Expert Personal Service",
      description: "Planning a trip can be overwhelming, but our experts are here to guide you. With deep knowledge of Sri Lanka's landscapes, culture, and hidden gems, they help craft your perfect itinerary."
    },
    {
      icon: <BookOpen size={40} />,
      title: "Experienced guides",
      description: "Our local guides are skilled experts with deep knowledge of Sri Lanka's history, culture, and natural beauty, bringing each destination to life with stories and insights you won't find in travel guides."
    },
    {
      icon: <Home size={40} />,
      title: "Accommodation for every budget",
      description: "We offer a carefully curated selection of accommodations, from luxury resorts to budget-friendly guesthouses, all meeting high standards of comfort, cleanliness, and service to enhance your travel experience."
    },
    {
      icon: <Layers size={40} />,
      title: "Enticing range of activities",
      description: "Bimsan Tours is your trusted guide to unforgettable experiences across Sri Lanka's stunning landscapes, rich culture, and thrilling adventures. Join us and embark on a journey like no other."
    }
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-serif text-center text-gray-900 mb-6">
        Bimson Speciality
      </h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-base">
        {benefits.map((benefit, index) => (
          <BenefitCard 
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MemberBenefitCards;