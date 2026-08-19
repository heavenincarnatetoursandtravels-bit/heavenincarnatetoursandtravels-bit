import type { Metadata } from 'next';
import { destinationsData } from '@/data/destinations';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Clock, CheckCircle2 } from 'lucide-react';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { Button } from '@/components/ui/Button';
import { ScrollToBookingButton } from '@/components/common/ScrollToBookingButton';

// Dynamically generate static params for all destinations
export function generateStaticParams() {
  return destinationsData.map((dest) => ({
    slug: dest.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const dest = destinationsData.find(d => d.id === resolvedParams.slug);
  if (!dest) return {};
  
  return {
    title: dest.seoTitle || `${dest.name} Tour Packages | Heaven Incarnate Tours & Travels`,
    description: dest.shortDescription,
    alternates: {
      canonical: `https://heavenincarnatetours.in/destinations/${dest.id}`,
    },
    openGraph: {
      title: dest.seoTitle || `${dest.name} Tour Packages | Heaven Incarnate Tours & Travels`,
      description: dest.shortDescription,
      url: `https://heavenincarnatetours.in/destinations/${dest.id}`,
      type: 'website',
      images: [
        {
          url: dest.image,
          width: 1200,
          height: 630,
          alt: dest.imageAlt || dest.name,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dest.seoTitle || `${dest.name} Tour Packages | Heaven Incarnate Tours & Travels`,
      description: dest.shortDescription,
      images: [dest.image],
    }
  };
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const dest = destinationsData.find(d => d.id === resolvedParams.slug);
  
  if (!dest) {
    notFound();
  }

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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": dest.name,
                "item": `https://heavenincarnatetours.in/destinations/${dest.id}`
              }
            ]
          })
        }}
      />
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src={dest.image}
            alt={dest.imageAlt || dest.name}
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 text-white relative">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/90 text-sm font-bold tracking-wider uppercase mb-4">
            {dest.region}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 drop-shadow-md">
            {dest.name} Tour Packages from Chennai
          </h1>
          <div className="flex items-center gap-2 text-white/90 text-lg mb-8">
            <Clock size={20} className="text-brand-gold" />
            Suggested Duration: {dest.suggestedDuration}
          </div>
          <ScrollToBookingButton />
        </div>
      </section>

      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="flex-1 lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 mb-12">
                <h2 className="text-3xl font-bold font-heading text-brand-primary mb-6">About {dest.name}</h2>
                
                {dest.id === 'rajasthan' ? (
                  <div className="mt-8">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">✨ Breathtaking Heritage • Royal Palaces • Desert Adventures • Unforgettable Memories</p>
                    
                    <div className="bg-brand-gold/10 p-6 rounded-2xl mb-8 border border-brand-gold/20">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Starting From</div>
                      <div className="text-3xl font-bold text-brand-primary mb-1">₹20,999/- <span className="text-lg font-medium text-gray-600">Per Person*</span></div>
                      <div className="text-xs text-gray-500">*T&C Apply</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Package Duration – 5 Nights / 6 Days</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li>📍 Udaipur – 2 Nights</li>
                          <li>📍 Mount Abu – 1 Night</li>
                          <li>📍 Jodhpur – 1 Night</li>
                          <li>📍 Jaisalmer – 2 Nights</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Package Inclusions</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li>🏨 Comfortable Accommodation</li>
                          <li>🍽️ Daily Breakfast & Dinner</li>
                          <li>📸 Sightseeing</li>
                          <li>🚌 Transportation</li>
                          <li>🎧 24/7 Travel Support</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">Customize Your Package</h4>
                    <p className="text-gray-700 mb-8">We tailor your trip according to your preferences, budget, and travel requirements.</p>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-10">
                      <h4 className="font-bold text-gray-900 mb-3">Important Note</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                        <li>Package rates are subject to availability.</li>
                        <li>Hotel rooms, transportation, and sightseeing are subject to availability at the time of booking.</li>
                        <li>Rates may change without prior notice based on availability.</li>
                        <li>Entry tickets, personal expenses, and optional activities are not included unless mentioned.</li>
                        <li>Terms & Conditions apply.</li>
                      </ul>
                    </div>
                  </div>
                ) : dest.id === 'kodaikanal' ? (
                  <div className="mt-8">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">✨ Escape to the Princess of Hill Stations</p>
                    
                    <div className="bg-brand-gold/10 p-6 rounded-2xl mb-8 border border-brand-gold/20">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Package Cost</div>
                      <div className="text-3xl font-bold text-brand-primary mb-1">₹4,399 <span className="text-lg font-medium text-gray-600">Per Person</span></div>
                      <div className="text-sm font-medium text-gray-700 mt-2">2 Nights / 3 Days Tour</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Package Includes</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li>🏨 2 Nights Accommodation</li>
                          <li>🗺️ 2 Days Sightseeing</li>
                          <li>🍽️ 2 Breakfasts & 2 Dinners</li>
                          <li>🔥 1 Day Campfire with Music</li>
                          <li>🚌 Transportation by Bus</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Package Excludes</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li>❌ Toll Charges</li>
                          <li>❌ Entry Fees to Sightseeing Places</li>
                          <li>❌ Any Personal Expenses</li>
                          <li>❌ Anything Not Mentioned in the Inclusions</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-brand-primary mb-6">Tour Itinerary</h4>
                    <div className="space-y-6 mb-10">
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-2">Day 1 – Kodaikanal Local Sightseeing</h5>
                        <p className="text-sm text-gray-600 mb-4">After check-in and breakfast, proceed for local sightseeing covering:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm mb-4">
                          <li>• Coaker's Walk</li>
                          <li>• Green Valley View</li>
                          <li>• Golf Course</li>
                          <li>• Pillar Rocks</li>
                          <li>• Devil's Kitchen (Guna Cave)</li>
                          <li>• Pine Forest</li>
                          <li>• Shanti Valley View</li>
                          <li>• Upper Lake View</li>
                          <li>• Moir Point</li>
                          <li>• Bryant Park</li>
                          <li>• Kodaikanal Lake</li>
                        </ul>
                        <div className="inline-block bg-blue-50 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full">
                          🌙 Overnight stay at Kodaikanal.
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-2">Day 2 – Picnic Tour</h5>
                        <p className="text-sm text-gray-600 mb-4">After breakfast, proceed for the Picnic Tour covering:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm mb-4">
                          <li>• Bear Shola Falls</li>
                          <li>• La Saleth Church</li>
                          <li>• 500-Year-Old Tree</li>
                          <li>• Dolphin's Nose</li>
                          <li>• Mountain Beauty</li>
                          <li>• Pambar Falls</li>
                          <li>• Vattakanal Falls</li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <div className="inline-block bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full">
                            🔥 Evening: Campfire with Music
                          </div>
                          <div className="inline-block bg-blue-50 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full">
                            🌙 Overnight stay at Kodaikanal.
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-2">Day 3 – Departure</h5>
                        <ul className="text-gray-700 text-sm space-y-2 mt-3">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Breakfast at the hotel</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Check out from the hotel</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Tour ends with beautiful memories of Kodaikanal.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-10">
                      <h4 className="font-bold text-gray-900 mb-2">Important Note</h4>
                      <p className="text-sm text-gray-600">
                        Package rates, transportation charges, and rooms are subject to availability. Rates may change without prior notice based on availability.
                      </p>
                    </div>
                  </div>
                ) : dest.id === 'kerala' ? (
                  <div className="mt-8">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">✨ Escape to the Queen of Hills – MUNNAR</p>
                    
                    <div className="bg-brand-gold/10 p-6 rounded-2xl mb-8 border border-brand-gold/20">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Package Cost</div>
                      <div className="text-3xl font-bold text-brand-primary mb-1">₹5,499 <span className="text-lg font-medium text-gray-600">Per Person</span></div>
                      <div className="text-sm font-medium text-gray-700 mt-2">3 Nights / 4 Days Tour</div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">CUSTOMIZED PACKAGES</h4>
                      <p className="text-gray-700 mb-4">Just the way you want! We understand that every traveler is unique. We create the perfect package just for you! Choose your:</p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                        <span className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full border border-blue-100">📍 Destinations</span>
                        <span className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full border border-blue-100">📅 Travel Dates</span>
                        <span className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full border border-blue-100">🏨 Hotel Category</span>
                        <span className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full border border-blue-100">🚗 Transportation</span>
                        <span className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full border border-blue-100">🎯 Sightseeing</span>
                        <span className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full border border-blue-100">🎡 Activities</span>
                        <span className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full border border-blue-100">🍽️ Meal Plan</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Package Includes</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li>🏨 3 Nights Accommodation</li>
                          <li>🍽️ Bed & Breakfast</li>
                          <li>🚗 Sightseeing as per Itinerary</li>
                          <li>👨‍✈️ Experienced Driver</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Group Package Information</h4>
                        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                          <p className="font-bold text-gray-900 mb-2">👥 Group Package Rate (Minimum 8 Pax)</p>
                          <p className="font-semibold text-brand-primary mb-1">🚙 Jeep Charges: ₹1,800 Per Person (For 3 Days)</p>
                          <p className="text-sm text-gray-600">Applicable for a minimum of 8 passengers. For groups below 8 pax, jeep charges will increase.</p>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-brand-primary mb-6">Tour Itinerary</h4>
                    <div className="space-y-6 mb-10">
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-2">Day 1 – Munnar Local Sightseeing</h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm mb-4 mt-3">
                          <li>• Rose Garden</li>
                          <li>• Mattupetty Dairy Factory</li>
                          <li>• Photo Point</li>
                          <li>• Mattupetty Dam</li>
                          <li>• Elephant Park</li>
                          <li>• Shooting Point</li>
                          <li>• Botanical Garden</li>
                          <li>• Echo Point</li>
                          <li>• Kundala Lake</li>
                          <li>• Top Station View Point</li>
                        </ul>
                        <div className="inline-block bg-blue-50 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full">
                          🌙 Overnight Stay at Munnar
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-2">Day 2 – Adventure & Scenic Tour</h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm mb-4 mt-3">
                          <li>• 2 Mile View Point</li>
                          <li>• Sengulam Dam Boating</li>
                          <li>• Karadipara View Point</li>
                          <li>• Sathurangapara View Point</li>
                          <li>• Spice Garden</li>
                          <li>• Wonder Valley Adventure Park</li>
                          <li>• Zip Line</li>
                        </ul>
                        <div className="inline-block bg-blue-50 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full">
                          🌙 Overnight Stay at Munnar
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-2">Day 3 – Leisure Day</h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm mb-4 mt-3">
                          <li>• Breakfast at Hotel</li>
                          <li>• Shopping</li>
                          <li>• Relaxation</li>
                          <li>• Optional Sightseeing</li>
                          <li>• Explore Munnar Town</li>
                        </ul>
                        <div className="inline-block bg-blue-50 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full">
                          🌙 Overnight Stay at Munnar
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-2">Day 4 – Departure</h5>
                        <ul className="text-gray-700 text-sm space-y-2 mt-3">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Early Morning Kolukkumalai Visit</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Breakfast at Hotel</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Check-out</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Departure with Sweet Memories</li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-10">
                      <Image 
                        src="/munnar-itinerary.jpg"
                        alt="Munnar Tour Itinerary 3 Nights / 4 Days"
                        width={1200}
                        height={1600}
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-10">
                      <h4 className="font-bold text-gray-900 mb-2">Important Note</h4>
                      <p className="text-sm text-gray-600">
                        Package rates, jeep charges, and rooms are subject to availability. Rates may change without prior notice based on availability.
                      </p>
                    </div>
                  </div>
                ) : dest.id === 'kashmir' ? (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold font-heading text-brand-primary mb-2">Kashmir Journey</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">✨ Explore the Timeless Beauty of Nature's Paradise</p>
                    
                    <div className="bg-brand-gold/10 p-6 rounded-2xl mb-8 border border-brand-gold/20">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Starting From</div>
                      <div className="text-3xl font-bold text-brand-primary mb-1">₹15,999/-</div>
                      <div className="text-sm font-medium text-gray-700 mt-2">4 Nights / 5 Days Tour</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Destinations Covered</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li>📍 Srinagar</li>
                          <li>📍 Gulmarg</li>
                          <li>📍 Sonmarg</li>
                          <li>📍 Pahalgam</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Package Includes</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li>🚖 Pickup & Drop</li>
                          <li>🚌 Transportation</li>
                          <li>🏨 Comfortable Stay</li>
                          <li>🍽️ Breakfast & Dinner</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-10">
                      <h4 className="font-bold text-gray-900 mb-2">Important Note</h4>
                      <p className="text-sm text-gray-600">
                        Package rates are subject to availability. Prices may change without prior notice based on hotel, transportation, and room availability.
                      </p>
                    </div>
                  </div>
                ) : dest.id === 'north-east' ? (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold font-heading text-brand-primary mb-2">Discover Darjeeling & Gangtok</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">✨ Breathtaking Hills • Serene Monasteries • Unforgettable Memories</p>
                    
                    <div className="bg-brand-gold/10 p-6 rounded-2xl mb-8 border border-brand-gold/20">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Package Price</div>
                      <div className="text-3xl font-bold text-brand-primary mb-1">₹13,999/- <span className="text-lg font-medium text-gray-600">Per Person</span></div>
                      <div className="text-sm font-medium text-gray-700 mt-2">Starting From</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Package Duration</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li>📍 Darjeeling – 2 Nights</li>
                          <li>📍 Gangtok – 3 Nights</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Package Inclusions</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li>🏨 Accommodation</li>
                          <li>🍽 Breakfast</li>
                          <li>🏞 Sightseeing</li>
                          <li>🚌 Transportation</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-brand-primary mb-6">Explore the Best of the Hills</h4>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-10">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" /> Darjeeling</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" /> Gangtok</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" /> Tsomgo Lake</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" /> Nathula Pass</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" /> Baba Mandir</li>
                      </ul>
                    </div>
                  </div>
                ) : dest.id === 'andaman' ? (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold font-heading text-brand-primary mb-2">ANDAMAN GROUP TOUR PACKAGE</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">✨ Travel More, Create Memories</p>
                    
                    <div className="bg-brand-gold/10 p-6 rounded-2xl mb-8 border border-brand-gold/20">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Package Price</div>
                      <div className="text-3xl font-bold text-brand-primary mb-1">₹17,299 <span className="text-lg font-medium text-gray-600">Per Head</span></div>
                      <div className="text-sm font-medium text-gray-700 mt-2">5 Days / 4 Nights • Minimum Pax: 20 Persons • Meal Plan: MAPAI (Breakfast + Dinner)</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Package Includes</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li>🏨 Comfortable Accommodation</li>
                          <li>🚢 Ferry Tickets & Transfers</li>
                          <li>📸 Sightseeing as per Itinerary</li>
                          <li>👨‍✈️ Professional Assistance</li>
                          <li>✨ Memorable Group Experience</li>
                          <li>🍽️ MAPAI Meal Plan (Breakfast + Dinner)</li>
                          <li>🎧 24/7 Travel Support</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Hotel Options</h4>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                            <p className="font-bold text-gray-900 mb-2">📍 Sri Vijay Puram (Port Blair)</p>
                            <p className="text-gray-700 text-sm">Hotel Marina Manor OR Hotel GKM Grand</p>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                            <p className="font-bold text-gray-900 mb-2">📍 Swaraj Dweep (Havelock Island)</p>
                            <p className="text-gray-700 text-sm">Island & Blue Beach Resort OR Radhakrishnan Resort</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-brand-primary mb-6">Tour Itinerary</h4>
                    <div className="space-y-6 mb-10">
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-2">Day 1 – Sri Vijay Puram (Port Blair)</h5>
                        <ul className="text-gray-700 text-sm space-y-2 mt-3 mb-4">
                          <li>• Arrive at Sri Vijay Puram</li>
                          <li>• Visit Cellular Jail</li>
                          <li>• Visit Corbyn Cove Beach</li>
                          <li>• Enjoy the Light & Sound Show at Cellular Jail</li>
                        </ul>
                        <div className="inline-block bg-blue-50 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full">
                          🌙 Overnight stay at hotel
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-2">Day 2 – Swaraj Dweep (Havelock Island)</h5>
                        <ul className="text-gray-700 text-sm space-y-2 mt-3 mb-4">
                          <li>• Ferry to Swaraj Dweep (Havelock Island)</li>
                          <li>• Visit the world-famous Radhanagar Beach</li>
                          <li>• Relax and enjoy the beach</li>
                        </ul>
                        <div className="inline-block bg-blue-50 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full">
                          🌙 Overnight stay at resort
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-2">Day 3 – Elephant Beach / Kalapather Beach</h5>
                        <ul className="text-gray-700 text-sm space-y-2 mt-3 mb-4">
                          <li>• Visit Elephant Beach (Water Sports & Snorkeling) OR</li>
                          <li>• Visit Kalapather Beach (Scenic Black Rocks & Relaxation)</li>
                        </ul>
                        <div className="inline-block bg-blue-50 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full">
                          🌙 Overnight stay at resort
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-2">Day 4 – Return to Sri Vijay Puram</h5>
                        <ul className="text-gray-700 text-sm space-y-2 mt-3 mb-4">
                          <li>• Ferry back to Sri Vijay Puram</li>
                          <li>• Visit Chidiya Tapu Sunset Point</li>
                          <li>• Evening local market shopping</li>
                        </ul>
                        <div className="inline-block bg-blue-50 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full">
                          🌙 Overnight stay at hotel
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-2">Day 5 – Departure</h5>
                        <ul className="text-gray-700 text-sm space-y-2 mt-3">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Breakfast at hotel</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Check-out</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Transfer to Airport</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Tour ends with wonderful memories</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-10">
                      <h4 className="font-bold text-gray-900 mb-2">Important Note</h4>
                      <p className="text-sm text-gray-600">
                        Package rates, jeep charges, and rooms are subject to availability. Rates may change without prior notice based on availability.
                      </p>
                    </div>
                    
                    <hr className="my-12 border-gray-200" />
                    
                    <h3 className="text-2xl font-bold font-heading text-brand-primary mb-2">ANDAMAN HONEYMOON TRIP PACKAGE</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">❤️ A Romantic Escape to Paradise</p>
                    
                    <p className="text-gray-700 mb-8">Celebrate your love in the breathtaking islands of Andaman. Experience pristine beaches, luxurious stays, exciting adventures, and unforgettable moments with your better half.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Package Includes</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li>✈️ Airport Pickup & Drop</li>
                          <li>🏨 Comfortable Hotel Stay</li>
                          <li>⛴️ Ferry / Cruise Transfers</li>
                          <li>📸 Sightseeing & Activities</li>
                          <li>🕯️ Candle Light Dinner</li>
                          <li>❤️ Honeymoon Room Decoration</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Why Book With Us?</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li>✅ Best Price Guarantee</li>
                          <li>✅ 100% Customer Satisfaction</li>
                          <li>✅ 24/7 Travel Support</li>
                          <li>✅ Local Expert Assistance</li>
                          <li>✅ No Hidden Charges</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-brand-primary mb-6">Our Best Honeymoon Packages</h4>
                    <div className="space-y-6 mb-10">
                      {/* 4 Days Package */}
                      <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-pink-500"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-1">4 Days / 3 Nights – Andaman Honeymoon Package</h5>
                        <p className="text-brand-primary font-semibold mb-3">Starting From ₹26,999/- Per Couple</p>
                        <h6 className="font-medium text-gray-900 text-sm mb-2">Package Highlights:</h6>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Port Blair & Havelock Island</li>
                          <li>• Cellular Jail Light & Sound Show</li>
                          <li>• Visit Radhanagar Beach</li>
                          <li>• Ferry Transfers</li>
                          <li>• Complimentary Room Decoration</li>
                        </ul>
                      </div>

                      {/* 5 Days Package */}
                      <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-pink-500"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-1">5 Days / 4 Nights – Andaman Honeymoon Package</h5>
                        <p className="text-brand-primary font-semibold mb-3">Starting From ₹34,999/- Per Couple</p>
                        <h6 className="font-medium text-gray-900 text-sm mb-2">Package Highlights:</h6>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Port Blair & Havelock Island</li>
                          <li>• Elephant Beach Visit</li>
                          <li>• Scuba Diving / Snorkeling</li>
                          <li>• Candle Light Dinner</li>
                          <li>• Private Cab for Sightseeing</li>
                        </ul>
                      </div>
                      
                      {/* 6 Days Package */}
                      <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-pink-500"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-1">6 Days / 5 Nights – Andaman Honeymoon Package</h5>
                        <p className="text-brand-primary font-semibold mb-3">Starting From ₹44,999/- Per Couple</p>
                        <h6 className="font-medium text-gray-900 text-sm mb-2">Package Highlights:</h6>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Port Blair, Havelock & Neil Island</li>
                          <li>• Natural Bridge Visit</li>
                          <li>• Sunset at Laxmanpur Beach</li>
                          <li>• Beachside Resort Stay</li>
                          <li>• Romantic Photo Opportunities</li>
                        </ul>
                      </div>

                      {/* 7 Days Package */}
                      <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-pink-500"></div>
                        <h5 className="font-bold text-lg text-gray-900 mb-1">7 Days / 6 Nights – Luxury Honeymoon Package</h5>
                        <p className="text-brand-primary font-semibold mb-3">Starting From ₹63,999/- Per Couple</p>
                        <h6 className="font-medium text-gray-900 text-sm mb-2">Package Highlights:</h6>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Premium Sea View Resorts</li>
                          <li>• Private Candle Light Dinner</li>
                          <li>• Couple Spa Session</li>
                          <li>• Scuba Diving / Sea Walk</li>
                          <li>• Personalized Honeymoon Services</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-brand-primary mb-6">Romantic Destinations Covered</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                      <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                        <h5 className="font-bold text-gray-900 mb-3 border-b border-blue-200 pb-2">Port Blair</h5>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li>• Cellular Jail</li>
                          <li>• Light & Sound Show</li>
                          <li>• Corbyn's Cove Beach</li>
                          <li>• Chidiya Tapu Sunset Point</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                        <h5 className="font-bold text-gray-900 mb-3 border-b border-blue-200 pb-2">Havelock Island (Swaraj Dweep)</h5>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li>• Radhanagar Beach</li>
                          <li>• Elephant Beach</li>
                          <li>• Kalapathar Beach</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                        <h5 className="font-bold text-gray-900 mb-3 border-b border-blue-200 pb-2">Neil Island (Shaheed Dweep)</h5>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li>• Laxmanpur Beach</li>
                          <li>• Bharatpur Beach</li>
                          <li>• Natural Bridge</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {dest.shortDescription}
                    <br/><br/>
                    (Note: Editable placeholder. Detailed destination description would go here, describing the culture, climate, best time to visit, and what makes it special.)
                  </p>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dest.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                      <CheckCircle2 className="text-brand-primary shrink-0" size={20} />
                      <span className="font-medium text-gray-800">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:w-1/3" id="booking-section">
              <div className="sticky top-28">
                <div className="bg-brand-primary text-white p-8 rounded-t-2xl text-center">
                  <h3 className="text-2xl font-bold font-heading mb-2">Book Your Trip to {dest.name}</h3>
                  <p className="text-blue-100 text-sm">Get a customized itinerary and a free quote.</p>
                </div>
                <div className="bg-white p-6 shadow-xl rounded-b-2xl border border-gray-100 border-t-0 -mt-2 relative z-10">
                  <InquiryForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {dest.id === 'ooty' && (
        <>
          {/* 4. DESTINATION GALLERY */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary mb-4">Explore Ooty</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover the beautiful places and experiences waiting for you.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Ooty Lake", src: "https://images.unsplash.com/photo-1596423735880-5f2a689b903e?q=80&w=800&auto=format&fit=crop" },
                  { name: "Botanical Garden", src: "https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?q=80&w=800&auto=format&fit=crop" },
                  { name: "Doddabetta Peak", src: "https://images.unsplash.com/photo-1572002341997-75902dc6eec2?q=80&w=800&auto=format&fit=crop" },
                  { name: "Tea Gardens", src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop" },
                  { name: "Nilgiri Mountain Railway", src: "https://images.unsplash.com/photo-1621861001407-3d120a16cbbe?q=80&w=800&auto=format&fit=crop" },
                  { name: "Pykara Lake", src: "https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?q=80&w=800&auto=format&fit=crop" },
                ].map((img, idx) => (
                  <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                    <Image 
                      src={img.src} 
                      alt={img.name} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
                    <h3 className="absolute bottom-4 left-6 text-white font-bold text-lg">{img.name}</h3>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button variant="outline" className="px-8 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">View More Photos</Button>
              </div>
            </div>
          </section>

          {/* 5. TOUR ITINERARY */}
          <section className="py-20 bg-background-light border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary mb-4">Tour Itinerary</h2>
                <p className="text-gray-600 text-lg">Your day-by-day guide to exploring the Queen of Hills.</p>
              </div>
              
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Day 1 – Ooty Arrival & Local Sightseeing</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Arrival at Ooty</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Hotel check-in</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Ooty Lake</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Botanical Garden</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Evening leisure</li>
                    </ul>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Day 2 – Ooty Full Day Sightseeing</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Doddabetta Peak</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Tea Gardens</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Tea Factory</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Rose Garden</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Nilgiri Mountain Railway</li>
                    </ul>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Day 3 – Ooty Departure</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Pykara Lake</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Pykara Falls</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Local shopping</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Check-out</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Return journey</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. PACKAGE INCLUDES / EXCLUDES */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
                <div className="flex-1 bg-green-50 rounded-3xl p-8 md:p-10 border border-green-100 shadow-sm">
                  <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                    <span className="bg-green-100 text-green-700 p-2 rounded-full leading-none">✓</span>
                    PACKAGE INCLUDES
                  </h3>
                  <ul className="space-y-4 text-green-900 font-medium">
                    <li className="flex items-center gap-3">✓ Hotel Accommodation</li>
                    <li className="flex items-center gap-3">✓ Breakfast</li>
                    <li className="flex items-center gap-3">✓ Sightseeing</li>
                    <li className="flex items-center gap-3">✓ Transportation</li>
                    <li className="flex items-center gap-3">✓ Driver Charges</li>
                    <li className="flex items-center gap-3">✓ Toll & Parking</li>
                  </ul>
                </div>
                
                <div className="flex-1 bg-red-50 rounded-3xl p-8 md:p-10 border border-red-100 shadow-sm">
                  <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
                    <span className="bg-red-100 text-red-700 p-2 rounded-full px-3 leading-none">✕</span>
                    PACKAGE EXCLUDES
                  </h3>
                  <ul className="space-y-4 text-red-900 font-medium">
                    <li className="flex items-center gap-3">✕ Lunch</li>
                    <li className="flex items-center gap-3">✕ Dinner</li>
                    <li className="flex items-center gap-3">✕ Entry Tickets</li>
                    <li className="flex items-center gap-3">✕ Personal Expenses</li>
                    <li className="flex items-center gap-3">✕ Camera Charges</li>
                    <li className="flex items-center gap-3">✕ Anything not mentioned in the inclusions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 7. CUSTOMER REVIEWS */}
          <section className="py-20 bg-background-light">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary mb-4">Customer Reviews</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">What our happy travellers have to say.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                  <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                  <p className="text-gray-700 italic mb-6">"Excellent service and a wonderful Ooty trip. The arrangements were very good."</p>
                  <p className="font-bold text-gray-900">— Happy Traveller</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                  <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                  <p className="text-gray-700 italic mb-6">"Good package and comfortable travel experience. Highly recommended."</p>
                  <p className="font-bold text-gray-900">— Happy Traveller</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                  <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                  <p className="text-gray-700 italic mb-6">"Very helpful team and smooth trip planning."</p>
                  <p className="font-bold text-gray-900">— Happy Traveller</p>
                </div>
              </div>
            </div>
          </section>

          {/* 8. GOOGLE MAP */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary mb-4">Find Ooty on the Map</h2>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100 h-[400px] max-w-6xl mx-auto">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.4239846387!2d76.61908233517173!3d11.411883391763177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd84b5f3d78d%3A0x179bdb14c93e3f42!2sOoty%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
