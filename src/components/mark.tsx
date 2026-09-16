export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#161618" />
      <circle cx="16" cy="16" r="9" stroke="#c9925a" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="2.4" fill="#f3eee6" />
      <circle cx="16" cy="9.2" r="1.15" fill="#c9925a" />
      <circle cx="16" cy="22.8" r="1.15" fill="#c9925a" />
      <circle cx="9.2" cy="16" r="1.15" fill="#c9925a" />
      <circle cx="22.8" cy="16" r="1.15" fill="#c9925a" />
    </svg>
  );
}
