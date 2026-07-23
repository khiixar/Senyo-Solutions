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
    default: 'Senyo Solutions',
    template: '%s | Senyo Solutions',
  },
  description:
    'Senyo Solutions provides simple, secure IT support for small businesses across Long Island, New York State, and New Jersey. Month-to-month plans with no long-term contracts.',
  keywords: [
    'Senyo Solutions',
    'micro msp',
    'IT Support',
    'managed IT services',
    'small practice IT support',
    'Long Island IT support',
    'small businesses',
    'web design',
  ],
  alternates: {
    canonical: 'https://senyosolutions.com',
  },
  openGraph: {
    title: 'Senyo Solutions',
    description:
      'Simple, secure IT support for small businesses on Long Island — without expensive MSP contracts.',
    url: 'https://senyosolutions.com',
    siteName: 'Senyo Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senyo Solutions | IT Support for small businesses',
    description:
      'Managed IT plans, responsive local support, and complementary web services for small businesses.',
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
      logo: 'https://senyosolutions.com/images/logo.svg',
      email: 'contact@senyosolutions.com',
      telephone: '+1-516-707-7351',
      areaServed: ['Long Island, NY', 'New York, NY', 'New Jersey, US'],
      description:
        'MSP delivering managed IT support for small businesses.',
    },
    {
      '@type': 'Service',
      serviceType: 'Managed IT Support',
      provider: { '@id': 'https://senyosolutions.com/#organization' },
      url: 'https://senyosolutions.com/services',
    },
    {
      '@type': 'Service',
      serviceType: 'Website Design and Hosting',
      provider: { '@id': 'https://senyosolutions.com/#organization' },
      url: 'https://senyosolutions.com/web-services',
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
        <a href="#main-content" className="skip-link">Skip to main content</a>
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
