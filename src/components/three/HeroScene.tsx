"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { NeuralNetwork } from "./NeuralNetwork";

export default function HeroScene() {
  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#d60815" />
        <pointLight position={[-10, -10, -10]} intensity={1.8} color="#770007" />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
            <NeuralNetwork count={70} />
          </Float>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
}
