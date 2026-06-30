export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="w-full h-full bg-[var(--color-accent)] rounded-md flex items-center justify-center text-[var(--color-bg)] font-black text-xl">
        A
      </div>
    </div>
  );
}
