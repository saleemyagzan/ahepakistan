import { cn } from "@/lib/utils"

/**
 * Wordmark stand-in until the official AHE logo files are supplied.
 * Line-style rising bird/open book mark in brand emerald — never stretched,
 * recolored, or placed on busy backgrounds.
 */
export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  const text = light ? "text-ivory" : "text-ink"
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <g fill="none" stroke="#0B6E4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 28c4.5-2.8 9.5-2.8 14 0 4.5-2.8 9.5-2.8 14 0" />
          <path d="M6 28v4c4.5-2.8 9.5-2.8 14 0 4.5-2.8 9.5-2.8 14 0v-4" />
          <path d="M20 22c-1-4.5 1.5-9.5 6-12-0.5 3 0 5.5 2 7" />
          <path d="M20 22c1-3.5 4-6.5 8-7.5" stroke="#C6A84E" />
        </g>
      </svg>
      <span className={cn("flex flex-col leading-none", text)}>
        <span className="font-display text-lg font-bold tracking-tight">AHE Pakistan</span>
        <span className={cn("font-body text-[0.6rem] font-medium tracking-[0.14em]", light ? "text-ivory/70" : "text-ink/60")}>
          ACADEMY FOR HOLISTIC EDUCATION
        </span>
      </span>
    </span>
  )
}
