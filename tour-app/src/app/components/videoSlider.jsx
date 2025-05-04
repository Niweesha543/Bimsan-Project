'use client';

import { useEffect, useRef, useState } from 'react';

const videoSources = [
  '/bdvideo_1.mp4',
  '/bdvideo_2.mp4',
  
];

export default function VideoSlider() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videoSources.length);
    }, 7000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  return (
    <div className="w-full h-screen overflow-hidden">
      <video
        key={videoSources[current]}
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop={false}
      >
        <source src={videoSources[current]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20 flex items-center justify-center text-white text-[80px] font-serif">
      Journey  ~  Explore  ~  Connect
      </div>


    </div>
  );
}

