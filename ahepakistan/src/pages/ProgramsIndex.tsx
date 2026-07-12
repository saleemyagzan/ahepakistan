import { Link } from "react-router-dom"

import { PhotoSlot } from "@/components/Organic"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { domainColor, programs } from "@/data/site"

export function ProgramsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Structured Challenge, Real Standards"
        intro="Seven programs across four domains — from elite science Olympiads to wilderness survival and digital-economy training. Every card links to its own dedicated page."
      />
      <section className="mx-auto max-w-7xl px-5 pb-28 pt-8 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 110}>
              <Link
                to={`/programs/${p.slug}/`}
                className="lift block h-full overflow-hidden rounded-2xl border border-ink/8 bg-ivory"
              >
                <PhotoSlot
                  label={`${p.name} — program photography`}
                  src={p.image}
                  from={p.accent}
                  to="#2A2A2A"
                  ratio="aspect-[16/9]"
                  className="rounded-none"
                />
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {p.domains.map((d) => (
                      <span
                        key={d}
                        className="rounded-full px-2.5 py-0.5 font-body text-[0.65rem] font-medium text-ivory"
                        style={{ background: p.slug === "the-little-scientist" ? "#3FA7D6" : domainColor[d] }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 font-display text-lg font-semibold text-ink">{p.name}</h2>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink/65">{p.short}</p>
                  <span className="mt-4 inline-block font-body text-sm font-medium text-emerald">Learn More</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
