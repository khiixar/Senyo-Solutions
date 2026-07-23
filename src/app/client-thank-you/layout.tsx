import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You',
  robots: { index: false, follow: false },
};

export default function ClientThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
