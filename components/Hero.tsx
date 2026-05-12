'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from '@/lib/gsap'

interface HeroProps {
  opacity: number
}

export default function Hero({ opacity }: HeroProps) {
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const text = 'ZARIN HOME'
    const chars = text.split('').map((char) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? ' ' : char
      span.style.display = char === ' ' ? 'inline' : 'inline-block'
      span.style.willChange = 'transform, opacity, filter'
      return span
    })

    titleRef.current.innerHTML = ''
    chars.forEach((s) => titleRef.current!.appendChild(s))

    gsap.fromTo(
      chars,
      { opacity: 0, filter: 'blur(16px)', y: 50 },
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1.2,
        stagger: 0.06,
        ease: 'power3.out',
        delay: 0.3,
      }
    )
  }, [])

  return (
    <section
      className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none"
      style={{ opacity }}
    >
      <div className="px-8 md:px-16 lg:px-24 w-full max-w-[88vw] md:max-w-[44vw]">
        {/* Label */}
        <motion.p
          className="font-body text-sand/80 uppercase mb-8 md:mb-10"
          style={{ letterSpacing: '0.32em', fontSize: '0.65rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          — Teppiche —
        </motion.p>

        {/* Main headline */}
        <div
          ref={titleRef}
          className="font-display text-cream uppercase leading-none mb-6"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            letterSpacing: '0.18em',
            lineHeight: '0.88',
            textShadow: '0 2px 24px rgba(0,0,0,0.95), 0 0 48px rgba(0,0,0,0.7)',
          }}
          aria-label="ZARIN HOME"
        />

        {/* Signature */}
        <motion.p
          className="font-display text-cream/90 italic font-light"
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.6rem)',
            letterSpacing: '0.32em',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          by Habib &amp; Cristiana
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          className="mt-16 md:mt-20 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="w-8 h-px bg-sand/40" />
          <span
            className="font-body text-sand/40 uppercase"
            style={{ fontSize: '0.6rem', letterSpacing: '0.28em' }}
          >
            Scrollen zum Entdecken
          </span>
        </motion.div>
      </div>
    </section>
  )
}
