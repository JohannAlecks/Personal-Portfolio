"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { useState, type ChangeEvent, type FormEvent } from "react"

type FormValues = {
  name: string
  email: string
  message: string
  _gotcha: string
}

const initialForm: FormValues = {
  name: "",
  email: "",
  message: "",
  _gotcha: "",
}

const endpoint = "https://formspree.io/f/xnjeypyv"

export default function ContactSection() {
  const [formData, setFormData] = useState<FormValues>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [feedback, setFeedback] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (status !== "idle") {
      setStatus("idle")
      setFeedback("")
    }
  }

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your name."
    if (!formData.email.trim()) return "Please enter your email address."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email address."
    if (!formData.message.trim()) return "Please enter a message."

    return null
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (formData._gotcha) {
      setStatus("error")
      setFeedback("Your message could not be sent.")
      return
    }

    const validationError = validateForm()
    if (validationError) {
      setStatus("error")
      setFeedback(validationError)
      return
    }

    setIsSubmitting(true)
    setStatus("idle")
    setFeedback("")

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("success")
        setFeedback("Thanks for reaching out! Your message has been sent.")
        setFormData(initialForm)
      } else {
        throw new Error("Unable to send your message. Please try again later.")
      }
    } catch (error) {
      setStatus("error")
      setFeedback(error instanceof Error ? error.message : "Unable to send your message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="rounded-[28px] border border-white/10 bg-[rgba(12,15,20,0.72)]/80 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl"
      >
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">CONTACT</p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)]">Let&apos;s connect</h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/5 p-4">
            <Mail size={16} className="text-[var(--color-accent)]" />
            <span className="text-sm text-[var(--color-muted)]">jalecksgf@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/5 p-4">
            <Phone size={16} className="text-[var(--color-accent)]" />
            <span className="text-sm text-[var(--color-muted)]">+63 949 688 2678</span>
          </div>
          <div className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/5 p-4">
            <MapPin size={16} className="text-[var(--color-accent)]" />
            <span className="text-sm text-[var(--color-muted)]">Philippines</span>
          </div>
        </div>

        <a
          href="/JOHANN ALECKSANDREI G. FACTORA.CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
        >
          Download CV <ArrowUpRight size={16} />
        </a>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.06 }}
        className="rounded-[28px] border border-white/10 bg-[rgba(12,15,20,0.72)]/80 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl"
        aria-busy={isSubmitting}
      >
        <input type="hidden" name="_subject" value="New portfolio message" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="text"
          name="_gotcha"
          value={formData._gotcha}
          onChange={handleChange}
          className="absolute left-[-9999px] opacity-0"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-[var(--color-muted)]">
            <span className="mb-2 block">Name</span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]"
              placeholder="Your name"
            />
          </label>
          <label className="text-sm text-[var(--color-muted)]">
            <span className="mb-2 block">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]"
              placeholder="Your email"
            />
          </label>
        </div>

        <label className="mt-4 block text-sm text-[var(--color-muted)]">
          <span className="mb-2 block">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-36 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]"
            placeholder="Tell me about your project"
          />
        </label>

        {feedback ? (
          <p
            className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${status === "success" ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300" : "border-rose-500/40 bg-rose-500/10 text-rose-300"}`}
            aria-live="polite"
          >
            {feedback}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-5 inline-flex items-center justify-center rounded-full border border-white/10 bg-[var(--color-accent)] px-4 py-2.5 text-sm font-medium text-[#071018] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(246,184,95,0.2)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </motion.form>
    </section>
  )
}
