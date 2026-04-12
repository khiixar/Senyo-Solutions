import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Web Design Services',
  description:
    'Custom web design services from Senyo Solutions focused on branding, performance, conversion optimization, and responsive user experiences.',
  alternates: {
    canonical: 'https://senyosolutions.com/services/web-design',
  },
};

export default function WebDesignServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Web Design"
      slug="web-design"
      headline="Web Design Services That Convert Visitors Into Customers"
      intro="We design modern websites that load quickly, look great on every device, and guide your audience toward action. Every design decision is built around your goals, brand voice, and customer journey."
      deliverables={[
        'Responsive website design and UI layout',
        'Brand-aligned visual system and messaging',
        'Conversion-focused landing page structure',
        'Performance optimization and mobile-first implementation',
      ]}
      benefits={[
        'Higher conversion rates from better UX and messaging alignment',
        'Stronger brand credibility across desktop and mobile',
        'Improved page speed and engagement metrics',
        'Scalable design foundation for future marketing campaigns',
      ]}
    />
  );
}
