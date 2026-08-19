"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookingModal } from '../forms/BookingModal';

export const ExploreCTAClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-32 px-4 bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Book your dream vacation today with Heaven Incarnate Tours & Travels and experience hassle-free travel with unforgettable memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-600/30 inline-flex items-center justify-center cursor-pointer"
            >
              Book Now
            </button>
            <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 hover:scale-105 transition-all inline-flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialDestination=""
      />
    </>
  );
};
