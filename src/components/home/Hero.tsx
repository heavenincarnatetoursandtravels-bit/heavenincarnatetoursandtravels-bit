"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop")' }}
        role="img"
        aria-label="Travelers enjoying a memorable holiday destination"
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.08) 100%)' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 text-center text-white relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-sm font-medium mb-6 uppercase tracking-wider shadow-sm">
            Heaven Incarnate Tours & Travels
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 text-white [text-shadow:_0_4px_12px_rgb(0_0_0_/_50%)]">
            Trusted Tours and Travels in Mangadu & Chennai
          </h1>
          <p className="text-lg md:text-xl text-gray-50 mb-10 max-w-3xl mx-auto leading-relaxed [text-shadow:_0_2px_6px_rgb(0_0_0_/_50%)]">
            Discover memorable journeys with Heaven Incarnate Tours & Travels, your trusted travel agency in Mangadu, Chennai. From thoughtfully planned <Link href="/packages" className="underline hover:text-blue-200 transition-colors">holiday packages</Link> and comfortable hotel stays to reliable transportation, group tours, corporate travel, and airport transfers, we bring <Link href="/services" className="underline hover:text-blue-200 transition-colors">essential travel services</Link> together under one roof. Let us take care of the travel arrangements while you focus on enjoying every moment of your journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Plan Your Journey With Us
            </Button>
            <Button href="https://wa.me/919150067366" variant="whatsapp" size="lg" className="w-full sm:w-auto">
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
