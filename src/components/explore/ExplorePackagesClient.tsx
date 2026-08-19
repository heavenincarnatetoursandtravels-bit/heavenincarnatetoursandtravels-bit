"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Check } from 'lucide-react';
import { BookingModal } from '../forms/BookingModal';

const packages = [
  {
    dest: 'Kodaikanal',
    slug: 'kodaikanal',
    loc: 'Tamil Nadu',
    dur: '2 Nights / 3 Days',
    price: '₹4,399 Per Person',
    desc: 'Escape to the Princess of Hill Stations and enjoy a relaxing getaway with scenic viewpoints, waterfalls, forests and beautiful lakes.',
    img: '/kodaikanal.png',
    alt: 'Kodaikanal tour package from Chennai',
    inc: ['2 Nights Accommodation', '2 Breakfasts', '2 Dinners', '2 Days Sightseeing', 'Campfire with Music', 'Bus Transportation'],
    hl: ['Coaker\'s Walk', 'Green Valley View', 'Pillar Rocks', 'Pine Forest', 'Bryant Park', 'Kodaikanal Lake', 'Bear Shola Falls', 'Dolphin\'s Nose']
  },
  {
    dest: 'Munnar',
    slug: 'kerala',
    loc: 'Kerala',
    dur: '3 Nights / 4 Days',
    price: '₹5,499 Per Person',
    desc: 'Experience the Queen of Hills with tea plantations, viewpoints, waterfalls and adventure activities.',
    img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop',
    alt: 'Munnar tour package from Chennai',
    inc: ['3 Nights Accommodation', 'Breakfast', 'Sightseeing', 'Experienced Driver'],
    hl: ['Rose Garden', 'Mattupetty Dam', 'Echo Point', 'Top Station', 'Wonder Valley', 'Spice Garden', 'Kolukkumalai']
  },
  {
    dest: 'Darjeeling & Gangtok',
    slug: 'north-east',
    loc: 'West Bengal & Sikkim',
    dur: '5 Nights',
    price: 'Starting From ₹13,999',
    desc: 'Enjoy breathtaking mountains, tea gardens, monasteries and beautiful Himalayan landscapes.',
    img: '/himachal.png',
    alt: 'Darjeeling and Gangtok tour package from Chennai',
    inc: ['Accommodation', 'Breakfast', 'Transportation', 'Sightseeing'],
    hl: ['Darjeeling', 'Gangtok', 'Tsomgo Lake', 'Nathula Pass', 'Baba Mandir']
  },
  {
    dest: 'Rajasthan',
    slug: 'rajasthan',
    loc: 'Rajasthan',
    dur: '5 Nights / 6 Days',
    price: 'Starting From ₹20,999',
    desc: 'Discover royal palaces, forts, lakes, deserts and rich cultural heritage.',
    img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
    alt: 'Rajasthan tour package from Chennai',
    inc: ['Accommodation', 'Breakfast & Dinner', 'Transportation', 'Sightseeing'],
    hl: ['Udaipur', 'Mount Abu', 'Jodhpur', 'Jaisalmer']
  }
];

export const ExplorePackagesClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');

  const handleBookNow = (dest: string) => {
    setSelectedDest(dest);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">Featured Tour Packages</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {packages.map((pkg, i) => (
              <div key={i} className="group flex flex-col bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image src={pkg.img} alt={pkg.alt || pkg.dest} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-blue-900 shadow-sm">
                    {pkg.price}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                    <h3 className="text-2xl font-bold text-white mb-1">{pkg.dest}</h3>
                    <div className="flex items-center text-white/80 text-sm gap-4">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> {pkg.loc}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {pkg.dur}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 line-clamp-2">{pkg.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8 flex-1">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Package Includes</h4>
                      <ul className="space-y-2">
                        {pkg.inc.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Highlights</h4>
                      <ul className="space-y-1.5 flex flex-wrap gap-1">
                        {pkg.hl.map((item, idx) => (
                          <li key={idx} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    <Link href={`/destinations/${pkg.slug}`} className="flex-1 py-3 px-4 border border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-center inline-block">
                      View Details
                    </Link>
                    <button 
                      onClick={() => handleBookNow(pkg.dest)}
                      className="flex-1 py-3 px-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialDestination={selectedDest}
      />
    </>
  );
};
