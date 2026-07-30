import { GitBranch, Rss, Mail, Zap, Code2, Video } from 'lucide-react'

const socials = [
  { icon: GitBranch, label: 'GitHub', href: 'https://github.com/ronaldrucker' },
  { icon: Code2, label: 'Twitter / X', href: 'https://twitter.com/ronnierrucker' },
  { icon: Video, label: 'Instagram', href: 'https://instagram.com/ronnierrucker' },
  { icon: Rss, label: 'LinkedIn', href: 'https://linkedin.com/in/ronaldrucker' },
]

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
]

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-card/50 maker-grid"
    >
      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
          // 05 — CONTACT
        </p>
        <h2 className="font-sans font-bold text-4xl sm:text-6xl text-foreground mb-6 text-balance">
          Got a Cool Project?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
          Whether you want to collaborate on a build, have a question about
          one of my projects, or just want to talk shop about 3D printers —
          I&apos;m always up for a chat.
        </p>
        <a
          href="mailto:ronnie@getthepit.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono font-bold text-sm px-8 py-4 rounded hover:bg-primary/90 transition-colors uppercase tracking-wider"
        >
          <Mail className="size-4" />
          ronnie@getthepit.com
        </a>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="size-6 bg-primary rounded flex items-center justify-center">
              <Zap className="size-3 text-primary-foreground" />
            </div>
            <span className="font-mono font-bold text-xs tracking-widest uppercase text-foreground">
              RONNIE_RUCKER
            </span>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="size-8 border border-border rounded flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon className="size-3.5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border px-6 py-4 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 Ronnie Rucker — Built with{' '}
            <span className="text-primary">too much coffee</span> and Next.js
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            &ldquo;If it works, it works.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  )
}
