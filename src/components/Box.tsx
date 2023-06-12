import { Mesh } from 'three'
import { useRef } from 'react'
import { useFrame, ThreeElements } from '@react-three/fiber'
import { Shadow } from '@react-three/drei'

export const Box = (props: ThreeElements['mesh']) => {
  const ref = useRef<Mesh>(null)
  useFrame((_state, delta) => {
    if (ref.current?.rotation){
      ref.current.rotation.y += delta / 8;
    }
  });

  return (
    <mesh
      {...props}
      position={[1, 2, -1]}
      ref={ref}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshPhysicalMaterial roughness={-0.1} color='rgba(0, 0, 0, 0.2)' envMapIntensity={1} />
      <Shadow rotation={[0, 0, 0]} scale={6} position={[0, -2, 0]} color='black' opacity={0.6} />
    </mesh>
  )
}