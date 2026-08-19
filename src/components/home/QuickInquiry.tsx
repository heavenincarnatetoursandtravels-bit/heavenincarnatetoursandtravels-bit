"use client";

import React from 'react';
import { InquiryForm } from '../forms/InquiryForm';

export const QuickInquiry = () => {
  return (
    <section className="py-24 bg-brand-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <InquiryForm />
      </div>
    </section>
  );
};
