import { CATALOGUE, optimizedCatalogueSrc, optimizedCatalogueSrcSet } from '@/lib/catalogueImages'

export default function CatalogueSection() {
  return (
    <section id="catalogue" className="relative px-4 pb-20 pt-24 sm:px-6 md:px-8 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-12">
          <div>
            <p
              className="font-body text-sand/50 uppercase"
              style={{ fontSize: '0.62rem', letterSpacing: '0.28em' }}
            >
              Catalogue
            </p>
            <h2
              className="mt-3 font-display text-cream"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 5.5rem)', lineHeight: 0.92 }}
            >
              Teppiche
            </h2>
          </div>

          <p
            className="shrink-0 pb-1 font-body text-sand/45 uppercase"
            style={{ fontSize: '0.62rem', letterSpacing: '0.24em' }}
          >
            {CATALOGUE.length} pieces
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {CATALOGUE.map((item, index) => {
            const isPriority = index < 4

            return (
              <article key={item.src} className="catalogue-card group">
                <div className="relative aspect-[3/4] overflow-hidden bg-black/20">
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={optimizedCatalogueSrcSet(item.src, 'avif')}
                      sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    />
                    <source
                      type="image/webp"
                      srcSet={optimizedCatalogueSrcSet(item.src, 'webp')}
                      sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    />
                    <img
                      src={optimizedCatalogueSrc(item.src)}
                      alt={`Teppich ${index + 1}`}
                      className="h-full w-full object-contain p-1 transition-transform duration-700 ease-out md:p-2 md:group-hover:scale-[1.025]"
                      sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                      loading={isPriority ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </picture>
                </div>
              <div className="mt-2 flex items-center justify-between gap-3 px-0.5 md:mt-3">
                <p
                  className="font-body text-sand/50 uppercase"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.18em' }}
                >
                  {String(index + 1).padStart(3, '0')}
                </p>
                <p
                  className="font-body text-sand/35 uppercase"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.16em' }}
                >
                  {item.format}
                </p>
              </div>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
