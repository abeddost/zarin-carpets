interface HeroProps {
  opacity: number
}

const TITLE = 'ZARIN HOME'.split('')

export default function Hero({ opacity }: HeroProps) {
  return (
    <section
      className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none"
      style={{ opacity }}
    >
      <div className="px-5 sm:px-8 md:px-16 lg:px-24 w-full max-w-[92vw] md:max-w-[44vw]">
        {/* Label */}
        <p
          className="hero-fade-in font-body text-sand/80 uppercase mb-7 md:mb-10"
          style={{ letterSpacing: '0.32em', fontSize: '0.65rem' }}
        >
          — Teppiche —
        </p>

        {/* Main headline */}
        <div
          className="font-display text-cream uppercase leading-none mb-6"
          style={{
            fontSize: 'clamp(2.75rem, 14vw, 7rem)',
            letterSpacing: 'clamp(0.08em, 2vw, 0.18em)',
            lineHeight: '0.88',
            textShadow: '0 2px 24px rgba(0,0,0,0.95), 0 0 48px rgba(0,0,0,0.7)',
          }}
          aria-label="ZARIN HOME"
        >
          {TITLE.map((char, index) => (
            <span
              key={`${char}-${index}`}
              className="hero-char"
              style={{ animationDelay: `${0.3 + index * 0.055}s` }}
            >
              {char === ' ' ? '\u00a0' : char}
            </span>
          ))}
        </div>

        {/* Signature */}
        <p
          className="hero-fade-up font-display text-cream/90 italic font-light"
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.6rem)',
            letterSpacing: 'clamp(0.14em, 3vw, 0.32em)',
            animationDelay: '0.9s',
          }}
        >
          by Habib &amp; Cristiana
        </p>

        {/* Scroll hint */}
        <div
          className="hero-fade-in mt-12 md:mt-20 flex items-center gap-4"
          style={{ animationDelay: '1.55s' }}
        >
          <div className="w-8 h-px bg-sand/40" />
          <span
            className="font-body text-sand/40 uppercase"
            style={{ fontSize: '0.6rem', letterSpacing: '0.28em' }}
          >
            Scrollen zum Entdecken
          </span>
        </div>
      </div>
    </section>
  )
}
