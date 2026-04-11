'use client';

import { useRef, useState, useMemo, useEffect } from 'react';
import ClientOnly from './ClientOnly';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch { return false; }
}

/* ─── Floating Octahedron ─── */
function FloatingOctahedron() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        scale={hovered ? 1.2 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={hovered ? '#818cf8' : '#6366f1'}
          roughness={0.15}
          metalness={0.9}
          distort={hovered ? 0.4 : 0.2}
          speed={3}
          transparent
          opacity={0.9}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

/* ─── Rotating rings ─── */
function RotatingRings() {
  const group1 = useRef<THREE.Group>(null!);
  const group2 = useRef<THREE.Group>(null!);
  const group3 = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group1.current) {
      group1.current.rotation.x = t * 0.2;
      group1.current.rotation.y = t * 0.1;
    }
    if (group2.current) {
      group2.current.rotation.x = t * 0.15 + 1;
      group2.current.rotation.z = t * 0.2;
    }
    if (group3.current) {
      group3.current.rotation.y = t * 0.25;
      group3.current.rotation.z = t * 0.1 + 2;
    }
  });

  const ringMaterial = (color: string, emissive: string) => (
    <meshStandardMaterial
      color={color}
      emissive={emissive}
      emissiveIntensity={0.4}
      metalness={0.9}
      roughness={0.1}
      transparent
      opacity={0.7}
    />
  );

  return (
    <>
      <group ref={group1}>
        <mesh>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          {ringMaterial('#818cf8', '#6366f1')}
        </mesh>
      </group>
      <group ref={group2}>
        <mesh>
          <torusGeometry args={[2.2, 0.015, 16, 100]} />
          {ringMaterial('#a78bfa', '#7c3aed')}
        </mesh>
      </group>
      <group ref={group3}>
        <mesh>
          <torusGeometry args={[2.6, 0.01, 16, 100]} />
          {ringMaterial('#c4b5fd', '#8b5cf6')}
        </mesh>
      </group>
    </>
  );
}

/* ─── Floating dots in a grid pattern ─── */
function FloatingGrid({ count = 36 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null!);

  const positions = useMemo(() => {
    const cols = Math.ceil(Math.sqrt(count));
    return Array.from({ length: count }, (_, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;
      return [
        (col - cols / 2) * 0.8,
        (row - cols / 2) * 0.8,
        (Math.random() - 0.5) * 2,
      ] as [number, number, number];
    });
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <Float key={i} speed={1.5 + Math.random()} floatIntensity={0.3}>
          <mesh position={pos}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial
              color="#818cf8"
              emissive="#6366f1"
              emissiveIntensity={0.6}
              transparent
              opacity={0.4 + Math.random() * 0.4}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ─── Main Scene Export ─── */
export default function ServicesScene3D() {
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
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[3, 5, 4]} intensity={0.7} />
        <pointLight position={[-4, -3, 4]} intensity={0.3} color="#818cf8" />

        <FloatingOctahedron />
        <RotatingRings />
        <FloatingGrid />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxDistance={10}
          minDistance={3}
          autoRotate
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
    </ClientOnly>
  );
}
