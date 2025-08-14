import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-background'>
      <Card className='w-full max-w-lg text-center shadow-lg border-0 bg-card'>
        <CardContent className='pt-16 pb-12 px-8'>
          <div className='mb-8'>
            <h1 className='text-8xl sm:text-9xl md:text-[10rem] font-bold text-primary mb-4 leading-none tracking-tight'>
              404
            </h1>
            <div className='w-20 h-1 bg-primary mx-auto rounded-full'></div>
          </div>

          <h2 className='text-2xl sm:text-3xl font-semibold text-foreground mb-6 tracking-tight'>
            Page not found
          </h2>

          <p className='text-muted-foreground mb-10 leading-relaxed text-base max-w-sm mx-auto'>
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Button
            asChild
            size='lg'
            className='px-8 py-3 text-base font-medium'
          >
            <Link
              href='/'
              aria-label='Go back home'
            >
              Go back home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
