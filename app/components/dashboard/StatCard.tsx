type Trend = "up" | "down" | "flat"

export default function StatCard({
  label,
  value,
  delta,
  trend = "flat",
  hint,
}: {
  label: string
  value: string
  delta?: string
  trend?: Trend
  hint?: string
}) {
  const trendColor =
    trend === "up"
      ? "text-[var(--dash-positive)]"
      : trend === "down"
        ? "text-[var(--dash-negative)]"
        : "text-[var(--color-muted)]"

  const trendGlyph = trend === "up" ? "↑" : trend === "down" ? "↓" : "·"

  return (
    <div className="bevel bevel-hover rounded-xl border border-[var(--dash-border)] bg-[var(--dash-panel)] p-5">
      <p className="font-mono text-xs text-[var(--color-muted)] mb-2">
        {label}
      </p>
      <p className="metal-text font-display text-3xl font-semibold leading-none">
        {value}
      </p>
      <div className="flex items-center gap-2 mt-3">
        {delta && (
          <span className={`font-mono text-xs ${trendColor}`}>
            {trendGlyph} {delta}
          </span>
        )}
        {hint && (
          <span className="font-mono text-xs text-[var(--color-muted)]">
            {hint}
          </span>
        )}
      </div>
    </div>
  )
}
