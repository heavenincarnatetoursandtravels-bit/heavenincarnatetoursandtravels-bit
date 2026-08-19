import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Travel Agency in Mangadu, Chennai | Heaven Incarnate',
  description: 'Contact Heaven Incarnate Tours & Travels, your trusted travel agency in Mangadu, Chennai. Enquire about our custom holiday packages, hotel reservations, and travel transportation.',
  alternates: {
    canonical: 'https://heavenincarnatetours.in/contact',
  },
  openGraph: {
    title: 'Contact Travel Agency in Mangadu, Chennai | Heaven Incarnate',
    description: 'Contact Heaven Incarnate Tours & Travels, your trusted travel agency in Mangadu, Chennai, for holiday packages, hotel reservations, transportation, and complete tours and travels.',
    url: 'https://heavenincarnatetours.in/contact',
    type: 'website',
    siteName: 'Heaven Incarnate Tours & Travels',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Contact Travel Agency in Mangadu, Chennai | Heaven Incarnate'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Travel Agency in Mangadu, Chennai | Heaven Incarnate',
    description: 'Contact Heaven Incarnate Tours & Travels, your trusted travel agency in Mangadu, Chennai, for holiday packages, hotel reservations, transportation, and complete tours and travels.',
    images: ['https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop'],
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://heavenincarnatetours.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://heavenincarnatetours.in/contact"
              }
            ]
          })
        }}
      />
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop")' }}
          role="img"
          aria-label="Travel consultant assisting a customer with trip planning"
        >
          <div className="absolute inset-0 bg-brand-primary/80" />
        </div>
        <div className="relative z-10 text-center text-white px-4 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 drop-shadow-md">
            Plan Your Journey With Us
          </h1>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto">
            We're here to help you plan your perfect journey.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Contact Information */}
            <div className="flex-1 lg:max-w-md">
              <h2 className="text-3xl font-bold font-heading text-brand-primary mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                    <MapPin className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Heaven Incarnate Tours & Travels</strong><br/>
                      Thillai Nataraja complex, Srinivasa Nagar, Mangadu,<br/>
                      Chennai, Mangadu, Tamil Nadu 600122, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                    <Phone className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone Number</h3>
                    <a href="tel:+919150067366" className="text-brand-primary hover:text-brand-gold transition-colors font-medium">
                      +91 91500 67366
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                    <Mail className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Address</h3>
                    <a href="mailto:heavenincarnatetoursandtravels@gmail.com" className="text-brand-primary hover:text-brand-gold transition-colors font-medium">
                      heavenincarnatetoursandtravels@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                    <Clock className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday – Saturday: 10:00 AM – 7:00 PM<br/>
                      <span className="text-gray-400">Sunday: Closed</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="mt-12 h-[300px] bg-gray-200 rounded-2xl overflow-hidden relative border border-gray-300 shadow-inner">
                <iframe 
                  src="https://maps.google.com/maps?q=Heaven%20Incarnate%20Tours%20%26%20Travels%2C%20Chennai%2C%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Heaven Incarnate Tours & Travels Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
              <div className="sticky top-32">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
