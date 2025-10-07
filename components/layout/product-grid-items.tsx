import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

// Helper to convert HTML description to plain text and return first line truncated
function getFirstLineFromDescription(html: string, maxLength = 120): string {
  const plain = html
    .replace(/<br\s*\/?>(?=\s*)/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .trim();

  const firstLine = plain.split(/\n+/)[0] || '';
  return firstLine.length > maxLength ? `${firstLine.slice(0, maxLength - 3)}...` : firstLine;
}

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link
            className="relative inline-block h-full w-full"
            href={`/product/${product.handle}`}
            prefetch={true}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
          {/* Product description (first line, max 120 chars) */}
          {product.descriptionHtml ? (
            <p className="pt-2 text-sm leading-snug text-neutral-700 dark:text-neutral-300">
              {getFirstLineFromDescription(product.descriptionHtml)}
            </p>
          ) : null}
        </Grid.Item>
      ))}
    </>
  );
}
