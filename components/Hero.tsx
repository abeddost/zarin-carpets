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

    const words = ['ZARIN', 'HOME']
    const lines = words.map((word) => {
      const span = document.createElement('span')
      span.textContent = word
      span.style.display = 'block'
      span.style.willChange = 'transform, opacity, filter'
      return span
    })

    titleRef.current.innerHTML = ''
    lines.forEach((s) => titleRef.current!.appendChild(s))

    gsap.fromTo(
      lines,
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
      <div className="w-full px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-[18rem] rounded-sm bg-charcoal/72 px-5 py-6 shadow-2xl shadow-black/30 backdrop-blur-sm sm:max-w-[24rem] sm:bg-charcoal/58 md:max-w-[44vw] md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
        {/* Label */}
        <motion.p
          className="font-body text-sand uppercase mb-5 md:mb-10"
          style={{ letterSpacing: '0.18em', fontSize: '0.65rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          — Teppiche —
        </motion.p>

        {/* Main headline */}
        <div
          ref={titleRef}
          className="font-display text-cream uppercase mb-5"
          style={{
            fontSize: 'clamp(4.4rem, 18vw, 7rem)',
            letterSpacing: '0.08em',
            lineHeight: '0.78',
          }}
          aria-label="ZARIN HOME"
        />

        {/* Signature */}
        <motion.p
          className="font-display text-sand italic font-light"
          style={{
            fontSize: 'clamp(1.15rem, 4vw, 1.6rem)',
            letterSpacing: '0.16em',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          by Habib &amp; Cristiana
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          className="mt-10 flex items-center gap-4 md:mt-20"
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
      </div>
    </section>
  )
}
