import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Sparkles } from '@react-three/drei'
import './ThreeJsBgArch.css'
import { useSpring, config } from '@react-spring/core'
import { a } from '@react-spring/three'
import Arch from './Arch'
import { useMenuStore } from '../store'
// import { isMobile } from 'react-device-detect'
// import { useCurrentWindowDimensions } from './hooks/viewport'

//   const { width, height } = useCurrentWindowDimensions(isMobile)
// useEffect(() => {
//   if (isMobile) {
//     return 2
//   }
//   return 0

// }, [scene, api])

const SceneSteps = [
  {
    scale: 0.14,
    position: [1.6, -3.1],
    positionTwo: [-100, 50, -100],
    positionThree: [-100, 50, -100],
    rotation: [0.02, -1.2, 0.04],
    color: '#d9ebfe',
    fog: ['#e5f4ff', -15, 40],
    sparklesColor: '#ffffff',
  },
  {
    scale: 0.16,
    position: [-0.6, -3.4],
    positionTwo: [-100, 100, -200],
    positionThree: [100, 100, 500],
    rotation: [-0.2, 0.4, -0.3],
    color: '#000000',
    fog: ['#4e4a54', -15, 35],
    sparklesOpacity: 0.15,
  },
  {
    scale: 0.42,
    color: '#b9c3ce',
    position: [-0.4, -10],
    positionTwo: [0.7, 0, -20],
    positionThree: [1.5, 0, -50],
    rotation: [-0.25, -0.4, -0.14],
    fog: ['#e5f4ff', -15, 40],
    sparklesColor: '#ffffff',
  },
  {
    scale: 0.16,
    position: [1, -3.4],
    positionTwo: [16.2, 0, 0],
    positionThree: [-16.2, 0, 0],
    rotation: [0, -1.5, 0.03],
    color: '#000000',
    fog: ['#4e4a54', -15, 35],
    sparklesOpacity: 0.15,
  },
  {
    scale: 0.16,
    position: [1.6, -3.5],
    positionTwo: [2, 0, -40],
    positionThree: [1, 0, -20],
    rotation: [-0.2, -0.6, -0.08],
    color: '#000000',
    fog: ['#4e4a54', 0, 30],
    sparklesOpacity: 0.15,
  },
  {
    scale: 0.14,
    position: [0.13, -5.3],
    positionTwo: [16.2, 0, 0],
    positionThree: [-16.2, 0, 0],
    rotation: [-0.3, -0.45, -0.132],
    color: '#c5def5',
    fog: ['#e8f4fd', 0, 20],
  },
  {
    scale: 0.16,
    position: [1, -3.4],
    positionTwo: [16.2, 0, 0],
    positionThree: [-16.2, 0, 0],
    rotation: [0, -1.6, 0],
    color: '#000000',
    fog: ['#4e4a54', -15, 35],
    sparklesOpacity: 0.15,
  },
]

const ThreeJsBgArch = () => {
  const currentStepIndex = useMenuStore((state) => state.currentStepIndex)
  const scene = SceneSteps[currentStepIndex ?? 0]
  const SceneStepsValidation = currentStepIndex ?? 0
  console.log('SceneSteps', currentStepIndex, scene)
  const [styles, api] = useSpring(() => ({
    // scale: 1,
    // rotation: [0, 0, 0],
    // position: [0, 20, 2.6],
    // color: '#dcf3fc',
    ...scene,
    config: config.slow,
  }))

  // console.log('isMobile', MyComponent.v)

  useEffect(() => {
    api.start({
      scale: scene.scale,
      rotation: scene.rotation ?? 0,
      position: scene.position ?? 0,
      color: scene.color,
    })
  }, [scene, api])
  return (
    <div
      id="canvas-container-menu-fullscreen"
      style={{ zIndex: 0 }}
      className="position-fixed top-0 bottom-0 w-100 h-100"
    >
      <Suspense>
        <Canvas flat shadows camera={{ position: [-4, 1.5, 8], fov: 25 }}>
          <fog attach="fog" args={SceneSteps[SceneStepsValidation].fog} />

          <a.group
            scale={styles.scale}
            rotation={styles.rotation.to((x, y, z) => [x, y, z])}
            position={styles.position.to((x, y) => [x, y, 0])}
          >
            <Float
              floatIntensity={currentStepIndex === 5 ? 0 : 0.35}
              rotationIntensity={currentStepIndex === 5 ? 0 : 0.35}
            >
              <Arch color={scene.color}></Arch>
              <Arch
                position={SceneSteps[SceneStepsValidation].positionTwo}
                color={scene.color}
              ></Arch>
              <Arch
                position={SceneSteps[SceneStepsValidation].positionThree}
                color={scene.color}
              ></Arch>
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
            intensity={0.9}
            position={[-10, 8, -15]}
            angle={0.2}
            penumbra={0.5}
            color={'#e6bbff'}
          />

          {/* <spotLight position={[0, 3, -3]} angle={0.2} penumbra={1} intensity={1} /> */}
          <OrbitControls autoRotate={false} enableZoom={false} makeDefault enableRotate={false} />
          <Sparkles
            size={[7, 5, 20]}
            speed={0.13}
            scale={[7, 3, 1]}
            opacity={scene.sparklesOpacity ?? 0.5}
            color={scene.sparklesColor ?? 'white'}
          />
          <Environment rotation={[Math.PI / 2, 0, 5]} preset="sunset" color="black" />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default ThreeJsBgArch
