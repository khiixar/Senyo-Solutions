import type { Metadata } from 'next';
import FAQPageClient from '@/components/FAQPageClient';

export const metadata: Metadata = {
  title: 'FAQ | Senyo Solutions',
  description:
    'Find answers to common questions about Senyo Solutions services, timelines, support, and how to get started.',
  alternates: {
    canonical: 'https://senyosolutions.com/faq',
  },
  openGraph: {
    title: 'FAQ | Senyo Solutions',
    description:
      'Frequently asked questions about Senyo Solutions web design, SEO, hosting, and digital marketing services.',
    url: 'https://senyosolutions.com/faq',
    type: 'website',
  },
};

export default function FAQPage() {
  return <FAQPageClient />;
}
