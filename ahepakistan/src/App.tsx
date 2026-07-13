import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"

import { Layout } from "@/components/Layout"
import { blogPosts, PARTNER_URL, programs } from "@/data/site"
import { AboutUs } from "@/pages/AboutUs"
import { Blog } from "@/pages/Blog"
import { BlogPost } from "@/pages/BlogPost"
import { Home } from "@/pages/Home"
import { ImpactStories } from "@/pages/ImpactStories"
import { NotFound } from "@/pages/NotFound"
import { OurDomains } from "@/pages/OurDomains"
import { Partner } from "@/pages/Partner"
import { PrivacyPolicy } from "@/pages/PrivacyPolicy"
import { ProgramDetail } from "@/pages/ProgramDetail"
import { ProgramsIndex } from "@/pages/ProgramsIndex"
import { Reports } from "@/pages/Reports"

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
    </BrowserRouter>
  )
}
