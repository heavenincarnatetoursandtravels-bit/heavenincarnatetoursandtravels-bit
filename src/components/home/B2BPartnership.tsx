"use client";

import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const B2BPartnership = () => {
  const benefits = [
    "Hotel Contract Rates",
    "Transportation Support",
    "Group Handling",
    "Destination Assistance",
    "Corporate Travel Solutions"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full block relative min-h-[450px] h-[450px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
              alt="B2B Travel Partnership"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-brand-primary mb-4 leading-tight">
              Partner With Heaven Incarnate
            </h2>
            <h3 className="text-xl font-medium text-gray-700 mb-6">
              Reliable B2B travel support for hotels, travel companies, corporates, and destination partners.
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We offer exclusive B2B partnerships designed to help travel agents and corporate partners deliver exceptional experiences across India with competitive rates and seamless ground support.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="text-brand-gold shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            
            <Button href="/contact?partnership=b2b" variant="primary" size="lg">
              Become a B2B Partner
            </Button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
