import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    name: "SupportFlow",
    eyebrow: "Full-stack application · Private beta",
    description:
      "A support ticket management platform with role-based workflows for requesters, agents, and administrators. It includes ticket assignment and history, notifications, service-level tracking, satisfaction ratings, saved views, and administrative tools.",
    stack: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Tailwind CSS"],
    repository: "https://github.com/JohannAlecks/IT-Ticketing-System",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-8 scroll-mt-24 rounded-[28px] border border-white/10 bg-[rgba(12,15,20,0.72)]/80 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">Selected work</p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">Projects</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
          A selection of applications built to solve practical problems and explore full-stack engineering.
        </p>
      </div>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/5 p-5 sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">{project.eyebrow}</p>
            <h3 className="mt-3 text-xl font-semibold text-[var(--color-text)]">{project.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">{project.description}</p>
            <ul aria-label={`${project.name} technology stack`} className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <li key={technology} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--color-muted)]">
                  {technology}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4">
              <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-accent)]/40 px-4 text-sm font-medium text-[var(--color-text)] transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]">
                <Github size={16} aria-hidden="true" /> View source <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <span className="text-xs text-[var(--color-muted)]">Live demo coming later</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
