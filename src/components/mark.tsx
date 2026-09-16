export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#161618" />
      <circle cx="16" cy="16" r="9" stroke="#f5f5f4" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2.2" fill="#f5f5f4" />
      <circle cx="16" cy="9.2" r="1.1" fill="#f5f5f4" />
      <circle cx="16" cy="22.8" r="1.1" fill="#f5f5f4" />
      <circle cx="9.2" cy="16" r="1.1" fill="#f5f5f4" />
      <circle cx="22.8" cy="16" r="1.1" fill="#f5f5f4" />
    </svg>
  );
}
