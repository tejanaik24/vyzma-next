import { MetadataRoute } from 'next';
import { SERVICES } from './lib/services';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: 'https://vyzma.in',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://vyzma.in/blog',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  for (const post of BLOG_POSTS) {
    entries.push({
      url: `https://vyzma.in/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  for (const service of SERVICES) {
    entries.push({
      url: `https://vyzma.in/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  }

  const cities = ['mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune', 'ahmedabad'];
  for (const city of cities) {
    entries.push({
      url: `https://vyzma.in/${city}`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    });
  }

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
