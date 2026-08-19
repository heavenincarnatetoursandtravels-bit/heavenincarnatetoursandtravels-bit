import { Hero } from '@/components/home/Hero';
import { TrustStats } from '@/components/home/TrustStats';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { DestinationsPreview } from '@/components/home/DestinationsPreview';
import { FeaturedPackages } from '@/components/home/FeaturedPackages';
import { HowItWorks } from '@/components/home/HowItWorks';
import { CorporateTravel } from '@/components/home/CorporateTravel';
import { B2BPartnership } from '@/components/home/B2BPartnership';
import { Testimonials } from '@/components/home/Testimonials';
import { QuickInquiry } from '@/components/home/QuickInquiry';
import { FinalCTA } from '@/components/home/FinalCTA';
import { FAQ } from '@/components/home/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://heavenincarnatetours.in/',
  },
  openGraph: {
    title: 'Tours and Travels in Mangadu & Chennai | Heaven Incarnate',
    description: 'Plan your next journey with Heaven Incarnate Tours & Travels, a trusted travel agency and tour operator in Mangadu, Chennai, offering customized holiday packages and transport services.',
    url: 'https://heavenincarnatetours.in/',
    siteName: 'Heaven Incarnate Tours & Travels',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Tours and Travels in Mangadu & Chennai | Heaven Incarnate'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tours and Travels in Mangadu & Chennai | Heaven Incarnate',
    description: 'Plan your next journey with Heaven Incarnate Tours & Travels, a trusted travel agency and tour operator in Mangadu, Chennai, offering customized holiday packages and transport services.',
    images: ['https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop']
  }
};
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <WhyChooseUs />
      <ServicesOverview />
      <DestinationsPreview />
      <FeaturedPackages />
      <HowItWorks />
      <CorporateTravel />
      <B2BPartnership />
      <Testimonials />
      <QuickInquiry />
      <FAQ />
      <FinalCTA />
    </>
  );
}
