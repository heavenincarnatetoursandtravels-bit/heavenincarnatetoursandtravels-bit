"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import Link from 'next/link';

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop", // Kerala
  "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop", // Kashmir
  "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop", // Goa
  "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2071&auto=format&fit=crop", // Ooty
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop", // Andaman
];

export const FinalCTA = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 7000); // Rotate every 7 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative py-20 overflow-hidden min-h-[500px] flex flex-col justify-center"
      role="img"
      aria-label="Beautiful travel destination for a memorable holiday"
    >
      {/* Background Images Slider */}
      {BACKGROUND_IMAGES.map((img, index) => (
        <div 
          key={img}
          className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed transition-opacity duration-1500 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url("${img}")` }}
        />
      ))}
      
      {/* Overlay - 15% light blue as requested */}
      <div 
        className="absolute inset-0 z-10"
        style={{ backgroundColor: 'rgba(63,169,245,0.15)' }}
      />

      <div className="container mx-auto px-4 md:px-6 z-20 relative text-center text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 [text-shadow:_0_4px_12px_rgb(0_0_0_/_50%)]">
          Ready to Plan Your Next Journey?
        </h2>
        <p className="text-xl md:text-2xl text-white mb-2 max-w-2xl mx-auto font-medium [text-shadow:_0_2px_6px_rgb(0_0_0_/_50%)]">
          Your dream destination is just a plan away. Let <Link href="/about" className="underline hover:text-blue-200 transition-colors">Heaven Incarnate Tours & Travels</Link> help you arrange a comfortable, convenient, and memorable travel experience.
        </p>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto font-bold [text-shadow:_0_2px_6px_rgb(0_0_0_/_50%)]">
          Plan. Travel. Experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg" className="w-full sm:w-auto px-10">
            Enquire Now
          </Button>
          <Button href="https://wa.me/919150067366" variant="whatsapp" size="lg" className="w-full sm:w-auto px-10">
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
};
