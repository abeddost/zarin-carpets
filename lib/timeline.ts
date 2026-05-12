export interface Stage {
  id: string
  in: number
  hold: number
  out: number
}

export const STAGES = {
  hero: { id: 'hero', in: 0.0, hold: 0.08, out: 0.20 },
  craftsmanship: { id: 'craftsmanship', in: 0.22, hold: 0.32, out: 0.44 },
  catalogue: { id: 'catalogue', in: 0.45, hold: 0.55, out: 0.67 },
  materials: { id: 'materials', in: 0.68, hold: 0.78, out: 0.88 },
  contact: { id: 'contact', in: 0.88, hold: 0.92, out: 1.0 },
} satisfies Record<string, Stage>

export function stageOpacity(p: number, s: Stage): number {
  if (p < s.in || p > s.out) return 0
  if (p <= s.hold) return (p - s.in) / (s.hold - s.in)
  return 1 - (p - s.hold) / (s.out - s.hold)
}

// Timeline track: array of [progress, value] waypoints
type Track = Array<[number, number]>

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export function sample(track: Track, p: number): number {
  if (p <= track[0][0]) return track[0][1]
  if (p >= track[track.length - 1][0]) return track[track.length - 1][1]
  for (let i = 0; i < track.length - 1; i++) {
    const [pa, va] = track[i]
    const [pb, vb] = track[i + 1]
    if (p >= pa && p <= pb) {
      return lerp(va, vb, easeInOut((p - pa) / (pb - pa)))
    }
  }
  return track[track.length - 1][1]
}

// Rug 3D transform tracks
const RUG_ROT_Y: Track = [
  [0, 0],
  [0.45, Math.PI * 0.3],
  [0.88, Math.PI * 0.7],
  [1, Math.PI],
]

const RUG_POS_Y: Track = [
  [0, -0.5],
  [0.08, 0.05],
  [0.5, 0.12],
  [0.88, 0.08],
  [1, -0.2],
]

const RUG_SCALE: Track = [
  [0, 0.55],
  [0.12, 1.0],
  [0.67, 1.05],
  [0.88, 1.1],
  [1, 0.9],
]

const RUG_POS_X: Track = [
  [0, 0.5],
  [0.2, 0.5],
  [0.44, 0.0],
  [0.67, -0.5],
  [0.88, 0.0],
  [1, 0.0],
]

export interface TimelineState {
  rugRotY: number
  rugPosY: number
  rugPosX: number
  rugScale: number
}

export function sampleTimeline(p: number): TimelineState {
  return {
    rugRotY: sample(RUG_ROT_Y, p),
    rugPosY: sample(RUG_POS_Y, p),
    rugPosX: sample(RUG_POS_X, p),
    rugScale: sample(RUG_SCALE, p),
  }
}
