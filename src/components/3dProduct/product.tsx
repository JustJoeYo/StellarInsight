import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import showcaseImage from "../../assets/9_trends.png";

type ProductProps = {
  className?: string;
};

const RotatingBox: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!); // ref for the glow box
  const [time, setTime] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((_state, delta) => {
    setTime(time + delta * 0.25);
    const rotationY = (Math.sin(time) * Math.PI) / 6;
    const rotationX = (Math.cos(time) * Math.PI) / 14;
    ref.current.rotation.y = rotationY;
    ref.current.rotation.x = rotationX;
    glowRef.current.rotation.y = rotationY;
    glowRef.current.rotation.x = rotationX;

    const hue = time % 1;
    const color = new THREE.Color("hsl(" + hue * 360 + ", 100%, 50%)");
    (glowRef.current.material as THREE.MeshStandardMaterial).emissive = color;
  });

  let position = new THREE.Vector3(0, 0, isMobile ? -5 : -2);
  const texture = useLoader(THREE.TextureLoader, showcaseImage);

  return (
    <>
      <Box
        ref={ref}
        args={[10, 6, 0.5]}
        position={[position.x, position.y, position.z]}
      >
        <meshStandardMaterial map={texture} />
      </Box>
      <Box
        ref={glowRef}
        args={[10.2, 6.2, 0.6]}
        position={[position.x, position.y, position.z - 0.1]}
      >
        <meshStandardMaterial emissive={"#0000FF"} transparent opacity={1} />
      </Box>
    </>
  );
};

const Product: React.FC<ProductProps> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <RotatingBox />
      </Canvas>
    </div>
  );
};

export default Product;
