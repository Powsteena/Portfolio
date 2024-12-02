import React, { useState, useEffect } from 'react';
import img from './WhatsApp_Image_2024-12-02_at_10.03.26-removebg-preview.png';

const ImageFrame = () => {
  const [backgroundPosition, setBackgroundPosition] = useState('0% 50%');

  useEffect(() => {
    const animateGradient = () => {
      const keyframes = ['0% 50%', '50% 50%', '100% 50%', '50% 50%'];
      let currentFrame = 0;

      const intervalId = setInterval(() => {
        setBackgroundPosition(keyframes[currentFrame]);
        currentFrame = (currentFrame + 1) % keyframes.length;
      }, 1500);

      return () => clearInterval(intervalId);
    };

    const cleanup = animateGradient();
    return cleanup;
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto group">
      {/* Animated gradient background */}
      <div 
        style={{
          backgroundImage: 'linear-gradient(to right, #8A2BE2, #FF69B4, #4169E1)',
          backgroundSize: '400% 100%',
          backgroundPosition: backgroundPosition,
          transition: 'background-position 1.5s ease',
          opacity: 0.7,
          filter: 'blur(60px)',
        }}
        className="absolute inset-0 rounded-full"
      ></div>
      
      {/* Image container */}
      <div className="relative z-10 p-2 bg-gray-900 rounded-full">
        <div className="overflow-hidden rounded-full">
          <img 
            src={img}
            alt="Mary Powsteena - Full Stack Developer"
            className="w-full h-full object-cover rounded-full 
              transition-transform duration-300 
              group-hover:scale-105 
              group-hover:rotate-2 
              shadow-lg"
            loading="lazy"
            width="256"
            height="366"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageFrame;
