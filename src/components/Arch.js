import { useRef, useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { BufferAttribute } from 'three'
import * as THREE from 'three'
import { useSpring, config } from '@react-spring/core'
import { a } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'

const Arch = ({ color = '#b5d6ff', menuStatus, wireframe, ...props }) => {
  const meshRef = useRef(null)

  const { nodes } = useGLTF('/Arch.glb')
  const [styles, api] = useSpring(() => ({
    color,
    config: config.slow,
  }))

  const acrhTextures = useTexture({
    // map: '/textures/tex-diff.jpeg',
    // map: "/textures/checkerboard.png",
    normalMap: '/textures/tex-nor.jpeg',
    roughnessMap: '/textures/tex-rough.jpeg',
    // aoMap: "/textures/tex-arm.jpeg",
    // displacementMap: '/texture/rocks_disp.jpeg',
    // metalnessMap: "/textures/aerial_rocks_02_arm_4k_metalness_edited.jpg",
    // alphaMap: "/textures/alpha.png",
  })

  const textWrapper = 6

  // acrhTextures.map.wrapS = THREE.RepeatWrapping
  // acrhTextures.map.wrapT = THREE.RepeatWrapping

  // acrhTextures.map.repeat.x = textWrapper
  // acrhTextures.map.repeat.y = textWrapper

  acrhTextures.normalMap.wrapS = THREE.RepeatWrapping
  acrhTextures.normalMap.wrapT = THREE.RepeatWrapping

  acrhTextures.normalMap.repeat.x = textWrapper
  acrhTextures.normalMap.repeat.y = textWrapper

  acrhTextures.roughnessMap.wrapS = THREE.RepeatWrapping
  acrhTextures.roughnessMap.wrapT = THREE.RepeatWrapping

  acrhTextures.roughnessMap.repeat.x = textWrapper
  acrhTextures.roughnessMap.repeat.y = textWrapper

  console.log('HELLO', nodes.Arch.geometry)

  useEffect(() => {
    api.start({ color })
  }, [color, api])

  useEffect(() => {
    acrhTextures.needsUpdate = true
    nodes.Arch.geometry.needsUpdate = true
    if (meshRef.current) {
      meshRef.current.geometry.setAttribute(
        'uv2',
        new BufferAttribute(meshRef.current.geometry.attributes.uv.array, 2),
      )
    }
  })

  // const wireColor = () => {
  //   if (menuStatus === "open") {
  //     color = "#FFFFFF";
  //   } else {
  //     color = styles.color;
  //   }
  // };

  console.log('menuStatus', menuStatus)

  useFrame(() => {
    if (menuStatus === 'open') {
      meshRef.current.rotation.y += 0.001
    }
  })

  console.log('color', color)

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Arch.geometry}
        position={[0, 20, 2.6]}
      >
        <a.meshStandardMaterial
          color={styles.color}
          roughness={0.4}
          envMapIntensity={0.4}
          // emissive={"#370037"}
          // map={acrhTextures.map}
          normalMap={acrhTextures.normalMap}
          normalScale={0.2}
          metalness={0.4}
          wireframe={wireframe}
          // aoMap={acrhTextures.aoMap}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Arch.gltf')

export default Arch
