import { useEffect, useRef, useState } from "react"

import { CtaLink, SectionHeading } from "@/components/Cta"
import { PhotoSlot, WaveDivider } from "@/components/Organic"
import { PageHero } from "@/components/PageHero"
import { Parallax } from "@/components/Parallax"
import { Reveal } from "@/components/Reveal"
import { PARTNER_URL } from "@/data/site"
import { cn } from "@/lib/utils"

const orgLevels = [
  { role: "Founder", detail: "Rehmat Khan" },
  { role: "CEO", detail: "Anam Karim" },
  { role: "Program Leads", detail: "One lead per domain and flagship program" },
  { role: "Trainers", detail: "Certified facilitators and coaches" },
  { role: "Volunteers", detail: "Alumni and community volunteers" },
]

const steps = [
  { n: "01", h: "Clear Goals", p: "Every program starts with a defined objective — never activity for its own sake." },
  { n: "02", h: "Defined Participants", p: "We know exactly who a program is for before we design a single session." },
  { n: "03", h: "Simple Execution", p: "Structured, repeatable steps that trainers can run to a written standard." },
  { n: "04", h: "Review and Feedback", p: "Every cohort closes with structured reflection, not just a certificate." },
  { n: "05", h: "Measurable Outcomes", p: "Results are recorded and go into public annual reports." },
]

/* Vertical org chart that draws itself in on scroll — lines extend, nodes fade in sequentially. */
function OrgChart() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="mx-auto flex max-w-md flex-col items-center">
      {orgLevels.map((level, i) => (
        <div key={level.role} className="flex w-full flex-col items-center">
          {i > 0 && (
            <div
              className={cn("org-line h-10 w-px bg-gold", visible && "is-visible")}
              style={{ transitionDelay: `${i * 350}ms` }}
            />
          )}
          <div
            className={cn("reveal w-full rounded-2xl border border-ink/10 bg-ivory px-6 py-4 text-center", visible && "is-visible")}
            style={{ "--reveal-delay": `${i * 350 + 150}ms` } as React.CSSProperties}
          >
            <p className="font-display text-lg font-semibold text-royal">{level.role}</p>
            <p className="mt-0.5 font-body text-xs text-ink/60">{level.detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function AboutUs() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built in the Mountains, for the Whole Person"
        intro="AHE Pakistan exists because young people deserve development that goes beyond the exam hall — and institutions they can trust to deliver it."
      />

      {/* Founder story */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Parallax strength={0.05}>
              <PhotoSlot label="Founder photography — Rehmat Khan with students, natural light" ratio="aspect-[3/4] max-h-[480px]" />
            </Parallax>
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading eyebrow="Founder story" title="It Began With One Question" />
            <div className="mt-6 space-y-4 font-body text-[0.95rem] leading-relaxed text-ink/75">
              <p>
                AHE was founded by Rehmat Khan on 13 December 2020 with one clear belief: education must go beyond
                books. It must develop the whole individual. What started as small community initiatives is now a
                structured platform for youth development that addresses the gap between traditional education and
                real-life development.
              </p>
              <p>
                The belief became a framework — Physical, Mental, Emotional, and Spiritual development, treated as one
                inseparable whole — and the framework became programs: competitions in the valleys, winter challenges
                in the mountains, camps under the open sky, and digital-skills cohorts that turn talent into
                livelihood.
              </p>
              <p>
                Five years on, AHE is a registered institution with more than five hundred students engaged across
                three districts — and the belief still drives everything we build.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach / Vision / Mission */}
      <section className="relative bg-emerald/[0.04]">
        <WaveDivider fill="#F8F6F0" flip className="absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Our approach" title="Vision, Mission, and Method" />
            <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-ink/70">
              We do not run random events. We design structured programs with clear objectives, measurable outcomes,
              and long-term impact. Every activity aligns with one or more of our four development domains.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                h: "Vision",
                p: "To build a society where individuals grow with balance, clarity, and purpose.",
              },
              {
                h: "Mission",
                p: "We design and deliver structured programs that develop physical, mental, emotional, and spiritual strength in youth.",
              },
              {
                h: "Method",
                p: "Real challenge, real standards, real accountability. Students earn what they gain — and every program is measured, reported, and improved.",
              },
            ].map((c, i) => (
              <Reveal key={c.h} delay={i * 120}>
                <div className="h-full rounded-2xl border border-ink/8 bg-ivory p-8">
                  <div className="h-1 w-10 bg-gold" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{c.h}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">{c.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <WaveDivider fill="#F8F6F0" className="absolute inset-x-0 bottom-0" />
      </section>

      {/* Leadership + Org chart */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading eyebrow="Leadership team" title="Led by People Who Show Up" accent="#1F3C88" />
              <p className="mt-6 max-w-lg font-body text-sm leading-relaxed text-ink/70">
                AHE is led by a small, accountable team — a founder who still runs camps, program leads drawn from the
                communities we serve, and trainers certified to written standards. Leadership at AHE is a
                responsibility you carry in person, on the ground.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Founder — Rehmat Khan", "CEO — Anam Karim", "Head of Programs", "Head of Partnerships"].map((r, i) => (
                <Reveal key={r} delay={i * 100}>
                  <div className="rounded-2xl border border-ink/8 bg-ivory p-5">
                    <PhotoSlot label="Team portrait" ratio="aspect-square" className="mb-4" from="#1F3C88" to="#0B6E4F" />
                    <p className="font-body text-sm font-medium text-ink">{r}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <SectionHeading eyebrow="Organizational structure" title="A Clear Line of Responsibility" accent="#C6A84E" />
            </Reveal>
            <div className="mt-10">
              <OrgChart />
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="relative bg-royal/[0.04]">
        <WaveDivider fill="#F8F6F0" flip className="absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="How we work" title="Five Steps, Every Time" accent="#1F3C88" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 140}>
                <div className="h-full rounded-2xl border border-ink/8 bg-ivory p-6">
                  <p className="font-display text-2xl font-bold text-royal/30">{s.n}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{s.h}</h3>
                  <p className="mt-2 font-body text-[0.82rem] leading-relaxed text-ink/65">{s.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <WaveDivider fill="#F8F6F0" className="absolute inset-x-0 bottom-0" />
      </section>

      {/* Different */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="What makes AHE different" title="Standards, Not Sentiment" />
            <p className="mt-6 max-w-lg font-body text-sm leading-relaxed text-ink/70">
              AHE does not work through random events. We work through systems. Every activity is connected to one of
              our four development domains and is designed to create long-term value.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                "Four-domain framework applied to every program — never activity for activity's sake.",
                "SECP-registered, publicly reporting, and audited: legitimacy is part of the curriculum.",
                "Programs run where others don't go — high valleys, winter seasons, underserved districts.",
                "Alumni return as leaders: a deliberate pathway from participant to volunteer to trainer.",
              ].map((t) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <p className="font-body text-sm leading-relaxed text-ink/75">{t}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CtaLink to={PARTNER_URL}>Partner With Us</CtaLink>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Parallax strength={0.05}>
              <PhotoSlot label="Students at play — everyday life, natural light" src="/images/students-playground.png" />
            </Parallax>
          </Reveal>
        </div>
      </section>
    </>
  )
}
