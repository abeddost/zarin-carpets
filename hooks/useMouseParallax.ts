'use client'
import { useState, useEffect } from 'react'

export interface MousePos {
  x: number
  y: number
}

export function useMouseParallax(): MousePos {
  const [pos, setPos] = useState<MousePos>({ x: 0, y: 0 })

  useEffect(() => {
    let raf = 0

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setPos({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -((e.clientY / window.innerHeight) * 2 - 1),
        })
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return pos
}
