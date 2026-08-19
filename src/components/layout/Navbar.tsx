"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Packages', href: '/packages' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-sm py-3 border-b border-gray-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 z-50 group shrink-0">
            <div className="relative flex items-center justify-center rounded-md shrink-0">
              <img 
                src="/logo-transparent.png" 
                alt="Heaven Incarnate Logo" 
                className="h-[45px] md:h-[55px] lg:h-[65px] xl:h-[75px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-heading font-bold text-[17px] md:text-2xl leading-tight text-brand-primary whitespace-nowrap">
                Heaven Incarnate
              </span>
              <span className="font-sans font-bold text-[11px] md:text-[13px] text-brand-gold uppercase tracking-[0.1em] whitespace-nowrap mt-0.5">
                Tours & Travels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={`font-medium text-sm transition-colors hover:text-brand-gold ${
                      pathname === link.href 
                        ? 'text-brand-gold' 
                        : 'text-brand-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4 ml-4">
              <a href="tel:+919150067366" className="flex items-center gap-2 font-semibold text-sm transition-colors hover:text-brand-gold text-brand-primary">
                <Phone size={16} /> Call Now
              </a>
              <Button href="https://wa.me/919150067366" variant="whatsapp" size="sm" className="hidden xl:flex">
                <MessageCircle size={16} className="mr-2" /> WhatsApp
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 text-brand-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center px-6 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <ul className="flex flex-col gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className={`text-2xl font-bold ${pathname === link.href ? 'text-brand-gold' : 'text-brand-primary'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-col gap-4 mt-12 items-center">
          <Button href="tel:+919150067366" variant="primary" size="lg" className="w-full max-w-xs">
            <Phone size={20} className="mr-2" /> +91 91500 67366
          </Button>
          <Button href="https://wa.me/919150067366" variant="whatsapp" size="lg" className="w-full max-w-xs">
            <MessageCircle size={20} className="mr-2" /> WhatsApp Us
          </Button>
        </div>
      </div>
    </header>
  );
};
