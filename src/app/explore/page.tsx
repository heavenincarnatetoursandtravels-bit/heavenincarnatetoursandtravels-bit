import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  Calendar, 
  Check, 
  ArrowRight, 
  Plane, 
  Hotel, 
  Car, 
  Camera, 
  Utensils, 
  Activity,
  ThumbsUp,
  Shield,
  Clock,
  HeartHandshake
} from 'lucide-react';
import { ExplorePackagesClient } from '@/components/explore/ExplorePackagesClient';
import { ExploreCTAClient } from '@/components/explore/ExploreCTAClient';

export const metadata: Metadata = {
  title: 'Explore Tour Packages & Destinations | Heaven Incarnate',
  description: 'Explore our domestic and international tour packages from Chennai. Discover top destinations like Kerala, Goa, and Bali for your perfect holiday getaway.',
  alternates: {
    canonical: 'https://heavenincarnatetours.in/explore',
  },
  openGraph: {
    title: 'Explore Tour Packages & Destinations from Chennai',
    description: 'Discover popular domestic and international destinations with Heaven Incarnate Tours & Travels.',
    url: 'https://heavenincarnatetours.in/explore',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Explore Tour Packages & Destinations from Chennai'
      }
    ]
  }
};

export default function ExploreDestinations() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-emerald-900/60 mix-blend-multiply" />
        </div>
        
        {/* Decorative Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
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
                    "name": "Explore",
                    "item": "https://heavenincarnatetours.in/explore"
                  }
                ]
              })
            }}
          />
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wider uppercase">
            Heaven Incarnate Tours & Travels
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 drop-shadow-lg leading-tight">
            Explore Tour Packages & <br className="hidden md:block"/> Destinations from Chennai
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl drop-shadow-md leading-relaxed">
            Discover exciting destinations and thoughtfully planned tour packages from Chennai with Heaven Incarnate Tours & Travels. Explore popular destinations across India and abroad, with options for family holidays, group tours, customized trips, and memorable vacations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/packages" className="group relative px-8 py-4 bg-white text-blue-900 font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] inline-flex items-center justify-center">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Packages <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full transition-all hover:bg-white/20 hover:scale-105 inline-flex items-center justify-center">
              Customize Your Trip
            </Link>
          </div>
        </div>

        {/* Quick Stats - Glassmorphism */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4 z-20">
          <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-white/50 rounded-[20px] p-6 shadow-2xl flex flex-wrap justify-between items-center gap-6">
            {[
              { label: 'Popular Destinations', value: '4+' },
              { label: 'Happy Travelers', value: '500+' },
              { label: 'Guaranteed', value: 'Best Price' },
              { label: 'Support', value: '24/7' },
            ].map((stat, i) => (
              <div key={i} className="flex-1 min-w-[150px] text-center">
                <div className="text-2xl md:text-3xl font-bold font-heading text-blue-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tour Packages Section */}
      <ExplorePackagesClient />

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full mb-6"></div>
            <p className="text-blue-100 max-w-2xl mx-auto">Experience the finest travel services designed for your comfort and peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ThumbsUp, title: 'Best Price Guarantee', desc: 'We offer competitive rates without compromising on quality.' },
              { icon: Hotel, title: 'Comfortable Accommodation', desc: 'Handpicked premium hotels and resorts for your stay.' },
              { icon: Car, title: 'Experienced Drivers', desc: 'Professional and courteous drivers for safe journeys.' },
              { icon: Activity, title: 'Customized Tour Packages', desc: 'Tailor-made itineraries to suit your unique preferences.' },
              { icon: HeartHandshake, title: '24×7 Customer Support', desc: 'Round-the-clock assistance throughout your trip.' },
              { icon: Shield, title: 'Safe & Reliable Travel', desc: 'Your safety is our top priority at every step.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[20px] hover:bg-white/20 transition-all group">
                <feature.icon className="w-12 h-12 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100/80 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customized Packages Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">Plan Your Dream Vacation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">Every traveler is unique. We create <Link href="/packages" className="text-brand-primary hover:underline">personalized tour packages</Link> based on your preferences.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              { icon: MapPin, label: 'Destination' },
              { icon: Calendar, label: 'Travel Dates' },
              { icon: Hotel, label: 'Hotel Category' },
              { icon: Car, label: 'Transportation' },
              { icon: Camera, label: 'Sightseeing' },
              { icon: Utensils, label: 'Meal Plan' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-[20px] border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md transition-all cursor-pointer group">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="font-semibold text-gray-800 text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          <Link href="/contact" className="inline-block px-10 py-4 bg-emerald-500 text-white font-bold rounded-full text-lg shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 hover:scale-105 transition-all">
            Customize My Trip
          </Link>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Domestic */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold font-heading text-blue-900 mb-6 flex items-center gap-3">
                <MapPin className="text-emerald-500 w-6 h-6" /> 
                Popular Domestic Tour Packages
              </h2>
              <ul className="space-y-4">
                {[
                  { name: 'Kerala', link: '/destinations/kerala' },
                  { name: 'Kodaikanal', link: '/destinations/kodaikanal' },
                  { name: 'Goa', link: '/destinations/goa' },
                  { name: 'Kashmir', link: '/destinations/kashmir' },
                  { name: 'Himachal Pradesh', link: '/destinations/himachal-pradesh' },
                  { name: 'Rajasthan', link: '/destinations/rajasthan' },
                  { name: 'Andaman & Nicobar', link: '/destinations/andaman' },
                  { name: 'Darjeeling', link: '/destinations/darjeeling' },
                  { name: 'Varanasi', link: '/destinations/varanasi' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.link} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                      <ArrowRight className="w-4 h-4 text-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                      <span className="font-medium group-hover:translate-x-1 transition-transform">{item.name} Tour Packages from Chennai</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* International */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold font-heading text-blue-900 mb-6 flex items-center gap-3">
                <Plane className="text-emerald-500 w-6 h-6" /> 
                International Tour Packages from Chennai
              </h2>
              <ul className="space-y-4">
                {[
                  { name: 'Thailand', link: '/destinations/thailand' },
                  { name: 'Bali', link: '/destinations/bali' },
                  { name: 'Singapore', link: '/destinations/singapore' },
                  { name: 'Malaysia', link: '/destinations/malaysia' },
                  { name: 'Sri Lanka', link: '/destinations/sri-lanka' },
                  { name: 'Japan', link: '/destinations/japan' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.link} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                      <ArrowRight className="w-4 h-4 text-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                      <span className="font-medium group-hover:translate-x-1 transition-transform">{item.name} Tour Packages from Chennai</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perfect Holiday */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold font-heading text-blue-900 mb-6 flex items-center gap-3">
                <HeartHandshake className="text-emerald-500 w-6 h-6" /> 
                Find Your Perfect Holiday Package
              </h2>
              <ul className="space-y-4">
                {[
                  { name: 'Family Tours', link: '/packages?type=family' },
                  { name: 'Group Tours', link: '/packages?type=group' },
                  { name: 'Customized Tour Packages from Chennai', link: '/contact' },
                  { name: 'Corporate Travel', link: '/services/corporate-travel' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.link} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                      <ArrowRight className="w-4 h-4 text-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                      <span className="font-medium group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
          <div className="mt-12 text-center">
            <Link href="/packages" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              View all tour packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <ExploreCTAClient />

      {/* Contact Section */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">Heaven Incarnate Tours & Travels</h3>
            <p className="text-gray-400 mb-8 max-w-md">Your trusted partner for exploring the most beautiful destinations across India with premium services and unmatched comfort.</p>
            <div className="space-y-4">
              <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-emerald-400"/> Thillai Nataraja complex, Srinivasa Nagar, Mangadu, Chennai, Mangadu, Tamil Nadu 600122, India</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Information</h4>
              <ul className="space-y-4">
                <li><a href="tel:+919150057366" className="hover:text-emerald-400 transition-colors block">+91 91500 57366</a></li>
                <li><a href="mailto:heavenincarnatetoursandtravels@gmail.com" className="hover:text-emerald-400 transition-colors block">heavenincarnatetoursandtravels@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Heaven Incarnate Tours & Travels. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
