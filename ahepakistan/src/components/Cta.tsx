import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"

export function CtaLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string
  children: React.ReactNode
  variant?: "primary" | "outline" | "gold-outline"
  className?: string
}) {
  return (
    <Link
      to={to}
      className={cn(
        "lift inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-body text-sm font-medium",
        variant === "primary" && "bg-emerald text-ivory",
        variant === "outline" && "border border-emerald/40 text-emerald hover:border-emerald",
        variant === "gold-outline" && "border border-gold/60 text-ink hover:border-gold",
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  accent = "#0B6E4F",
  className,
  light = false,
}: {
  eyebrow?: string
  title: string
  accent?: string
  className?: string
  light?: boolean
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p
          className={cn("mb-3 font-body text-xs font-medium uppercase tracking-[0.18em]", light ? "text-ivory/70" : "text-ink/55")}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-display text-3xl font-semibold leading-tight md:text-4xl", light ? "text-ivory" : "text-ink")}>
        {title}
      </h2>
      <div className="mt-5 h-px w-16" style={{ background: accent }} />
    </div>
  )
}
