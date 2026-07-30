import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Blog } from '@/components/blog'
import { Gallery } from '@/components/gallery'
import { About } from '@/components/about'
import { Footer } from '@/components/footer'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <Separator className="opacity-30" />
      <Blog />
      <Separator className="opacity-30" />
      <Gallery />
      <Separator className="opacity-30" />
      <About />
      <Footer />
    </main>
  )
}
