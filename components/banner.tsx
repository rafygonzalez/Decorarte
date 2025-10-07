'use client';

import Image from 'next/image';
import { useState } from 'react';
import Skeleton from './skeleton';

export default function Banner() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative w-full mb-8">
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full" />}
      <Image
        src="/hero_product.png"
        alt="Productos profesionales para decoradores"
        width={1920}
        height={600}
        priority
        className="h-auto w-full object-cover"
        sizes="100vw"
        onLoadingComplete={() => setLoaded(true)}
      />
    </section>
  );
}
