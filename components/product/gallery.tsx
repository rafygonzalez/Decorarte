'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { GridTileImage } from 'components/grid/tile';
import { useProduct, useUpdateURL } from 'components/product/product-context';
import Image from 'next/image';
import { useState } from 'react';
import Skeleton from '../skeleton';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  const buttonClassName =
    'h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center';

  const [loaded, setLoaded] = useState(false);

  return (
    <form>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden bg-gradient-to-br from-secondary via-white to-secondary dark:bg-gradient-to-br dark:from-primary/20 dark:via-black dark:to-primary/20 rounded-lg">
        {!loaded && <Skeleton className="absolute inset-0" />}
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
            onLoadingComplete={() => setLoaded(true)}
          />
        )}

        {images.length > 1 ? (
          <div className="absolute bottom-4 right-4">
            <div className="flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur-sm dark:border-black dark:bg-neutral-900/80 shadow-lg">
              <button
                formAction={() => {
                  const newState = updateImage(previousImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Imagen anterior del producto"
                className={buttonClassName}
              >
                <ArrowLeftIcon className="h-5" />
              </button>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <button
                formAction={() => {
                  const newState = updateImage(nextImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Siguiente imagen del producto"
                className={buttonClassName}
              >
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="my-12 flex items-center flex-wrap justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === imageIndex;

            return (
              <li key={image.src} className="h-20 w-20">
                <button
                  formAction={() => {
                    const newState = updateImage(index.toString());
                    updateURL(newState);
                  }}
                  aria-label="Seleccionar imagen del producto"
                  className="h-full w-full"
                >
                  <GridTileImage
                    alt={image.altText}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
}
