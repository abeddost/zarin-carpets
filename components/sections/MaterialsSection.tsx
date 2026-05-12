'use client'
import { motion } from 'framer-motion'

interface Props {
  opacity: number
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const qualities = [
  { label: 'Softness', desc: 'Naturally supple fibres that soften further with every step.' },
  { label: 'Texture', desc: 'Relief patterns that cast subtle shadows in changing light.' },
  { label: 'Warmth', desc: 'Thermal insulation woven into every knot.' },
  { label: 'Durability', desc: 'A Zarin carpet is made to outlive trends — and generations.' },
]

export default function MaterialsSection({ opacity }: Props) {
  const isVisible = opacity > 0.05

  return (
    <section
      className="absolute inset-0 flex items-center pointer-events-none select-none"
      style={{ opacity }}
    >
      {/* Large background number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-cream/[0.03] select-none"
        style={{ fontSize: 'clamp(12rem, 28vw, 22rem)', lineHeight: 1, letterSpacing: '-0.05em', pointerEvents: 'none' }}
        aria-hidden
      >
        04
      </div>

      <div className="w-full px-8 md:px-16 lg:px-24 max-w-screen-xl">
        <motion.p
          className="font-body text-sand/50 uppercase mb-10"
          style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}
          custom={0}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          04 — Materials
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
          {/* Left: headline */}
          <div>
            <motion.h2
              className="font-display text-cream leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05 }}
              custom={1}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              Felt through
              <br />
              <span className="italic text-sand">the soles</span>
              <br />
              of your feet.
            </motion.h2>
          </div>

          {/* Right: quality list */}
          <div className="grid grid-cols-1 gap-8">
            {qualities.map((q, i) => (
              <motion.div
                key={q.label}
                className="border-t border-sand/15 pt-5"
                custom={i + 2}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                variants={fadeUp}
              >
                <p
                  className="font-body text-sand uppercase mb-2"
                  style={{ fontSize: '0.68rem', letterSpacing: '0.22em' }}
                >
                  {q.label}
                </p>
                <p className="font-body text-mist/80 leading-relaxed" style={{ fontSize: '0.88rem' }}>
                  {q.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
