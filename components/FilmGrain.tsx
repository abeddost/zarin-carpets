'use client'

export default function FilmGrain() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'overlay' }}
    >
      <svg className="absolute" style={{ width: 0, height: 0 }}>
        <defs>
          <filter id="grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: '-50%',
          width: '200%',
          height: '200%',
          filter: 'url(#grain-filter)',
          opacity: 0.045,
          animation: 'grain 0.8s steps(1) infinite',
        }}
      />
    </div>
  )
}
