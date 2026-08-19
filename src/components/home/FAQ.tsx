"use client";

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What travel services does Heaven Incarnate Tours & Travels offer?",
    answer: "We offer holiday packages, hotel reservations, transportation services, group tours, corporate travel solutions, and airport transfers."
  },
  {
    question: "Do you provide customized travel arrangements?",
    answer: "Yes. We understand that every traveler has different requirements and can assist with suitable travel arrangements based on your needs and preferences."
  },
  {
    question: "Do you arrange group tours?",
    answer: "Yes. We provide group travel arrangements including transportation, accommodation, sightseeing, and itinerary planning."
  },
  {
    question: "Do you provide airport transfer services?",
    answer: "Yes. We arrange convenient airport pickup and drop-off services for travelers."
  },
  {
    question: "Do you offer corporate travel solutions?",
    answer: "Yes. We assist businesses with travel arrangements such as accommodation, transportation, and related travel support."
  },
  {
    question: "How can I enquire about a trip?",
    answer: "You can contact Heaven Incarnate Tours & Travels through our enquiry or contact options to discuss your travel requirements."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <SectionHeading title="Frequently Asked Questions" />
        
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`text-brand-primary transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={24}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 bg-white border-t border-gray-100 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
