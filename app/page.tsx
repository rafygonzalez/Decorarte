import { Carousel } from 'components/carousel';
import FAQ from 'components/faq';
import { TwoItemGrid } from 'components/grid/two-items';
import HeroProduct from 'components/hero-product';
import Footer from 'components/layout/footer';
import PromoVideo from 'components/promo-video';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <HeroProduct />
      <div className="mx-auto max-w-6xl space-y-12 px-4">
        <TwoItemGrid />
        <Carousel />
        <PromoVideo />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
