'use client'

import { Card } from './card'
import { SplineScene } from './splite'
import { Spotlight } from './spotlight'

interface SplineSceneBasicProps {
  title: string
  description: string
  scene: string
}

export function SplineSceneBasic({
  title,
  description,
  scene,
}: SplineSceneBasicProps) {
  return (
    <Card className="relative h-auto min-h-[560px] w-full overflow-hidden bg-black/[0.96] md:h-[620px]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex h-full flex-col md:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8 md:p-12">
          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-lg text-neutral-300">{description}</p>
        </div>

        <div className="relative h-[320px] flex-1 md:h-full">
          <SplineScene scene={scene} className="h-full w-full" />
        </div>
      </div>
    </Card>
  )
}
