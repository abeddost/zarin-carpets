'use client'
import { motion } from 'framer-motion'

interface Props {
  opacity: number
}

export default function ContactSection({ opacity }: Props) {
  const isVisible = opacity > 0.05

  return (
    <section
      className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none select-none"
      style={{ opacity, background: 'rgba(10, 6, 3, 0.88)' }}
    >
      <div className="px-8 md:px-16 max-w-4xl">
        <motion.p
          className="font-body text-sand/50 uppercase mb-12"
          style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          05 — Begin your story
        </motion.p>

        <motion.h2
          className="font-display text-cream leading-tight mb-8"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', lineHeight: 0.95, letterSpacing: '0.04em' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Bring warmth
          <br />
          <span className="italic text-sand/80">home.</span>
        </motion.h2>

        <motion.p
          className="font-body text-sand/65 leading-relaxed mb-14"
          style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 16 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          Commission a piece. Start a conversation.
          <br />
          Every Zarin carpet is made to order — a collaboration between your vision and our craft.
        </motion.p>

        <motion.div
          className="pointer-events-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <a
            href="mailto:studio@zarinhome.com"
            className="group inline-block font-body text-sand border-b border-sand/30 pb-1 text-sm tracking-widest uppercase hover:text-cream hover:border-sand transition-all duration-500"
            style={{ letterSpacing: '0.22em', fontSize: '0.78rem' }}
          >
            studio@zarinhome.com
            <span className="block h-px bg-sand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-0.5" />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="font-body text-sand/35 mt-24"
          style={{ fontSize: '0.62rem', letterSpacing: '0.2em' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          © 2025 Zarin Home — by Habib &amp; Cristiana
        </motion.p>
      </div>
    </section>
  )
}
