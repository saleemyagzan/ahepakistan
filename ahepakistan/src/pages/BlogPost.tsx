import { Link, Navigate, useParams } from "react-router-dom"

import { PhotoSlot } from "@/components/Organic"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { ShareButtons } from "@/components/ShareButtons"
import { blogPosts, domainColor } from "@/data/site"

export function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog/" replace />

  const accent = domainColor[post.domain]

  return (
    <>
      <PageHero eyebrow="Blog" title={post.title} intro={post.excerpt} accent={accent} />

      <section className="mx-auto max-w-3xl px-5 pb-28 pt-4 lg:px-0">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-3 py-1 font-body text-xs font-medium text-ivory"
              style={{ background: accent }}
            >
              {post.domain}
            </span>
            <span className="font-body text-sm text-ink/50">{post.date}</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <PhotoSlot label={`${post.title} — post photography`} from={accent} to="#2A2A2A" ratio="aspect-[16/9]" className="mt-8" />
        </Reveal>

        <div className="mt-10 space-y-10">
          {post.sections.map((section, i) => (
            <Reveal key={i} delay={150 + i * 60}>
              <div>
                {section.heading && (
                  <h2 className="mb-4 font-display text-2xl font-semibold text-ink">{section.heading}</h2>
                )}
                <div className="space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="font-body text-[0.95rem] leading-relaxed text-ink/75">
                      {p}
                    </p>
                  ))}
                </div>
                {section.links && section.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {section.links.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        className="lift inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-body text-sm font-medium transition-colors duration-300"
                        style={{ borderColor: `${accent}66`, color: accent }}
                      >
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ink/8 pt-8">
            <ShareButtons title={post.title} />
            <Link to="/blog/" className="font-body text-sm font-medium text-emerald transition-colors duration-300 hover:text-royal">
              ← Back to Blog
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
