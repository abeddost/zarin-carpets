'use client'
import { useRef, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import type { MousePos } from '@/hooks/useMouseParallax'

interface RugModelProps {
  mouse: MousePos
  rotY: number
  posY: number
  posX: number
  scale: number
}

const MODEL = '/Round_Rug_OBJ/Round_Rug_OBJ.glb'
const TEX_BASE = '/Round_Rug_OBJ/Textures/'

useGLTF.preload(MODEL)

// Target visual diameter in Three.js units — camera FOV and position calibrated to this
const TARGET_DIAMETER = 2.5

export default function RugModel({ mouse, rotY, posY, posX, scale }: RugModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF(MODEL)

  const [colorMap, normalMap] = useTexture([
    TEX_BASE + 'Rug_Texture_1.png',
    TEX_BASE + 'Rug_Normal.jpg',
  ])

  const material = useMemo(() => {
    colorMap.colorSpace = THREE.SRGBColorSpace
    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping

    return new THREE.MeshPhysicalMaterial({
      map: colorMap,
      normalMap,
      normalScale: new THREE.Vector2(0.3, 0.3),
      roughness: 0.82,
      metalness: 0.0,
      envMapIntensity: 1.2,
    })
  }, [colorMap, normalMap])

  useEffect(() => {
    // Auto-normalize: measure bounding box, scale to TARGET_DIAMETER
    const box = new THREE.Box3().setFromObject(scene)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())

    // Use the footprint (X/Z) for a flat rug — ignore Y (thickness)
    const footprint = Math.max(size.x, size.z)
    const normalScale = footprint > 0 ? TARGET_DIAMETER / footprint : 1

    scene.scale.setScalar(normalScale)
    scene.position.set(
      -center.x * normalScale,
      -center.y * normalScale,
      -center.z * normalScale,
    )

    // Apply material to every mesh in the scene
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose())
          } else {
            obj.material.dispose()
          }
        }
        obj.material = material
      }
    })

    return () => material.dispose()
  }, [scene, material])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const g = groupRef.current
    // Frame-rate independent lerp factor
    const lf = 1 - Math.pow(0.008, delta)

    // X-tilt: lean carpet toward camera (-0.28 base) + subtle mouse follow
    const targetRotX = -0.28 + mouse.y * 0.08
    const targetRotY = rotY + mouse.x * 0.1

    g.rotation.x += (targetRotX - g.rotation.x) * lf
    g.rotation.y += (targetRotY - g.rotation.y) * lf * 0.35

    // Position driven by timeline
    g.position.y += (posY - g.position.y) * lf
    g.position.x += (posX - g.position.x) * lf

    // Scale driven by timeline
    const s = scale
    g.scale.x += (s - g.scale.x) * lf
    g.scale.y += (s - g.scale.y) * lf
    g.scale.z += (s - g.scale.z) * lf
  })

  return <primitive ref={groupRef} object={scene} />
}
