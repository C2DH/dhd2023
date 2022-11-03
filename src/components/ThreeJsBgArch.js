import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import "./ThreeJsBgArch.css";
import { useSpring, config } from "@react-spring/core";
import { a } from "@react-spring/three";
import Arch from "./Arch";

const SceneSteps = [
  {
    scale: 0.12,
    position: [1.8, -1.5],
    rotation: [0, -1, 0],
    color: "#73a5e3",
  },
  {
    scale: 0.14,
    position: [-1.8, 0],
    rotation: [0, -0.4, 0],
    color: "#000000",
  },
  {
    scale: 0.5,
    color: "#73a5e3",
    position: [-0.2, -10],
    rotation: [-0.6, -0.35, -0.25],
  },
  {
    scale: 0.14,
    position: [-1.8, 0],
    rotation: [0, -0.4, 0],
    color: "#000000",
  },
  {
    scale: 0.18,
    position: [1.8, -1.5],
    rotation: [0, -1, 0],
    color: "#73a5e3",
  },
];

const ThreeJsBgArch = ({ availableWidth, availableHeight, stepIndex = 0 }) => {
  const scene = SceneSteps[stepIndex ?? 0];
  const [styles, api] = useSpring(() => ({
    scale: 0,
    rotation: [0, 0, 0],
    position: [0, 0],
    color: "#73a5e3",
    config: config.slow,
  }));

  useEffect(() => {
    api.start({
      scale: scene.scale,
      rotation: scene.rotation ?? 0,
      position: scene.position ?? 0,
      color: scene.color,
    });
  }, [stepIndex, scene, api]);
  return (
    <div
      id="canvas-container"
      style={{ width: availableWidth, height: availableHeight, zIndex: 0 }}
      className="position-fixed top-0"
      // {...props}
    >
      <Canvas shadows camera={{ position: [-4, 1.5, 8], fov: 25 }}>
        <a.group
          // position={[2, -1.2, 0]}
          scale={styles.scale}
          rotation={styles.rotation.to((x, y, z) => [x, y, z])}
          position={styles.position.to((x, y) => [x, y, 0])}
        >
          <Arch color={scene.color}></Arch>
        </a.group>

        <a.group
          // position={[2, -1.2, 0]}
          scale={styles.scale}
          rotation={styles.rotation.to((x, y, z) => [x, y, z])}
          position={styles.position.to((x, y) => [x, y, 0])}
        >
          <Arch color={scene.color}></Arch>
        </a.group>

        {stepIndex === 2 ? (
          <a.group scale={0.2} rotation={[0, 0, 0]} position={[0, 0, 0]}>
            <Arch color={scene.color}></Arch>
          </a.group>
        ) : null}

        {stepIndex === 2 ? (
          <a.group scale={0.12} rotation={[0.4, 0, 0]} position={[0, 0, 0]}>
            <Arch color={scene.color}></Arch>
          </a.group>
        ) : null}

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
  );
};

console.log("en", Environment);

export default ThreeJsBgArch;
