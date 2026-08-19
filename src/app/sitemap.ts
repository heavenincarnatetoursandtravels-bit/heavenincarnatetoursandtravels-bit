import { MetadataRoute } from 'next';
import { destinationsData } from '@/data/destinations';
import { packagesData } from '@/data/packages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://heavenincarnatetours.in'; // Assuming this domain based on email

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/explore',
    '/destinations',
    '/packages',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic destination routes
  const destinationRoutes = destinationsData.map((dest) => ({
    url: `${baseUrl}/destinations/${dest.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic package routes
  const packageRoutes = packagesData.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...destinationRoutes, ...packageRoutes];
}
