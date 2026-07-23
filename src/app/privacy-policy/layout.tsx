import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Senyo Solutions privacy policy covering how we collect, use, and protect your information.',
  alternates: {
    canonical: 'https://senyosolutions.com/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
