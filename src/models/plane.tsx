import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Mesh, Vector3 } from "three";
import { ThreeEvent } from "@react-three/fiber";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db

type Props = {
  isRotating: boolean;
  position?: Vector3;
  rotation?: [number, number, number];
  scale?: Vector3;
  onClick?: (event: ThreeEvent<MouseEvent>) => void;
};

const Plane = ({ isRotating, ...props }: Props) => {
  const ref = useRef<Mesh>(null);
  const { scene, animations } = useGLTF('/assets/3d/plane.glb');
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]!.play();
    } else {
      actions["Take 001"]!.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;