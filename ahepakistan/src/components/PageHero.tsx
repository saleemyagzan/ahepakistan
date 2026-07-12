import { OrganicBlob } from "@/components/Organic"

export function PageHero({
  eyebrow,
  title,
  intro,
  accent = "#0B6E4F",
}: {
  eyebrow: string
  title: string
  intro?: string
  accent?: string
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-44">
      <OrganicBlob className="shape-in absolute -right-48 -top-24 w-[36rem]" color={accent} opacity={0.07} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="hero-fade font-body text-xs font-medium uppercase tracking-[0.18em] text-ink/55">{eyebrow}</p>
        <h1 className="hero-fade-1 mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="hero-fade-2 mt-6 max-w-2xl font-body text-base leading-relaxed text-ink/70">{intro}</p>
        )}
        <div className="hero-fade-2 mt-8 h-px w-16" style={{ background: accent }} />
      </div>
    </section>
  )
}
