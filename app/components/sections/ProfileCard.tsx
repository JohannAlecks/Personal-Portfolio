"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Typewriter from "./Typewriter"

const TAGS = ["Full Stack", "AI Fundamentals", "SQL", "Flutter", "Python", "GCP"]

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative mx-auto max-w-md rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.3)]"
    >
      <div className="absolute inset-0 rounded-[28px] border border-[rgba(246,184,95,0.18)]" />
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[var(--color-panel)] p-4">
        <div className="relative overflow-hidden rounded-[20px] border border-white/10">
          <Image
            src="/PROFILE.jpg"
            alt="Johann Alecksandrei G. Factora"
            width={640}
            height={740}
            quality={100}
            priority
            className="h-[360px] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(4,8,14,0.55)_100%)]" />
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                currently focused on
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-text)]">
                <Typewriter text="Learning AI Fundamentals • Improving SQL & Backend Skills" speed={35} startDelay={250} />
              </p>
            </div>
            <div className="rounded-full border border-[rgba(246,184,95,0.24)] bg-[rgba(246,184,95,0.12)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
              open to work
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[var(--color-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">focus</p>
              <p className="mt-1 text-sm text-[var(--color-text)]">Full stack development & building real-world projects</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">approach</p>
              <p className="mt-1 text-sm text-[var(--color-text)]">Simple, practical, and always improving</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
