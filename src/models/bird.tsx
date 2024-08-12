import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
const Bird = () => {
  const birdRef = useRef<Mesh>(null);

  const { scene, animations } = useGLTF('/assets/3d/bird.glb');
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"]!.play();
  }, [actions]);

  useFrame(({ clock, camera }) => {
    if (birdRef.current) {
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      if (birdRef.current.position.x > camera.position.x + 10) {
        birdRef.current.rotation.y = Math.PI;
      } else if (birdRef.current.position.x < camera.position.x - 10) {
        birdRef.current.rotation.y = 0;
      }

      if (birdRef.current.rotation.y === 0) {
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      } else {
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;