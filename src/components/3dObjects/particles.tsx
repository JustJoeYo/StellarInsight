import { useEffect, useRef } from "react";
import * as THREE from "three";
import star from "../../assets/star.png";
import star2 from "../../assets/star2.png";

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
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

    const textureLoader = new THREE.TextureLoader();

    // Replace the existing createParticles function with this one
    const createParticles = (textureUrl: string) => {
      return new Promise<THREE.Points>((resolve, reject) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];

        for (let i = 0; i < 5000; i++) {
          vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
          vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
          vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
        }

        geometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(vertices, 3)
        );

        textureLoader.load(
          textureUrl,
          (texture) => {
            const material = new THREE.PointsMaterial({
              size: 10.05,
              map: texture,
              transparent: true,
            });

            const particles = new THREE.Points(geometry, material);
            scene.add(particles);
            resolve(particles);
          },
          undefined,
          (error) => {
            console.error("An error occurred while loading the texture", error);
            reject(error);
          }
        );
      });
    };

    // Replace the lines where particles1 and particles2 are defined with this one
    Promise.all([createParticles(star), createParticles(star2)]).then(
      ([particles1, particles2]) => {
        camera.position.z = 1;

        const animate = () => {
          requestAnimationFrame(animate);

          particles1.rotation.x += 0.001;
          particles1.rotation.y += 0.001;
          (particles1.material as THREE.PointsMaterial).size =
            10.05 + 12 * Math.sin(0.1 * Date.now());

          particles2.rotation.x += 0.001;
          particles2.rotation.y += 0.001;
          (particles2.material as THREE.PointsMaterial).size =
            10.05 + 12 * Math.sin(0.1 * Date.now());

          renderer.render(scene, camera);
        };

        animate();
      }
    );

    if (ref.current) {
      renderer.setSize(window.innerWidth, document.body.scrollHeight);
      ref.current.appendChild(renderer.domElement);
    }

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

      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div className={className} ref={ref} />;
};

export default Particles;
