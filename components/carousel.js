'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carousel() {
  const images = [
    "/phonecover.webp",
    "/pool.webp",
    "/dining.webp",
    "/bedroom.webp"
  ];

  // Current image index
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the image index periodically
      setImageIndex(prev => (prev + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen relative">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === imageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: index === imageIndex ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Background ${index}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}
    </div>
  );
}
