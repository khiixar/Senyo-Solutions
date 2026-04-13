import type { Metadata } from 'next';
import FAQPageClient from '@/components/FAQPageClient';

export const metadata: Metadata = {
  title: 'FAQ | Senyo Solutions',
  description:
    'Frequently asked questions about Senyo Solutions managed IT plans, support model, and web services for small practices.',
  alternates: {
    canonical: 'https://senyosolutions.com/faq',
  },
  openGraph: {
    title: 'FAQ | Senyo Solutions',
    description:
      'Get answers about our Micro MSP support, pricing model, service area, and website service options.',
    url: 'https://senyosolutions.com/faq',
    type: 'website',
  },
};

export default function FAQPage() {
  return <FAQPageClient />;
}
