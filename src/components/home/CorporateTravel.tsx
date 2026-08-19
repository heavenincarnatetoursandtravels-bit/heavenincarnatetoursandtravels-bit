"use client";

import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const CorporateTravel = () => {
  return (
    <section className="py-24 bg-brand-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              Corporate Travel Solutions That Keep Business Moving
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl">
              Heaven Incarnate Tours & Travels provides reliable travel solutions for businesses, teams, conferences, events, and long-term corporate requirements.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-white">
              {['Employee Accommodation', 'Business Travel', 'Conference Travel', 'Event Travel', 'Long-Term Contracts'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Button href="/contact?service=corporate" variant="gold" size="lg">
              Talk to Our Corporate Travel Team
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-lg lg:max-w-none rounded-2xl overflow-hidden shadow-2xl relative h-[400px]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("/corporate-travel.png")' }}
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
