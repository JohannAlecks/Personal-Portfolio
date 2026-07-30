import Header from "./components/sections/Header"
import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import QualificationsSection from "./components/sections/QualificationsSection"
import ExperienceSection from "./components/sections/ExperienceSection"
import ContactSection from "./components/sections/ContactSection"
import CTASection from "./components/sections/CTASection"

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(246,184,95,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(110,231,183,0.12),_transparent_30%)]" />

      <Header />

      <main className="mx-auto flex max-w-6xl flex-col px-5 pb-24 pt-8 sm:px-8 lg:px-10 lg:pt-10">
        <HeroSection />
        <AboutSection />
        <QualificationsSection />
        <ExperienceSection />
        <ContactSection />
        <CTASection />
      </main>
    </div>
  )
}
