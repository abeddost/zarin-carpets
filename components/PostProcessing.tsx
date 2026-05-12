'use client'
import { EffectComposer, Bloom, Vignette, SMAA } from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'

export default function PostProcessing() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.45}
        luminanceThreshold={0.25}
        luminanceSmoothing={0.85}
        radius={0.85}
        kernelSize={KernelSize.LARGE}
        mipmapBlur
      />
      <Vignette eskil={false} offset={0.32} darkness={0.78} />
      <SMAA />
    </EffectComposer>
  )
}
