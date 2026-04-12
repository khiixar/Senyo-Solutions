import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Managed Hosting Services',
  description:
    'Managed web hosting by Senyo Solutions with security hardening, backups, uptime monitoring, and fast infrastructure for business websites.',
  alternates: {
    canonical: 'https://senyosolutions.com/services/hosting',
  },
};

export default function HostingServicePage() {
  return (
    <ServicePageTemplate
      serviceName="Managed Hosting"
      slug="hosting"
      headline="Managed Hosting Services for Speed, Stability, and Security"
      intro="Keep your website online, secure, and fast with managed hosting from Senyo Solutions. We handle the technical infrastructure so your team can focus on growth, sales, and customer service."
      deliverables={[
        'Managed cloud hosting with uptime monitoring',
        'Security best practices and SSL protection',
        'Automated backups and disaster recovery readiness',
        'Technical support for updates and maintenance',
      ]}
      benefits={[
        'Faster page load times for users and search engines',
        'Reduced downtime risk and better business continuity',
        'Improved website trust and reliability',
        'Less operational overhead for internal teams',
      ]}
    />
  );
}
