import { cn } from "@/lib/utils"

/**
 * Official AHE seal (rising bird + open book, ring wordmark). Used as-is —
 * never stretched, recolored, rotated, or placed on a busy/moving background.
 * Clear space around the mark is enforced by the surrounding flex gap.
 */
export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  const text = light ? "text-ivory" : "text-ink"
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <img src="/ahe-logo.png" alt="Academy for Holistic Education Pakistan" className="h-11 w-11 shrink-0 object-contain" />
      <span className={cn("flex flex-col leading-none", text)}>
        <span className="font-display text-lg font-bold tracking-tight">AHE Pakistan</span>
        <span className={cn("font-body text-[0.6rem] font-medium tracking-[0.14em]", light ? "text-ivory/70" : "text-ink/60")}>
          ACADEMY FOR HOLISTIC EDUCATION
        </span>
      </span>
    </span>
  )
}
