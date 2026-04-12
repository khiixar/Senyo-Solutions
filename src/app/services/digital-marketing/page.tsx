import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Digital Marketing Services',
  description:
    'Digital marketing services from Senyo Solutions including campaign strategy, paid media management, creatives, and funnel optimization.',
  alternates: {
    canonical: 'https://senyosolutions.com/services/digital-marketing',
  },
};

export default function DigitalMarketingServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Digital Marketing"
      slug="digital-marketing"
      headline="Digital Marketing Services Focused on Measurable Growth"
      intro="From campaign strategy to optimization, we help businesses attract the right audience and turn clicks into customers. Our marketing work is data-driven, transparent, and aligned to revenue goals."
      deliverables={[
        'Cross-channel digital campaign planning',
        'Paid media setup and optimization',
        'Audience targeting and remarketing strategy',
        'Creative performance analysis and iteration',
      ]}
      benefits={[
        'Higher return on ad spend through continuous optimization',
        'Better lead quality from audience and message alignment',
        'Clear insight into channel performance and contribution',
        'Scalable growth systems tailored to your budget and goals',
      ]}
    />
  );
}
