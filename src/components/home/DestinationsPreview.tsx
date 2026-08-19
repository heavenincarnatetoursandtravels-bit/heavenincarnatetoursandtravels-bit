"use client";

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { destinationsData } from '@/data/destinations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const DestinationsPreview = () => {
  // Show first 6 destinations for preview
  const previewDestinations = destinationsData.slice(0, 6);

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Explore Popular Destinations" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {previewDestinations.map((dest, index) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden h-[400px] shadow-sm hover:shadow-xl transition-all"
            >
              <Image 
                src={dest.image}
                alt={dest.imageAlt || dest.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-brand-gold text-sm font-semibold tracking-wider uppercase mb-2 block">
                  {dest.region}
                </span>
                <h3 className="text-3xl font-bold font-heading mb-2">{dest.name}</h3>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                    {dest.shortDescription}
                  </p>
                  <Link 
                    href={`/destinations/${dest.id}`}
                    className="inline-block bg-white text-brand-primary px-6 py-2 rounded-md font-medium hover:bg-brand-gold hover:text-white transition-colors"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/destinations"
            className="inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary px-8 py-4 text-lg"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};
