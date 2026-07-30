"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

const SOCIAL_ITEMS = [
  { href: "https://github.com/JohannAlecks", label: "GitHub" },
  // NOTE: your original href had unescaped spaces and will 404 — replace
  // with your real LinkedIn vanity URL from linkedin.com/in/<your-slug>/edit
  { href: "https://linkedin.com/in/johann-alecksandrei-factora", label: "LinkedIn" },
]

export default function Header() {
  const [active, setActive] = useState<string>("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[rgba(10,11,13,0.7)]/80 px-5 py-3 backdrop-blur-xl sm:px-8 lg:px-10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between" aria-label="Primary">
        <div className="flex min-w-0 items-center gap-4">
          <a
            href="/JOHANN ALECKSANDREI G. FACTORA.CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 transition-transform duration-300 hover:-translate-y-0.5"
            aria-label="Download Johann's CV (PDF, opens in new tab)"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.28)] transition-all duration-300 group-hover:shadow-[0_0_0_1px_rgba(246,184,95,0.2),0_14px_40px_rgba(246,184,95,0.12)] sm:h-16 sm:w-16">
              <Image
                src="/PROFILE.jpg"
                alt="Johann Alecksandrei G. Factora"
                width={160}
                height={160}
                quality={100}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </a>
          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold text-[var(--color-text)] sm:text-base">
              Johann Alecksandrei G. Factora
            </h1>
            <p className="mt-1 truncate font-mono text-[11px] text-[var(--color-muted)] sm:text-xs">
              Full Stack Development ·  &amp; AI Fundamentals
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-6 shrink-0 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-active={active === item.href}
              className="nav-link text-sm text-[var(--color-muted)] transition-colors duration-200 data-[active=true]:text-[var(--color-text)] hover:text-[var(--color-text)]"
            >
              {item.label}
            </a>
          ))}
          <span className="h-4 w-px bg-white/10" aria-hidden="true" />
          {SOCIAL_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-accent)] hover:bg-[rgba(246,184,95,0.08)] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "close" : "menu"}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 lg:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 pt-2">
            {SOCIAL_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[var(--color-accent)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
