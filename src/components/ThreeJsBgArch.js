import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import './ThreeJsBgArch.css'
import { useSpring, config } from '@react-spring/core'
import { a } from '@react-spring/three'
import Arch from './Arch'

const SceneSteps = [
  {
    scale: 0.14,
    position: [2, -3.2],
    rotation: [0.02, -1.2, 0.04],
    color: '#ffffff',
  },
  {
    scale: 0.16,
    position: [-1.5, -3.5],
    rotation: [-0.2, 0.3, 0],
    color: '#000000',
  },
  {
    scale: 0.42,
    color: '#dcf3fc',
    position: [-0.4, -10],
    rotation: [-0.25, -0.4, -0.14],
  },
  {
    scale: 0.16,
    position: [1, -3.4],
    rotation: [0, -1.6, 0],
    color: '#000000',
  },
  {
    scale: 0.12,
    position: [-0.1, -4.5],
    rotation: [-0.1, -0.45, -0.058],
    color: '#dcf3fc',
  },
]

const ThreeJsBgArch = ({ availableWidth, availableHeight, stepIndex = 0 }) => {
  const scene = SceneSteps[stepIndex ?? 0]
  const [styles, api] = useSpring(() => ({
    scale: 0,
    rotation: [0, 0, 0],
    position: [0, 0],
    color: '#dcf3fc',
    config: config.slow,
  }))

  useEffect(() => {
    api.start({
      scale: scene.scale,
      rotation: scene.rotation ?? 0,
      position: scene.position ?? 0,
      color: scene.color,
    })
  }, [stepIndex, scene, api])
  return (
    <div
      id="canvas-container"
      style={{ width: availableWidth, height: availableHeight, zIndex: 0 }}
      className="position-fixed top-0"
      // {...props}
    >
      <Canvas flat shadows camera={{ position: [-4, 1.5, 8], fov: 25 }}>
        {stepIndex === 2 ? <fog attach="fog" args={['#e5f4ff', -15, 40]} /> : null}
        {stepIndex === 3 ? <fog attach="fog" args={['#4e4a54', -15, 35]} /> : null}

        <a.group
          // position={[2, -1.2, 0]}
          scale={styles.scale}
          rotation={styles.rotation.to((x, y, z) => [x, y, z])}
          position={styles.position.to((x, y) => [x, y, 0])}
        >
          <Float floatIntensity={0.35} rotationIntensity={0.35}>
            <Arch color={scene.color}></Arch>
            {stepIndex === 2 ? (
              <>
                <Arch position={[0.7, 0, -20]} color={scene.color}></Arch>
                <Arch position={[1.5, 0, -50]} color={scene.color}></Arch>
              </>
            ) : null}
            {stepIndex === 3 ? (
              <>
                <Arch position={[16.2, 0, 0]} color={scene.color}></Arch>
                <Arch position={[-16.2, 0, 0]} color={scene.color}></Arch>
              </>
            ) : null}

            {stepIndex === 4 ? (
              <>
                <Arch position={[16.2, 0, 0]} color={scene.color}></Arch>
                <Arch position={[-16.2, 0, 0]} color={scene.color}></Arch>
              </>
            ) : null}
          </Float>
        </a.group>

        <ambientLight intensity={0.6} />
        {/* <directionalLight intensity={0.5} position={[5, 10, 10]} color="#d2e9fe" /> */}
        <spotLight
          intensity={1}
          position={[0, 15, 10]}
          angle={0.2}
          penumbra={0.5}
          shadow-mapSize={[1024, 1024]}
          castShadow
          shadow-normalBias={0.04}
          color={'#d9eaff'}
        />
        <spotLight
          intensity={0.7}
          position={[-10, 10, -15]}
          angle={0.15}
          penumbra={0.5}
          color={'#e6bbff'}
        />

        {/* <spotLight position={[0, 3, -3]} angle={0.2} penumbra={1} intensity={1} /> */}
        <OrbitControls autoRotate={false} enableZoom={false} makeDefault />
        <Environment rotation={[Math.PI / 2, 0, 5]} preset="sunset" />
      </Canvas>
    </div>
  )
}

console.log('en', Environment)

export default ThreeJsBgArch
