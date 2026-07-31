'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, GitBranch, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

type Category =
  | 'All'
  | '3D Printing'
  | 'Electronics'
  | 'Software'
  | 'Fintech'
  | 'Web / UI'

const categories: Category[] = [
  'All',
  'Fintech',
  'Software',
  'Electronics',
  '3D Printing',
  'Web / UI',
]

const categoryIcons: Record<string, string> = {
  'Fintech': '💰',
  'Software': '💻',
  'Electronics': '⚡',
  '3D Printing': '🖨',
  'Web / UI': '🖥',
}

interface Project {
  id: number
  title: string
  description: string
  category: Category
  tags: string[]
  image: string
  status: 'Complete' | 'WIP' | 'Archived'
  github?: string
  link?: string
  featured?: boolean
  mobilePinned?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'The Pit Technology, LLC',
    description:
      'Fintech startup converting options and futures contracts into bet-like contracts — making derivatives investing accessible and democratized for everyday people.',
    category: 'Fintech',
    tags: ['Python', 'AI/ML', 'Supabase', 'React', 'Fintech'],
    image: '/images/software-1.png',
    status: 'WIP',
    featured: true,
  },
  {
    id: 2,
    title: 'Arbitrage Contract Engine',
    description:
      'Rust-based engine that monitors contracts in real time, surfaces micro price differences between markets, and flags arbitrage opportunities before they close.',
    category: 'Fintech',
    tags: ['Rust', 'Arbitrage', 'Trading', 'Algorithms', 'Finance'],
    image: '/images/software-1.png',
    status: 'Complete',
    featured: true,
    mobilePinned: true,
  },
  {
    id: 3,
    title: '3D Gyroscope Test Rig',
    description:
      'CNC-machined 3-axis gyroscope gimbal programmed via custom PCB and MATLAB. Simulates all rotational degrees of freedom so autonomous drones can be stress-tested before first flight.',
    category: 'Electronics',
    tags: ['MATLAB', 'PCB', 'CNC', 'Drones', 'Hardware'],
    image: '/images/electronics-1.png',
    status: 'Complete',
    featured: true,
  },
  {
    id: 4,
    title: 'Local PCB AI Assistant',
    description:
      'A custom PCB-native AI chat assistant trained on personal workflows and running entirely offline — no cloud, no API calls. Built to automate repetitive tasks end-to-end.',
    category: 'Electronics',
    tags: ['PCB', 'Local LLM', 'Embedded', 'Python', 'AI/ML'],
    image: '/images/electronics-1.png',
    status: 'Complete',
    featured: true,
  },
  {
    id: 5,
    title: 'Voice-to-Polished-Response',
    description:
      'Voice recognition software that converts raw conversational speech into clean, polished written output — turning an offhand idea into a finished response without touching a keyboard.',
    category: 'Software',
    tags: ['Python', 'NLP', 'Voice Recognition', 'AI', 'Productivity'],
    image: '/images/software-1.png',
    status: 'Complete',
    github: 'https://github.com/ronaldrucker',
  },
  {
    id: 6,
    title: 'Aerospace Engineering',
    description:
      'Software developer and electrical engineer at a large aerospace company — process development, electrical network design, embedded systems, and cross-functional project leadership.',
    category: 'Electronics',
    tags: ['Electrical Systems', 'Software', 'Aerospace', 'Systems Engineering'],
    image: '/images/electronics-1.png',
    status: 'Complete',
  },
  {
    id: 7,
    title: 'Freelance Web Projects',
    description:
      'Websites and web apps for restaurants, small businesses, and independent clients — full pipeline from design to deployment.',
    category: 'Web / UI',
    tags: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Freelance'],
    image: '/images/web-1.png',
    status: 'WIP',
    mobilePinned: true,
  },
  {
    id: 8,
    title: '3D Printing Workshop',
    description:
      'Broad range of FDM projects — household gadgets, custom tooling, and industrial-grade vehicle parts and machinery components built to spec.',
    category: '3D Printing',
    tags: ['FDM', 'CAD', 'Industrial', 'Prototyping', 'Hardware'],
    image: '/images/print-1.png',
    status: 'WIP',
    mobilePinned: true,
  },
]

const statusColor: Record<string, string> = {
  Complete: 'text-green-400 border-green-400/30 bg-green-400/10',
  WIP: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  Archived: 'text-muted-foreground border-border bg-muted/30',
}

export function Projects() {
  const [active, setActive] = useState<Category>('All')
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    setShowAll(false)
  }, [active])

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)
  const featured = filtered.filter((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  // Mobile: show pinned projects initially; fall back to all if none are pinned in this filter
  const mobilePinned = filtered.filter((p) => p.mobilePinned)
  const mobileVisible = mobilePinned.length > 0 && !showAll ? mobilePinned : filtered
  const hasMore = mobilePinned.length > 0 && filtered.length > mobilePinned.length

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
            // 01 — PROJECTS
          </p>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl text-foreground text-balance">
            Things I&apos;ve Built
          </h2>
        </div>
        <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
          A collection of projects from the bench, the screen, and everything in
          between.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-10 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-mono text-xs px-4 py-2 rounded border transition-all uppercase tracking-wider whitespace-nowrap ${
              active === cat
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-card text-muted-foreground border-border hover:border-primary hover:text-primary'
            }`}
          >
            {cat !== 'All' && categoryIcons[cat] && (
              <span className="mr-1.5">{categoryIcons[cat]}</span>
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* MOBILE: pinned projects + expand button */}
      <div className="md:hidden">
        <div className="grid grid-cols-1 gap-6 mb-4">
          {mobileVisible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {hasMore && (
          <button
            onClick={() => setShowAll((v) => !v)}
            className="w-full flex items-center justify-center gap-2 font-mono text-xs text-muted-foreground border border-border rounded py-3 hover:border-primary hover:text-primary transition-colors uppercase tracking-wider"
          >
            {showAll ? (
              <>Show Less <ChevronUp className="size-3.5" /></>
            ) : (
              <>See All {filtered.length} Projects <ChevronDown className="size-3.5" /></>
            )}
          </button>
        )}
      </div>

      {/* DESKTOP: featured large grid + rest small grid */}
      <div className="hidden md:block">
        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} large />
            ))}
          </div>
        )}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  large = false,
}: {
  project: Project
  large?: boolean
}) {
  return (
    <article className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5">
      {/* Image */}
      <div className={`relative overflow-hidden ${large ? 'h-56' : 'h-40'}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`font-mono text-xs px-2 py-1 rounded border ${statusColor[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="font-mono text-xs">
            {categoryIcons[project.category]} {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-sans font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-muted-foreground bg-muted/50 border border-border px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <GitBranch className="size-3.5" />
              Source
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
              aria-label={`View ${project.title} live`}
            >
              <ExternalLink className="size-3.5" />
              Live
            </a>
          )}
          <span className="ml-auto flex items-center gap-1 font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            View Details
            <ArrowRight className="size-3" />
          </span>
        </div>
      </div>
    </article>
  )
}
