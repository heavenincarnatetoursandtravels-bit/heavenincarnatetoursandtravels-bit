"use client";

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { MapPin, DollarSign, Users, ShieldCheck, Settings, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseUs = () => {
  const reasons = [
    { icon: Settings, title: "Personalized Travel Assistance", desc: "We understand your travel requirements and help provide suitable solutions based on your preferences and plans." },
    { icon: MapPin, title: "Carefully Planned Experiences", desc: "We focus on important travel arrangements, including accommodation, transportation, and sightseeing." },
    { icon: ShieldCheck, title: "Reliable Travel Arrangements", desc: "From local travel to airport transfers and group transportation, we help organize convenient travel solutions." },
    { icon: HeadphonesIcon, title: "End-to-End Support", desc: "Our assistance extends beyond booking, helping you throughout your travel planning process." },
    { icon: Users, title: "Customer-Focused Service", desc: "Your comfort and satisfaction remain at the heart of our approach." },
  ];

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <SectionHeading 
            title="Why Choose Heaven Incarnate?" 
            subtitle="Every journey deserves careful planning and personal attention. At Heaven Incarnate Tours & Travels, we focus on making your travel experience comfortable, convenient, and well organized." 
          />
          <p className="text-xl font-medium text-brand-gold mt-4">You choose the destination. We help take care of the journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                  <Icon className="text-brand-primary group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
