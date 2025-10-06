'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();

  return (
    <Form action="/search" className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        key={searchParams?.get('q')}
        type="text"
        name="q"
        placeholder="Busca globos, accesorios o decoración…"
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        className="text-md w-full rounded-lg border border-primary bg-white px-4 py-2 text-black placeholder:text-neutral-500 transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none md:text-sm dark:border-primary dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-tertiary dark:focus:ring-tertiary/20"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-primary dark:text-tertiary" strokeWidth={2.5} />
      </div>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        placeholder="✨ Busca y haz tu evento único..."
        className="w-full rounded-lg border border-primary bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-primary dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-primary dark:text-tertiary" strokeWidth={2.5} />
      </div>
    </form>
  );
}
