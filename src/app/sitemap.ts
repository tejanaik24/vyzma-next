import { MetadataRoute } from 'next';
import { SERVICES } from './lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  const entries: MetadataRoute.Sitemap = [
    {
      url: 'https://vyzma.in',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // Add all service pages
  for (const service of SERVICES) {
    entries.push({
      url: `https://vyzma.in/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  }

  // Add static pages
  entries.push(
    {
      url: 'https://vyzma.in/about',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://vyzma.in/contact',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  );

  return entries;
}