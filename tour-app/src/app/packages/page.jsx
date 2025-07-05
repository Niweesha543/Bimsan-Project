'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navBar';

const packages = [
  {
    id: 'pkg_1',
    title: 'Sri Lanka at a glance',
    description:
      'Explore the wonders of Sri Lanka with our Package 11 – Sri Lanka at a Glance! Prepare for an unforgettable adventure filled with ancient historical sites, breathtaking landscapes, cultural experienc....',
    image: '/image_6.jpg',
    days: 8,
    nights: 7,
    rating: 4.8,
    reviews: 87,
    location: 'Colombo',
    fullDescription: "Welcome to Bimsan Tours Sri Lanka at a glance – an unforgettable journey through Sri Lanka's beautiful landscapes and exceptional cultural heritage. Immerse yourself in the splendors of this tropical island while exploring world-class heritage sites.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo (Play Golf at the Royal Colombo Golf Club)' },
      { day: '03 & 04', title: 'Colombo / Pinnawala / Kandy (Play Golf at the Victoria Golf Club)' },
      { day: '05 & 06', title: 'Kandy / Nuwara Eliya (Play Golf at the Nuwara Eliya Golf Club)' },
      { day: '07 & 08', title: 'Nuwara Eliya / Habarana (Visit cultural sites and temples)' }
    ]
  },
  {
    id: 'pkg_2',
    title: 'Short break tour in Sri Lanka',
    description:
      "Our Short Break Tour allows you to experience the essence of Sri Lanka. You'll experience the country's attractions and dig into its fascinating legacy in only a few days. Prepare for an action-packed....",
    image: '/image_7.jpg',
    days: 4,
    nights: 3,
    rating: 4.5,
    reviews: 62,
    location: 'Kandy',
    fullDescription: "Welcome to Bimsan Tours Short Break Tour – a quick but comprehensive journey through Sri Lanka's highlights. Immerse yourself in the splendors of this tropical island while exploring key attractions in just a few days.",
    itinerary: [
      { day: '01', title: 'Arrival - Colombo (City Tour)' },
      { day: '02', title: 'Colombo / Kandy (Visit Temple of the Tooth)' },
      { day: '03 & 04', title: 'Kandy / Colombo (Shopping and Departure)' }
    ]
  },
  {
    id: 'pkg_3',
    title: 'Yoga and Meditation Tour in Sri Lanka',
    description:
      "Welcome to Bimsan Tours' transformative Yoga and Meditation Tour in Sri Lanka! Embark on a soul-nourishing journey that combines the serene art of yoga with the profound practice of meditation, all am....",
    image: '/image_52.jpg',
    days: 7,
    nights: 6,
    rating: 4.9,
    reviews: 105,
    location: 'Mirissa',
    fullDescription: "Welcome to Bimsan Tours Yoga and Meditation Tour a spiritual journey through Sri Lanka's most tranquil locations. Immerse yourself in daily yoga and meditation sessions while exploring the natural beauty of this tropical paradise.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo (Introduction to Yoga)' },
      { day: '03 & 04', title: 'Colombo / Kandy (Meditation in the hills)' },
      { day: '05 & 06', title: 'Kandy / Mirissa (Beach yoga sessions)' },
      { day: '07', title: 'Mirissa / Colombo (Departure)' }
    ]
  },
  { 
    id: 'pkg_4',
    title: 'Ramayana Trail',
    description:
      "Dive into Sri Lanka's rich history and explore UNESCO World Heritage Sites. Visit ancient cities, temples, and royal gardens that tell stories of centuries past.",
    image: '/image_9.jpg',
    days: 7,
    nights: 6,
    rating: 4.7,
    reviews: 93,
    location: 'Anuradhapura',
    fullDescription: "Welcome to Bimsan Tours Ramayana Trail a journey through the legendary sites connected to the ancient Hindu epic. Immerse yourself in mythology and history while exploring locations mentioned in the Ramayana.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo / Chilaw (Visit Munneswaram Temple)' },
      { day: '03 & 04', title: 'Chilaw / Trincomalee (Visit Koneswaram Temple)' },
      { day: '05 & 06', title: 'Trincomalee / Nuwara Eliya (Visit Sita Amman Temple)' },
      { day: '07', title: 'Nuwara Eliya / Colombo (Departure)' }
    ]
  },
  { 
    id: 'pkg_5',
    title: 'Adventure Tour',
    description:
      "Experience Sri Lanka's misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.",
    image: '/image_10.jpg',
    days: 7,
    nights: 6,
    rating: 4.8,
    reviews: 76,
    location: 'Ella',
    fullDescription: "Welcome to Bimsan Tours- Adventure Tour – an action-packed journey through Sri Lanka's most thrilling landscapes. Immerse yourself in adrenaline-pumping activities while exploring the natural wonders of this tropical island.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo / Kitulgala (White Water Rafting)' },
      { day: '03 & 04', title: 'Kitulgala / Ella (Hiking and Zip-lining)' },
      { day: '05 & 06', title: 'Ella / Haputale (Mountain Biking)' },
      { day: '07', title: 'Haputale / Colombo (Departure)' }
    ]
  },
  { 
    id: 'pkg_6',
    title: 'Package 13',
    description:
      "Experience Sri Lanka's misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.",
    image: '/image_11.jpg',
    days: 7,
    nights: 6,
    rating: 4.6,
    reviews: 58,
    location: 'Nuwara Eliya',
    fullDescription: "Welcome to Bimsan Tours-Package 13 a specialized tour focusing on Sri Lanka's beautiful hill country. Immerse yourself in the cool climate and lush landscapes while exploring tea plantations and colonial heritage.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo / Nuwara Eliya (Tea Plantation Visit)' },
      { day: '03 & 04', title: 'Nuwara Eliya / Ella (Train Journey)' },
      { day: '05 & 06', title: 'Ella / Bandarawela (Hiking)' },
      { day: '07', title: 'Bandarawela / Colombo (Departure)' }
    ]
  },
  { 
    id: 'pkg_7',
    title: 'Paradise Golf Tour',
    description:
      "Experience Sri Lanka's misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.",
    image: '/image_12.jpg',
    days: 10,
    nights: 9,
    rating: 4.9,
    reviews: 112,
    location: 'Colombo',
    fullDescription: "Welcome to Bimsan Tours-Paradise Golf Tour – an unforgettable journey through Sri Lanka's exquisite landscapes and exceptional golf courses. Immerse yourself in the splendors of this tropical island while enjoying world-class golfing experiences.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo (Play Golf at the Royal Colombo Golf Club)' },
      { day: '03 & 04', title: 'Colombo / Pinnawala / Kandy (Play Golf at the Victoria Golf Club)' },
      { day: '05 & 06', title: 'Kandy / Nuwara Eliya (Play Golf at the Nuwara Eliya Golf Club)' },
      { day: '07 & 08', title: 'Nuwara Eliya / Hambantota (Play Golf at the Shangri-La Golf Resort and Spa)' },
      { day: '09', title: 'Hambantota / Galle / Bentota (Galle Fort Visit, Madhu River Boat Ride, Turtle Hatchery)' },
      { day: '10', title: 'Departure' }
    ]
  },
  { 
    id: 'pkg_8',
    title: 'Honeymoon Tour',
    description:
      "Experience Sri Lanka's misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.",
    image: '/image_13.jpg',
    days: 11,
    nights: 10,
    rating: 5.0,
    reviews: 145,
    location: 'Bentota',
    fullDescription: "Welcome to Bimsan Tours-Honeymoon Tour – a romantic journey through Sri Lanka's most picturesque locations. Immerse yourself in luxury and privacy while exploring beautiful beaches, misty mountains, and cultural wonders.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo / Bentota (Beach Relaxation)' },
      { day: '03 & 04', title: 'Bentota / Nuwara Eliya (Tea Plantation Visit)' },
      { day: '05 & 06', title: 'Nuwara Eliya / Ella (Train Journey)' },
      { day: '07 & 08', title: 'Ella / Yala (Safari Experience)' },
      { day: '09 & 10', title: 'Yala / Unawatuna (Beach Relaxation)' },
      { day: '11', title: 'Unawatuna / Colombo (Departure)' }
    ]
  },
  { 
    id: 'pkg_9',
    title: 'Package 14',
    description:
      "Experience Sri Lanka's misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.",
    image: '/image_14.jpg',
    days: 11,
    nights: 10,
    rating: 4.7,
    reviews: 89,
    location: 'Hikkaduwa',
    fullDescription: "Welcome to Bimsan Tours-Package 14 – a comprehensive journey through Sri Lanka's southern and central regions. Immerse yourself in beaches, wildlife, and cultural heritage while exploring this tropical paradise.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo / Hikkaduwa (Beach Relaxation)' },
      { day: '03 & 04', title: 'Hikkaduwa / Yala (Safari Experience)' },
      { day: '05 & 06', title: 'Yala / Ella (Hiking)' },
      { day: '07 & 08', title: 'Ella / Kandy (Cultural Experience)' },
      { day: '09 & 10', title: 'Kandy / Negombo (Beach Relaxation)' },
      { day: '11', title: 'Negombo / Colombo (Departure)' }
    ]
  },
  { 
    id: 'pkg_10',
    title: 'Family Tour in Sri Lanka',
    description:
      "Experience Sri Lanka's misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.",
    image: '/image_15.jpg',
    days: 14,
    nights: 13,
    rating: 4.8,
    reviews: 132,
    location: 'Galle',
    fullDescription: "Welcome to Bimsan Tours-Family Tour – a fun-filled journey through Sri Lanka designed for travelers of all ages. Immerse your family in adventure, education, and relaxation while exploring this tropical island paradise.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo / Pinnawala (Elephant Orphanage)' },
      { day: '03 & 04', title: 'Pinnawala / Kandy (Cultural Show)' },
      { day: '05 & 06', title: 'Kandy / Nuwara Eliya (Train Journey)' },
      { day: '07 & 08', title: 'Nuwara Eliya / Yala (Safari Experience)' },
      { day: '09 & 10', title: 'Yala / Mirissa (Whale Watching)' },
      { day: '11 & 12', title: 'Mirissa / Galle (Fort Visit)' },
      { day: '13 & 14', title: 'Galle / Colombo (Departure)' }
    ]
  },
  { 
    id: 'pkg_11',
    title: 'Unexplored North / East Tour of Sri Lanka',
    description:
      "Experience Sri Lanka's misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.",
    image: '/image_16.jpg',
    days: 15,
    nights: 14,
    rating: 4.6,
    reviews: 74,
    location: 'Trincomalee',
    fullDescription: "Welcome to Bimsan Tours-Unexplored North/East Tour– a unique journey through Sri Lanka's less-visited regions. Immerse yourself in authentic experiences and untouched landscapes in the northern and eastern provinces.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo / Anuradhapura (Ancient City Visit)' },
      { day: '03 & 04', title: 'Anuradhapura / Jaffna (Peninsula Exploration)' },
      { day: '05 & 06', title: 'Jaffna / Mullaitivu (Coastal Experience)' },
      { day: '07 & 08', title: 'Mullaitivu / Trincomalee (Beach Relaxation)' },
      { day: '09 & 10', title: 'Trincomalee / Batticaloa (Cultural Experience)' },
      { day: '11 & 12', title: 'Batticaloa / Arugam Bay (Surfing)' },
      { day: '13 & 14', title: 'Arugam Bay / Ampara (Wildlife Experience)' },
      { day: '15', title: 'Ampara / Colombo (Departure)' }
    ]
  },
  { 
    id: 'pkg_12',
    title: 'Off the Beaten Track Tour in Sri Lanka',
    description:
      "Experience Sri Lanka's misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.",
    image: '/image_17.jpg',
    days: 15,
    nights: 14,
    rating: 4.7,
    reviews: 68,
    location: 'Jaffna',
    fullDescription: "Welcome to Bimsan Tours-Off the Beaten Track Tour – an adventure through Sri Lanka's hidden gems and secret locations. Immerse yourself in authentic experiences away from typical tourist routes.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo / Wilpattu (Safari Experience)' },
      { day: '03 & 04', title: 'Wilpattu / Jaffna (Peninsula Exploration)' },
      { day: '05 & 06', title: 'Jaffna / Trincomalee (Beach Experience)' },
      { day: '07 & 08', title: 'Trincomalee / Knuckles Range (Hiking)' },
      { day: '09 & 10', title: 'Knuckles / Meemure (Village Experience)' },
      { day: '11 & 12', title: 'Meemure / Sinharaja (Rainforest Trek)' },
      { day: '13 & 14', title: 'Sinharaja / Deniyaya (Tea Experience)' },
      { day: '15', title: 'Deniyaya / Colombo (Departure)' }
    ]
  },
  { 
    id: 'pkg_13',
    title: 'Enchanting Sri Lanka',
    description:
      "Experience Sri Lanka's misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.",
    image: '/image_18.jpg',
    days: 15,
    nights: 14,
    rating: 4.9,
    reviews: 127,
    location: 'Sigiriya',
    fullDescription: "Welcome to Bimsan Tours-Enchanting Sri Lanka – a comprehensive journey through the island's most magical locations. Immerse yourself in culture, history, wildlife, and natural beauty across this tropical paradise.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo / Sigiriya (Rock Fortress)' },
      { day: '03 & 04', title: 'Sigiriya / Polonnaruwa (Ancient City)' },
      { day: '05 & 06', title: 'Polonnaruwa / Kandy (Temple of the Tooth)' },
      { day: '07 & 08', title: 'Kandy / Nuwara Eliya (Tea Country)' },
      { day: '09 & 10', title: 'Nuwara Eliya / Ella (Nine Arch Bridge)' },
      { day: '11 & 12', title: 'Ella / Yala (Safari Experience)' },
      { day: '13 & 14', title: 'Yala / Galle (Colonial Fort)' },
      { day: '15', title: 'Galle / Colombo (Departure)' }
    ]
  },
  { 
    id: 'pkg_14',
    title: 'Wildlife & Beach Tour',
    description: "Experience Sri Lanka's misty mountains and tea plantations with trekking, waterfalls, and scenic train rides through breathtaking hill country.",
    image: '/image_19.jpg',
    days: 15,
    nights: 14,
    rating: 4.8,
    reviews: 108,
    location: 'Yala',
    fullDescription: "'Welcome to Bimsan Tours' Wildlife & Beach Tour  a perfect combination of safari adventures and coastal relaxation. Immerse yourself in Sri Lanka's incredible biodiversity before unwinding on its pristine beaches.",
    itinerary: [
      { day: '01 & 02', title: 'Arrival - Colombo / Wilpattu (Safari Experience)' },
      { day: '03 & 04', title: 'Wilpattu / Anuradhapura (Ancient City)' },
      { day: '05 & 06', title: 'Anuradhapura / Minneriya (Elephant Gathering)' },
      { day: '07 & 08', title: 'Minneriya / Kandy (Cultural Experience)' },
      { day: '09 & 10', title: 'Kandy / Horton Plains (World s end)' },
      { day: '11 & 12', title: 'Horton Plains / Yala (Safari Experience)' },
      { day: '13 & 14', title: 'Yala / Mirissa (Beach Relaxation)' },
      { day: '15', title: 'Mirissa / Colombo (Departure)' }
    ]
  },
];

const sliderImages = [
  '/image_53.jpeg',
  '/image_15.jpg',
  '/image_10.jpg',
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<span key={i} className="text-orange-500">★</span>);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<span key={i} className="text-orange-400">★</span>);
    } else {
      stars.push(<span key={i} className="text-gray-300">★</span>);
    }
  }

  return <div className="flex">{stars}</div>;
};

const PackageDetailPopup = ({ packageData, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    adults: 1,
    children: 0,
    startDate: '',
    endDate: '',
    message: ''
  });
  
  // FIXED: Enhanced state management for form submission with better error handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [submitMessage, setSubmitMessage] = useState('');
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  const slideImages = [
    packageData.image,
    `/image_${parseInt(packageData.image.match(/\d+/)[0]) + 20}.jpg`,
    `/image_${parseInt(packageData.image.match(/\d+/)[0]) + 40}.jpg`,
  ];
  
  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlideIndex((prev) => (prev + 1) % slideImages.length);
  };
  
  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlideIndex((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // FIXED: Clear submit status when user starts typing to allow retry
    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitMessage('');
    }
  };

  // ENHANCED: Better error handling and debugging
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      // Client-side validation
      if (!formData.name.trim()) {
        throw new Error('Name is required');
      }
      
      if (!formData.email.trim()) {
        throw new Error('Email is required');
      }
      
      if (!formData.mobile.trim()) {
        throw new Error('Mobile number is required');
      }
      
      if (new Date(formData.startDate) <= new Date()) {
        throw new Error('Start date must be in the future');
      }
      
      if (new Date(formData.endDate) <= new Date(formData.startDate)) {
        throw new Error('End date must be after start date');
      }

      const bookingData = {
        packageId: packageData.id,
        packageTitle: packageData.title,
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim(),
        adults: parseInt(formData.adults),
        children: parseInt(formData.children),
        startDate: formData.startDate,
        endDate: formData.endDate,
        message: formData.message.trim()
      };

      console.log('📤 Sending booking data:', bookingData);
      console.log('📍 API URL:', `${window.location.origin}/api/v1/bookings`);

      // ENHANCED: Better API call with detailed error handling
      const response = await fetch('/api/v1/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(bookingData)
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response headers:', response.headers);

      // ENHANCED: Better response handling
      let result;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
        console.log('📥 Response data:', result);
      } else {
        const textResponse = await response.text();
        console.log('📥 Response text:', textResponse);
        throw new Error(`Server returned non-JSON response: ${textResponse.substring(0, 100)}...`);
      }

      if (!response.ok) {
        // ENHANCED: Detailed error messages based on status code
        let errorMessage = result.error || 'Unknown server error';
        
        switch (response.status) {
          case 404:
            errorMessage = 'API endpoint not found. Please check if /api/bookings exists.';
            break;
          case 500:
            errorMessage = `Database error: ${result.error || 'Internal server error'}`;
            break;
          case 400:
            errorMessage = `Validation error: ${result.error || 'Bad request'}`;
            break;
          default:
            errorMessage = `Server error (${response.status}): ${result.error || 'Unknown error'}`;
        }
        
        throw new Error(errorMessage);
      }

      // Success handling
      setSubmitStatus('success');
      setSubmitMessage(`Booking saved successfully! Booking ID: ${result.data?.id || 'N/A'}. We will contact you within 24 hours.`);
      
      console.log('✅ Booking saved successfully:', result.data);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        mobile: '',
        adults: 1,
        children: 0,
        startDate: '',
        endDate: '',
        message: ''
      });

      // Auto-close popup
      setTimeout(() => {
        onClose();
      }, 4000);

    } catch (error) {
      console.error('❌ Complete error object:', error);
      console.error('❌ Error message:', error.message);
      console.error('❌ Error stack:', error.stack);
      
      setSubmitStatus('error');
      
      // ENHANCED: More specific error messages
      let errorMessage = 'Failed to submit booking. ';
      
      if (error.message.includes('fetch')) {
        errorMessage += 'Network connection error. Please check your internet connection.';
      } else if (error.message.includes('API endpoint not found')) {
        errorMessage += 'The booking API is not set up. Please contact support.';
      } else if (error.message.includes('Database error')) {
        errorMessage += 'Database connection issue. Please try again later.';
      } else if (error.message.includes('Validation error')) {
        errorMessage += error.message.replace('Validation error: ', '');
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please try again later.';
      }
      
      setSubmitMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-screen overflow-y-auto relative">
        <div className="bg-blue-950 text-white p-4">
          <h2 className="text-2xl font-bold">{packageData.title}</h2>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 p-6">
            <div className="mb-6">
              <p className="text-gray-700 mb-4">{packageData.fullDescription}</p>
              <div className="text-orange-500 inline-block p-1 px-2 rounded mb-4 border-b border-orange-500">
                <span className="font-medium">Days {packageData.days} | Nights {packageData.nights}</span>
              </div>
            </div>

            <div className="relative w-full h-64 mb-6 group">
              <img
                src={slideImages[currentSlideIndex]}
                alt={packageData.title}
                className="w-full h-full object-cover rounded transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {slideImages.map((_, index) => (
                  <button 
                    key={index} 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlideIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlideIndex === index ? 'bg-white w-4' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 text-blue-950">Itinerary</h3>
              <div className="space-y-2">
                {packageData.itinerary.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-200 py-3">
                    <div className="flex justify-between items-center text-blue-950">
                      <h4 className="font-medium">Day {item.day}</h4>
                      <button className="text-gray-500">
                        +
                      </button>
                    </div>
                    <p className="text-gray-600">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-6 text-blue-950">
              <div className="border-b border-gray-200 py-2">
                <h3 className="text-lg font-bold">Inclusions</h3>
              </div>
              <div className="border-b border-gray-200 py-2">
                <h3 className="text-lg font-bold">Exclusions</h3>
              </div>
              <div className="py-2">
                <h3 className="text-lg font-bold">Tour Map</h3>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 bg-gray-100 p-6">
            <h3 className="text-xl font-bold mb-4 text-center text-blue-950">Book Now!</h3>
            
            {/* FIXED: Enhanced status message display with better styling */}
            {submitStatus && (
              <div className={`mb-4 p-3 rounded-lg border ${
                submitStatus === 'success' 
                  ? 'bg-green-50 border-green-200 text-green-800' 
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                <div className="flex items-center">
                  {submitStatus === 'success' ? (
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                  <span className="text-sm font-medium">{submitMessage}</span>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
        
              <div className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting} // FIXED: Disable during submission
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting} // FIXED: Disable during submission
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="mobile" 
                    placeholder="Mobile" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.mobile}
                    onChange={handleChange}
                    disabled={isSubmitting} // FIXED: Disable during submission
                    required
                  />
                </div>
                <div>
                  <input 
                    type="number" 
                    name="adults" 
                    placeholder="No. of Adults" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.adults}
                    onChange={handleChange}
                    disabled={isSubmitting} // FIXED: Disable during submission
                    min="1"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="number" 
                    name="children" 
                    placeholder="No. of Children (2-12 years)" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.children}
                    onChange={handleChange}
                    disabled={isSubmitting} // FIXED: Disable during submission
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                  <input 
                    type="date" 
                    name="startDate" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.startDate}
                    onChange={handleChange}
                    disabled={isSubmitting} // FIXED: Disable during submission
                    min={new Date().toISOString().split('T')[0]} // FIXED: Prevent past dates
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">End Date</label>
                  <input 
                    type="date" 
                    name="endDate" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.endDate}
                    onChange={handleChange}
                    disabled={isSubmitting} // FIXED: Disable during submission
                    min={formData.startDate || new Date().toISOString().split('T')[0]} // FIXED: Ensure end date is after start date
                    required
                  />
                </div>
                <div>
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting} // FIXED: Disable during submission
                  ></textarea>
                </div>
                <div>
                  {/* FIXED: Enhanced button with loading spinner and better state management */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting} // FIXED: Disable during submission
                    className={`w-full py-2 px-4 rounded font-medium transition-all duration-200 flex items-center justify-center ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        {/* ADDED: Loading spinner */}
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Send Booking Request'
                    )} {/* FIXED: More descriptive button text */}
                  </button>
                </div>
              </div>
            </form>
            
            {/* ADDED: Additional information for users */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-700">
                <strong>Note:</strong> This is a booking request. Our team will contact you within 24 hours to confirm availability and pricing.
              </p>
            </div>
          </div>
        </div>

        <button 
          onClick={onClose}
          disabled={isSubmitting} // FIXED: Disable close during submission
          className="absolute top-4 right-4 text-white text-xl font-bold hover:text-gray-300 disabled:opacity-50 transition-opacity"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default function PackagesPage() {
  // FIXED: Enhanced state management with better initialization
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState({});
  const [selectedPackage, setSelectedPackage] = useState(null);

  // FIXED: Carousel auto-play with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval); // FIXED: Cleanup interval on unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + sliderImages.length) % sliderImages.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  // FIXED: Enhanced favorite toggle with better state management
  const toggleFavorite = (e, packageId) => {
    e.stopPropagation(); 
    setFavorites(prev => ({
      ...prev,
      [packageId]: !prev[packageId] // CHANGED: Use package ID instead of index
    }));
  };

  // FIXED: Enhanced package detail opening with body scroll management
  const openPackageDetail = (pkg) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden'; // FIXED: Prevent background scrolling
  };

  // FIXED: Enhanced package detail closing with proper cleanup
  const closePackageDetail = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto'; // FIXED: Restore scrolling
  };

  // FIXED: Cleanup on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'; // FIXED: Ensure scroll is restored on unmount
    };
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="relative w-full h-[700px] overflow-hidden mb-12">
        <img
          src={sliderImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      <h2 className="text-3xl font-bold text-center mb-12 text-blue-950">
        Explore Our Travel Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16 pb-12">
        {packages.map((pkg, index) => (
          <div
            key={pkg.id} // FIXED: Use package ID for stable keys
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col md:flex-row h-72 cursor-pointer"
            onClick={() => openPackageDetail(pkg)}
          >
            <div className="relative md:w-1/3 h-full">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-full w-full object-cover"
              />
              <button 
                className="absolute top-4 left-4 bg-white bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition-colors"
                onClick={(e) => toggleFavorite(e, pkg.id)} // CHANGED: Pass package ID
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill={favorites[pkg.id] ? "orange" : "none"} // CHANGED: Use package ID
                  stroke={favorites[pkg.id] ? "orange" : "white"} // CHANGED: Use package ID
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="feather feather-heart transition-colors"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:w-2/3 flex flex-col justify-between h-full overflow-hidden">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-blue-950 mb-2 md:mb-0 truncate">{pkg.title}</h3>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center">
                      <StarRating rating={pkg.rating} />
                    </div>
                    <div className="text-sm mt-1">
                      <span className="font-medium text-gray-300">Fabulous</span>
                      <span className="text-gray-600 ml-1">{pkg.reviews} reviews</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-blue-800 mb-3">
                  <span className="font-medium">{pkg.location}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <a href="#" className="underline hover:text-blue-950" onClick={(e) => e.stopPropagation()}>Show on map</a>
                  <span className="ml-2 text-gray-600">300 m from centre</span>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-2 text-sm">{pkg.description}</p>
                
                <div className="bg-orange-500 inline-block p-1 px-2 rounded">
                  <span className="font-medium text-white">{pkg.days} Days | {pkg.nights} Nights</span>
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <button 
                  className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-md transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    openPackageDetail(pkg);
                  }}
                >
                  Show prices
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FIXED: Enhanced popup with better state management */}
      {selectedPackage && (
        <PackageDetailPopup 
          packageData={selectedPackage} 
          onClose={closePackageDetail} 
        />
      )}
    </section>
  );
}