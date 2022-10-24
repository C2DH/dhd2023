import React, { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture, Environment } from '@react-three/drei'
import { BufferAttribute } from 'three'
import * as THREE from 'three'
import './ThreeJsBgArch.css'

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

console.log('en', Environment)

const SceneSteps = [
  {
    scale: 0.15,
  },
  {
    scale: 0.35,
  },
  {
    scale: 0.5,
  },
  {
    scale: 0.15,
  },
]

const ThreeJsBgArch = ({ availableWidth, availableHeight, stepIndex = 0 }) => {
  console.debug('[ThreeJsBgArch] stepIndex', stepIndex)

  const scene = SceneSteps[stepIndex ?? 0]

  return (
    <div
      id="canvas-container"
      style={{ width: availableWidth, height: availableHeight, zIndex: 0 }}
      className="position-fixed top-0"
      // {...props}
    >
      <Canvas shadows camera={{ position: [8, 1.5, 8], fov: 25 }}>
        <Arch
          position={[0, -1.5, 0]}
          scale={scene.scale}
          // material={baubleMaterial}
        ></Arch>
        <ambientLight intensity={0.5} />
        {/* <directionalLight intensity={0.5} position={[5, 10, 10]} color="#d2e9fe" /> */}
        <spotLight
          intensity={1}
          position={[5, 10, 15]}
          angle={0.15}
          penumbra={0.5}
          shadow-mapSize={[512, 512]}
          castShadow
        />
        {/* <spotLight position={[0, 3, -3]} angle={0.2} penumbra={1} intensity={1} /> */}
        <OrbitControls autoRotate={false} enableZoom={false} />
        <Environment rotation={[Math.PI / 2, 0, 5]} preset="sunset" />
      </Canvas>
    </div>
  )
}

console.log('en', Environment)

function Arch(props) {
  const terrainTextures = useTexture({
    map: '/textures/tex-diff.jpeg',
    normalMap: '/textures/tex-nor.jpeg',
    aoMap: '/textures/tex-arm.jpeg',
    roughnessMap: '/textures/tex-rough.jpeg',
    // displacementMap: '/texture/rocks_disp.jpeg',
    // metalnessMap: "/textures/aerial_rocks_02_arm_4k_metalness_edited.jpg",
    // alphaMap: "/textures/alpha.png",
  })
  terrainTextures.wrapS = terrainTextures.wrapT = THREE.RepeatWrapping

  const mesh = useRef(null)
  useEffect(() => {
    mesh.current.geometry.setAttribute(
      'uv2',
      new BufferAttribute(mesh.current.geometry.attributes.uv.array, 2),
    )
  })

  const { nodes } = useGLTF('/Arch.gltf')
  const baubleMaterial = new THREE.MeshStandardMaterial({
    color: '#73a5e3',
    roughness: terrainTextures.roughnessMap,
    envMapIntensity: 1,
    emissive: '#370037',
    map: terrainTextures.map,
    normalMap: terrainTextures.normalMap,
    metalness: 0.2,
    aoMap: terrainTextures.aoMap,
  })

  console.log('tex', mesh)

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Null.geometry}
        material={baubleMaterial}
      />
    </group>
  )
}

useGLTF.preload('/Arch.gltf')

export default ThreeJsBgArch
