import type { Metadata } from 'next';
import Script from 'next/script';
import FAQPageClient from '@/components/FAQPageClient';

export const metadata: Metadata = {
  title: { absolute: 'Managed IT Support FAQ | Senyo Solutions MSP' },
  description:
    'Frequently asked questions about Senyo Solutions managed IT services, MSP pricing model, on-site support, service areas, and web services for small businesses.',
  alternates: {
    canonical: 'https://senyosolutions.com/faq',
  },
  openGraph: {
    title: 'Managed IT Support FAQ | Senyo Solutions',
    description:
      'Get answers about our Micro MSP support, pricing model, service area, and website service options.',
    url: 'https://senyosolutions.com/faq',
    type: 'website',
  },
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Senyo Solutions best for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Small businesses, professional practices, and creative shops that need dependable IT without the enterprise runaround. Think 5 to 50 people, one or two locations, and better things to do than reboot a router.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you require long-term contracts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nope. Everything is month-to-month. If we're not earning it, you can walk. That's the whole deal.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide on-site support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. On-site is an add-on billed hourly, and a few hours are baked into the Premium plan each month. Most days we solve things remotely before the coffee gets cold.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Long Island, NYC, New Jersey, Connecticut, and Westchester NY. Remote-first, on-site when it matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer website services too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We do. Website design, hosting, and maintenance under the same roof as your IT. One number to call, one invoice to open.',
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <Script
        id="senyo-faq-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <FAQPageClient />
    </>
  );
}
