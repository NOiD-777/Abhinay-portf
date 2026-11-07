"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { NeuralNetwork } from "./NeuralNetwork";

export default function HeroScene() {
  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[550px] flex items-center justify-center">
      {/* Background glow orb in rich chiaroscuro crimson */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#770007]/35 via-[#ae040d]/25 to-transparent blur-3xl pointer-events-none -z-10" />

      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#d60815" />
        <pointLight position={[-10, -10, -10]} intensity={2.0} color="#770007" />

        <Suspense fallback={null}>
          <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.7}>
            <NeuralNetwork count={75} />
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
