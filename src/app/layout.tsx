import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Suspense } from 'react';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import GoogleAnalyticsPageView from '@/components/GoogleAnalyticsPageView';
import CookieConsent from '@/components/CookieConsent';
import './styles.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://senyosolutions.com'),
  title: {
    default: 'Senyo Solutions | Web Design, SEO, Hosting & Digital Marketing',
    template: '%s | Senyo Solutions',
  },
  description:
    'Senyo Solutions is a digital services agency offering web design, SEO optimization, managed hosting, digital marketing, and analytics reporting for growing businesses.',
  keywords: [
    'Senyo Solutions',
    'web design agency',
    'SEO services',
    'website hosting',
    'digital marketing',
    'analytics reporting',
  ],
  alternates: {
    canonical: 'https://senyosolutions.com',
  },
  openGraph: {
    title: 'Senyo Solutions | Web Design, SEO, Hosting & Digital Marketing',
    description:
      'Grow your business with high-performance websites, SEO optimization, managed hosting, digital marketing campaigns, and analytics reporting.',
    url: 'https://senyosolutions.com',
    siteName: 'Senyo Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senyo Solutions | Web Design, SEO, Hosting & Digital Marketing',
    description:
      'Digital services for modern businesses: web design, SEO, hosting, digital marketing, and analytics reporting.',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://senyosolutions.com/#organization',
      name: 'Senyo Solutions',
      url: 'https://senyosolutions.com',
      logo: 'https://senyosolutions.com/images/logo1.png',
      email: 'contact@senyosolutions.com',
      telephone: '+1-516-707-7351',
      sameAs: [
        'https://www.linkedin.com/company/senyo-solutions',
        'https://www.instagram.com/SenyoSolutions/',
      ],
      areaServed: 'US',
      description:
        'Senyo Solutions provides web design, SEO, hosting, digital marketing, and analytics services to help businesses grow online.',
    },
    {
      '@type': 'Service',
      serviceType: 'Web Design',
      provider: { '@id': 'https://senyosolutions.com/#organization' },
      areaServed: 'US',
      url: 'https://senyosolutions.com/services/web-design',
    },
    {
      '@type': 'Service',
      serviceType: 'SEO Optimization',
      provider: { '@id': 'https://senyosolutions.com/#organization' },
      areaServed: 'US',
      url: 'https://senyosolutions.com/services/seo',
    },
    {
      '@type': 'Service',
      serviceType: 'Managed Hosting',
      provider: { '@id': 'https://senyosolutions.com/#organization' },
      areaServed: 'US',
      url: 'https://senyosolutions.com/services/hosting',
    },
    {
      '@type': 'Service',
      serviceType: 'Digital Marketing',
      provider: { '@id': 'https://senyosolutions.com/#organization' },
      areaServed: 'US',
      url: 'https://senyosolutions.com/services/digital-marketing',
    },
    {
      '@type': 'Service',
      serviceType: 'Analytics & Reporting',
      provider: { '@id': 'https://senyosolutions.com/#organization' },
      areaServed: 'US',
      url: 'https://senyosolutions.com/services/analytics',
    },
  ],
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-50TB2Q2L1G';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <Script
          id="senyo-organization-services-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <Suspense fallback={null}>
          <GoogleAnalyticsPageView measurementId={GA_MEASUREMENT_ID} />
        </Suspense>
        {children}
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}