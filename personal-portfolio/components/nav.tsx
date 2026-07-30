'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="size-8 bg-primary rounded flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="font-mono font-bold text-sm text-primary-foreground">R</span>
          </div>
          <span className="font-mono font-bold text-sm tracking-widest uppercase text-foreground">
            RONNIE_RUCKER
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Status badge */}
        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-green-400 animate-pulse" />
          <span>STATUS: BUILDING</span>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
