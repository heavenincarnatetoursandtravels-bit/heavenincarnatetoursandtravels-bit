"use client";

import React from 'react';
import { Users, Map, Clock, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrustStats = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Travelers" },
    { icon: Map, value: "Pan India", label: "Travel Services" },
    { icon: Clock, value: "24/7", label: "Customer Support" },
    { icon: HeartHandshake, value: "100%", label: "Personalized Planning" },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors duration-300">
                  <Icon className="text-brand-primary group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-3xl font-bold font-heading text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
