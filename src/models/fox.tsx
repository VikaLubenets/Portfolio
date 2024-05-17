/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Mesh, Group, Material, Skeleton, Object3D, AnimationClip, Vector3, Euler } from "three";

type Props = {
  currentAnimation: string;
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
}

interface GLTFResult {
  nodes: Record<string, Object3D>;
  materials: Record<string, Material>;
  animations: AnimationClip[];
}

interface SkinnedMesh extends Mesh {
  skeleton: Skeleton;
}

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
const Fox = ({ currentAnimation, position, rotation, scale }: Props) => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations } = useGLTF('/assets/3d/fox.glb') as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if(actions){
      Object.values(actions).forEach((action) => action!.stop());

      if (actions[currentAnimation]) {
        actions[currentAnimation]!.play();
      }
    }
  }, [actions, currentAnimation]);

  const eulerRotation = new Euler().setFromVector3(rotation);

  return (
    <group ref={group} position={position} rotation={eulerRotation} scale={scale} dispose={null}>
      <group name='Sketchfab_Scene'>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name='Object_7'
          geometry={(nodes.Object_7 as SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_7 as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name='Object_8'
          geometry={(nodes.Object_8 as SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_8 as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name='Object_9'
          geometry={(nodes.Object_9 as SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_9 as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name='Object_10'
          geometry={(nodes.Object_10 as SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_10 as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name='Object_11'
          geometry={(nodes.Object_11 as SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_11 as SkinnedMesh).skeleton}
        />
      </group>
    </group>
  );
};

export default Fox;