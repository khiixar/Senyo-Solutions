import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'SEO Services',
  description:
    'SEO services by Senyo Solutions including technical audits, on-page optimization, keyword strategy, and ongoing performance reporting.',
  alternates: {
    canonical: 'https://senyosolutions.com/services/seo',
  },
};

export default function SeoServicePage() {
  return (
    <ServicePageTemplate
      serviceName="SEO Optimization"
      slug="seo"
      headline="SEO Services That Help Your Business Rank and Grow"
      intro="Our SEO campaigns are built for sustainable organic growth. We combine technical SEO, search intent research, and content optimization to increase visibility and generate qualified leads."
      deliverables={[
        'Keyword research aligned to buyer intent',
        'On-page optimization for key service pages',
        'Technical SEO audits and issue remediation',
        'Monthly rankings, traffic, and conversion reporting',
      ]}
      benefits={[
        'Stronger rankings for high-value local and service keywords',
        'Increased organic traffic from qualified prospects',
        'Improved site health and crawlability for search engines',
        'Long-term lead generation without relying only on paid ads',
      ]}
    />
  );
}
