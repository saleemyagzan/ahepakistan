import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { AmbientBackground } from "@/components/AmbientBackground"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <AmbientBackground />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
