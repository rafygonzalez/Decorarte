import Image from 'next/image';

export default function LogoIcon({ className }: { className?: string }) {
  return (
    <div className={className} style={{ position: 'relative' }}>
      <Image
        src="/logo.png"
        alt="Decorarte logo"
        fill
        className="object-contain"
        priority
        sizes="(max-width: 768px) 110px, 120px"
      />
    </div>
  );
}
