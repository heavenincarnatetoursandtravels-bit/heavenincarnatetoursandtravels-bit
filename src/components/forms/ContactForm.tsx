
"use client";

import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    } finally {
      setTimeout(() => {
        setStatus((currentStatus) => currentStatus === 'submitting' ? currentStatus : 'idle');
      }, 5000);
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 w-full max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold font-heading text-brand-primary mb-6 text-center">
        Send Us a Message
      </h3>
      
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md text-center font-medium border border-green-200">
          Your message has been sent successfully. We will contact you soon.
        </div>
      )}
      
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md text-center font-medium border border-red-200">
          Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
            <input required type="text" id="name" name="name" autoComplete="name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium" placeholder="John Doe" />
          </div>
          <div className="space-y-1">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Mobile Number *</label>
            <input required type="tel" id="phone" name="phone" autoComplete="tel" pattern="[0-9]{10,15}" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium" placeholder="+91 9876543210" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
            <input required type="email" id="email" name="email" autoComplete="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium" placeholder="john@example.com" />
          </div>
          <div className="space-y-1">
            <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject *</label>
            <input required type="text" id="subject" name="subject" autoComplete="off" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium" placeholder="How can we help?" />
          </div>
        </div>
        
        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">Message *</label>
          <textarea required id="message" name="message" autoComplete="off" rows={5} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none font-medium" placeholder="Tell us more..."></textarea>
        </div>
        
        <div className="pt-2">
          <Button 
            type="submit" 
            variant="primary" 
            size="lg" 
            className="w-full"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};
