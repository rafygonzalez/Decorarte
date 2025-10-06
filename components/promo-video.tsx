// PromoVideo component: two-column hero with text and video preview
'use client';

import { PlayCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

const VIDEO_URL = 'https://www.facebook.com/share/v/1BWWDq7c7S/?mibextid=wwXIfr';

export default function PromoVideo() {
  return (
    <section className="mx-auto my-8 max-w-6xl overflow-hidden rounded-lg bg-[var(--color-primary)]/90 shadow-lg md:flex">
      {/* Text column */}
      <div className="flex w-full flex-col justify-center p-10 text-white md:w-1/2">
        <h2 className="mb-4 text-3xl font-extrabold leading-tight md:text-4xl">
          ¡Descubre cómo usar DecoGlue!
        </h2>
        <p className="mb-6 leading-relaxed opacity-90">
          Aprende paso a paso con nuestro video demostrativo y sácale el máximo provecho a tus decoraciones con globos.
        </p>
        <div className="flex space-x-4">
          <Link
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border-2 border-white px-5 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-primary)]"
          >
            Ver en Facebook
          </Link>
        </div>
      </div>

      {/* Video preview column */}
      <div className="relative h-64 w-full md:h-auto md:w-1/2">
        <Link
          href={VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group absolute inset-0 flex items-center justify-center overflow-hidden"
        >
          {/* Background thumbnail */}
          <Image
            src="/video_miniatura-1.png"
            alt="Video tutorial DecoGlue"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />
          
          {/* Play button overlay */}
          <div className="relative z-10 flex flex-col items-center gap-3 transition-transform group-hover:scale-110">
            <PlayCircleIcon className="h-20 w-20 text-white opacity-90 transition-opacity group-hover:opacity-100" />
            <span className="text-sm font-semibold text-white opacity-90 group-hover:opacity-100">
              Ver video tutorial
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
