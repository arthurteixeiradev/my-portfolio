import { Hero } from '@/components/Hero'
import { MouseMoveEffect } from '@/components/MouseMoveEffect'

export default function HomePage() {
  return (
    <div className='relative min-h-dvh'>
      <MouseMoveEffect />
      <Hero />
    </div>
  )
}
