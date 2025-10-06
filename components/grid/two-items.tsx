import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function TwoItemGridItem({ item }: { item: Product }) {
  return (
    <Link
      href={`/product/${item.handle}`}
      prefetch={true}
      className="relative block aspect-square w-full"
    >
      <GridTileImage
        src={item.featuredImage.url}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        alt={item.title}
        label={{
          position: 'bottom',
          title: item.title as string,
          amount: item.priceRange.maxVariantPrice.amount,
          currencyCode: item.priceRange.maxVariantPrice.currencyCode
        }}
      />
    </Link>
  );
}

export async function TwoItemGrid() {
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  const items = homepageItems.slice(1, 3);
  if (items.length < 2) return null;

  return (
    <section className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-2">
      {items.map((product) => (
        <TwoItemGridItem key={product.handle} item={product} />
      ))}
    </section>
  );
}
