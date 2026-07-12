import { Link } from "react-router-dom"

import { CountUp } from "@/components/CountUp"
import { CtaLink, SectionHeading } from "@/components/Cta"
import { DomainBadge, OrganicBlob, PhotoSlot, WaveDivider } from "@/components/Organic"
import { Parallax } from "@/components/Parallax"
import { Reveal } from "@/components/Reveal"
import { domains, homePreviewSlugs, PARTNER_URL, programs, stats } from "@/data/site"
import { cn } from "@/lib/utils"

export function Home() {
  const preview = homePreviewSlugs
    .map((slug) => programs.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <img
          src="/images/hero-landscape.jpg"
          alt=""
          className="shape-in absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Soft gradient scrim, not a flat dark box */}
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/55 to-ivory/10" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/50 via-transparent to-transparent" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pb-24 pt-40 lg:px-8">
          <h1 className="hero-fade max-w-4xl font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Educate the Mind.
            <br />
            <span className="text-emerald">Enlighten the Heart.</span>
            <br />
            Empower the Soul.
          </h1>
          <p className="hero-fade-1 mt-7 max-w-xl font-body text-base leading-relaxed text-ink/70 md:text-lg">
            Academy for Holistic Education Pakistan is a registered youth-development NGO building young people across
            four domains — Physical, Mental, Emotional, and Spiritual.
          </p>
          <div className="hero-fade-2 mt-10 flex flex-wrap items-center gap-4">
            <CtaLink to={PARTNER_URL}>Partner With Us</CtaLink>
            <CtaLink to="/programs/" variant="outline">
              Explore Programs
            </CtaLink>
          </div>
        </div>
      </section>

      {/* ---------- Intro ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="Holistic Education & Youth Development Programs in Pakistan"
            />
            <p className="mt-6 font-body text-[0.95rem] leading-relaxed text-ink/75">
              Founded in 2020 and incorporated with the SECP, AHE Pakistan designs and delivers structured programs —
              math competitions, winter sport, wilderness challenges, residential camps, and digital-skills cohorts —
              that develop the whole young person, not just the exam result. We work where opportunity is scarcest,
              beginning in the valleys of Gilgit-Baltistan.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <Parallax strength={0.05}>
              <PhotoSlot label="AHE program photography — students in classroom engagement, natural light" />
            </Parallax>
          </Reveal>
        </div>
      </section>

      {/* ---------- Why it matters ---------- */}
      <section className="relative bg-emerald/[0.04]">
        <WaveDivider fill="#F8F6F0" flip className="absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="The case" title="Why Holistic Education Matters in Pakistan" />
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {[
              {
                h: "Exams are not education",
                p: "Pakistan's schooling rewards memorisation. Employers, universities, and communities need judgement, character, and initiative — capacities that must be deliberately built.",
              },
              {
                h: "Talent without opportunity",
                p: "In districts like those of Gilgit-Baltistan, extraordinary young people simply never meet structured competition, mentorship, or challenge. We bring the arena to them.",
              },
              {
                h: "The whole person, or nothing",
                p: "Physical courage, mental rigour, emotional steadiness, and spiritual direction reinforce each other. Development that ignores any one of them does not hold.",
              },
            ].map((item, i) => (
              <Reveal key={item.h} delay={i * 120}>
                <h3 className="font-display text-xl font-semibold text-ink">{item.h}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">{item.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <WaveDivider fill="#F8F6F0" className="absolute inset-x-0 bottom-0" />
      </section>

      {/* ---------- Four domains ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Our framework" title="Four Domains, One Young Person" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((d, i) => (
            <Reveal key={d.name} delay={i * 120}>
              <Link
                to="/our-domains/"
                className="card-pop group block h-full overflow-hidden rounded-2xl border-2 bg-ivory transition-colors duration-400"
                style={{ borderColor: `${d.color}33` }}
              >
                <div className="relative">
                  <PhotoSlot label={`${d.name} domain`} src={d.image} from={d.color} to={d.color} ratio="aspect-[16/10]" className="rounded-none" />
                  <div
                    className={cn(
                      "absolute -bottom-6 left-6",
                      (d.name === "Spiritual" || d.name === "Emotional") && "breathe",
                    )}
                  >
                    <DomainBadge domain={d.name} color={d.color} className="ring-4 ring-ivory" />
                  </div>
                </div>
                <div className="p-7 pt-10">
                  <h3 className="font-display text-xl font-semibold text-ink">{d.name}</h3>
                  <p className="mt-2.5 font-body text-sm leading-relaxed text-ink/65">{d.tagline}</p>
                  <span
                    className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-medium transition-colors duration-300"
                    style={{ color: d.color }}
                  >
                    Explore
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Programs preview ---------- */}
      <section className="relative bg-royal/[0.04]">
        <WaveDivider fill="#F8F6F0" flip className="absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionHeading eyebrow="What we run" title="Programs That Change Trajectories" accent="#1F3C88" />
            </Reveal>
            <Reveal delay={150}>
              <CtaLink to="/programs/" variant="outline">
                All Programs
              </CtaLink>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {preview.map((p, i) => (
              <Reveal key={p.slug} delay={i * 110}>
                <Link to={`/programs/${p.slug}/`} className="card-pop block h-full overflow-hidden rounded-2xl border border-ink/8 bg-ivory">
                  <PhotoSlot
                    label={`${p.name} — program photography`}
                    src={p.image}
                    from={p.accent}
                    to="#1F3C88"
                    ratio="aspect-[16/9]"
                    className="rounded-none"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      {p.domains.map((d) => (
                        <span
                          key={d}
                          className="rounded-full px-2.5 py-0.5 font-body text-[0.65rem] font-medium text-ivory"
                          style={{
                            background:
                              p.slug === "the-little-scientist"
                                ? "#3FA7D6"
                                : { Physical: "#0B6E4F", Mental: "#1F3C88", Emotional: "#8C3A44", Spiritual: "#C6A84E" }[d],
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold text-ink">{p.name}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink/65">{p.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <WaveDivider fill="#F8F6F0" className="absolute inset-x-0 bottom-0" />
      </section>

      {/* ---------- Impact stats ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <div className="rounded-2xl border border-ink/8 bg-ivory p-8 text-center">
                <p className="font-display text-4xl font-bold text-emerald">
                  {s.text ? s.text : <CountUp value={s.value} suffix={s.suffix} />}
                </p>
                <p className="mt-2.5 font-body text-sm font-medium text-ink/65">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Legitimacy ---------- */}
      <section className="mx-auto max-w-7xl px-5 pb-28 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-royal px-8 py-14 text-ivory md:px-14">
            <OrganicBlob className="absolute -right-32 -top-32 w-96" color="#C6A84E" opacity={0.1} />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <SectionHeading eyebrow="Know more about AHE" title="A Registered, Accountable Institution" accent="#C6A84E" light />
                <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-ivory/80">
                  AHE Pakistan was incorporated with the Securities and Exchange Commission of Pakistan on
                  13 December 2020. Our incorporation certificate and annual reports are public — accountability is
                  part of how we teach it.
                </p>
              </div>
              <div className="rounded-2xl border border-gold/40 bg-ivory/5 p-7">
                <p className="font-body text-xs font-medium uppercase tracking-[0.18em] text-gold">SECP Certificate</p>
                <p className="mt-3 font-display text-lg font-semibold">Certificate of Incorporation</p>
                <p className="mt-1.5 font-body text-sm text-ivory/70">Registered 13 December 2020</p>
                <a
                  href="/documents/secp-certificate-of-incorporation.pdf"
                  className="lift mt-6 inline-flex rounded-xl border border-gold/60 px-6 py-3 font-body text-sm font-medium text-gold"
                  download
                >
                  Download Certificate
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
