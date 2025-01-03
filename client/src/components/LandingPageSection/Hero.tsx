'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { Button } from '../Common Components/Button'
import VideoCallModel from './VideoCallModel'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-sky-950 flex items-center">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl text-gray-200 font-bold tracking-tight lg:text-7xl xl:text-8xl">
              Experience Next-Gen Video Calls
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Transform your remote communication with crystal-clear video quality and real-time audio transcription. Built for the future of work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full bg-sky-800 hover:bg-gray-800 text-white"
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg bg-gray-300 px-8 py-6 rounded-full"
              >
                View Demo
              </Button>
            </div>
          </div>
          <div className="relative h-[600px]">
            <div className="absolute inset-0">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <OrbitControls enableZoom={false} enablePan={false} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                  <VideoCallModel />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

