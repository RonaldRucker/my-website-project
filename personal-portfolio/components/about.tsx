import { Wrench, Printer, Cpu, Code2, Globe, Music } from 'lucide-react'

const hobbies = [
  {
    icon: Globe,
    title: 'Fintech & Trading',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10 border-orange-400/20',
    desc: 'Founder of The Pit Technology — converting options and futures into accessible bet-like contracts. 6+ years trading stocks, options, futures, and crypto.',
  },
  {
    icon: Cpu,
    title: 'Hardware & PCB',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
    desc: 'Custom PCB design, CNC machining, and embedded systems. Built a gyroscope drone test rig and a fully local AI assistant running on bare metal.',
  },
  {
    icon: Code2,
    title: 'Software',
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
    desc: 'Python, Rust, TypeScript — from arbitrage engines and voice AI to full-stack web apps. If there\'s a problem, there\'s a program for it.',
  },
  {
    icon: Globe,
    title: 'Web & UI',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
    desc: 'Freelance websites for restaurants and small businesses, plus my own projects. React, Next.js, Tailwind from design to deployment.',
  },
  {
    icon: Wrench,
    title: 'Aerospace Engineering',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10 border-yellow-400/20',
    desc: 'Software developer and electrical engineer at a large aerospace company — electrical network design, process development, and systems engineering.',
  },
  {
    icon: Printer,
    title: '3D Printing',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10 border-pink-400/20',
    desc: 'FDM printing from small household gadgets all the way to industrial-grade vehicle parts and machinery. If it can be modeled, it can be printed.',
  },
]

const toolchain = [
  'Python',
  'Rust',
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind',
  'MATLAB',
  'PCB Design',
  'Supabase',
  'AI/ML',
  'Linux',
  'Docker',
  'Git',
  'CAD',
  'REST APIs',
  'SQL',
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
          // 04 — ABOUT
        </p>
        <h2 className="font-sans font-bold text-4xl sm:text-5xl text-foreground text-balance">
          Who&apos;s Behind the Bench?
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Bio column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Avatar placeholder */}
          <div className="relative size-24 rounded-lg overflow-hidden border border-border bg-card flex items-center justify-center">
            <span className="font-mono font-bold text-3xl text-primary">R</span>
            <div className="absolute inset-0 bg-primary/5" />
          </div>

          <div className="space-y-4">
            <h3 className="font-sans font-bold text-2xl text-foreground">
              Ronnie Rucker
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I&apos;m a maker, hobbyist, and perpetual tinkerer who believes the
              best way to understand something is to take it apart — or build
              one from scratch.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              By day I wrangle code. By night I&apos;m in the garage with a
              soldering iron in one hand and a cup of coffee in the other,
              wondering if this resistor is actually 10kΩ or if I grabbed the
              wrong one again.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              This portfolio is my build log — a place to document the
              projects, share the lessons, and show off the things that
              actually worked (and a few that didn&apos;t).
            </p>
          </div>

          {/* Toolchain */}
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">
              Daily Toolchain
            </p>
            <div className="flex flex-wrap gap-1.5">
              {toolchain.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-xs text-muted-foreground bg-muted/50 border border-border px-2 py-0.5 rounded hover:border-primary/50 hover:text-foreground transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hobbies grid */}
        <div className="lg:col-span-3">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
            Areas of Obsession
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hobbies.map((h) => {
              const Icon = h.icon
              return (
                <div
                  key={h.title}
                  className={`border rounded-lg p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 ${h.bg}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`size-9 rounded flex items-center justify-center bg-background/50 ${h.color}`}>
                      <Icon className="size-4" />
                    </div>
                    <h4 className={`font-sans font-bold text-sm ${h.color}`}>
                      {h.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
