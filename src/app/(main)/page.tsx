'use client'

import Loader from '@/components/Loader/Loader';
import {Canvas} from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react';
import Island from '@/models/island';
import Sky from '@/models/sky';
import Bird from '@/models/bird';
import Plane from '@/models/plane';
import { Vector3 } from 'three';
import HomeInfo from '@/components/HomeInfo/HomeInfo';

const App = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // useEffect(() => {
  //   if (isPlayingMusic) {
  //     audioRef.current.play();
  //   }

  //   return () => {
  //     audioRef.current.pause();
  //   };
  // }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <>
      <section className="bg-slate-300/20 relative w-full h-screen">
      <div className="absolute top-20 left-0 right-0 z-10 text-center">
        <div className="mx-auto max-w-[50vw]">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
      </div>
        <Canvas 
          className={`bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
          camera={{near: 0.1, far: 1000}}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <hemisphereLight
               args={['#b1e1ff', '#000000', 1]}
            />
              <Bird />
              <Sky isRotating={isRotating} />
              <Island
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
                position={islandPosition}
                rotation={[0.1, 4.7077, 0]}
                scale={islandScale} 
                currentFocusPoint={undefined}          
              />
              <Plane
                isRotating={isRotating}
                position={new Vector3(biplanePosition[0], biplanePosition[1], biplanePosition[2])}
                rotation={[0, 20.1, 0]}
                scale={new Vector3(biplaneScale[0], biplaneScale[1], biplaneScale[2])}
              />
          </Suspense>
        </Canvas>
      </section>
    </>
  )
};

export default App;