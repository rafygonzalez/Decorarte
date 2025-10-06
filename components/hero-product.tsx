import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export default async function HeroProduct() {
  const [product] = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!product) return null;

  const { handle, title, featuredImage, priceRange } = product;
  const price = priceRange.minVariantPrice.amount;
  const currency = priceRange.minVariantPrice.currencyCode;

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-12 md:grid md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
      {/* Image */}
      <Link href={`/product/${handle}`} className="relative order-1 aspect-square w-full max-w-md md:order-2 md:max-w-lg md:justify-self-center">
        <Image
          src={featuredImage.url}
          alt={title}
          fill
          sizes="(min-width: 1024px) 500px, (min-width: 768px) 400px, 80vw"
          priority
          className="object-contain"
        />
      </Link>

      {/* Text */}
      <div className="order-2 w-full space-y-6 text-center md:order-1 md:max-w-xl md:text-left">
        <h1 className="text-3xl font-extrabold leading-tight text-[var(--color-primary)] md:text-4xl lg:text-5xl">
          El pegamento original para decorar sin límites
        </h1>
        <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-lg">
          Sella, fija y da vida a tus globos en segundos.
          Fácil aplicación, resultado profesional y máxima duración.
        </p>
        <Link
          href={`/product/${handle}`}
          className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-md bg-[var(--color-tertiary)] px-8 py-3 text-base font-semibold text-white transition-colors hover:opacity-90 md:w-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.45H19M7 13L5.4 5M16 21a1 1 0 100-2 1 1 0 000 2zM8 21a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
          Añadir al carrito – {Intl.NumberFormat('es-CO', { style: 'currency', currency }).format(
            parseFloat(price)
          )}
        </Link>
      </div>
    </section>
  );
}
