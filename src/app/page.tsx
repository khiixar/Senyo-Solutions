import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: 'Micro MSP IT Support for Small Practices | Senyo Solutions',
  description:
    'Senyo Solutions provides simple, secure managed IT support for therapists and small practices on Long Island, New York, and New Jersey. Month-to-month plans with no long-term contracts.',
  alternates: {
    canonical: 'https://senyosolutions.com/',
  },
  openGraph: {
    title: 'Senyo Solutions | Micro MSP IT Support for Small Practices',
    description:
      'Simple, secure IT support for small practices on Long Island — without expensive MSP contracts.',
    url: 'https://senyosolutions.com/',
    siteName: 'Senyo Solutions',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
