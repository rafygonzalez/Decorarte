import { CartProvider } from 'components/cart/cart-context';
import { Navbar } from 'components/layout/navbar';
import { WelcomeToast } from 'components/welcome-toast';
import { GeistSans } from 'geist/font/sans';
import { getCart } from 'lib/shopify';
import { baseUrl } from 'lib/utils';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';
import './theme.css';

export async function generateMetadata() {
  const siteName = process.env.SITE_NAME || '';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: siteName,
      template: `%s | ${siteName}`
    },
    robots: {
      follow: true,
      index: true
    }
  } as const;
}

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster 
              closeButton 
              position="top-right"
              toastOptions={{
                style: {
                  background: 'var(--color-secondary)',
                  border: '1px solid var(--color-primary)',
                  color: '#000',
                },
                className: 'border-primary',
              }}
            />
            <WelcomeToast />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
