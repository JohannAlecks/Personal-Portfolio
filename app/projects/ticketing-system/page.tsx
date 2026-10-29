import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, ClipboardList, LockKeyhole, UsersRound } from "lucide-react"

export const metadata: Metadata = {
  title: "Ticketing System",
  description: "A full-stack support ticket management platform by Johann Alecksandrei G. Factora.",
}

const features = [
  {
    icon: ClipboardList,
    title: "Ticket tracking",
    description: "Users can submit requests and follow their status from creation through resolution.",
  },
  {
    icon: UsersRound,
    title: "Agent workflows",
    description: "Agents can review their assigned work and manage support requests in one place.",
  },
  {
    icon: LockKeyhole,
    title: "Administration",
    description: "Administrators can manage users, assignments, team workloads, and system activity.",
  },
]

const stack = ["React", "Vite", "Node.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma ORM", "JWT", "Tailwind CSS"]

export default function TicketingSystemPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]">
        <ArrowLeft size={16} aria-hidden="true" /> Back to portfolio
      </Link>

      <header className="mt-10 rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_85%_10%,rgba(246,184,95,0.14),transparent_32%),rgba(12,15,20,0.78)] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.2)] sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">Featured project · Full-stack web application</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">Ticketing System</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
          A support ticket management platform designed to connect people requesting help with the agents resolving it, while giving administrators tools to coordinate the whole support team.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,184,95,0.22)] bg-[rgba(246,184,95,0.08)] px-4 py-2 font-mono text-xs text-[var(--color-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" /> Project overview
          </span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs text-[var(--color-muted)]">Live demo coming soon</span>
        </div>
      </header>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-white/10 bg-[rgba(12,15,20,0.72)] p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">The idea</p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">A clear path from request to resolution</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
            Support requests can be difficult to follow when updates, ownership, and workload are spread across different channels. This project brings those steps into one workflow: users raise tickets, agents handle assigned requests, and administrators keep the team and its activity organized.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-[var(--color-text)]">
            {["Submit", "Assign", "Resolve"].map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">{step}</span>
                {index < 2 && <ArrowRight size={14} className="text-[var(--color-accent)]" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">Technology</p>
          <h2 className="mt-3 text-xl font-semibold text-[var(--color-text)]">Built with</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((technology) => (
              <span key={technology} className="rounded-full border border-white/10 bg-[#090b0f]/70 px-3 py-2 font-mono text-[11px] text-[var(--color-muted)]">{technology}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">Core capabilities</p>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">One workflow for every role</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-[24px] border border-white/10 bg-[rgba(12,15,20,0.72)] p-6">
              <span className="inline-flex rounded-xl border border-[rgba(246,184,95,0.2)] bg-[rgba(246,184,95,0.08)] p-3 text-[var(--color-accent)]"><Icon size={20} aria-hidden="true" /></span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-text)]">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[28px] border border-white/10 bg-[rgba(12,15,20,0.72)] p-6 sm:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">What this project demonstrates</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {["Designing role-based workflows", "Building REST APIs with Node.js and Express", "Modeling relational data with PostgreSQL and Prisma", "Connecting a TypeScript frontend to backend services"].map((item) => (
            <p key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--color-muted)]"><Check size={16} className="mt-1 shrink-0 text-[var(--color-signal)]" aria-hidden="true" />{item}</p>
          ))}
        </div>
      </section>

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6">
        <p className="text-sm text-[var(--color-muted)]">Interested in the project? Get in touch.</p>
        <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,184,95,0.25)] bg-[rgba(246,184,95,0.09)] px-4 py-2.5 text-sm font-medium text-[var(--color-accent)] transition-colors hover:bg-[rgba(246,184,95,0.16)]">
          Contact me <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </footer>
    </main>
  )
}
