import type { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Building2, Map, Car, Briefcase, Users, CheckCircle2 } from 'lucide-react';
import { FinalCTA } from '@/components/home/FinalCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Services in Mangadu, Chennai | Heaven Incarnate Tours',
  description: 'Explore travel services in Mangadu and Chennai, including holiday packages, hotel reservations, transportation, group tours, corporate travel, and airport transfers.',
  alternates: {
    canonical: 'https://heavenincarnatetours.in/services',
  },
  openGraph: {
    title: 'Travel Services in Mangadu, Chennai | Heaven Incarnate Tours',
    description: 'Explore travel services in Mangadu and Chennai, including holiday packages, hotel reservations, transportation, group tours, corporate travel, and airport transfers.',
    url: 'https://heavenincarnatetours.in/services',
    type: 'website',
    siteName: 'Heaven Incarnate Tours & Travels',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Travel Services in Mangadu, Chennai | Heaven Incarnate Tours'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Services in Mangadu, Chennai | Heaven Incarnate Tours',
    description: 'Explore travel services in Mangadu and Chennai, including holiday packages, hotel reservations, transportation, group tours, corporate travel, and airport transfers.',
    images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop'],
  }
};

const iconMap: Record<string, React.ElementType> = {
  Building2, Map, Car, Briefcase, Users
};

export default function ServicesPage() {
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
                "name": "Services",
                "item": "https://heavenincarnatetours.in/services"
              }
            ]
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop")' }}
          role="img"
          aria-label="Travel services and holiday planning"
        >
          <div className="absolute inset-0 bg-brand-primary/80" />
        </div>
        <div className="relative z-10 text-center text-white px-4 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Complete Travel Solutions Under One Roof
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            As a dedicated tour operator in Mangadu, Chennai, Heaven Incarnate Tours & Travels provides essential travel services designed to make your journey easier to plan and more comfortable to experience, from reliable transport to tailored <Link href="/packages" className="underline hover:text-blue-200 transition-colors">holiday packages in Mangadu</Link>.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.icon] || Map;
              const isEven = index % 2 !== 0;

              return (
                <div key={service.id} id={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100`}>
                  
                  {/* Service Icon/Image Visual */}
                  <div className="flex-1 w-full bg-blue-50 rounded-2xl h-[300px] lg:h-[400px] flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-primary/5 transition-colors group-hover:bg-brand-primary/10" />
                    <Icon className="text-brand-primary w-32 h-32 opacity-80 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                  </div>

                  {/* Service Content */}
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-3xl font-bold font-heading text-brand-primary mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <h3 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-sm">What We Offer</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle2 className="text-brand-primary shrink-0" size={18} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button href={`/contact?service=${service.id}`} variant="primary">
                      Enquire About {service.title}
                    </Button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
