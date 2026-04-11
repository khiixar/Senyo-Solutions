'use client';

import { useRef, useState, useMemo, useEffect } from 'react';
import ClientOnly from './ClientOnly';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch { return false; }
}

/* ─── Floating Icosahedron (main centerpiece) ─── */
function FloatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh
        ref={meshRef}
        scale={hovered ? 1.15 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1.4, 1]} />
        <MeshDistortMaterial
          color={hovered ? '#60a5fa' : '#3b82f6'}
          roughness={0.2}
          metalness={0.8}
          distort={hovered ? 0.5 : 0.3}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

/* ─── Orbiting ring of small spheres ─── */
function OrbitingSpheres({ count = 8, radius = 2.8 }: { count?: number; radius?: number }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });

  const positions = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      return [Math.cos(angle) * radius, Math.sin(angle * 0.5) * 0.5, Math.sin(angle) * radius] as [number, number, number];
    });
  }, [count, radius]);

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <Float key={i} speed={2 + i * 0.3} floatIntensity={0.5}>
          <mesh position={pos}>
            <sphereGeometry args={[0.08 + (i % 3) * 0.04, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#60a5fa' : '#93c5fd'}
              emissive={i % 2 === 0 ? '#3b82f6' : '#60a5fa'}
              emissiveIntensity={0.5}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ─── Wireframe Torus ─── */
function WireframeTorus() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh
        ref={meshRef}
        position={[0, 0, -1]}
        scale={hovered ? 1.1 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusGeometry args={[2.2, 0.03, 16, 100]} />
        <meshStandardMaterial
          color={hovered ? '#93c5fd' : '#3b82f6'}
          emissive="#3b82f6"
          emissiveIntensity={hovered ? 0.8 : 0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

/* ─── Floating Particles ─── */
function Particles({ count = 50 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#60a5fa"
        size={0.04}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Main Scene Export ─── */
export default function HeroScene3D() {
  const [webglOk, setWebglOk] = useState(false);
  useEffect(() => { setWebglOk(isWebGLAvailable()); }, []);
  if (!webglOk) return null;

  return (
    <ClientOnly>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#60a5fa" />

        <FloatingIcosahedron />
        <OrbitingSpheres />
        <WireframeTorus />
        <Particles />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxDistance={12}
          minDistance={3}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
    </ClientOnly>
  );
}
