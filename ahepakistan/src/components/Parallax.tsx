import { useEffect, useRef, useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"

interface ParallaxProps {
  children: ReactNode
  className?: string
  /** How far the element drifts relative to scroll. Keep small — this is depth, not drama. */
  strength?: number
}

/** Subtle parallax: background elements move slightly slower than the page. */
export function Parallax({ children, className, strength = 0.08 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    let raf = 0
    const update = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      setOffset(center * -strength)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [strength])

  return (
    <div ref={ref} className={cn("will-change-transform", className)} style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  )
}
