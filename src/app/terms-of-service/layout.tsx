import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review the Senyo Solutions terms of service for managed IT support and web services.',
  alternates: {
    canonical: 'https://senyosolutions.com/terms-of-service',
  },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
