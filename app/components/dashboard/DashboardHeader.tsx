import Link from "next/link"

export default function DashboardHeader() {
  return (
    <header className="border-b border-[var(--dash-border)] px-6 py-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="font-mono text-xs text-[var(--color-muted)] mb-1">
            <Link href="/" className="hover:text-[var(--color-text)] transition-colors">
              portfolio
            </Link>{" "}
            / dashboard
          </p>
          <h1 className="font-display text-xl font-medium metal-text inline-block">
            Site Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-[var(--dash-border)] text-[var(--color-muted)]">
            demo data
          </span>
          <Link
            href="/"
            className="font-mono text-xs px-3 py-1.5 rounded-md border border-[var(--dash-border)] text-[var(--color-text)] hover:border-[var(--silver)] transition-colors"
          >
            ← back to site
          </Link>
        </div>
      </div>
    </header>
  )
}
