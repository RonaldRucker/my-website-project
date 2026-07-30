'use client'

import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'

const roles = [
  'Software Developer',
  'Entrepreneur',
  'Stock Analyst',
  'Problem Solver',
  'Code Architect',
  'Fintech Builder',
]

const ticker = [
  'SOFTWARE DEV',
  '•',
  'OPTIONS TRADING',
  '•',
  'PCB DESIGN',
  '•',
  'RUST',
  '•',
  'FINTECH',
  '•',
  'MATLAB',
  '•',
  'AI / ML',
  '•',
  'AUTONOMOUS DRONES',
  '•',
  'REACT',
  '•',
  'PYTHON',
  '•',
  'ARBITRAGE',
  '•',
  'AEROSPACE',
  '•',
  '3D PRINTING',
  '•',
  'ENTREPRENEURSHIP',
  '•',
]

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [display, setDisplay] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const word = roles[roleIdx]
    let i = typing ? display.length : display.length - 1
    const id = setTimeout(
      () => {
        if (typing) {
          setDisplay(word.slice(0, i + 1))
          if (i + 1 === word.length) {
            setTimeout(() => setTyping(false), 1500)
          }
        } else {
          setDisplay(word.slice(0, i))
          if (i === 0) {
            setRoleIdx((r) => (r + 1) % roles.length)
            setTyping(true)
          }
        }
      },
      typing ? 90 : 50,
    )
    return () => clearTimeout(id)
  })

  const tickerItems = [...ticker, ...ticker]

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden maker-grid">
      {/* Accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'var(--color-primary)' }}
        aria-hidden
      />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
        {/* <div className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground border border-border rounded px-3 py-1.5 mb-8">
          <span className="size-2 rounded-full bg-green-400 animate-pulse" />
          <span>Innovating</span>
        </div> */}

        <h1 className="font-sans font-bold tracking-tight text-foreground leading-none mb-4">
          <span className="block text-5xl sm:text-7xl lg:text-9xl">
            I BUILD
          </span>
          <span className="block text-5xl sm:text-7xl lg:text-9xl text-primary">
            STUFF
          </span>
        </h1>

        <p className="font-mono text-lg sm:text-2xl text-muted-foreground mt-4 mb-2">
          {'<'}
          <span className="text-primary">{display}</span>
          <span className="animate-blink text-primary">|</span>
          {' />'}
        </p>

        <p className="max-w-xl text-muted-foreground leading-relaxed mt-6 text-base">
          Engineer, entrepreneur, and creative problem solver. Passionate about AI, financial derivatives and tinkering.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono font-bold text-sm px-6 py-3 rounded hover:bg-primary/90 transition-colors uppercase tracking-wider"
          >
            See My Work
            <ArrowDown className="size-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-border text-foreground font-mono text-sm px-6 py-3 rounded hover:border-primary hover:text-primary transition-colors uppercase tracking-wider"
          >
            About Me
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-border/50 w-full max-w-2xl">
          {[
            { value: '6+', label: 'Years Trading' },
            { value: '3+', label: 'Years Building' },
            { value: 'VT', label: 'Virginia Tech' },
            { value: '∞', label: 'Coffee Consumed' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono font-bold text-2xl text-primary">{s.value}</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker tape */}
      <div className="relative border-t border-b border-border bg-primary/10 py-3 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className={`font-mono text-xs font-bold tracking-widest uppercase px-4 ${
                item === '•' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
