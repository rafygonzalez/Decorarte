import Banner from 'components/banner';
import { Carousel } from 'components/carousel';
import FAQ from 'components/faq';
import { ProductsGrid } from 'components/grid/products';
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
      <Banner />
      <div className="mx-auto max-w-6xl space-y-12 px-4">
        <ProductsGrid />
        <Carousel />
        <PromoVideo />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
