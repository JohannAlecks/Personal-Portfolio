"use client"

import { motion } from "framer-motion"
import ProfileCard from "./ProfileCard"

const SKILLS = ["Python", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "SQL", "Flutter (Dart)", "Google Cloud Platform (GCP)", "AI Fundamentals"]

export default function HeroSection() {
  return (
    <section
      id="about"
      className="grid items-center gap-10 rounded-[32px] border border-white/10 bg-[rgba(12,15,20,0.72)]/80 px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-12"
    >
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:rgba(246,184,95,0.22)] bg-[color:rgba(246,184,95,0.1)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_rgba(246,184,95,0.56)]" />
          FULL STACK DEVELOPER • BUILDING PROJECTS & LEARNING AI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-4xl font-semibold leading-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl"
        >
          Building real-world web applications while continuously improving my skills.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg"
        >
          I focus on creating clean, functional applications through hands-on projects, 
while exploring AI fundamentals and modern development tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <a
            href="#experience"
            className="rounded-full border border-white/10 bg-[var(--color-accent)] px-4 py-2.5 text-sm font-medium text-[#071018] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(246,184,95,0.2)]"
          >
            Explore experience
          </a>
          <a
            href="/JOHANN ALECKSANDREI G. FACTORA.CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[color:rgba(246,184,95,0.08)]"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[var(--color-muted)]"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      <ProfileCard />
    </section>
  )
}
