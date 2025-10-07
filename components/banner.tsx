import Image from 'next/image';

export default function Banner() {
  return (
    <section className="relative w-full mb-8">
      <Image
        src="/hero_product.png"
        alt="Productos profesionales para decoradores"
        width={1920}
        height={600}
        priority
        className="h-auto w-full object-cover"
        sizes="100vw"
      />
    </section>
  );
}
