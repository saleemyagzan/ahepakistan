import { PhotoSlot } from "@/components/Organic"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { domainColor, stories } from "@/data/site"

export function ImpactStories() {
  return (
    <>
      <PageHero
        eyebrow="Impact Stories"
        title="What Changes When the Whole Person Grows"
        intro="Real students, real programs, real outcomes — told in their own words, photographed in their own places."
        accent="#8C3A44"
      />
      <section className="mx-auto max-w-7xl px-5 pb-28 pt-8 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 110}>
              <article className="lift flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-ivory">
                <PhotoSlot
                  label={`${s.program} — student photography`}
                  from={domainColor[s.domain]}
                  to="#2A2A2A"
                  ratio="aspect-[16/10]"
                  className="rounded-none"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 font-body text-sm leading-relaxed text-ink/75">"{s.quote}"</p>
                  <div className="mt-5 border-t border-ink/8 pt-4">
                    <p className="font-display text-base font-semibold text-ink">{s.name}</p>
                    <p className="mt-0.5 font-body text-xs font-medium" style={{ color: domainColor[s.domain] }}>
                      {s.program}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
