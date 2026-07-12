import { useState } from "react"

import { SectionHeading } from "@/components/Cta"
import { PhotoSlot, WaveDivider } from "@/components/Organic"
import { PageHero } from "@/components/PageHero"
import { Parallax } from "@/components/Parallax"
import { Reveal } from "@/components/Reveal"

const audiences = [
  { h: "Schools & Colleges", p: "Host an Olympiad round, send a cohort to camp, or embed four-domain programming into your calendar." },
  { h: "Corporates & CSR", p: "Fund a named program cycle with full reporting — every rupee traced to a student outcome." },
  { h: "Foundations & NGOs", p: "Co-design and co-deliver programming in districts you serve; we bring the framework and trainers." },
  { h: "Government & Districts", p: "Bring structured youth development to your district with a registered, reporting partner." },
]

const offers = [
  "A tested four-domain program framework, delivered to written standards",
  "SECP registration, public annual reports, and transparent budgeting",
  "On-ground teams in Gilgit-Baltistan with five years of delivery",
  "Named recognition across program materials, ceremonies, and reports",
]

export function Partner() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Partner With AHE Pakistan"
        title="Build the Next Cohort With Us"
        intro="Partnership with AHE is concrete: a program cycle funded, a district reached, a cohort trained — and every outcome reported back to you."
        accent="#C6A84E"
      />

      {/* Who we work with */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Who we work with" title="Four Kinds of Partner" />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <Reveal key={a.h} delay={i * 110}>
              <div className="lift h-full rounded-2xl border border-ink/8 bg-ivory p-7">
                <div className="h-1 w-10 bg-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{a.h}</h3>
                <p className="mt-2.5 font-body text-sm leading-relaxed text-ink/65">{a.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we offer / why partner */}
      <section className="relative bg-emerald/[0.04]">
        <WaveDivider fill="#F8F6F0" flip className="absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionHeading eyebrow="What we offer" title="A Partner You Can Audit" />
              <ul className="mt-8 space-y-5">
                {offers.map((o) => (
                  <li key={o} className="flex gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    <p className="font-body text-sm leading-relaxed text-ink/75">{o}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-lg font-body text-sm leading-relaxed text-ink/70">
                Why partner? Because youth development in Pakistan's hardest-to-reach districts doesn't need another
                pilot — it needs institutions that stay. AHE has stayed for five years. Partners make the sixth
                bigger than the first five combined.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <Parallax strength={0.05}>
                {/* Real program photography here — never handshake stock or signage imagery */}
                <PhotoSlot label="Program photography — partner visit to a live AHE camp" from="#C6A84E" to="#0B6E4F" />
              </Parallax>
            </Reveal>
          </div>
        </div>
        <WaveDivider fill="#F8F6F0" className="absolute inset-x-0 bottom-0" />
      </section>

      {/* Opportunities + intake form */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Partnership opportunities" title="Where Support Lands" accent="#1F3C88" />
            <div className="mt-8 space-y-4">
              {[
                { h: "Sponsor a Program Cycle", p: "Fund one full run of a flagship program — Olympiad, camp, or cohort — with named recognition." },
                { h: "Adopt a District", p: "Underwrite AHE's expansion into a new district across all four domains." },
                { h: "In-Kind & Expertise", p: "Equipment, venues, trainer time, or professional services that a program cycle needs." },
              ].map((o) => (
                <div key={o.h} className="rounded-2xl border border-ink/8 bg-ivory p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{o.h}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink/65">{o.p}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl border border-ink/8 bg-ivory p-8 shadow-[0_24px_60px_-30px_rgba(42,42,42,0.25)] md:p-10">
              <h2 className="font-display text-2xl font-semibold text-ink">Become a Partner</h2>
              <p className="mt-2 font-body text-sm text-ink/65">
                Tell us who you are and what you'd like to build. We reply within five working days.
              </p>
              {submitted ? (
                <div className="mt-8 rounded-2xl border border-emerald/30 bg-emerald/5 p-6">
                  <p className="font-display text-lg font-semibold text-emerald">Thank you.</p>
                  <p className="mt-2 font-body text-sm text-ink/70">
                    Your inquiry has been recorded. Our partnerships team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  className="mt-8 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  {[
                    { id: "org", label: "Organization", type: "text", placeholder: "Your organization" },
                    { id: "name", label: "Contact name", type: "text", placeholder: "Full name" },
                    { id: "email", label: "Email", type: "email", placeholder: "you@organization.org" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="font-body text-xs font-medium uppercase tracking-wide text-ink/60">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        className="mt-2 w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 font-body text-sm text-ink outline-none transition-colors duration-300 placeholder:text-ink/35 focus:border-emerald"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="font-body text-xs font-medium uppercase tracking-wide text-ink/60">
                      What would you like to build together?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="A program cycle, a district, an idea…"
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 font-body text-sm text-ink outline-none transition-colors duration-300 placeholder:text-ink/35 focus:border-emerald"
                    />
                  </div>
                  <button
                    type="submit"
                    className="lift w-full rounded-xl bg-emerald px-7 py-3.5 font-body text-sm font-medium text-ivory"
                  >
                    Become a Partner
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
