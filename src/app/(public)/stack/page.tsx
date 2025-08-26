import { Metadata } from 'next'
import { Stack } from './components/Stack'

export const metadata: Metadata = {
  title: 'Stack | Arthur Teixeira',
  description:
    'Discover the technology stack and tools that Arthur Teixeira uses in his development workflow.',
}

export default function StackPage() {
  return (
    <main>
      <Stack />
    </main>
  )
}
