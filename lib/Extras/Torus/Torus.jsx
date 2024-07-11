"use client";
import * as THREE from "three";
import {
  Text,
  PerspectiveCamera,
  OrbitControls,
  TorusKnot,
  Box,
} from "@react-three/drei";
import React, { useRef, useMemo } from "react";
import { Canvas, createPortal, useFrame } from "react-three-fiber";
import TorusShaderMaterial from "./material/torusShaderMaterial";
import Orbitron from "./material/Orbitron.ttf";
function TextComp({ text, scale, textColor }) {
  return (
    <Text
      fontSize={1}
      scale={scale}
      font={Orbitron}
      // Specify the path to your font file
      color={textColor}
    >
      {text}
    </Text>
  );
}

function Cube({ text, scale, color, textColor }) {
  const cam = useRef();
  const time = useRef(0);
  const mat = useRef();

  const [scene, target, camera] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(color);
    const target = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight
    );
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3.5;
    return [scene, target, camera];
  }, []);

  useFrame((state, delta) => {
    time.current += delta;
    state.gl.setRenderTarget(target);
    state.gl.render(scene, camera);
    state.gl.setRenderTarget(null);
    mat.current.uniforms.uTime.value = time.current;
  });

  return (
    <>
      {createPortal(<TextComp text={text} textColor={textColor} scale={scale} />, scene)}
      <TorusKnot args={[9, 3, 768, 3, 4, 3]}>
        <shaderMaterial
          ref={mat}
          attach="material"
          args={[TorusShaderMaterial]}
          uniforms-uTexture-value={target.texture} // Pass the time value to the shader
        />
      </TorusKnot>
    </>
  );
}

const Torus = ({ text, scale = [0.6, 3.25, 0], color = "#000", textColor = "#fff" }) => {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        fov={45}
        aspect={1}
        near={0.1}
        far={1000}
        position={[0, 0, 40]}
      />
      <ambientLight />
      {/* <color attach="background" args={["#000000"]} /> */}
      <pointLight position={[10, 10, 10]} />
      <Cube text={text} scale={scale} color={color} textColor={textColor} />
    </Canvas>
  );
};

export { Torus };
