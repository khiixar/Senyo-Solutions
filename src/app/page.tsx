import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: 'Web Design, SEO & Digital Marketing Services | Senyo Solutions',
  description:
    'Senyo Solutions helps businesses grow online with modern web design, SEO optimization, secure hosting, digital marketing campaigns, and actionable analytics reporting.',
  alternates: {
    canonical: 'https://senyosolutions.com/',
  },
  openGraph: {
    title: 'Senyo Solutions | Web Design, SEO, Hosting & Digital Marketing',
    description:
      'Grow your business online with conversion-focused websites, SEO, hosting, digital marketing, and analytics services from Senyo Solutions.',
    url: 'https://senyosolutions.com/',
    siteName: 'Senyo Solutions',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
