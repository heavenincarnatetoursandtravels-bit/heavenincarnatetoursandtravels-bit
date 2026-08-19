"use client";

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { servicesData } from '@/data/services';
import { Building2, Map, Car, Briefcase, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = {
  Building2, Map, Car, Briefcase, Users
};

export const ServicesOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Complete Travel Solutions Under One Roof" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Map;
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <Icon className="text-brand-primary mb-6" size={40} strokeWidth={1.5} />
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                
                <Link 
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-brand-primary font-medium group-hover:text-brand-gold transition-colors"
                >
                  Learn More <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
