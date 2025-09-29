import { Hero } from '@/components/Hero'
import { MouseMoveEffect } from '@/components/MouseMoveEffect'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arthur Teixeira | Software engineer',
  description:
    'Portfolio of Arthur Teixeira, a software engineer specialized in Next.js, React, and modern interfaces.',
}

export default function HomePage() {
  return (
    <main className='relative min-h-dvh'>
      <MouseMoveEffect />
      <Hero />
    </main>
  )
}
