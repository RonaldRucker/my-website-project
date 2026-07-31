'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

const photos = [
  {
    src: '/images/gallery-1.png',
    alt: 'Articulated 3D-printed dragon model',
    caption: 'Articulated Dragon — 47 joints, 0 regrets',
    span: 'sm:col-span-1 sm:row-span-2',
  },
  {
    src: '/images/gallery-2.png',
    alt: 'Custom PCB circuit board with components',
    caption: 'DIY Oscilloscope PCB v2',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery-3.png',
    alt: 'Raspberry Pi home automation hub',
    caption: 'Home Automation Hub',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery-4.png',
    alt: '3D printer mid-print',
    caption: '3AM Print Session — Worth it',
    span: 'sm:col-span-2',
  },
  {
    src: '/images/gallery-5.png',
    alt: 'Soldering iron on circuit board',
    caption: 'The moment it all comes together',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery-6.png',
    alt: 'Custom mechanical keyboard with RGB',
    caption: 'Hand-wired Ergodox — 3 weekends well spent',
    span: 'col-span-1',
  },
  {
    src: '/images/print-1.png',
    alt: 'Detailed 3D printed mechanical part',
    caption: 'Precision gears — 0.1mm layer height',
    span: 'col-span-1',
  },
  {
    src: '/images/electronics-1.png',
    alt: 'Arduino circuit on breadboard with LEDs',
    caption: 'Breadboard chaos → working prototype',
    span: 'col-span-1',
  },
]

export function Gallery() {
  const [lightbox, setLightbox] = useState<(typeof photos)[0] | null>(null)

  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
            // 05 — GALLERY
          </p>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl text-foreground text-balance">
            The Build Wall
          </h2>
        </div>
        {/* <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
          A visual diary of finished builds, glorious failures, and everything
          in between.
        </p> */}
      </div>

      {/* Masonry-ish grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
        {photos.map((photo, i) => (
          <button
            key={i}
            className={`group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300 ${photo.span}`}
            onClick={() => setLightbox(photo)}
            aria-label={`View ${photo.caption}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-mono text-xs text-white truncate">
                {photo.caption}
              </p>
            </div>
            {/* Zoom icon */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="size-8 bg-black/50 backdrop-blur-sm rounded flex items-center justify-center">
                <ZoomIn className="size-4 text-white" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 size-10 bg-card border border-border rounded flex items-center justify-center hover:border-primary transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="size-5" />
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-mono text-sm text-muted-foreground text-center">
              {lightbox.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
