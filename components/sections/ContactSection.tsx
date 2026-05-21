export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[86svh] flex-col items-center justify-center px-6 py-24 text-center md:py-32"
      style={{ background: 'rgba(10, 6, 3, 0.88)' }}
    >
      <div className="max-w-4xl">
        <p
          className="font-body text-sand/50 uppercase mb-8 md:mb-12"
          style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}
        >
          05 — Beginne deine Geschichte
        </p>

        <h2
          className="font-display text-cream leading-tight mb-6 md:mb-8"
          style={{ fontSize: 'clamp(2.6rem, 14vw, 6.5rem)', lineHeight: 0.95, letterSpacing: '0.04em' }}
        >
          Wärme ins
          <br />
          <span className="italic text-sand/80">Zuhause.</span>
        </h2>

        <p
          className="font-body text-sand/65 leading-relaxed mb-10 md:mb-14"
          style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)' }}
        >
          Gib ein Stück in Auftrag. Beginne ein Gespräch.
          <br />
          Jeder Zarin-Teppich wird auf Bestellung gefertigt — eine Zusammenarbeit zwischen deiner Vision und unserem Handwerk.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/4917672465789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-sand/35 px-6 font-body text-sand transition-all duration-500 hover:border-sand hover:text-cream"
            style={{ fontSize: '0.72rem', letterSpacing: '0.18em' }}
          >
            WhatsApp
          </a>

          <a
            href="https://www.tiktok.com/@zarinhome1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-sand/20 px-6 font-body text-sand/75 transition-all duration-500 hover:border-sand hover:text-cream"
            style={{ fontSize: '0.72rem', letterSpacing: '0.18em' }}
          >
            TikTok @zarinhome1
          </a>
        </div>

        <div className="mt-8">
          <a
            href="mailto:zarinhome1@gmail.com"
            className="group inline-block font-body text-sand border-b border-sand/30 pb-1 text-sm tracking-widest uppercase hover:text-cream hover:border-sand transition-all duration-500"
            style={{ letterSpacing: '0.22em', fontSize: '0.78rem' }}
          >
            zarinhome1@gmail.com
            <span className="block h-px bg-sand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-0.5" />
          </a>
        </div>

        <address
          className="mt-10 not-italic font-body text-sand/45"
          style={{ fontSize: '0.72rem', letterSpacing: '0.08em', lineHeight: 1.7 }}
        >
          Industriestraße 17
          <br />
          65474 Bischofsheim
        </address>

        {/* Footer */}
        <p
          className="font-body text-sand/35 mt-14 md:mt-20"
          style={{ fontSize: '0.62rem', letterSpacing: '0.2em' }}
        >
          © 2025 Zarin Home — von Habib &amp; Cristiana
        </p>
      </div>
    </section>
  )
}
