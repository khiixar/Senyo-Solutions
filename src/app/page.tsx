import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: 'MSP IT Support for Small Businesses | Senyo Solutions',
  description:
    'Senyo Solutions provides simple, secure managed IT support for small businesses on Long Island, New York, and New Jersey. Month-to-month plans with no long-term contracts.',
  alternates: {
    canonical: 'https://senyosolutions.com/',
  },
  openGraph: {
    title: 'Senyo Solutions | IT Support for Small Businesses',
    description:
      'Simple, secure IT support for small businesses on Long Island — without expensive MSP contracts.',
    url: 'https://senyosolutions.com/',
    siteName: 'Senyo Solutions',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
