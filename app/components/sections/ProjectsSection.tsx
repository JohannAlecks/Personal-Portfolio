"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, LifeBuoy } from "lucide-react"

const technologies = ["React", "TypeScript", "Express", "PostgreSQL", "Prisma"]

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-8 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">Selected work</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">Projects</h2>
          </div>
          <span className="font-mono text-xs text-[var(--color-muted)]">01 featured project</span>
        </div>

        <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(12,15,20,0.72)]/80 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-colors hover:border-[rgba(246,184,95,0.35)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded-2xl border border-[rgba(246,184,95,0.22)] bg-[rgba(246,184,95,0.1)] p-3 text-[var(--color-accent)]">
                    <LifeBuoy size={22} aria-hidden="true" />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">Full-stack application</p>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">Ticketing System</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                  A support platform for submitting requests, managing assigned tickets, and giving administrators a clear view of team workload and activity.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-[var(--color-muted)]">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="/projects/ticketing-system"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(246,184,95,0.28)] bg-[rgba(246,184,95,0.1)] px-4 py-2.5 text-sm font-medium text-[var(--color-accent)] transition-all hover:-translate-y-0.5 hover:bg-[rgba(246,184,95,0.16)]"
              >
                View project details <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="relative min-h-64 overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_80%_15%,rgba(246,184,95,0.13),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] p-5 sm:p-8 lg:border-l lg:border-t-0">
              <div className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-[#090b0f]/90 p-4 shadow-2xl sm:p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)]">Support workspace</p>
                    <p className="mt-1 text-sm font-medium text-[var(--color-text)]">Assigned to me</p>
                  </div>
                  <span className="rounded-full border border-[rgba(110,231,183,0.22)] bg-[rgba(110,231,183,0.08)] px-2.5 py-1 font-mono text-[10px] text-[var(--color-signal)]">3 open</span>
                </div>
                <div className="mt-4 space-y-3" aria-label="Sample ticket list preview">
                  <TicketPreview id="TKT-1048" title="Cannot access team workspace" status="In progress" tone="amber" />
                  <TicketPreview id="TKT-1047" title="New laptop setup request" status="Open" tone="blue" />
                  <TicketPreview id="TKT-1045" title="Reset account access" status="Resolved" tone="green" />
                </div>
                <p className="mt-4 text-center font-mono text-[10px] text-[var(--color-muted)]">Illustrative interface preview</p>
              </div>
            </div>
          </div>
        </article>
      </motion.div>
    </section>
  )
}

function TicketPreview({ id, title, status, tone }: { id: string; title: string; status: string; tone: "amber" | "blue" | "green" }) {
  const toneClasses = {
    amber: "border-[rgba(246,184,95,0.2)] bg-[rgba(246,184,95,0.08)] text-[var(--color-accent)]",
    blue: "border-[rgba(125,170,255,0.2)] bg-[rgba(125,170,255,0.08)] text-[#a9c5ff]",
    green: "border-[rgba(110,231,183,0.2)] bg-[rgba(110,231,183,0.08)] text-[var(--color-signal)]",
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
      <div className="min-w-0">
        <p className="font-mono text-[9px] text-[var(--color-muted)]">{id}</p>
        <p className="mt-1 truncate text-xs text-[var(--color-text)]">{title}</p>
      </div>
      <span className={`shrink-0 rounded-full border px-2 py-1 font-mono text-[9px] ${toneClasses[tone]}`}>{status}</span>
    </div>
  )
}
