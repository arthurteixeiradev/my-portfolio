import { Metadata } from 'next'
import { Contact } from './components/Contact'

export const metadata: Metadata = {
  title: 'Contact | Arthur Teixeira',
  description:
    'Get in touch with Arthur Teixeira for projects, collaborations, or inquiries.',
}

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  )
}
