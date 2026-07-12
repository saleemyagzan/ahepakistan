import { cn } from "@/lib/utils"

/** WhatsApp + Gmail share links for a given page/title. No JS SDKs — plain URLs. */
export function ShareButtons({
  title,
  url,
  className,
  light = false,
}: {
  title: string
  url?: string
  className?: string
  light?: boolean
}) {
  const shareUrl = url ?? (typeof window !== "undefined" ? window.location.href : "")
  const text = `${title} — ${shareUrl}`
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(text)}`
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`

  const base = cn(
    "lift inline-flex items-center gap-2 rounded-full border px-4 py-2 font-body text-xs font-medium transition-colors duration-300",
    light ? "border-ivory/30 text-ivory hover:border-ivory/60" : "border-ink/15 text-ink/70 hover:border-emerald hover:text-emerald",
  )

  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      <a href={whatsappHref} target="_blank" rel="noreferrer noopener" className={base} aria-label="Share on WhatsApp">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3ZM12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z"
          />
        </svg>
        WhatsApp
      </a>
      <a href={gmailHref} target="_blank" rel="noreferrer noopener" className={base} aria-label="Share via Gmail">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 2-8 5-8-5h16ZM4 17V8.2l8 5 8-5V17H4Z"
          />
        </svg>
        Email
      </a>
    </div>
  )
}
