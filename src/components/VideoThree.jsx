import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
import videoCasa from "../assets/playa.mp4";

function VideoSphere() {
  const videoTexture = useVideoTexture(videoCasa, {
    start: true,
  });

  // Invertir coordenadas UV
  videoTexture.wrapS = THREE.RepeatWrapping;
  videoTexture.wrapT = THREE.RepeatWrapping;
  videoTexture.repeat.x = 1; // Invertir horizontalmente

  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={videoTexture} side={THREE.BackSide} />
    </mesh>
  );
}

export default function CaApp() {
  return (
    <Canvas>
      <VideoSphere />
      <OrbitControls />
    </Canvas>
  );
}
