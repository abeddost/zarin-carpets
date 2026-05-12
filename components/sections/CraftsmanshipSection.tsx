'use client'
import { motion } from 'framer-motion'

interface Props {
  opacity: number
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay: i * 0.18, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function CraftsmanshipSection({ opacity }: Props) {
  const isVisible = opacity > 0.05

  return (
    <section
      className="absolute inset-0 flex items-center pointer-events-none select-none"
      style={{ opacity }}
    >
      <div className="w-full px-8 md:px-16 lg:px-24 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-end">
          {/* Left: large italic quote */}
          <div>
            <motion.p
              className="font-body text-sand/50 uppercase mb-10"
              style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}
              custom={0}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              02 — Craftsmanship
            </motion.p>

            <motion.h2
              className="font-display text-cream italic leading-tight"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                lineHeight: 1.1,
              }}
              custom={1}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              Every thread carries
              <br />
              the warmth of
              <br />
              human hands.
            </motion.h2>
          </div>

          {/* Right: body text */}
          <div className="md:pb-2">
            <motion.p
              className="font-body text-mist leading-relaxed mb-6"
              style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
              custom={2}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              Each Zarin carpet is a dialogue between tradition and time. Woven by master artisans
              who have inherited their craft across generations, every piece is a testament to the
              patience required to create something truly enduring.
            </motion.p>

            <motion.p
              className="font-body text-mist/70 leading-relaxed"
              style={{ fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)' }}
              custom={3}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              Natural fibres, hand-selected dyes, and patterns drawn from centuries of
              Persian and European heritage — woven into pieces that grow more beautiful with age.
            </motion.p>

            <motion.div
              className="mt-10 flex items-center gap-4"
              custom={4}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              <div className="w-6 h-px bg-sand/30" />
              <span
                className="font-body text-sand/40 uppercase"
                style={{ fontSize: '0.6rem', letterSpacing: '0.25em' }}
              >
                Handmade in Europe
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
