import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Analytics & Reporting Services',
  description:
    'Analytics and reporting services from Senyo Solutions to track website performance, marketing ROI, user behavior, and conversion trends.',
  alternates: {
    canonical: 'https://senyosolutions.com/services/analytics',
  },
};

export default function AnalyticsServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Analytics & Reporting"
      slug="analytics"
      headline="Analytics & Reporting Services for Smarter Decisions"
      intro="We set up clean analytics foundations so you can track what matters, measure ROI, and make confident marketing decisions. Turn raw numbers into clear insights your team can act on."
      deliverables={[
        'Analytics setup and conversion tracking configuration',
        'Dashboard creation for traffic, leads, and sales metrics',
        'Monthly reporting with insights and recommendations',
        'Attribution analysis across SEO, paid, and referral channels',
      ]}
      benefits={[
        'Improved visibility into campaign and website performance',
        'Faster decision-making using reliable data',
        'Clear proof of marketing ROI and revenue impact',
        'Continuous optimization based on user behavior trends',
      ]}
    />
  );
}
