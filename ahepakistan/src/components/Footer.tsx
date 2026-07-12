import { Link } from "react-router-dom"

import { Logo } from "@/components/Logo"
import { SocialIcons } from "@/components/SocialIcons"
import { PARTNER_URL, siteCredit } from "@/data/site"

/* Quick Links use the identical URLs as the top nav — no alternate slugs. */
const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us/" },
  { label: "Our Domains", to: "/our-domains/" },
  { label: "Programs", to: "/programs/" },
  { label: "Impact Stories", to: "/impact-stories/" },
  { label: "Reports", to: "/reports/" },
  { label: "Partner With AHE Pakistan", to: PARTNER_URL },
  { label: "Blog", to: "/blog/" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-royal text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-ivory/75">
              Developing Pakistan's young people across four domains — Physical, Mental, Emotional, and Spiritual —
              through structured, credible, life-changing programs.
            </p>
            <SocialIcons light className="mt-6" />
          </div>
          <nav aria-label="Quick links">
            <h3 className="font-display text-base font-semibold text-ivory">Quick Links</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-body text-sm text-ivory/70 transition-colors duration-300 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="font-display text-base font-semibold text-ivory">Registered NGO</h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-ivory/70">
              Academy for Holistic Education Pakistan is a registered non-profit, incorporated with the SECP on
              13 December 2020.
            </p>
            <Link
              to="/reports/"
              className="mt-4 inline-block font-body text-sm font-medium text-gold transition-colors duration-300 hover:text-ivory"
            >
              View our reports and certification
            </Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ivory/15 pt-6 sm:flex-row sm:items-center">
          <p className="font-body text-xs text-ivory/60">
            © {new Date().getFullYear()} Academy for Holistic Education Pakistan. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy-policy/" className="font-body text-xs text-ivory/60 transition-colors duration-300 hover:text-gold">
              Privacy Policy
            </Link>
            <p className="font-body text-xs text-ivory/45">
              Site by{" "}
              <a
                href={siteCredit.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-ivory/60 underline decoration-ivory/25 underline-offset-2 transition-colors duration-300 hover:text-gold"
              >
                {siteCredit.name}
              </a>{" "}
              ·{" "}
              <a
                href={siteCredit.upwork}
                target="_blank"
                rel="noreferrer noopener"
                className="text-ivory/60 underline decoration-ivory/25 underline-offset-2 transition-colors duration-300 hover:text-gold"
              >
                Upwork
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
