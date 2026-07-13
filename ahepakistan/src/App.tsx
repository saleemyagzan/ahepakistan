import { lazy, Suspense, useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"

import { Layout } from "@/components/Layout"
import { blogPosts, PARTNER_URL, programs } from "@/data/site"
import { Home } from "@/pages/Home"

const AboutUs = lazy(() => import("@/pages/AboutUs").then((m) => ({ default: m.AboutUs })))
const Blog = lazy(() => import("@/pages/Blog").then((m) => ({ default: m.Blog })))
const BlogPost = lazy(() => import("@/pages/BlogPost").then((m) => ({ default: m.BlogPost })))
const ImpactStories = lazy(() => import("@/pages/ImpactStories").then((m) => ({ default: m.ImpactStories })))
const NotFound = lazy(() => import("@/pages/NotFound").then((m) => ({ default: m.NotFound })))
const OurDomains = lazy(() => import("@/pages/OurDomains").then((m) => ({ default: m.OurDomains })))
const Partner = lazy(() => import("@/pages/Partner").then((m) => ({ default: m.Partner })))
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy })))
const ProgramDetail = lazy(() => import("@/pages/ProgramDetail").then((m) => ({ default: m.ProgramDetail })))
const ProgramsIndex = lazy(() => import("@/pages/ProgramsIndex").then((m) => ({ default: m.ProgramsIndex })))
const Reports = lazy(() => import("@/pages/Reports").then((m) => ({ default: m.Reports })))

const titles: Record<string, string> = {
  "/": "Academy for Holistic Education Pakistan — Educate the Mind. Enlighten the Heart. Empower the Soul.",
  "/about-us/": "About Us — AHE Pakistan",
  "/our-domains/": "Our Domains — Physical, Mental, Emotional, Spiritual — AHE Pakistan",
  "/programs/": "Programs — AHE Pakistan",
  "/impact-stories/": "Impact Stories — AHE Pakistan",
  "/reports/": "Reports — AHE Pakistan",
  [PARTNER_URL]: "Partner With AHE Pakistan",
  "/blog/": "Blog — AHE Pakistan",
  "/privacy-policy/": "Privacy Policy — AHE Pakistan",
}

const DEFAULT_META_DESCRIPTION =
  "Holistic education and youth development programs in Pakistan. AHE Pakistan develops young people across four domains — Physical, Mental, Emotional, and Spiritual."

function DocumentTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`
    const program = programs.find((p) => normalized === `/programs/${p.slug}/`)
    const post = blogPosts.find((p) => normalized === `/blog/${p.slug}/`)

    document.title = post
      ? `${post.title} — AHE Pakistan`
      : program
        ? `${program.name} — AHE Pakistan`
        : (titles[normalized] ?? "AHE Pakistan")

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement("meta")
      meta.setAttribute("name", "description")
      document.head.appendChild(meta)
    }
    meta.setAttribute("content", post ? post.metaDescription : DEFAULT_META_DESCRIPTION)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <DocumentTitle />
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="our-domains" element={<OurDomains />} />
            <Route path="programs" element={<ProgramsIndex />} />
            <Route path="programs/:slug" element={<ProgramDetail />} />
            <Route path="impact-stories" element={<ImpactStories />} />
            <Route path="reports" element={<Reports />} />
            <Route path="partner-with-us-ahe-pakistan" element={<Partner />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
