import { cn } from "@/lib/utils"

/**
 * Soft organic blob used as a background accent — echoes the rising-bird/book
 * curve of the AHE logo. Always decorative, always low-opacity.
 */
export function OrganicBlob({
  className,
  color = "#0B6E4F",
  opacity = 0.07,
}: {
  className?: string
  color?: string
  opacity?: number
}) {
  return (
    <svg viewBox="0 0 600 600" className={cn("pointer-events-none select-none", className)} aria-hidden="true">
      <path
        fill={color}
        fillOpacity={opacity}
        d="M437.5 89.5c54.8 36.7 96.9 96.1 104.2 159.9 7.2 63.7-20.4 131.8-67.9 176.8-47.5 45.1-114.8 67.2-179.4 63.5-64.6-3.7-126.4-33.1-165.9-82.3-39.6-49.2-56.8-118.3-38.8-176.3C107.6 173 164.6 126 226.6 98.3c62-27.8 156.1-45.5 210.9-8.8Z"
      />
    </svg>
  )
}

/** A single slow organic wave dividing two sections. */
export function WaveDivider({
  className,
  fill = "#F8F6F0",
  flip = false,
}: {
  className?: string
  fill?: string
  flip?: boolean
}) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={cn("block h-14 w-full md:h-20", flip && "rotate-180", className)}
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M0 55C180 15 360 0 540 14c180 15 330 55 510 58 150 3 280-20 390-42V90H0V55Z"
      />
    </svg>
  )
}

/** Simple line-style domain icons — never filled, never cartoonish. */
export function DomainIcon({ domain, color, className }: { domain: string; color: string; className?: string }) {
  const common = {
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} aria-hidden="true">
      {domain === "Physical" && (
        <g {...common}>
          <path d="M16 6l6 10-6 10-6-10 6-10Z" />
          <path d="M10 16h12" />
        </g>
      )}
      {domain === "Mental" && (
        <g {...common}>
          <circle cx="16" cy="14" r="7" />
          <path d="M13 25h6M14 28h4M16 7v3M11 10l1.5 1.5M21 10l-1.5 1.5" />
        </g>
      )}
      {domain === "Emotional" && (
        <g {...common}>
          <path d="M16 25s-8-5.2-8-11a4.6 4.6 0 0 1 8-3.1A4.6 4.6 0 0 1 24 14c0 5.8-8 11-8 11Z" />
        </g>
      )}
      {domain === "Spiritual" && (
        <g {...common}>
          <circle cx="16" cy="16" r="5" />
          <path d="M16 5v3M16 24v3M5 16h3M24 16h3M8.2 8.2l2.1 2.1M21.7 21.7l2.1 2.1M23.8 8.2l-2.1 2.1M10.3 21.7l-2.1 2.1" />
        </g>
      )}
    </svg>
  )
}

/**
 * Photography slot — a calm duotone placeholder panel awaiting real AHE
 * program photography (natural light, real students). No stock imagery.
 */
export function PhotoSlot({
  label,
  from = "#0B6E4F",
  to = "#1F3C88",
  className,
  ratio = "aspect-[4/3]",
  src,
}: {
  label: string
  from?: string
  to?: string
  className?: string
  ratio?: string
  /** When provided, renders this image instead of the gradient placeholder. */
  src?: string
}) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden rounded-2xl", ratio, className)}>
        <img src={src} alt={label} className="h-full w-full object-cover" loading="lazy" />
      </div>
    )
  }

  return (
    <div
      className={cn("grain relative overflow-hidden rounded-2xl", ratio, className)}
      style={{ background: `linear-gradient(135deg, ${from}26 0%, ${to}33 100%)` }}
      role="img"
      aria-label={label}
    >
      <OrganicBlob className="absolute -right-1/4 -top-1/4 w-3/4" color={to} opacity={0.12} />
      <OrganicBlob className="absolute -bottom-1/3 -left-1/4 w-2/3" color={from} opacity={0.12} />
      <span className="absolute bottom-4 left-5 font-body text-xs font-medium tracking-wide text-ink/50">
        {label}
      </span>
    </div>
  )
}
