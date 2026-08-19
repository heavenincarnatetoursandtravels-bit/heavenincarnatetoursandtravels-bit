"use client";

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <Link 
        href="tel:+919150067366"
        className="bg-brand-primary text-white p-4 rounded-full shadow-lg hover:bg-[#0c3d67] hover:-translate-y-1 transition-all duration-300"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </Link>
      
      <Link 
        href="https://wa.me/919150067366?text=Hello%20Heaven%20Incarnate%20Tours%20&%20Travels,%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={24} />
      </Link>
    </div>
  );
};
