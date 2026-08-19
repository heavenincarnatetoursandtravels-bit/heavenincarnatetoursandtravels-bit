import type { Metadata } from 'next';
import { packagesData } from '@/data/packages';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Clock, MapPin, CheckCircle2, XCircle, FileText } from 'lucide-react';
import { InquiryForm } from '@/components/forms/InquiryForm';

export function generateStaticParams() {
  return packagesData.map((pkg) => ({
    slug: pkg.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const pkg = packagesData.find(p => p.id === resolvedParams.slug);
  if (!pkg) return {};
  
  const title = pkg.seoTitle || `${pkg.title} | Heaven Incarnate Tours & Travels`;
  const description = `Book our ${pkg.duration} ${pkg.title} package to ${pkg.destinations}.`;
  const url = `https://heavenincarnatetours.in/packages/${pkg.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'Heaven Incarnate Tours & Travels',
      images: [
        {
          url: pkg.image,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [pkg.image],
    }
  };
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const pkg = packagesData.find(p => p.id === resolvedParams.slug);
  
  if (!pkg) {
    notFound();
  }

  // Placeholder static content for demonstration
  const itinerary = [
    { day: 1, title: "Arrival & Welcome", desc: "Arrive at the destination. Transfer to the hotel. Rest and relax." },
    { day: 2, title: "Sightseeing Tour", desc: "Full day local sightseeing covering major attractions." },
    { day: 3, title: "Leisure & Exploration", desc: "Free day for shopping or optional activities." },
    { day: 4, title: "Departure", desc: "Check out and transfer to airport/railway station." },
  ];

  const inclusions = ["Hotel Accommodation", "Daily Breakfast", "Sightseeing Vehicle", "Airport Transfers", "All Tolls & Taxes"];
  const exclusions = ["Flight/Train Tickets", "Lunch & Dinner", "Entry Fees at Monuments", "Personal Expenses", "Travel Insurance"];

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
                "name": "Packages",
                "item": "https://heavenincarnatetours.in/packages"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": pkg.title,
                "item": `https://heavenincarnatetours.in/packages/${pkg.id}`
              }
            ]
          })
        }}
      />
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 text-white relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 drop-shadow-md">
            {pkg.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg font-medium">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-brand-gold" />
              {pkg.duration}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-brand-gold" />
              {pkg.destinations}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="flex-1 lg:w-2/3 space-y-12">
              {/* Overview */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">Package Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Experience the best of {pkg.destinations} with our carefully curated {pkg.duration} holiday package. This itinerary is designed to give you a perfect balance of guided tours and leisure time.
                </p>
                <div className="flex flex-wrap gap-3">
                  {pkg.highlights.map((highlight, idx) => (
                    <span key={idx} className="bg-blue-50 text-brand-primary px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6 flex items-center gap-2">
                  <FileText className="text-brand-primary" /> Suggested Itinerary
                </h2>
                <div className="space-y-6">
                  {itinerary.map((day) => (
                    <div key={day.day} className="flex gap-4 border-l-2 border-brand-primary/20 pl-6 relative">
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                        {day.day}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Day {day.day}: {day.title}</h4>
                        <p className="text-gray-600 text-sm">{day.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold font-heading text-green-700 mb-4 flex items-center gap-2">
                    <CheckCircle2 /> Inclusions
                  </h3>
                  <ul className="space-y-3">
                    {inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-green-500 mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold font-heading text-red-700 mb-4 flex items-center gap-2">
                    <XCircle /> Exclusions
                  </h3>
                  <ul className="space-y-3">
                    {exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-red-500 mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:w-1/3">
              <div className="sticky top-28">
                <div className="bg-brand-primary text-white p-8 rounded-t-2xl">
                  <div className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-2">Starting From</div>
                  <div className="text-4xl font-bold font-heading mb-4">{pkg.startingPrice}</div>
                  <p className="text-blue-100 text-sm">Price varies based on travel dates and hotel category.</p>
                </div>
                <div className="bg-white p-6 shadow-xl rounded-b-2xl border border-gray-100 border-t-0 -mt-2 relative z-10">
                  <InquiryForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
