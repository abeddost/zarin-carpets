export default function FilmGrain() {
  return (
    <div
      className="film-grain fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'overlay' }}
    >
      <div
        className="film-grain-layer"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.035,
        }}
      />
    </div>
  )
}
