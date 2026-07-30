'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react'

type Category =
  | 'All'
  | 'Fintech'
  | 'Software'
  | 'Engineering'
  | 'Other'

const categories: Category[] = [
  'All',
  'Fintech',
  'Software',
  'Engineering',
  'Other',
]

const categoryIcons: Record<string, string> = {
  'Fintech': '💰',
  'Software': '💻',
  'Engineering': '⚡',
  'Other': '🔧',
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
}

const projects: Project[] = [
  {
    id: 1,
    title: 'The Pit Technology, LLC',
    description:
      'Fintech startup created to bridge the wealth gap. Uses a combination of AI and PhD research to make financial literacy faster and easier for underserved communities.',
    category: 'Fintech',
    tags: ['Python', 'AI/ML', 'Supabase', 'API'],
    image: '/images/software-1.png',
    status: 'WIP',
    featured: true,
  },
  {
    id: 2,
    title: 'Aerospace Electrical Engineer',
    description:
      'Engineer at a global aerospace company. Developed processes, designed electrical networks, and led cross-functional projects from concept to delivery.',
    category: 'Engineering',
    tags: ['Electrical Systems', 'PCB Design', 'Systems Engineering', 'CAD'],
    image: '/images/electronics-1.png',
    status: 'Complete',
    featured: true,
  },
  {
    id: 3,
    title: 'Stock Data App',
    description:
      'Real-time stock market data application with charting, analytics, and AI-driven insights built to support individual investors and traders.',
    category: 'Software',
    tags: ['React', 'Python', 'API', 'Data Viz'],
    image: '/images/web-1.png',
    status: 'Complete',
    github: 'https://github.com/ronaldrucker',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'This website — built as a creative showcase of skills and experience. Continuously refined and updated.',
    category: 'Software',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'React'],
    image: '/images/web-1.png',
    status: 'WIP',
    github: 'https://github.com/ronaldrucker',
  },
]

const statusColor: Record<string, string> = {
  Complete: 'text-green-400 border-green-400/30 bg-green-400/10',
  WIP: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  Archived: 'text-muted-foreground border-border bg-muted/30',
}

export function Projects() {
  const [active, setActive] = useState<Category>('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)
  const featured = filtered.filter((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

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
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-mono text-xs px-4 py-2 rounded border transition-all uppercase tracking-wider ${
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

      {/* Featured projects grid */}
      {featured.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} large />
          ))}
        </div>
      )}

      {/* Rest of projects */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
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
