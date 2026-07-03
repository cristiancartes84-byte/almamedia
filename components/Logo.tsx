import Image from 'next/image';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/logo.webp"
        alt="Alma Media Logo"
        width={150}
        height={84}
        priority
        className="w-full h-full object-contain"
      />
    </div>
  );
}
