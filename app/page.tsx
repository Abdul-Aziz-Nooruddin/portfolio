import { SplineSceneBasic } from '../components/ui/demo'

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-4 md:p-8">
      <SplineSceneBasic
        title="Interactive 3D"
        description="Bring your portfolio to life with a cinematic hero scene that captures attention and showcases your creative work."
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
      />
    </main>
  )
}
