import type { Metadata } from 'next';
import ServicesHubClient from '@/components/ServicesHubClient';

export const metadata: Metadata = {
  title: { absolute: 'Services' },
  description:
    'Explore Senyo Solutions managed IT plans, MSP add-ons, and complementary web services for small practices in New York and New Jersey.',
  alternates: {
    canonical: 'https://senyosolutions.com/services',
  },
  openGraph: {
    title: 'Senyo Solutions Services | Micro MSP Plans + Add-ons',
    description:
      'Review Starter, Standard, and Premium IT plans plus add-ons and website support services.',
    url: 'https://senyosolutions.com/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesHubClient />;
}
