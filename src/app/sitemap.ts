import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: 'https://senyosolutions.com/', lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://senyosolutions.com/services', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://senyosolutions.com/web-services', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://senyosolutions.com/pricing', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://senyosolutions.com/coverage', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://senyosolutions.com/contact', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://senyosolutions.com/faq', lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://senyosolutions.com/privacy-policy', lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://senyosolutions.com/terms-of-service', lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
