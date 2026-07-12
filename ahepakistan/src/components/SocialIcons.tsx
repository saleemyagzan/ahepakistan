import { socialLinks, type SocialLink } from "@/data/site"
import { cn } from "@/lib/utils"

const paths: Record<SocialLink["platform"], string> = {
  Facebook: "M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z",
  Instagram:
    "M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8Zm4 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.2-1.2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z",
  LinkedIn:
    "M6.94 8.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.5 10h3v9h-3v-9Zm5.5 0h2.9v1.3h.04c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.66 2 3.66 4.7V19h-3v-4.1c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V19h-3v-9Z",
  YouTube:
    "M21.5 8.4a3 3 0 0 0-2.1-2.1C17.6 5.8 12 5.8 12 5.8s-5.6 0-7.4.5A3 3 0 0 0 2.5 8.4 31 31 0 0 0 2 12a31 31 0 0 0 .5 3.6 3 3 0 0 0 2.1 2.1c1.8.5 7.4.5 7.4.5s5.6 0 7.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.5-3.6ZM10 15V9l5 3-5 3Z",
  Twitter:
    "M20 5.9c-.7.3-1.4.5-2.2.6a3.7 3.7 0 0 0 1.6-2.1c-.7.4-1.6.8-2.4 1a3.7 3.7 0 0 0-6.4 3.4A10.6 10.6 0 0 1 3.1 4.9a3.7 3.7 0 0 0 1.2 5 3.7 3.7 0 0 1-1.7-.5v.1a3.7 3.7 0 0 0 3 3.7 3.7 3.7 0 0 1-1.7.1 3.7 3.7 0 0 0 3.5 2.6A7.5 7.5 0 0 1 2 17.4a10.6 10.6 0 0 0 5.8 1.7c6.9 0 10.7-5.8 10.7-10.7v-.5c.7-.5 1.4-1.2 1.9-2Z",
}

/**
 * Line-style social icons. Platforms without a real URL yet render at low
 * opacity and are not clickable — never a placeholder "#" link.
 */
export function SocialIcons({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((s) => {
        const hasUrl = s.url.trim().length > 0
        const iconColor = light ? "#F8F6F0" : "#2A2A2A"
        const icon = (
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path d={paths[s.platform]} fill={iconColor} />
          </svg>
        )
        const shared = cn(
          "lift flex h-9 w-9 items-center justify-center rounded-full border transition-opacity duration-300",
          light ? "border-ivory/25" : "border-ink/15",
          !hasUrl && "opacity-35",
        )
        return hasUrl ? (
          <a key={s.platform} href={s.url} target="_blank" rel="noreferrer noopener" className={shared} aria-label={s.platform}>
            {icon}
          </a>
        ) : (
          <span key={s.platform} className={shared} aria-hidden="true" title={`${s.platform} — coming soon`}>
            {icon}
          </span>
        )
      })}
    </div>
  )
}
