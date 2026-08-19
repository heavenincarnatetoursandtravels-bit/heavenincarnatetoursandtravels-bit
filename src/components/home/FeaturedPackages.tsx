"use client";

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { packagesData } from '@/data/packages';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Clock, MapPin } from 'lucide-react';

export const FeaturedPackages = () => {
  const featured = packagesData.filter(pkg => pkg.featured).slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Popular Holiday Packages" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {featured.map((pkg, index) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={pkg.image}
                  alt={pkg.imageAlt || pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2}
                />
                <div className="absolute top-4 right-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Best Seller
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{pkg.title}</h3>
                
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock size={16} className="mr-2 text-brand-primary" />
                  {pkg.duration}
                </div>
                
                <div className="flex items-start text-sm text-gray-600 mb-4">
                  <MapPin size={16} className="mr-2 text-brand-primary shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{pkg.destinations}</span>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-500">
                    Starts <br/>
                    <span className="text-lg text-brand-primary font-heading font-bold">{pkg.startingPrice}</span>
                  </div>
                  <Button 
                    href={`https://wa.me/919150067366?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.title} package. Please share the package details, availability, start date, end date, number of days, and total price.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary" 
                    size="sm"
                  >
                    Enquire Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
