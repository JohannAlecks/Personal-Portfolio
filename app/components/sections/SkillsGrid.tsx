"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Cloud, Code2, Database, Globe2, Network, ShieldCheck, Workflow } from "lucide-react"

const skills = [
  { name: "Python", icon: Code2, description: "Used for backend logic, scripting, and simple automation in personal projects.", level: "Mid" },
  { name: "HTML/CSS", icon: Globe2, description: "Used to build responsive layouts and clean page structures for web projects.", level: "Mid" },
  { name: "Flutter", icon: BrainCircuit, description: "Used to build simple mobile app interfaces and learn cross-platform development.", level: "Mid" },
  { name: "Java", icon: ShieldCheck, description: "Used to understand object-oriented programming and basic application logic.", level: "Mid" },
  { name: "APIs", icon: Workflow, description: "Working with REST APIs and connecting frontend to backend.", level: "Beginner" },
  { name: "GCP", icon: Cloud, description: "Learning cloud fundamentals and basic deployment concepts.", level: "Beginner" },
  { name: "Networking", icon: Network, description: "Used to understand how devices connect, troubleshoot issues, and learn basic network concepts.", level: "Beginner" },
  { name: "Databases", icon: Database, description: "Used to store, retrieve, and manage data in small projects and learning exercises.", level: "Beginner" },
]

export default function SkillsGrid() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {skills.map((skill, index) => {
        const Icon = skill.icon
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            whileHover={{ y: -4, scale: 1.02, boxShadow: "0 14px 34px rgba(0,0,0,0.26)" }}
            className="rounded-[22px] border border-white/10 bg-white/5 p-5 transition-all duration-300"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(246,184,95,0.24)] bg-[rgba(246,184,95,0.12)] text-[var(--color-accent)]">
              <Icon size={18} />
            </div>
            <div className="mt-4 flex items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-[var(--color-text)]">{skill.name}</h3>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {skill.level}
              </span>
            </div>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
              {skill.description}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}
