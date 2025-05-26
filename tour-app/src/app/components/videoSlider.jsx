'use client';

import { useEffect, useRef, useState } from 'react';

const videoSources = [
  '/bdvideo_1.mp4',
  '/bdvideo_2.mp4',
];

export default function VideoSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
   
    checkIfMobile();
    
  
    window.addEventListener('resize', checkIfMobile);
    
  
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);


  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videoSources.length);
    }, 7000); 
    
    return () => clearInterval(interval);
  }, [isPlaying]);


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error('Video playback failed:', error);
        setIsPlaying(false);
      });
    }
  }, [current]);

 
  const goToSlide = (index) => {
    setCurrent(index);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      <video
        key={videoSources[current]}
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline 
        loop={false}
      >
        <source src={videoSources[current]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20 flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-center px-4 tracking-wider">
          Journey  ~  Explore  ~  Connect
        </h1>
        
      
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-md md:max-w-lg lg:max-w-2xl text-center px-4 font-light">
          Discover extraordinary destinations with us
        </p>
        
    
        <button className="mt-6 sm:mt-8 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition-colors duration-300 text-sm sm:text-base font-medium">
          Start Your Journey
        </button>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-3">
        {videoSources.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    
      <button
        onClick={togglePlayPause}
        className="absolute bottom-6 right-6 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
}