'use client';

import React from 'react';

export const ScrollToBookingButton = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('booking-section');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      className="inline-block bg-brand-primary text-white font-bold px-8 py-4 rounded-md hover:bg-[#0c3d67] transition-colors shadow-lg border-2 border-transparent hover:border-white/20"
    >
      Book Your Trip
    </button>
  );
};
