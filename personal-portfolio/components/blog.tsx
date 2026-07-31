import { ArrowRight, Clock, Tag } from 'lucide-react'

interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  featured?: boolean
}

const posts: Post[] = [
  {
    slug: 'voron-build-log',
    title: 'Building a Voron 2.4: A Month of Screaming at Belts',
    excerpt:
      'An honest account of building a CoreXY printer from scratch — including all the mistakes, re-dos, and the moment it finally printed a perfect cube at 300mm/s.',
    date: 'Jul 15, 2026',
    readTime: '12 min read',
    tags: ['3D Printing', 'Klipper', 'Build Log'],
    featured: true,
  },
  {
    slug: 'rust-for-embedded',
    title: 'Why I Rewrote My Firmware in Rust (And Why You Should Too)',
    excerpt:
      'After years of fighting C++ footguns on microcontrollers, I gave Rust a shot. Here&apos;s what the transition looked like and why I\'m never going back.',
    date: 'Jun 28, 2026',
    readTime: '8 min read',
    tags: ['Rust', 'Embedded', 'Firmware'],
    featured: true,
  },
  {
    slug: 'pcb-design-beginner',
    title: 'Your First PCB in KiCad: From Schematic to Fab',
    excerpt:
      'A hands-on guide to going from zero to a real, orderable PCB using KiCad. No EE degree required — just curiosity and a willingness to re-order a board three times.',
    date: 'Jun 1, 2026',
    readTime: '15 min read',
    tags: ['PCB', 'KiCad', 'Electronics'],
  },
  {
    slug: 'tailwind-component-system',
    title: 'Building a Design System With Tailwind v4 — What Changed',
    excerpt:
      'Tailwind v4 dropped and I rebuilt my component library from scratch. Here\'s a breakdown of the new @theme API, CSS variables, and what to watch out for.',
    date: 'May 12, 2026',
    readTime: '10 min read',
    tags: ['Tailwind', 'CSS', 'Design Systems'],
  },
  {
    slug: 'filament-dry-box',
    title: 'PID-Controlled Filament Dry Box — Because Soggy PLA Is a Crime',
    excerpt:
      'Built a proper temperature-controlled filament enclosure with a Peltier element and ATmega PID controller. Here\'s the schematic, code, and lessons learned.',
    date: 'Apr 20, 2026',
    readTime: '7 min read',
    tags: ['Electronics', '3D Printing', 'Arduino'],
  },
]

const tagColors: Record<string, string> = {
  '3D Printing': 'text-orange-400 border-orange-400/30 bg-orange-400/10',
  Klipper: 'text-orange-300 border-orange-300/30 bg-orange-300/10',
  'Build Log': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  Rust: 'text-red-400 border-red-400/30 bg-red-400/10',
  Embedded: 'text-red-300 border-red-300/30 bg-red-300/10',
  Firmware: 'text-pink-400 border-pink-400/30 bg-pink-400/10',
  PCB: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
  KiCad: 'text-cyan-300 border-cyan-300/30 bg-cyan-300/10',
  Electronics: 'text-teal-400 border-teal-400/30 bg-teal-400/10',
  Tailwind: 'text-sky-400 border-sky-400/30 bg-sky-400/10',
  CSS: 'text-sky-300 border-sky-300/30 bg-sky-300/10',
  'Design Systems': 'text-purple-400 border-purple-400/30 bg-purple-400/10',
  Arduino: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
}

function TagChip({ tag }: { tag: string }) {
  const cls = tagColors[tag] ?? 'text-muted-foreground border-border bg-muted/30'
  return (
    <span
      className={`inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded border ${cls}`}
    >
      <Tag className="size-2.5" />
      {tag}
    </span>
  )
}

export function Blog() {
  const featured = posts.filter((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <section id="blog" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
            // 03 — BLOG
          </p>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl text-foreground text-balance">
            Field Notes
          </h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors"
        >
          All posts
          <ArrowRight className="size-4" />
        </a>
      </div>

      {/* Featured posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {featured.map((post) => (
          <article
            key={post.slug}
            className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-primary border border-primary/30 bg-primary/10 px-2 py-0.5 rounded">
                FEATURED
              </span>
            </div>

            <h3 className="font-sans font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors leading-snug text-balance">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((t) => (
                <TagChip key={t} tag={t} />
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {post.readTime}
                </span>
              </div>
              <span className="flex items-center gap-1 font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read
                <ArrowRight className="size-3" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Remaining posts as list */}
      <div className="border border-border rounded-lg overflow-hidden">
        {rest.map((post, i) => (
          <article
            key={post.slug}
            className={`group flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 hover:bg-card/50 transition-colors cursor-pointer ${
              i < rest.length - 1 ? 'border-b border-border' : ''
            }`}
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-sans font-semibold text-base text-foreground group-hover:text-primary transition-colors mb-1 truncate">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm truncate">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="hidden sm:flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((t) => (
                  <TagChip key={t} tag={t} />
                ))}
              </div>
              <div className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                {post.date}
              </div>
              <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
