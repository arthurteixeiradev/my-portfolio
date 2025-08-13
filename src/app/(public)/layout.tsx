import { Footer } from '@/components/Footer'
export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='grid relative min-h-screen bg-background'>
      {children}

      <Footer />
    </div>
  )
}
