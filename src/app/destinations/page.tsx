import type { Metadata } from 'next';
import { destinationsData } from '@/data/destinations';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tour Packages from Mangadu, Chennai | Explore Destinations',
  description: 'Explore popular Indian and international destinations with Heaven Incarnate Tours & Travels. Plan memorable holidays from Mangadu and Chennai with suitable travel arrangements.',
  alternates: {
    canonical: 'https://heavenincarnatetours.in/destinations',
  },
  openGraph: {
    title: 'Tour Packages from Mangadu, Chennai | Explore Destinations',
    description: 'Explore popular Indian and international destinations with Heaven Incarnate Tours & Travels. Plan memorable holidays from Mangadu and Chennai with suitable travel arrangements.',
    url: 'https://heavenincarnatetours.in/destinations',
    type: 'website',
    siteName: 'Heaven Incarnate Tours & Travels',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Tour Packages from Mangadu, Chennai | Explore Destinations'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tour Packages from Mangadu, Chennai | Explore Destinations',
    description: 'Explore popular Indian and international destinations with Heaven Incarnate Tours & Travels. Plan memorable holidays from Mangadu and Chennai with suitable travel arrangements.',
    images: ['https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000&auto=format&fit=crop'],
  }
};

export default function DestinationsPage() {
  // Group destinations by region
  const regions = [
    "South India",
    "North India",
    "West India",
    "Islands & Special Destinations"
  ];

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
                "name": "Destinations",
                "item": "https://heavenincarnatetours.in/destinations"
              }
            ]
          })
        }}
      />
      <section className="relative h-[auto] min-h-[400px] flex items-center justify-center bg-brand-primary py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center text-white px-4 mt-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 drop-shadow-lg">
            Explore Popular Travel Destinations
          </h1>
          <p className="text-lg text-white/90 mb-4 drop-shadow-md">
            Discover exciting destinations across India and beyond with Heaven Incarnate Tours & Travels. Whether you're looking for a relaxing holiday, a family vacation, a group adventure, or an international getaway, we can help you plan your journey around your travel requirements.
          </p>
          <p className="text-lg text-white/90 mb-4 drop-shadow-md">
            Explore the scenic beauty of Kerala, Goa, Kashmir, Himachal Pradesh, Rajasthan, Andaman & Nicobar Islands, Darjeeling, Varanasi, Kodaikanal, and Northeast India. Each destination offers its own unique experiences, from beautiful landscapes and cultural attractions to memorable sightseeing opportunities.
          </p>
          <p className="text-lg text-white/90 mb-4 drop-shadow-md">
            For international travel, explore destinations such as Thailand, Bali, Japan, Malaysia, Singapore, and Sri Lanka with our specialized international tour packages from Mangadu and Chennai.
          </p>
          <p className="text-lg text-white/90 mb-4 drop-shadow-md">
            Our travel solutions bring together essential arrangements such as accommodation, transportation, sightseeing, and other travel requirements to help make your trip more convenient and enjoyable.
          </p>
          <p className="text-xl font-semibold text-brand-gold mt-6 drop-shadow-md">
            Your destination is waiting. Let us help you plan the journey.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 md:px-6">
          {regions.map((region) => {
            const regionDestinations = destinationsData.filter(d => d.region === region);
            if (regionDestinations.length === 0) return null;

            return (
              <div key={region} className="mb-20 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold font-heading text-brand-primary">{region}</h2>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {regionDestinations.map((dest) => (
                    <Link 
                      href={`/destinations/${dest.id}`} 
                      key={dest.id}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all block"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <Image 
                          src={dest.image}
                          alt={dest.imageAlt || dest.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold font-heading text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">{dest.name}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {dest.shortDescription}
                        </p>
                        <span className="text-brand-primary font-medium text-sm group-hover:text-brand-gold transition-colors inline-flex items-center">
                          Explore Destination
                          <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
