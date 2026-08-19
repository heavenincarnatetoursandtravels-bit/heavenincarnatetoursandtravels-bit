import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { B2BPartnership } from '@/components/home/B2BPartnership';
import { CorporateTravel } from '@/components/home/CorporateTravel';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Agency in Mangadu | Heaven Incarnate Tours',
  description: 'Learn about Heaven Incarnate Tours & Travels, a trusted travel agency in Mangadu and Chennai, offering personalized holiday packages, tours, transport, and travel support.',
  alternates: {
    canonical: 'https://heavenincarnatetours.in/about',
  },
  openGraph: {
    title: 'Travel Agency in Mangadu | Heaven Incarnate Tours',
    description: 'Learn about Heaven Incarnate Tours & Travels, a trusted travel agency in Mangadu and Chennai, offering personalized holiday packages, tours, transport, and travel support.',
    url: 'https://heavenincarnatetours.in/about',
    type: 'website',
    siteName: 'Heaven Incarnate Tours & Travels',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Travel Agency in Mangadu | Heaven Incarnate Tours'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Agency in Mangadu | Heaven Incarnate Tours',
    description: 'Learn about Heaven Incarnate Tours & Travels, a trusted travel agency in Mangadu and Chennai, offering personalized holiday packages, tours, transport, and travel support.',
    images: ['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop'],
  }
};

export default function AboutPage() {
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
                "name": "About",
                "item": "https://heavenincarnatetours.in/about"
              }
            ]
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop")' }}
          role="img"
          aria-label="Travelers enjoying a comfortable and memorable journey"
        >
          <div className="absolute inset-0 bg-brand-primary/80" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
            About Heaven Incarnate Tours & Travels
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 w-full relative min-h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1000&auto=format&fit=crop"
                alt="Travel team assisting customers with trip planning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold font-heading text-brand-primary mb-6">Your Journey, Our Responsibility</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Heaven Incarnate Tours & Travels is a dedicated travel agency in Mangadu, Chennai providing reliable and personalized travel solutions for individuals, families, groups, and corporate travelers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We offer a range of services including <Link href="/packages" className="text-brand-primary hover:underline">holiday packages</Link>, hotel reservations, <Link href="/services" className="text-brand-primary hover:underline">transportation</Link>, group tours, <Link href="/services" className="text-brand-primary hover:underline">corporate travel solutions</Link>, and airport transfers. By bringing essential travel services together, we make travel planning more convenient, organized, and hassle-free.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We understand that every journey is different. Our approach is focused on understanding your requirements and helping you choose suitable travel arrangements based on your destination, preferences, and plans.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you are planning a family vacation, a group tour, or business travel, our team is committed to providing professional assistance and helping make your journey comfortable, convenient, and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background-light border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="text-2xl font-bold font-heading text-brand-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide affordable, reliable, and memorable travel experiences through personalized service and professional travel planning.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M12 2v20"/><path d="m4.93 4.93 14.14 14.14"/><path d="m19.07 4.93-14.14 14.14"/></svg>
              </div>
              <h3 className="text-2xl font-bold font-heading text-brand-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become one of India's most trusted travel service providers for leisure, corporate, and group travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse Homepage Sections */}
      <WhyChooseUs />
      <CorporateTravel />
      <B2BPartnership />
    </>
  );
}
