'use client'

export default function GradientBackground() {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        background:
          'radial-gradient(ellipse at 60% 45%, #3D2010 0%, #1E0E06 50%, #0C0804 100%)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 35%, rgba(5,3,2,0.65) 100%)',
        }}
      />
    </div>
  )
}
