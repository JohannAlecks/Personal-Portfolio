"use client"

import { useEffect, useState } from "react"

export default function Typewriter({
  text,
  speed = 45,
  startDelay = 300,
  className = "",
}: {
  text: string
  speed?: number
  startDelay?: number
  className?: string
}) {
  const [output, setOutput] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReduced) {
      setOutput(text)
      setDone(true)
      return
    }

    let i = 0
    let interval: ReturnType<typeof setInterval>
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setOutput(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(startTimeout)
      clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">
        {output}
        <span className={`caret ${done ? "opacity-100" : ""}`}>▍</span>
      </span>
    </span>
  )
}
