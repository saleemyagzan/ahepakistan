import { OrganicBlob } from "@/components/Organic"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { reports } from "@/data/site"

export function Reports() {
  return (
    <>
      <PageHero
        eyebrow="Reports"
        title="Accountability, Published Annually"
        intro="Our annual reports and incorporation documents are public. If we ask students to meet standards, we hold ourselves to them first."
        accent="#1F3C88"
      />

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {reports.map((r, i) => (
            <Reveal key={r.year} delay={i * 120}>
              <article className="lift flex h-full flex-col rounded-2xl border border-ink/8 bg-ivory p-8">
                <p className="font-display text-4xl font-bold text-royal/25">{r.year}</p>
                <h2 className="mt-4 font-display text-xl font-semibold text-ink">{r.title}</h2>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink/70">{r.summary}</p>
                {r.available ? (
                  <a
                    href={`/documents/ahe-annual-report-${r.year}.pdf`}
                    download
                    className="lift mt-7 inline-flex w-fit rounded-xl bg-emerald px-6 py-3 font-body text-sm font-medium text-ivory"
                  >
                    Download Report
                  </a>
                ) : (
                  <span className="mt-7 inline-flex w-fit rounded-xl border border-ink/15 px-6 py-3 font-body text-sm font-medium text-ink/40">
                    Coming Soon
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-royal px-8 py-12 text-ivory md:px-14">
            <OrganicBlob className="absolute -right-24 -top-24 w-80" color="#C6A84E" opacity={0.1} />
            <div className="relative flex flex-wrap items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="font-body text-xs font-medium uppercase tracking-[0.18em] text-gold">SECP Certification</p>
                <h2 className="mt-3 font-display text-2xl font-semibold">Certificate of Incorporation</h2>
                <p className="mt-3 font-body text-sm leading-relaxed text-ivory/80">
                  Academy for Holistic Education Pakistan was incorporated with the Securities and Exchange Commission
                  of Pakistan on 13 December 2020.
                </p>
              </div>
              <a
                href="/documents/secp-certificate-of-incorporation.pdf"
                download
                className="lift inline-flex rounded-xl border border-gold/60 px-7 py-3.5 font-body text-sm font-medium text-gold"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
