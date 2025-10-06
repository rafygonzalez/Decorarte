export default {
  output: 'standalone',
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    SHOPIFY_REVALIDATION_SECRET: process.env.SHOPIFY_REVALIDATION_SECRET,
    COMPANY_NAME: process.env.COMPANY_NAME,
    SITE_NAME: process.env.SITE_NAME
  },
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
    reactOwnerStack: true,
    newDevOverlay: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/terminos-y-condiciones',
        destination: '/terms-and-conditions'
      },
      {
        source: '/politica-de-privacidad',
        destination: '/privacy-policy'
      },
      {
        source: '/politicas-de-envio',
        destination: '/shipping-policies'
      }
    ];
  }
};
