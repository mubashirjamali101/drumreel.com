export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect width="31" height="31" x="0.5" y="0.5" rx="8" fill="#141418" stroke="#f4f4f5" strokeWidth="1" />
      <circle cx="16" cy="16" r="9" stroke="#f5f5f4" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2.2" fill="#f5f5f4" />
      <circle cx="16" cy="9.2" r="1.1" fill="#f5f5f4" />
      <circle cx="16" cy="22.8" r="1.1" fill="#f5f5f4" />
      <circle cx="9.2" cy="16" r="1.1" fill="#f5f5f4" />
      <circle cx="22.8" cy="16" r="1.1" fill="#f5f5f4" />
    </svg>
  );
}
