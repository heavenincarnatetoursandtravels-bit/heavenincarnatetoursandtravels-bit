import type { Metadata } from 'next';
import { packagesData } from '@/data/packages';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tour Packages in Mangadu, Chennai | Heaven Incarnate Tours',
  description: 'Explore affordable tour packages in Mangadu and Chennai, offering comfortable stays, reliable transportation, and personalized holiday packages from Chennai.',
  alternates: {
    canonical: 'https://heavenincarnatetours.in/packages',
  },
  openGraph: {
    title: 'Tour Packages in Mangadu, Chennai | Heaven Incarnate Tours',
    description: 'Explore affordable tour packages in Mangadu and Chennai, offering comfortable stays, reliable transportation, and personalized holiday packages from Chennai.',
    url: 'https://heavenincarnatetours.in/packages',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Tour Packages in Mangadu, Chennai'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tour Packages in Mangadu, Chennai | Heaven Incarnate Tours',
    description: 'Explore affordable tour packages in Mangadu and Chennai, offering comfortable stays, reliable transportation, and personalized holiday packages from Chennai.',
    images: ['https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop']
  }
};

export default function PackagesPage() {
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
                "name": "Tour Packages",
                "item": "https://heavenincarnatetours.in/packages"
              }
            ]
          })
        }}
      />
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-brand-primary">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-30" 
          role="img"
          aria-label="Affordable holiday travel experience"
        />
        <div className="relative z-10 text-center text-white px-4 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 drop-shadow-lg">
            Tour Packages in Mangadu & Chennai
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Thoughtfully crafted tour packages in Mangadu and Chennai for unforgettable journeys, including family tour packages and <Link href="/explore" className="underline hover:text-blue-200 transition-colors">customized travel packages from Chennai</Link>.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">Featured Tour Packages</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {packagesData.map((pkg) => (
              <div 
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={pkg.image}
                    alt={pkg.imageAlt || pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {pkg.featured && (
                    <div className="absolute top-4 right-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{pkg.title}</h3>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Clock size={16} className="mr-2 text-brand-primary" />
                    {pkg.duration}
                  </div>
                  
                  <div className="flex items-start text-sm text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2 text-brand-primary shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{pkg.destinations}</span>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="text-sm font-semibold text-gray-500">
                      Starts <br/>
                      <span className="text-lg text-brand-primary font-bold">{pkg.startingPrice}</span>
                    </div>
                    <Button href={`/packages/${pkg.id}`} variant="outline" size="sm">
                      View {pkg.title} Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
