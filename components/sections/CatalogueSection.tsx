'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CATALOGUE } from '@/lib/catalogueImages'

const FEATURED = CATALOGUE

const SLOTS_DESKTOP = [
  { offset: -2, xVw: -49, wVw: 14, opacity: 0.15, brightness: 0.5 },
  { offset: -1, xVw: -27, wVw: 20, opacity: 0.40, brightness: 0.68 },
  { offset:  0, xVw:   0, wVw: 28, opacity: 1.00, brightness: 1.0 },
  { offset: +1, xVw: +27, wVw: 20, opacity: 0.40, brightness: 0.68 },
  { offset: +2, xVw: +49, wVw: 14, opacity: 0.15, brightness: 0.5 },
]

const SLOTS_MOBILE = [
  { offset: -1, xVw: -82, wVw: 55, opacity: 0.25, brightness: 0.65 },
  { offset:  0, xVw:   0, wVw: 75, opacity: 1.00, brightness: 1.0 },
  { offset: +1, xVw: +82, wVw: 55, opacity: 0.25, brightness: 0.65 },
]

interface Props {
  scrollIndex: number
  catProgress: number
}

export default function CatalogueSection({ scrollIndex, catProgress }: Props) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  const SLOTS = isMobile ? SLOTS_MOBILE : SLOTS_DESKTOP

  return (
    <div className="absolute inset-0 overflow-hidden">
      {SLOTS.map(({ offset, xVw, wVw, opacity, brightness }) => {
        const idx = Math.max(0, Math.min(FEATURED.length - 1, scrollIndex + offset))
        const isCenter = offset === 0

        return (
          <div
            key={offset}
            style={{
              position: 'absolute',
              width: `${wVw}vw`,
              aspectRatio: '3/4',
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${xVw}vw), -50%)`,
              opacity,
              zIndex: isCenter ? 10 : 5 - Math.abs(offset),
              overflow: 'hidden',
            }}
          >
            <AnimatePresence>
              <motion.img
                key={FEATURED[idx].src}
                src={FEATURED[idx].src}
                alt={isCenter ? `Teppich ${idx + 1}` : ''}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: `brightness(${brightness}) saturate(0.9)` }}
                loading={isCenter && scrollIndex < 2 ? 'eager' : 'lazy'}
                decoding="async"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {isCenter && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: '1px dashed rgba(200,184,154,0.2)',
                  zIndex: 11,
                }}
              />
            )}
          </div>
        )
      })}

      {/* Counter */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
        }}
      >
        <span
          className="font-body text-sand/40 uppercase"
          style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}
        >
          {String(scrollIndex + 1).padStart(2, '0')} — {String(FEATURED.length).padStart(2, '0')}
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'rgba(200,184,154,0.08)',
          zIndex: 20,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${catProgress * 100}%`,
            background: 'rgba(200,184,154,0.4)',
            transition: 'width 0.1s linear',
          }}
        />
      </div>
    </div>
  )
}
