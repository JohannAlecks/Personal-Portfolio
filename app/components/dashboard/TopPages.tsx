type PageRow = { path: string; views: number }

export default function TopPages({ pages }: { pages: PageRow[] }) {
  const max = Math.max(...pages.map((p) => p.views), 1)

  return (
    <ul className="flex flex-col gap-4">
      {pages.map((page) => (
        <li key={page.path}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-sm text-[var(--color-text)] truncate">
              {page.path}
            </span>
            <span className="font-mono text-xs text-[var(--color-muted)] shrink-0 ml-3">
              {page.views.toLocaleString()}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--dash-panel-2)] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${(page.views / max) * 100}%`,
                background:
                  "linear-gradient(90deg, var(--silver-lo), var(--silver-hi))",
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
