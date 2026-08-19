"use client";

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Tell Us Your Plan", desc: "Share your destination, dates, and requirements." },
    { num: "02", title: "Get a Customized Quote", desc: "Our travel experts create a plan around your needs." },
    { num: "03", title: "Confirm Your Journey", desc: "Choose your preferred hotels, transport, and package." },
    { num: "04", title: "Travel With Confidence", desc: "Enjoy reliable support throughout your journey." },
  ];

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="How It Works" centered />
        
        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-brand-primary to-blue-100 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-24 h-24 rounded-full bg-white shadow-md border-4 border-background-light flex items-center justify-center mb-6 text-2xl font-bold font-heading text-brand-primary">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 px-4">{step.desc}</p>
                
                {/* Mobile connecting line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden h-12 w-0.5 bg-brand-primary/20 my-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
