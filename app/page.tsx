import FilmGrain from '@/components/FilmGrain'
import NavBar from '@/components/NavBar'
import GradientBackground from '@/components/CinematicBackground'
import CatalogueSection from '@/components/sections/CatalogueSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Page() {
  return (
    <>
      <GradientBackground />
      <FilmGrain />
      <NavBar />

      <main className="relative z-10">
        <CatalogueSection />
        <ContactSection />
      </main>

      <a
        href="https://wa.me/4917672465789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-[60] inline-flex min-h-12 items-center justify-center rounded-full bg-[#25D366] px-5 font-body text-sm font-medium uppercase text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-charcoal md:bottom-6 md:right-6 md:px-6"
        style={{ letterSpacing: '0.14em' }}
        aria-label="Contact Zarin Home on WhatsApp"
      >
        WhatsApp
      </a>
    </>
  )
}
