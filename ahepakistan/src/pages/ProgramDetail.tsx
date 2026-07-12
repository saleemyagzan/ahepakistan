import { Link, Navigate, useParams } from "react-router-dom"

import { CtaLink, SectionHeading } from "@/components/Cta"
import { PhotoSlot, WaveDivider } from "@/components/Organic"
import { PageHero } from "@/components/PageHero"
import { Parallax } from "@/components/Parallax"
import { Reveal } from "@/components/Reveal"
import { domainColor, PARTNER_URL, programs } from "@/data/site"

export function ProgramDetail() {
  const { slug } = useParams()
  const program = programs.find((p) => p.slug === slug)

  if (!program) return <Navigate to="/programs/" replace />

  const isLittleScientist = program.slug === "the-little-scientist"

  return (
    <>
      <PageHero
        eyebrow={isLittleScientist ? "Elite Science Olympiad" : "Program"}
        title={program.name}
        intro={program.short}
        accent={program.accent}
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-4 lg:px-8">
        <Reveal>
          <Parallax strength={0.04}>
            <PhotoSlot
              label={`${program.name} — hero photography, real students, natural light`}
              from={program.accent}
              to="#1F3C88"
              ratio="aspect-[21/9]"
            />
          </Parallax>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <SectionHeading eyebrow="Overview" title={`About ${program.name}`} accent={program.accent} />
              <p className="mt-6 font-body text-[0.95rem] leading-relaxed text-ink/75">{program.overview}</p>
              {program.note && (
                <p className="mt-5 rounded-xl border border-gold/40 bg-gold/5 p-5 font-body text-sm leading-relaxed text-ink/70">
                  {program.note}
                </p>
              )}
            </Reveal>

            <Reveal delay={120}>
              <h2 className="mt-14 font-display text-2xl font-semibold text-ink">What Students Gain</h2>
              <ul className="mt-6 space-y-4">
                {program.gains.map((g) => (
                  <li key={g} className="flex gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: program.accent }} />
                    <p className="font-body text-sm leading-relaxed text-ink/75">{g}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-ink/8 bg-ivory p-7">
                <div className="h-1 w-10" style={{ background: program.accent }} />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">Domain</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {program.domains.map((d) => (
                    <Link
                      key={d}
                      to="/our-domains/"
                      className="rounded-full px-3.5 py-1 font-body text-xs font-medium text-ivory transition-opacity duration-300 hover:opacity-85"
                      style={{ background: isLittleScientist ? "#3FA7D6" : domainColor[d] }}
                    >
                      {d}
                    </Link>
                  ))}
                </div>
                {program.slug === "jugnoo-camp" && (
                  <p className="mt-4 font-body text-xs leading-relaxed text-ink/60">
                    Jugnoo Camp is AHE's one deliberately four-domain program — a complete arc in a single residence.
                  </p>
                )}
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div
                className="rounded-2xl p-7 text-ivory"
                style={{ background: isLittleScientist ? "#1F3C88" : "#0B6E4F" }}
              >
                <h3 className="font-display text-lg font-semibold">
                  {isLittleScientist ? "Compete With the Best" : "Take the Next Step"}
                </h3>
                <p className="mt-2.5 font-body text-sm leading-relaxed text-ivory/80">
                  {isLittleScientist
                    ? "Selection is competitive and standards are high. Registration opens ahead of each Olympiad cycle."
                    : "Registration details are announced ahead of each program cycle. Register interest and we will contact you."}
                </p>
                <CtaLink to={PARTNER_URL} variant="gold-outline" className="mt-6 border-gold/70 text-ivory">
                  {program.cta}
                </CtaLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative bg-emerald/[0.04]">
        <WaveDivider fill="#F8F6F0" flip className="absolute inset-x-0 top-0" />
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-24 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">Explore all AHE programs</h2>
          </Reveal>
          <Reveal delay={120}>
            <CtaLink to="/programs/" variant="outline">
              Back to Programs
            </CtaLink>
          </Reveal>
        </div>
      </section>
    </>
  )
}
