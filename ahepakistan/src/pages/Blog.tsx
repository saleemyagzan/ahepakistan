import { Link } from "react-router-dom"

import { PhotoSlot } from "@/components/Organic"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { ShareButtons } from "@/components/ShareButtons"
import { blogPosts, domainColor } from "@/data/site"

export function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes From the Field"
        intro="Essays and updates from AHE's programs, trainers, and students — written from the valleys, not the head office."
      />
      <section className="mx-auto max-w-7xl px-5 pb-28 pt-8 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 4) * 100}>
              <article className="card-pop flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-ivory">
                <Link to={`/blog/${post.slug}/`}>
                  <PhotoSlot
                    label="Post photography"
                    from={domainColor[post.domain]}
                    to="#2A2A2A"
                    ratio="aspect-[16/10]"
                    className="rounded-none"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  {/* Domain color on the tag pill only — never the whole card */}
                  <span
                    className="w-fit rounded-full px-2.5 py-0.5 font-body text-[0.65rem] font-medium text-ivory"
                    style={{ background: domainColor[post.domain] }}
                  >
                    {post.domain}
                  </span>
                  <Link to={`/blog/${post.slug}/`}>
                    <h2 className="mt-3 font-display text-base font-semibold leading-snug text-ink transition-colors duration-300 hover:text-emerald">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mt-1.5 font-body text-xs text-ink/50">{post.date}</p>
                  <p className="mt-3 flex-1 font-body text-[0.82rem] leading-relaxed text-ink/65">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}/`}
                    className="mt-4 font-body text-sm font-medium text-emerald transition-colors duration-300 hover:text-royal"
                  >
                    Read More →
                  </Link>
                  <ShareButtons title={post.title} className="mt-4 border-t border-ink/8 pt-4" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
