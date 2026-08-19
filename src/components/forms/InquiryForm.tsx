"use client";

import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const InquiryForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const getDuration = () => {
    if (!startDate || !endDate) return null;
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const diffTime = end.getTime() - start.getTime();
    if (diffTime < 0) return { error: 'End Date cannot be earlier than Start Date' };
    
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    
    const days = diffDays + 1;
    const nights = diffDays;
    
    return { days, nights };
  };

  const duration = getDuration();
  const isDateInvalid = duration?.error ? true : false;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isDateInvalid) return;

    setStatus('submitting');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const email = formData.get('email') || '';
    const travelers = formData.get('travelers') || '';
    const destination = formData.get('destination') || '';
    const hotelCategory = formData.get('hotelCategory') || '';
    const message = formData.get('message') || '';

    let formattedStartDate = startDate;
    let formattedEndDate = endDate;
    if (startDate) {
      const d = new Date(startDate);
      // Ensure we format the UTC date to avoid timezone shift
      formattedStartDate = new Date(d.getTime() + d.getTimezoneOffset() * 60000).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }
    if (endDate) {
      const d = new Date(endDate);
      formattedEndDate = new Date(d.getTime() + d.getTimezoneOffset() * 60000).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    const formatLine = (label: string, value: string | null | undefined) => {
      if (!value) return null;
      return `*${label}:*`.padEnd(32, ' ') + value;
    };

    const customerDetails = [
      formatLine('Name', name as string),
      formatLine('Phone', phone as string),
      formatLine('Email', email as string)
    ].filter(Boolean).join('\n');

    const tripDetails = [
      formatLine('Destination', destination as string),
      formatLine('Start Date', formattedStartDate),
      formatLine('End Date', formattedEndDate),
      formatLine('Duration', `${duration?.days || 0} Days`)
    ].filter(Boolean).join('\n');

    const travellersDetails = formatLine('Total', travelers as string);
    const hotelDetails = formatLine('Hotel', hotelCategory as string);
    const requirementsDetails = formatLine('Message', message as string);

    const sections = [
      '*CUSTOMER DETAILS*\n\n' + customerDetails,
      '*TRIP DETAILS*\n\n' + tripDetails,
      '*TRAVELLERS*\n\n' + travellersDetails,
      '*HOTEL PREFERENCE*\n\n' + hotelDetails,
      requirementsDetails ? '*REQUIREMENTS*\n\n' + requirementsDetails : null
    ].filter(Boolean).join('\n\n');

    const whatsappMessage = sections;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919150067366?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setStatus('success');
    form.reset();
    setStartDate('');
    setEndDate('');

    // Reset success message after 5 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 w-full max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold font-heading text-brand-primary mb-6 text-center">
        Plan Your Next Journey With Us
      </h3>
      
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md text-center font-medium border border-green-200">
          Redirecting to WhatsApp...
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
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" autoComplete="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium" placeholder="john@example.com" />
          </div>
          <div className="space-y-1">
            <label htmlFor="destination" className="text-sm font-medium text-gray-700">Destination *</label>
            <input required type="text" id="destination" name="destination" autoComplete="off" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium" placeholder="e.g. Kerala, Kashmir" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="startDate" className="text-sm font-medium text-gray-700">Start Date *</label>
            <input required type="date" id="startDate" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium" />
          </div>
          <div className="space-y-1">
            <label htmlFor="endDate" className="text-sm font-medium text-gray-700">End Date *</label>
            <input required type="date" id="endDate" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium" />
          </div>
        </div>

        {duration && duration.error && (
          <div className="text-sm font-medium text-red-600 bg-red-50 p-3 rounded-md border border-red-200">
            {duration.error}
          </div>
        )}
        
        {duration && !duration.error && (
          <div className="text-sm font-medium text-brand-primary bg-brand-primary/5 p-3 rounded-md border border-brand-primary/20">
            Total Duration: <span className="font-semibold">{duration.days} Days / {duration.nights} Nights</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="travelers" className="text-sm font-medium text-gray-700">Number of Travelers *</label>
            <input required type="number" min="1" id="travelers" name="travelers" autoComplete="off" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium" placeholder="2" />
          </div>
          <div className="space-y-1">
            <label htmlFor="hotelCategory" className="text-sm font-medium text-gray-700">Hotel Category *</label>
            <select required id="hotelCategory" name="hotelCategory" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-white font-medium">
              <option value="">[ Select Hotel Category ]</option>
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
          <textarea id="message" name="message" autoComplete="off" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none font-medium" placeholder="Tell us more about your travel plans..."></textarea>
        </div>
        
        <div className="pt-2">
          <Button 
            type="submit" 
            variant="primary" 
            size="lg" 
            className="w-full"
            disabled={status === 'submitting' || isDateInvalid}
          >
            {status === 'submitting' ? 'Submitting...' : 'Get Free Quote'}
          </Button>
        </div>
      </form>
    </div>
  );
};
