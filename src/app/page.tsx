import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: { absolute: 'Senyo Solutions | Managed IT Services & MSP for Small Businesses in Long Island, NY' },
  description:
    'Senyo Solutions is a managed service provider (MSP) offering simple, secure managed IT support for small businesses on Long Island, New York, and New Jersey. Month-to-month plans with no long-term contracts.',
  alternates: {
    canonical: 'https://senyosolutions.com/',
  },
  openGraph: {
    title: 'Senyo Solutions | Managed IT Services & MSP for Small Businesses',
    description:
      'Simple, secure managed IT support for small businesses on Long Island — without expensive MSP contracts.',
    url: 'https://senyosolutions.com/',
    siteName: 'Senyo Solutions',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
