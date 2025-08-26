import { Metadata } from 'next'
import { About } from './components/About'

export const metadata: Metadata = {
  title: 'About | Arthur Teixeira',
  description: 'Learn more about Arthur Teixeira.',
}

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  )
}
