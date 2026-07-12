import { CtaLink } from "@/components/Cta"
import { OrganicBlob } from "@/components/Organic"

export function NotFound() {
  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center overflow-hidden px-5 pt-24 text-center">
      <OrganicBlob className="absolute -right-40 top-0 w-[30rem]" color="#0B6E4F" opacity={0.06} />
      <p className="hero-fade font-body text-xs font-medium uppercase tracking-[0.18em] text-ink/55">Page not found</p>
      <h1 className="hero-fade-1 mt-4 font-display text-4xl font-bold text-ink">This path doesn't exist.</h1>
      <p className="hero-fade-2 mt-4 max-w-md font-body text-sm leading-relaxed text-ink/65">
        The page you followed isn't here — but the journey continues.
      </p>
      <div className="hero-fade-2 mt-8">
        <CtaLink to="/">Return Home</CtaLink>
      </div>
    </section>
  )
}
