'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { useMouseParallax } from '@/hooks/useMouseParallax'
import { sampleTimeline } from '@/lib/timeline'
import RugModel from './RugModel'
import PostProcessing from './PostProcessing'

interface CarpetSceneProps {
  progress: number
}

export default function CarpetScene({ progress }: CarpetSceneProps) {
  const mouse = useMouseParallax()
  const tl = sampleTimeline(progress)

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: '#1A1814',
      }}
    >
      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 25%, rgba(26,24,20,0.55) 72%)',
        }}
      />

      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 3.5, 5.0], fov: 38 }}
        gl={{ antialias: false, alpha: false }}
        style={{ background: '#1A1814', width: '100%', height: '100%' }}
      >
        {/* Warm ambient fill */}
        <ambientLight intensity={0.65} color="#fff8f0" />

        {/* Main key light — warm afternoon */}
        <directionalLight
          position={[4, 7, 3]}
          intensity={1.4}
          color="#ffe5b0"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        {/* Cool rim light — separation */}
        <directionalLight position={[-5, 2, -4]} intensity={0.25} color="#c8d8ff" />

        {/* Subtle fill from below */}
        <pointLight position={[0, -3, 2]} intensity={0.2} color="#ffcc88" />

        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <RugModel
            mouse={mouse}
            rotY={tl.rugRotY}
            posY={tl.rugPosY}
            posX={tl.rugPosX}
            scale={tl.rugScale}
          />
        </Suspense>

        <PostProcessing />
      </Canvas>
    </div>
  )
}
