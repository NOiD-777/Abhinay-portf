"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function NeuralNetwork({ count = 75 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate 3D nodes clustered organically in an ellipsoid
  const [nodes, connections] = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.2;
      const sinPhi = Math.sin(phi);
      pts.push(
        new THREE.Vector3(
          r * sinPhi * Math.cos(theta) * 1.25,
          r * sinPhi * Math.sin(theta) * 0.95,
          r * Math.cos(phi) * 0.95
        )
      );
    }

    const linePairs: number[] = [];
    const maxDist = 1.08;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < maxDist) {
          linePairs.push(pts[i].x, pts[i].y, pts[i].z);
          linePairs.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    return [pts, new Float32Array(linePairs)];
  }, [count]);

  // Gentle organic floating + responsive mouse tracking
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.12;

      // Mouse parallax easing
      const targetX = (state.pointer.x * Math.PI) / 7;
      const targetY = (state.pointer.y * Math.PI) / 7;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Node Spheres in exact Michelangelo blood crimson */}
      {nodes.map((pos, idx) => {
        const isHighlight = idx % 3 === 0;
        const color = isHighlight ? "#d60815" : "#ae040d";
        return (
          <mesh key={idx} position={pos}>
            <sphereGeometry args={[0.048, 14, 14]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={2.2}
              roughness={0.15}
            />
          </mesh>
        );
      })}

      {/* Synaptic Network Lines in deep crimson maroon */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[connections, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#ae040d"
          transparent
          opacity={0.38}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}
