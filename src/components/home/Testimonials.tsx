"use client";

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonialsData } from '@/data/testimonials';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="What Our Travelers Say" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative mt-6"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg">
                <Quote size={20} className="fill-current" />
              </div>
              
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "text-brand-gold fill-current" : "text-gray-300"} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                {testimonial.destination && (
                  <span className="text-sm text-brand-primary">{testimonial.destination}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
