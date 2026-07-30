import "./dashboard.css"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import StatCard from "../components/dashboard/StatCard"
import TrafficChart from "../components/dashboard/TrafficChart"
import TopPages from "../components/dashboard/TopPages"
import ActivityFeed from "../components/dashboard/ActivityFeed"
import Reveal from "../components/sections/Reveal"

const TRAFFIC = [
  { label: "Mon", value: 28 }, { label: "Tue", value: 34 },
  { label: "Wed", value: 22 }, { label: "Thu", value: 41 },
  { label: "Fri", value: 37 }, { label: "Sat", value: 19 },
  { label: "Sun", value: 15 }, { label: "Mon", value: 31 },
  { label: "Tue", value: 46 }, { label: "Wed", value: 39 },
  { label: "Thu", value: 52 }, { label: "Fri", value: 44 },
  { label: "Sat", value: 21 }, { label: "Sun", value: 17 },
]

const TOP_PAGES = [
  { path: "/", views: 482 },
  { path: "/#projects", views: 311 },
  { path: "/#about", views: 198 },
  { path: "/#skills", views: 122 },
  { path: "/#contact", views: 96 },
]

const ACTIVITY: Array<{
  type: "download" | "contact" | "click" | "visit"
  label: string
  time: string
}> = [
  { type: "download", label: "CV downloaded", time: "2 hours ago" },
  { type: "contact", label: "Contact form submitted", time: "5 hours ago" },
  { type: "click", label: "GitHub link clicked from /#projects", time: "9 hours ago" },
  { type: "visit", label: "New visitor landed on /", time: "1 day ago" },
  { type: "click", label: "LinkedIn link clicked from header", time: "1 day ago" },
  { type: "download", label: "CV downloaded", time: "2 days ago" },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <DashboardHeader />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard label="Visitors (30d)" value="482" delta="18%" trend="up" />
            <StatCard label="Page Views (30d)" value="1,340" delta="9%" trend="up" />
            <StatCard label="CV Downloads" value="37" delta="4" trend="up" />
            <StatCard label="Avg. Session" value="2m 14s" delta="flat" trend="flat" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <section className="bevel rounded-xl border border-[var(--dash-border)] bg-[var(--dash-panel)] p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="font-mono text-xs text-[var(--color-accent,#e8a33d)] mb-1">
                  // traffic
                </p>
                <h2 className="font-display text-lg font-medium">
                  Visits — last 14 days
                </h2>
              </div>
              <span className="font-mono text-xs text-[var(--color-muted)]">
                total 446
              </span>
            </div>
            <TrafficChart data={TRAFFIC} />
          </section>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal delay={120}>
            <section className="bevel rounded-xl border border-[var(--dash-border)] bg-[var(--dash-panel)] p-6 h-full">
              <p className="font-mono text-xs text-[var(--color-accent,#e8a33d)] mb-1">
                // top pages
              </p>
              <h2 className="font-display text-lg font-medium mb-5">
                Most visited
              </h2>
              <TopPages pages={TOP_PAGES} />
            </section>
          </Reveal>

          <Reveal delay={160}>
            <section className="bevel rounded-xl border border-[var(--dash-border)] bg-[var(--dash-panel)] p-6 h-full">
              <p className="font-mono text-xs text-[var(--color-accent,#e8a33d)] mb-1">
                // activity
              </p>
              <h2 className="font-display text-lg font-medium mb-2">
                Recent activity
              </h2>
              <ActivityFeed events={ACTIVITY} />
            </section>
          </Reveal>
        </div>

        <p className="font-mono text-xs text-[var(--color-muted)] mt-8 text-center">
          Sample data for demonstration. Connect Vercel Analytics or Plausible
          to make this live.
        </p>
      </div>
    </main>
  )
}
