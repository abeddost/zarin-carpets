'use client'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import FilmGrain from '@/components/FilmGrain'
import NavBar from '@/components/NavBar'
import GradientBackground from '@/components/CinematicBackground'
import Hero from '@/components/Hero'
import CatalogueSection from '@/components/sections/CatalogueSection'
import ContactSection from '@/components/sections/ContactSection'

const TIMELINE_VH = 1800
const CATALOG_START = 0.05
const CATALOG_END = 0.88
const NUM_IMAGES = 114

export default function Page() {
  const progress = useScrollProgress()

  // Hero: full until 5%, fades out by 13%
  const heroOp =
    progress < 0.05 ? 1
    : progress < 0.13 ? 1 - (progress - 0.05) / 0.08
    : 0

  // Contact: fades in at 88%, reaches full by 93%
  const contactOp =
    progress < 0.88 ? 0
    : Math.min(1, (progress - 0.88) / 0.05)

  const catProgress = Math.max(
    0,
    Math.min(1, (progress - CATALOG_START) / (CATALOG_END - CATALOG_START))
  )
  const scrollIndex = Math.min(NUM_IMAGES - 1, Math.floor(catProgress * NUM_IMAGES))

  return (
    <>
      <GradientBackground />
      <FilmGrain />
      <NavBar />

      <div style={{ height: `${TIMELINE_VH}vh` }} className="relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Carousel — always visible throughout scroll */}
          <CatalogueSection scrollIndex={scrollIndex} catProgress={catProgress} />

          {/* Hero text — fades out as you scroll */}
          <section
            className="absolute inset-0 pointer-events-none select-none"
            style={{ opacity: heroOp, zIndex: 15 }}
          >
            <Hero opacity={1} />
          </section>

          {/* Contact — fades in at end, z-index above carousel (z:10) */}
          <div className="absolute inset-0" style={{ zIndex: 20 }}>
            <ContactSection opacity={contactOp} />
          </div>
        </div>
      </div>
    </>
  )
}
