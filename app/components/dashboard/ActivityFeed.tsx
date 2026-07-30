type Event = {
  type: "download" | "contact" | "click" | "visit"
  label: string
  time: string
}

const DOT_COLOR: Record<Event["type"], string> = {
  download: "bg-[var(--color-accent,#e8a33d)]",
  contact: "bg-[var(--dash-positive)]",
  click: "bg-[var(--silver)]",
  visit: "bg-[var(--color-muted)]",
}

export default function ActivityFeed({ events }: { events: Event[] }) {
  return (
    <ul className="flex flex-col">
      {events.map((event, i) => (
        <li
          key={i}
          className="flex items-start gap-3 py-3 border-b border-[var(--dash-border)] last:border-b-0"
        >
          <span
            className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${DOT_COLOR[event.type]}`}
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p className="text-sm text-[var(--color-text)]">{event.label}</p>
            <p className="font-mono text-xs text-[var(--color-muted)] mt-0.5">
              {event.time}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
