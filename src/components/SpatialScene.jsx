import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  MeshDistortMaterial,
  Stars,
  Environment,
} from '@react-three/drei';
import * as THREE from 'three';

function Core() {
  const group = useRef();
  const knot = useRef();
  const outerRing = useRef();
  const innerRing = useRef();

  useFrame((state, delta) => {
    if (!group.current || !knot.current) return;

    const time = state.clock.elapsedTime;

    // Main rotation
    group.current.rotation.y += delta * 0.1;

    knot.current.rotation.x += delta * 0.055;
    knot.current.rotation.z -= delta * 0.035;

    // Smooth mouse interaction
    const targetX = state.pointer.x * 0.35;
    const targetY = state.pointer.y * 0.22;

    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      targetX,
      0.025
    );

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      targetY,
      0.025
    );

    // Very subtle breathing effect
    const breathe = 1 + Math.sin(time * 1.2) * 0.018;

    knot.current.scale.set(
      1.55 * breathe,
      1.55 * breathe,
      1.55 * breathe
    );

    // Independent orbital movement
    if (outerRing.current) {
      outerRing.current.rotation.x += delta * 0.025;
      outerRing.current.rotation.y -= delta * 0.04;
    }

    if (innerRing.current) {
      innerRing.current.rotation.x -= delta * 0.018;
      innerRing.current.rotation.z += delta * 0.03;
    }
  });

  return (
    <group ref={group}>
      <Float
        speed={1.25}
        rotationIntensity={0.2}
        floatIntensity={0.35}
      >
        {/* Main Core */}
        <mesh ref={knot}>
          <torusKnotGeometry
            args={[1, 0.28, 180, 24, 2, 5]}
          />

          <MeshDistortMaterial
            color="#70f1ff"
            roughness={0.16}
            metalness={0.9}
            distort={0.1}
            speed={1.8}
          />
        </mesh>

        {/* Outer Energy Ring */}
        <mesh
          ref={outerRing}
          scale={2.35}
          rotation={[0.5, 0.25, 0]}
        >
          <torusGeometry
            args={[1, 0.006, 8, 160]}
          />

          <meshBasicMaterial
            color="#c7ff67"
            transparent
            opacity={0.58}
          />
        </mesh>

        {/* Inner Energy Ring */}
        <mesh
          ref={innerRing}
          scale={2.8}
          rotation={[1.25, 0.2, 0.8]}
        >
          <torusGeometry
            args={[1, 0.004, 8, 160]}
          />

          <meshBasicMaterial
            color="#70f1ff"
            transparent
            opacity={0.28}
          />
        </mesh>

        {/* Small Core Glow */}
        <mesh scale={1.15}>
          <sphereGeometry args={[1, 32, 32]} />

          <meshBasicMaterial
            color="#70f1ff"
            transparent
            opacity={0.035}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </Float>
    </group>
  );
}

function SceneContent() {
  return (
    <>
      {/* Base lighting */}
      <ambientLight intensity={0.4} />

      {/* Cyan key light */}
      <pointLight
        position={[3, 3, 4]}
        intensity={24}
        distance={10}
        color="#70f1ff"
      />

      {/* Lime fill light */}
      <pointLight
        position={[-4, -2, 2]}
        intensity={14}
        distance={9}
        color="#c7ff67"
      />

      {/* Very subtle back light */}
      <pointLight
        position={[0, -3, -4]}
        intensity={8}
        distance={8}
        color="#6f8cff"
      />

      <Core />

      {/* Background particles */}
      <Stars
        radius={45}
        depth={28}
        count={450}
        factor={1.6}
        saturation={0}
        fade
        speed={0.18}
      />

      {/* Soft environment reflections */}
      <Environment
        preset="night"
        environmentIntensity={0.25}
      />
    </>
  );
}

export default function SpatialScene() {
  return (
    <Canvas
      dpr={[1, 1.35]}
      camera={{
        position: [0, 0, 6.4],
        fov: 44,
      }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}