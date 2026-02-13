"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingSphere() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.15;
    mesh.current.position.y = Math.sin(t * 0.6) * 0.25;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color="#6d5cff"
        roughness={0.15}
        metalness={0.9}
        emissive="#4c3cff"
        emissiveIntensity={1.6}
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
      <color attach="background" args={["#050507"]} />

      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={2} />

      <Stars
        radius={120}
        depth={60}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.4}
      />

      <FloatingSphere />
    </Canvas>
  );
}

