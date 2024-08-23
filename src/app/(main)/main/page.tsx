'use client'

import Loader from '@/components/Loader/Loader';
import {Canvas} from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react';
import Island from '@/models/island';
import Sky from '@/models/sky';
import Bird from '@/models/bird';
import Plane from '@/models/plane';
import { Vector3 } from 'three';
import HomeInfo from '@/components/HomeInfo/HomeInfo';
import Image from 'next/image';

const Main = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [biplaneScale, setBiplaneScale] = useState<[number, number, number]>([3, 3, 3]);
  const [biplanePosition, setBiplanePosition] = useState<[number, number, number]>([0, -4, -4]);
  const [islandScale, setIslandScale] = useState<[number, number, number]>([1, 1, 1]);
  const [islandPosition, setIslandPosition] = useState<[number, number, number]>([0, -6.5, -43.4]);

  useEffect(() => {
    audioRef.current = new Audio('/assets/sakura.mp3');
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    
    if (audio) {
      if (isPlayingMusic) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [isPlayingMusic]);

  useEffect(() => {
    const updateScreenSize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
          setBiplaneScale([1.5, 1.5, 1.5]);
          setBiplanePosition([0, -1.5, 0]);
          setIslandScale([0.9, 0.9, 0.9]);
          setIslandPosition([0, -6.5, -43.4]);
        } else {
          setBiplaneScale([3, 3, 3]);
          setBiplanePosition([0, -4, -4]);
          setIslandScale([1, 1, 1]);
          setIslandPosition([0, -6.5, -43.4]);
        }
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <>
      <section className="bg-slate-300/20 relative w-full h-screen">
        <div className="absolute top-20 left-0 right-0 z-10 text-center">
          <div className="mx-auto max-w-[50vw]">
            {currentStage && <HomeInfo currentStage={currentStage} />}
          </div>
        </div>
        <Canvas 
          className={`bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
          camera={{ near: 0.1, far: 1000 }}
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

        <div className='absolute bottom-2 left-2'>
          <Image 
            src={!isPlayingMusic ? '/assets/icons/soundoff.png' : '/assets/icons/soundon.png'} 
            alt='jukebox'
            className='w-10 h-10 cursor-pointer object-contain' 
            width={50} 
            height={50}
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
      </section>
    </>
  )
};

export default Main;