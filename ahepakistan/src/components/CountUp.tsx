import { useEffect, useRef, useState } from "react"

interface CountUpProps {
  value: number
  suffix?: string
  /** If provided, render this text instead of counting (for non-numeric stats). */
  text?: string
  duration?: number
}

/** Counts up gently once the element scrolls into view. */
export function CountUp({ value, suffix = "", text, duration = 1800 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState(text ? text : "0")

  useEffect(() => {
    if (text) return
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        if (reduce) {
          setDisplay(`${value}${suffix}`)
          return
        }
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(`${Math.round(eased * value)}${t === 1 ? suffix : ""}`)
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, suffix, text, duration])

  return <span ref={ref}>{display}</span>
}
