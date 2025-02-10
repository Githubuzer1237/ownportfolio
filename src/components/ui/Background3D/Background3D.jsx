import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei';

function CurvedShape({ position, args, color, speed, direction, mousePos }) {
  const ref = useRef();
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    const yOffset = Math.sin(time * speed) * 0.5 * direction[1];

    ref.current.position.x += (position[0] + (mousePos.x * 0.6 * direction[0]) - ref.current.position.x) * 0.1;
    ref.current.position.y += (position[1] + yOffset + (mousePos.y * 0.6 * direction[1]) - ref.current.position.y) * 0.1;
    ref.current.position.z += (position[2] + (mousePos.x * 0.3 * direction[2]) - ref.current.position.z) * 0.1;

    ref.current.rotation.x += (mousePos.x * 0.3 * direction[0] - ref.current.rotation.x) * 0.1;
    ref.current.rotation.y += (mousePos.y * 0.3 * direction[1] - ref.current.rotation.y) * 0.1;

    ref.current.scale.set(
      args[0] + (mousePos.x * 0.15 * direction[0] - ref.current.scale.x) * 0.1,
      args[1] + (mousePos.y * 0.15 * direction[1] - ref.current.scale.y) * 0.1,
      args[2] + (mousePos.x * 0.08 * direction[2] - ref.current.scale.z) * 0.1
    );
  });

  return (
    <mesh ref={ref} position={position} scale={args}>
      <Torus args={[1.2, 0.5, 64, 100]}>
        <MeshDistortMaterial color={color} distort={0.3} speed={1} roughness={0.5} transparent opacity={0.4} />
      </Torus>
    </mesh>
  );
}

function DarkSphere({ position, scale, color, speed, direction, mousePos }) {
  const ref = useRef();
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    const yOffset = Math.sin(time * speed) * 0.5 * direction[1];

    ref.current.position.x += (position[0] + (mousePos.x * -0.8 * direction[0]) - ref.current.position.x) * 0.1;
    ref.current.position.y += (position[1] + yOffset + (mousePos.y * 0.8 * direction[1]) - ref.current.position.y) * 0.1;
    ref.current.position.z += (position[2] + (mousePos.x * 0.4 * direction[2]) - ref.current.position.z) * 0.1;

    ref.current.rotation.x += (mousePos.x * 0.25 * direction[0] - ref.current.rotation.x) * 0.1;
    ref.current.rotation.y += (mousePos.y * 0.25 * direction[1] - ref.current.rotation.y) * 0.1;

    ref.current.scale.set(
      scale[0] + (mousePos.x * 0.15 * direction[0] - ref.current.scale.x) * 0.1,
      scale[1] + (mousePos.y * 0.15 * direction[1] - ref.current.scale.y) * 0.1,
      scale[2] + (mousePos.x * 0.09 * direction[2] - ref.current.scale.z) * 0.1
    );
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <Sphere args={[1.2, 64, 64]}>
        <MeshDistortMaterial color={color} distort={0.15} speed={0.7} roughness={0.5} transparent opacity={0.4} />
      </Sphere>
    </mesh>
  );
}

function Background3D() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100dvh',
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 20, 5]} intensity={2} />

      <CurvedShape position={[-18, 10, -12]} args={[4.2, 4.2, 2.2]} color="#2c2c2c" speed={0.8} direction={[1, -1, 1]} mousePos={mousePos} />
      <CurvedShape position={[20, -12, -12]} args={[6.6, 5.6, 2.6]} color="#3b3b3b" speed={1.2} direction={[-1, 1, -1]} mousePos={mousePos} />
      <CurvedShape position={[-6, -9, -8]} args={[3.9, 3.9, 1.9]} color="#3b3b3b" speed={0.6} direction={[1, 1, 1]} mousePos={mousePos} />
      <CurvedShape position={[20, 12, -12]} args={[3.6, 2.6, 2.6]} color="#1c1c1c" speed={0.9} direction={[-1, -1, 1]} mousePos={mousePos} />

      <DarkSphere position={[22, 3, -15]} scale={[1.2, 1.2, 1.8]} color="#1c1c1c" speed={0.7} direction={[1, 1, -1]} mousePos={mousePos} />
      <DarkSphere position={[-24, -4, -13]} scale={[3, 3, 3]} color="#101010" speed={1.1} direction={[-1, -1, 1]} mousePos={mousePos} />
      <DarkSphere position={[5, 10, -10]} scale={[2, 2, 2]} color="#2c2c2c" speed={0.8} direction={[1, -1, -1]} mousePos={mousePos} />

      <OrbitControls enabled={false} />
    </Canvas>
  );
}

export default Background3D;
