"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialDestination }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travelers, setTravelers] = useState('2');

  useEffect(() => {
    if (isOpen) {
      setDestination(initialDestination);
      setStatus('idle');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialDestination]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (end < start) {
      alert("End Date cannot be earlier than Start Date.");
      return;
    }

    if (parseInt(travelers, 10) < 1) {
      alert("Number of Travelers must be at least 1.");
      return;
    }

    setStatus('submitting');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const hotelCategory = formData.get('hotelCategory') as string;
    const message = formData.get('message') as string;

    // Formatting date as dd-mm-yyyy for WhatsApp
    const formatStrDate = (dString: string) => {
      if (!dString) return '';
      const parts = dString.split('-');
      if (parts.length === 3) {
        // From yyyy-mm-dd to dd-mm-yyyy
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
      }
      return dString;
    };

    const whatsappMessage = `Hello Heaven Incarnate Tours & Travels,

I would like to enquire about a tour package.

Booking Details:
Full Name: ${name}
Mobile Number: ${phone}
Email: ${email || 'N/A'}
Destination: ${destination}
Start Date: ${formatStrDate(startDate)}
End Date: ${formatStrDate(endDate)}
Number of Travelers: ${travelers}
Hotel Category: ${hotelCategory}

Message / Requirements:
${message || 'None'}

Please share the best available package and quotation.

Thank you.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919150067366?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setStatus('success');
    
    // Close modal after a short delay
    setTimeout(() => {
      onClose();
      form.reset();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 transition-opacity">
      {/* Click away to close */}
      <div className="absolute inset-0" onClick={onClose} aria-label="Close modal"></div>
      
      <div className="relative bg-white w-full sm:w-[500px] max-w-full rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[90vh] flex flex-col z-10 animate-in slide-in-from-bottom-10 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold font-heading text-blue-900">Book Your Trip</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Package Context (General Enquiry) */}
        {!initialDestination && (
          <div className="bg-blue-50/50 px-5 py-3 border-b border-gray-100 flex justify-between items-center text-sm">
            <div className="text-blue-900"><span className="font-medium text-gray-500">Package:</span> <span className="font-semibold">General Travel Enquiry</span></div>
            <div className="text-emerald-600 font-bold">On Request</div>
          </div>
        )}

        {/* Body */}
        <div className="p-5 overflow-y-auto">
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Enquiry Ready!</h4>
              <p className="text-gray-600">Your enquiry is ready in WhatsApp. Please send the message to complete your enquiry.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                <input required type="text" id="name" name="name" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Mobile Number *</label>
                  <input required type="tel" id="phone" name="phone" pattern="[0-9+ \-()]{10,15}" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="+91 9876543210" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="destination" className="text-sm font-medium text-gray-700">Destination *</label>
                <input required type="text" id="destination" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="e.g. Kerala, Kashmir" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="startDate" className="text-sm font-medium text-gray-700">Start Date *</label>
                  <input required type="date" id="startDate" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="endDate" className="text-sm font-medium text-gray-700">End Date *</label>
                  <input required type="date" id="endDate" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="travelers" className="text-sm font-medium text-gray-700">Number of Travelers *</label>
                  <input required type="number" min="1" id="travelers" name="travelers" value={travelers} onChange={(e) => setTravelers(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="2" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="hotelCategory" className="text-sm font-medium text-gray-700">Hotel Category *</label>
                  <select required id="hotelCategory" name="hotelCategory" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                    <option value="">Select Hotel Category</option>
                    <option value="1 Star">1 Star</option>
                    <option value="2 Star">2 Star</option>
                    <option value="3 Star">3 Star</option>
                    <option value="4 Star">4 Star</option>
                    <option value="5 Star">5 Star</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message / Requirements</label>
                <textarea id="message" name="message" rows={3} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us more about your travel plans..."></textarea>
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full py-3" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Preparing Enquiry...' : 'Get Free Quote'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
