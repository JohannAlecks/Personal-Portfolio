"use client"

import { motion } from "framer-motion"
import { Award, BriefcaseBusiness, Coffee, GraduationCap } from "lucide-react"

const STATS = [
  { label: "Degree", value: "Computer Engineering", icon: GraduationCap },
  { label: "Internship", value: "Backend Development", icon: BriefcaseBusiness },
  { label: "Coffee", value: "Countless cups", icon: Coffee },
  { label: "Experience", value: "0+ years", icon: Award },
]

export default function AboutSection() {
  return (
    <section className="mt-8 rounded-[28px] border border-white/10 bg-[rgba(12,15,20,0.72)]/80 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-[20px] font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">About Me</p>
        <p className="mt-4 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
          Computer Engineering student currently strengthening my skills in backend and full-stack development, cloud computing, and AI-assisted solutions. 

I build applications using Python, Flutter (Dart), and modern web technologies, while continuously learning and improving through hands-on projects. 

Eager to grow, take on new challenges, and apply my skills to real-world solutions.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-[24px] border border-white/10 bg-white/5 p-6"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">experience</p>
          <h3 className="mt-2 text-xl font-semibold text-[var(--color-text)]">Building with purpose, shipping with confidence</h3>
          <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
            I completed an internship at Clark International Airport Corporation (CIAC), where I gained hands-on experience in technical support, networking, and system troubleshooting. This helped me understand how real-world IT systems operate and improve my problem-solving skills.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {STATS.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.01, boxShadow: "0 14px 34px rgba(0,0,0,0.24)" }}
                className="rounded-[20px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(246,184,95,0.24)] bg-[rgba(246,184,95,0.12)] text-[var(--color-accent)]">
                  <Icon size={18} />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">{stat.label}</p>
                <p className="mt-1 text-sm font-medium text-[var(--color-text)]">{stat.value}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="mt-6 rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(246,184,95,0.12),rgba(255,255,255,0.03))] p-5"
      >
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">my philosophy</p>
        <p className="mt-2 text-sm leading-8 text-[var(--color-text)]">
          "I’m always looking to grow, take on new challenges, and turn ideas into working solutions."
        </p>
      </motion.div>
    </section>
  )
}
