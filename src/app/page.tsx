import { Hero } from '@/components/Hero'
import { MouseMoveEffect } from '@/components/MouseMoveEffect'

export default function HomePage() {
  return (
    <main className='relative min-h-dvh'>
      <MouseMoveEffect />
      <Hero />
    </main>
  )
}
