"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { BadgeCheck, Code2, GraduationCap, type LucideIcon } from "lucide-react"
import SkillsGrid from "./SkillsGrid"

type TabKey = "skills" | "certifications" | "education"

type TabItem = {
  key: TabKey
  label: string
  icon: LucideIcon
}

const tabs: TabItem[] = [
  { key: "skills", label: "Technical Skills", icon: Code2 },
  { key: "certifications", label: "Certifications", icon: BadgeCheck },
  { key: "education", label: "Education", icon: GraduationCap },
]

const certifications = [
  {
    title: "Google Cloud Fundamentals: Core Infrastructure",
    provider: "Coursera",
    date: "July 2026",
    credentialId: "ZC4UIENBOYEX",
  },
  {
    title: "Meta: Introduction to Front-End Development",
    provider: "Coursera",
    date: "July 2026",
    credentialId: "FK6KW9M54M69",
  },
  {
    title: "Basic Occupational Safety and Health",
    description: "Training Course with 2 hours Training of Trainer (TOT)",
    date: "2025",
  },
]

const education = [
  {
    title: "Bachelor of Science in Computer Engineering",
    school: "University of the Assumption",
    year: "2021 – 2026",
  },
  {
    title: "Senior High School / High School",
    school: "Holy Cross College",
    year: "2015 – 2021",
  },
]

function PanelCard({
  title,
  subtitle,
  description,
  meta,
}: {
  title: string
  subtitle?: string
  description?: string
  meta?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-[22px] border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
    >
      <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">{subtitle}</p>
      <h3 className="mt-2 text-lg font-semibold text-[var(--color-text)]">{title}</h3>
      {description ? <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p> : null}
      {meta ? <p className="mt-4 text-sm font-medium text-[var(--color-text)]">{meta}</p> : null}
    </motion.div>
  )
}

export default function QualificationsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("skills")

  const headingText = {
    skills: "Technologies I use and continue to learn",
    certifications: "Recognized training and practical growth",
    education: "Academic foundation and long-term learning",
  }[activeTab]

  return (
    <section id="skills" className="mt-8 rounded-[28px] border border-white/10 bg-[rgba(12,15,20,0.72)]/80 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">QUALIFICATIONS</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)]">{headingText}</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.key

            return (
              <button
                key={tab.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? "border-[var(--color-accent)] bg-[rgba(246,184,95,0.12)] text-[var(--color-text)]"
                    : "border-white/10 bg-white/5 text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            )
          })}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="mt-8"
        >
          {activeTab === "skills" && <SkillsGrid />}

          {activeTab === "certifications" && (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {certifications.map((item, index) => (
                <PanelCard
                  key={item.title}
                  title={item.title}
                  subtitle={index === 0 ? "Credential" : index === 1 ? "Credential" : "Training"}
                  description={item.description ?? `${item.provider} • ${item.date}`}
                  meta={item.credentialId ? `${item.provider} • ${item.date} • ${item.credentialId}` : item.date}
                />
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="grid gap-4 lg:grid-cols-2">
              {education.map((item, index) => (
                <PanelCard
                  key={item.title}
                  title={item.title}
                  subtitle={index === 0 ? "Degree" : "School"}
                  description={item.school}
                  meta={item.year}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
