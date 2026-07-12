import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"

import { Logo } from "@/components/Logo"
import { dropdownPrograms, PARTNER_URL } from "@/data/site"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us/" },
  { label: "Our Domains", to: "/our-domains/" },
  { label: "Programs", to: "/programs/", dropdown: true },
  { label: "Impact Stories", to: "/impact-stories/" },
  { label: "Reports", to: "/reports/" },
  { label: "Partner With AHE Pakistan", to: PARTNER_URL },
  { label: "Blog", to: "/blog/" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [progOpen, setProgOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const closeTimer = useRef<number>()

  useEffect(() => {
    setOpen(false)
    setProgOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const enterProg = () => {
    window.clearTimeout(closeTimer.current)
    setProgOpen(true)
  }
  const leaveProg = () => {
    closeTimer.current = window.setTimeout(() => setProgOpen(false), 180)
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-calm",
        scrolled ? "bg-ivory/95 shadow-[0_1px_0_rgba(42,42,42,0.08)] backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" aria-label="AHE Pakistan — Home" className="py-2">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.to} className="relative" onMouseEnter={enterProg} onMouseLeave={leaveProg}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-1 rounded-lg px-3 py-2 font-body text-[0.82rem] font-medium text-ink/80 transition-colors duration-300 hover:text-emerald",
                      isActive && "text-emerald",
                    )
                  }
                  aria-expanded={progOpen}
                >
                  {item.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", progOpen && "rotate-180")} />
                </NavLink>
                <div
                  className={cn(
                    "absolute left-0 top-full w-64 rounded-2xl border border-ink/8 bg-ivory p-2 shadow-[0_24px_50px_-20px_rgba(42,42,42,0.3)] transition-all duration-400 ease-calm",
                    progOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0",
                  )}
                >
                  {dropdownPrograms.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/programs/${p.slug}/`}
                      className="block rounded-xl px-4 py-2.5 font-body text-[0.82rem] font-medium text-ink/80 transition-colors duration-300 hover:bg-emerald/5 hover:text-emerald"
                    >
                      <span className="mr-2.5 inline-block h-1.5 w-1.5 rounded-full align-middle" style={{ background: p.accent }} />
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2 font-body text-[0.82rem] font-medium text-ink/80 transition-colors duration-300 hover:text-emerald",
                    isActive && "text-emerald",
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-lg p-2 text-ink xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden bg-ivory transition-all duration-500 ease-calm xl:hidden",
          open ? "max-h-[80vh] border-b border-ink/8 shadow-lg" : "max-h-0",
        )}
      >
        <nav className="space-y-1 overflow-y-auto px-5 pb-6 pt-2" aria-label="Mobile">
          {navItems.map((item) => (
            <div key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "block rounded-xl px-4 py-3 font-body text-sm font-medium text-ink/85",
                    isActive && "bg-emerald/5 text-emerald",
                  )
                }
              >
                {item.label}
              </NavLink>
              {item.dropdown && (
                <div className="ml-4 border-l border-ink/10 pl-3">
                  {dropdownPrograms.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/programs/${p.slug}/`}
                      className="block rounded-lg px-3 py-2 font-body text-[0.82rem] text-ink/70"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}
