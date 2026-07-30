"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

const bulletPoints = [
  "Provided technical support for hardware, software, and network-related issues",
  "Troubleshot LAN/Wi-Fi connectivity and system access problems",
  "Assisted in maintaining computer systems and network infrastructure",
  "Supported configuration and setup of workstations and devices",
  "Gained exposure to enterprise IT operations and real-world workflows",
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="rounded-[28px] border border-white/10 bg-[rgba(12,15,20,0.72)]/80 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl"
      >
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">INTERNSHIP</p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)]">Internship experience</h2>
        <div className="mt-6 space-y-4">
          {bulletPoints.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-[18px] border border-white/10 bg-white/5 p-4">
              <div className="mt-0.5 rounded-full border border-[rgba(246,184,95,0.24)] bg-[rgba(246,184,95,0.12)] p-1 text-[var(--color-accent)]">
                <ArrowRight size={14} />
              </div>
              <p className="text-sm leading-7 text-[var(--color-muted)]">{point}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.06 }}
        className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(246,184,95,0.12),rgba(255,255,255,0.03))] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.2)]"
      >
        <div className="flex items-center gap-2 text-[var(--color-accent)]">
          <Sparkles size={16} />
          <p className="text-[11px] uppercase tracking-[0.24em]">key strengths</p>
        </div>

        <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
          Focused on building strong fundamentals and improving every day.
        </h2>

        <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
          <li>• Learning backend systems, APIs, and data workflows</li>
          <li>• Writing clean, readable, and maintainable code</li>
          <li>• Building projects consistently to improve skills</li>
          <li>• Communicating clearly and open to feedback</li>
        </ul>
      </motion.div>
    </section>
  )
}
