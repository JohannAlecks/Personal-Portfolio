"use client"

import { useState } from "react"

type Point = { label: string; value: number }

export default function TrafficChart({ data }: { data: Point[] }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const max = Math.max(...data.map((d) => d.value), 1)

  const width = 700
  const height = 220
  const paddingBottom = 28
  const barGap = 6
  const barWidth = width / data.length - barGap

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible"
        role="img"
        aria-label={`Daily visits over the last ${data.length} days`}
      >
        {data.map((d, i) => {
          const barHeight = ((height - paddingBottom) * d.value) / max
          const x = i * (barWidth + barGap)
          const y = height - paddingBottom - barHeight
          const isHovered = hovered === i

          return (
            <g key={d.label}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx={3}
                className="bar-grow"
                style={{ animationDelay: `${i * 25}ms` }}
                fill={isHovered ? "var(--silver-hi)" : "var(--silver-lo)"}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                tabIndex={0}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
              />
              {i % Math.ceil(data.length / 7) === 0 && (
                <text
                  x={x + barWidth / 2}
                  y={height - 8}
                  textAnchor="middle"
                  className="font-mono"
                  fontSize="9"
                  fill="var(--color-muted)"
                >
                  {d.label}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      {hovered !== null && (
        <div
          className="absolute -top-2 -translate-y-full font-mono text-xs bg-[var(--dash-panel-2)] border border-[var(--dash-border)] rounded-md px-2 py-1 pointer-events-none bevel"
          style={{
            left: `${(hovered / data.length) * 100}%`,
          }}
        >
          <span className="text-[var(--color-muted)]">{data[hovered].label}: </span>
          <span className="text-[var(--color-text)]">{data[hovered].value}</span>
        </div>
      )}
    </div>
  )
}
