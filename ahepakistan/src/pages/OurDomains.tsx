import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

import { SectionHeading } from "@/components/Cta"
import { DomainIcon, OrganicBlob } from "@/components/Organic"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { domains } from "@/data/site"

/*
  The strongest expression of "Modern Organic" motion on the site:
  as the visitor scrolls between domain sections, the ambient accent color
  cross-fades between the four domain colors (700ms, ease-in-out).
*/
export function OurDomains() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.index)
            setActive(idx)
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    )
    refs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const accent = domains[active].color

  return (
    <>
      <PageHero
        eyebrow="Our Domains"
        title="Physical. Mental. Emotional. Spiritual."
        intro="Every AHE program is built on the same four-domain framework. Together they develop the whole young person — and each carries its own color, discipline, and flagship programs."
        accent={accent}
      />

      <div className="relative">
        {/* Ambient background that shifts color with the active domain */}
        <div
          className="pointer-events-none fixed inset-y-0 right-0 w-1/2 transition-colors duration-700 ease-calm"
          style={{ background: `linear-gradient(270deg, ${accent}0F 0%, transparent 70%)` }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none fixed left-0 top-0 h-1 w-full transition-colors duration-700 ease-calm"
          style={{ background: accent }}
          aria-hidden="true"
        />

        {domains.map((d, i) => (
          <section
            key={d.name}
            ref={(el) => (refs.current[i] = el)}
            data-index={i}
            className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8"
          >
            <OrganicBlob
              className={
                d.name === "Spiritual" ? "breathe absolute -left-40 top-10 w-96" : "absolute -left-40 top-10 w-96"
              }
              color={d.color}
              opacity={0.06}
            />
            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <Reveal>
                  <div className={d.name === "Spiritual" || d.name === "Emotional" ? "breathe inline-block" : "inline-block"}>
                    <DomainIcon domain={d.name} color={d.color} className="h-10 w-10" />
                  </div>
                  <SectionHeading eyebrow={`Domain ${String(i + 1).padStart(2, "0")}`} title={d.name} accent={d.color} className="mt-4" />
                  <p className="mt-6 font-body text-[0.95rem] leading-relaxed text-ink/75">{d.overview}</p>
                </Reveal>
                <Reveal delay={150}>
                  <h3 className="mt-10 font-display text-lg font-semibold text-ink">Why It Matters</h3>
                  <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-ink/70">{d.whyItMatters}</p>
                </Reveal>
              </div>
              <div className="space-y-6">
                <Reveal delay={100}>
                  <div className="rounded-2xl border border-ink/8 bg-ivory p-7">
                    <div className="h-1 w-10" style={{ background: d.color }} />
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">Key Areas</h3>
                    <ul className="mt-4 space-y-3">
                      {d.keyAreas.map((k) => (
                        <li key={k} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: d.color }} />
                          <span className="font-body text-sm text-ink/75">{k}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="rounded-2xl border border-ink/8 bg-ivory p-7">
                    <h3 className="font-display text-lg font-semibold text-ink">Related Programs</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {d.programs.map((p) => (
                        <Link
                          key={p.to}
                          to={p.to}
                          className="lift rounded-xl border px-5 py-2.5 font-body text-sm font-medium"
                          style={{ borderColor: `${d.color}66`, color: d.color }}
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
            {i < domains.length - 1 && <div className="mt-24 h-px w-full bg-ink/8" />}
          </section>
        ))}
      </div>
    </>
  )
}
