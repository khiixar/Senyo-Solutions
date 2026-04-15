/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output standalone for Vercel
  output: undefined,
  // Allow images from external domains if needed
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },
  async redirects() {
    return [
      { source: '/services/web-design', destination: '/web-services', permanent: true },
      { source: '/services/seo', destination: '/web-services', permanent: true },
      { source: '/services/hosting', destination: '/web-services', permanent: true },
      { source: '/services/digital-marketing', destination: '/web-services', permanent: true },
      { source: '/services/analytics', destination: '/web-services', permanent: true },
    ];
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;