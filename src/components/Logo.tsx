type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "size-9" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="16" fill="#B6F240" />
      <path
        d="M12 43 25 21l8 13 5-9 14 18"
        stroke="#17200A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="48" cy="17" r="5" fill="#17200A" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="size-9" />
      <span className="font-display text-[1.35rem] font-bold tracking-[-0.055em] text-cream">
        gerakin
        <span className="text-lime">.</span>
      </span>
    </span>
  );
}
