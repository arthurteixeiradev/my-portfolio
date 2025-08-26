import { Metadata } from 'next'
import { Projects } from './components/Projects'

export const metadata: Metadata = {
  title: 'Projects | Arthur Teixeira',
  description:
    'Showcase of projects developed by Arthur Teixeira, highlighting skills in development.',
}

export default function ProjectsPage() {
  return (
    <main>
      <Projects />
    </main>
  )
}
