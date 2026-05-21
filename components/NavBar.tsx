'use client'
import { useEffect, useState } from 'react'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.15)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 md:px-14 py-6 transition-opacity duration-700"
      style={{
        background: scrolled ? 'rgba(26,24,20,0.55)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition: 'opacity 0.7s ease, background 0.5s ease, backdrop-filter 0.5s ease',
      }}
    >
      <span
        className="font-display text-cream uppercase"
        style={{ letterSpacing: '0.18em', fontSize: '1rem' }}
      >
        Zarin Home
      </span>

      <a
        href="#contact"
        className="font-body text-sand/80 border border-sand/30 rounded-full px-5 py-2 text-xs tracking-widest uppercase pointer-events-auto hover:border-sand hover:text-cream transition-all duration-500"
        style={{ letterSpacing: '0.2em' }}
      >
        Kontakt
      </a>
    </nav>
  )
}
