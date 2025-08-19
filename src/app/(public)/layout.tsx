import { Footer } from '@/components/Footer'
export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='grid min-h-screen bg-background px-6 sm:px-8 md:px-16 2xl:px-0'>
      {children}

      <Footer />
    </div>
  )
}
