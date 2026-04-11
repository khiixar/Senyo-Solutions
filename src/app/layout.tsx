import type { Metadata } from 'next';
import Script from 'next/script';
import './styles.css';

export const metadata: Metadata = {
  title: 'Senyo Solutions',
  description: 'Professional digital marketing and web solutions provider',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Archivo + Space Grotesk — modern portfolio pairing */}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Senyo Solutions",
              "description": "Professional digital marketing and web solutions provider",
              "url": "https://senyosolutions.com",
              "logo": "https://play-lh.googleusercontent.com/PxVKjgVqH7hidrji0tXzOObaunLZRZ5sRuborJHPyM1z2WFczc4uW2tXva3iOyqgtzI",
              "telephone": "(516) 707-7351",
              "email": "contact@senyosolutions.com",
              "image": [
                "https://media-cdn.tripadvisor.com/media/photo-m/1280/1f/36/2d/d5/bar-and-dining-room.jpg",
                "https://play-lh.googleusercontent.com/E3JHvb2T15eu1JiwmfxK77lTGu0iTxlXmjtN1l6jH1FOUvkKNnLkdycipRBtFX0tTBUlPenNJrr5lrs0XTppLg=w240-h480-rw"
              ],
              "priceRange": "$$",
              "areaServed": "US",
              "availableLanguage": ["en"],
              "serviceType": [
                "Web Design",
                "SEO Optimization",
                "Web Hosting",
                "Digital Advertising",
                "Marketing Strategy"
              ],
              "sameAs": [
                "https://www.facebook.com/senyosolutions",
                "https://www.twitter.com/senyosolutions",
                "https://www.linkedin.com/company/senyosolutions"
              ]
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
