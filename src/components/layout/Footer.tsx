import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Column 1: Company Info */}
          <div className="lg:col-span-2 sm:col-span-2">
            <div className="mb-6 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
              <div className="bg-white p-2 rounded-lg inline-flex items-center justify-center shrink-0">
                <img 
                  src="/logo-transparent.png" 
                  alt="Heaven Incarnate Logo" 
                  className="h-[70px] md:h-[80px] w-auto object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-heading font-bold text-[18px] md:text-[26px] leading-[1.2] text-white whitespace-nowrap">
                  Heaven Incarnate
                </span>
                <span className="font-sans font-medium text-[14px] md:text-[16px] leading-[1.2] text-brand-gold mt-1 whitespace-nowrap">
                  Tours & Travels
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Heaven Incarnate Tours & Travels is your trusted travel partner in Chennai, offering thoughtfully planned holiday packages, comfortable hotel stays, reliable transportation, group tours, corporate travel solutions, and personalized travel assistance. We help you travel with confidence and create memorable journeys.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">QUICK LINKS</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/" className="text-gray-300 hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="/packages" className="text-gray-300 hover:text-brand-gold transition-colors">Tour Packages</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Destinations</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-brand-gold transition-colors">Hotels</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-brand-gold transition-colors">Transportation</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">OUR SERVICES</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/packages" className="text-gray-300 hover:text-brand-gold transition-colors">Holiday Tour Packages</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-brand-gold transition-colors">Hotel Reservations</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-brand-gold transition-colors">Transportation Services</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-brand-gold transition-colors">Group Tours</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-brand-gold transition-colors">Corporate Travel</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-brand-gold transition-colors">Airport Transfers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-brand-gold transition-colors">Customized Travel</Link></li>
            </ul>
          </div>

          {/* Column 4: Destinations */}
          <div>
            <h4 className="font-bold text-lg mb-4">POPULAR DESTINATIONS</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Kerala</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Kodaikanal</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Goa</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Andaman & Nicobar</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Kashmir</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Himachal Pradesh</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Rajasthan</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Darjeeling</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Bali</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Singapore</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Malaysia</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-brand-gold transition-colors">Thailand</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">CONTACT US</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-gray-300">
                <MapPin className="shrink-0 text-brand-gold mt-1" size={20} />
                <span>Thillai Nataraja complex, Srinivasa Nagar, Mangadu, Chennai, Mangadu, Tamil Nadu 600122, India</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Phone className="shrink-0 text-brand-gold mt-1" size={20} />
                <a href="tel:+919150067366" className="hover:text-white transition-colors">+91 91500 67366</a>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Mail className="shrink-0 text-brand-gold mt-1" size={20} />
                <a href="mailto:heavenincarnatetoursandtravels@gmail.com" className="hover:text-white transition-colors break-all">heavenincarnatetoursandtravels@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col items-center text-center gap-4 text-sm text-gray-400">
          <p>© 2026 Heaven Incarnate Tours & Travels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
