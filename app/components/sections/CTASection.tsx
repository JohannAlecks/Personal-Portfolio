"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="mt-8 rounded-[28px] border border-[rgba(246,184,95,0.2)] bg-[linear-gradient(135deg,rgba(246,184,95,0.12),rgba(255,255,255,0.03))] p-7 shadow-[0_16px_50px_rgba(0,0,0,0.2)]"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">Let&apos;s connect</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)]">Open to IT Field roles</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/JohannAlecks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[var(--color-text)] px-4 py-2.5 text-sm font-medium text-[#071018] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
          >
            Contact me <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.section>
  )
}
