import { useEffect, useRef } from "react";
import * as THREE from "three";
import star from "../../assets/star.png";

type ParticleProps = {
  className?: string;
};

const Particles: React.FC<ParticleProps> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight); // or document.body.scrollHeight
    };

    window.addEventListener("resize", onWindowResize, false);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 10000; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
      vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
      vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    let particles: THREE.Points;

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      star,
      (texture) => {
        const material = new THREE.PointsMaterial({
          size: 10.05,
          map: texture,
          transparent: true,
        });

        particles = new THREE.Points(geometry, material); // removed the const keyword
        scene.add(particles);
      },
      undefined,
      (error) =>
        console.error("An error occurred while loading the texture", error)
    );

    camera.position.z = 1;

    const animate = () => {
      requestAnimationFrame(animate);

      if (particles) {
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };

    if (ref.current) {
      renderer.setSize(window.innerWidth, document.body.scrollHeight);
      ref.current.appendChild(renderer.domElement);
    }

    animate();

    return () => {
      if (ref.current) ref.current.removeChild(renderer.domElement);

      renderer.dispose();

      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;

        if (object.geometry) {
          object.geometry.dispose();
        }

        if (object.material) {
          if (Array.isArray(object.material)) {
            for (let i = 0; i < object.material.length; i++) {
              object.material[i].dispose();
            }
          } else {
            object.material.dispose();
          }
        }
      });

      geometry.dispose();
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div className={className} ref={ref} />;
};

export default Particles;
