import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getCollectionProducts } from 'lib/shopify';

export async function ProductsGrid() {
  const products = await getCollectionProducts({ collection: 'hidden-homepage-featured-items' });

  if (!products?.length) return null;

  return (
    <section className="mx-auto max-w-6xl space-y-6 px-4">
      <Grid className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
        <ProductGridItems products={products} />
      </Grid>
    </section>
  );
}
