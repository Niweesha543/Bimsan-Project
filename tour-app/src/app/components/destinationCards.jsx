'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const sections = [
  {
    title: 'Discover Sri Lanka’s Natural Beauty',
    description:"Uncover the breathtaking landscapes of our tropical paradise – from misty mountains and golden beaches to lush rainforests and serene lakes. Let nature's magic leave you speechless.",
    image: '/image_1.jpg',
    link: '/destination',
  },
  {
    title: 'Experience Rich Cultural Heritage',
    description:
      "Dive deep into Sri Lanka’s vibrant history and traditions. Explore ancient cities, sacred temples, colorful festivals, and timeless art that reflect the island’s soul.",
    image: '/image_2.jpg',
    link: '/destination',
  },
  {
    title: 'Curated Journeys, Crafted for You',
    description:
      "Every journey with us is tailor-made. We design unforgettable travel experiences that match your interests, ensuring each moment is meaningful and memorable.",
    image: '/image_4.jpg',
    link: '/destination',
  },

  {
    title: 'Hospitality Beyond Expectations',
    description:
      "Enjoy warm, personalized service at every step. From your arrival to your farewell, we make your comfort, joy, and satisfaction our top priority.",
    button:"",
    image: '/image_5.jpg',
    link: '/destination',
  },


];

export default function DestinationCard() {
  const router = useRouter();

  return (
    <main className="bg-[#f9f8f4] py-12 px-4 md:px-16 space-y-16">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          
          <div className="md:w-1/2">
            <h2 className="text-3xl text-gray-900 mb-2  font-serif">{section.title}</h2>
            <div className="w-12 h-1 bg-orange-400 mb-4"></div>
            <p className="text-gray-700 font-sans text-base">{section.description}</p>
          </div>

       
          <div
            className="md:w-1/2 cursor-pointer"
            onClick={() => router.push(section.link)}
          >
            <Image
              src={section.image}
              alt={section.title}
              width={500}
              height={350}
              className="rounded-lg shadow-lg shadow-black object-cover w-full h-[300px]"
            />
          </div>
        </div>
      ))}

    
      <div className="flex justify-end ">
        <button
          onClick={() => router.push('/destination')}
          className="px-6 py-3 bg-blue-950 text-white hover:bg-orange-400 transition rounded-3xl font-sans tracking-widest uppercase"
        >
          For More
        </button>
      </div>
    </main>
  );
}
