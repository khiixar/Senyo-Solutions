import type { Metadata } from 'next';
import ServicesHubClient from '@/components/ServicesHubClient';

export const metadata: Metadata = {
  title: 'Digital Services',
  description:
    'Explore Senyo Solutions digital services including web design, SEO optimization, managed hosting, digital marketing, and analytics reporting.',
  alternates: {
    canonical: 'https://senyosolutions.com/services',
  },
  openGraph: {
    title: 'Senyo Solutions Services | Web Design, SEO, Hosting & Marketing',
    description:
      'Browse all Senyo Solutions services and find the right package for your business growth goals.',
    url: 'https://senyosolutions.com/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesHubClient />;
}
