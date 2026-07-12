import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"

import { cn } from "@/lib/utils"

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger delay in ms */
  delay?: number
  as?: "div" | "section" | "li" | "article"
}

/** Scroll-triggered reveal: fade + 12px drift, 700ms ease-in-out, fires once. */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
