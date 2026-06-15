import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';

function Core() {
  const group = useRef();
  const knot = useRef();

  useFrame((state, delta) => {
    if (!group.current || !knot.current) return;
    group.current.rotation.y += delta * 0.12;
    knot.current.rotation.x += delta * 0.08;
    knot.current.rotation.z -= delta * 0.06;
    const x = state.pointer.x * 0.3;
    const y = state.pointer.y * 0.2;
    group.current.position.x += (x - group.current.position.x) * 0.03;
    group.current.position.y += (y - group.current.position.y) * 0.03;
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.4}>
        <mesh ref={knot} scale={1.55}>
          <torusKnotGeometry args={[1, 0.28, 180, 24, 2, 5]} />
          <MeshDistortMaterial color="#70f1ff" roughness={0.12} metalness={0.88} distort={0.12} speed={2} />
        </mesh>
        <mesh scale={2.35} rotation={[0.5, 0.25, 0]}>
          <torusGeometry args={[1, 0.005, 8, 160]} />
          <meshBasicMaterial color="#c7ff67" transparent opacity={0.7} />
        </mesh>
        <mesh scale={2.8} rotation={[1.25, 0.2, 0.8]}>
          <torusGeometry args={[1, 0.004, 8, 160]} />
          <meshBasicMaterial color="#70f1ff" transparent opacity={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

export default function SpatialScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.4], fov: 44 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 3, 4]} intensity={35} color="#70f1ff" />
      <pointLight position={[-4, -2, 2]} intensity={25} color="#c7ff67" />
      <Suspense fallback={null}>
        <Core />
        <Stars radius={50} depth={30} count={700} factor={2} saturation={0} fade speed={0.3} />
      </Suspense>
    </Canvas>
  );
}
