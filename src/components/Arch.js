import { useRef, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { BufferAttribute } from "three";
import * as THREE from "three";
import { useSpring, config } from "@react-spring/core";
import { a } from "@react-spring/three";

const Arch = ({ color = "#73a5e3", ...props }) => {
  const meshRef = useRef(null);
  const { nodes } = useGLTF("/Arch.gltf");
  const [styles, api] = useSpring(() => ({
    color,
    config: config.slow,
  }));

  const acrhTextures = useTexture({
    map: "/textures/tex-diff.jpeg",
    normalMap: "/textures/tex-nor.jpeg",
    roughnessMap: "/textures/tex-rough.jpeg",
    // aoMap: "/textures/tex-arm.jpeg",
    // displacementMap: '/texture/rocks_disp.jpeg',
    // metalnessMap: "/textures/aerial_rocks_02_arm_4k_metalness_edited.jpg",
    // alphaMap: "/textures/alpha.png",
  });
  acrhTextures.wrapS = acrhTextures.wrapT = THREE.RepeatWrapping;

  useEffect(() => {
    api.start({ color });
  }, [color]);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.geometry.setAttribute(
        "uv2",
        new BufferAttribute(meshRef.current.geometry.attributes.uv.array, 2)
      );
    }
  });

  // console.log("tex", mesh);
  console.log("color", color);

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Null.geometry}
      >
        <a.meshStandardMaterial
          color={styles.color}
          roughness={acrhTextures.roughnessMap}
          envMapIntensity={1}
          emissive={"#370037"}
          map={acrhTextures.map}
          normalMap={acrhTextures.normalMap}
          metalness={0.2}
          aoMap={acrhTextures.aoMap}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/Arch.gltf");

export default Arch;
