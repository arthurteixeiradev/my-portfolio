import { MediaInfo } from '@/components/media-info'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ShineBorder } from './magicui/shine-border'
import { Meteors } from './magicui/meteors'

export const Hero = () => {
  return (
    <section className='relative flex items-center justify-center min-h-screen overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(circle at center, var(--primary-foreground) 0%, var(--background) 40%, var(--background) 80%, var(--primary-foreground) 100%)',
            backgroundSize: '200% 200%',
            animation: 'smooth-shift 25s ease-in-out infinite alternate',
          }}
        ></div>

        <div
          className='absolute inset-0 opacity-30'
          style={{
            backgroundImage:
              'radial-gradient(circle at 40% 40%, var(--secondary), transparent 70%)',
            animation: 'gentle-pulse 18s ease-in-out infinite',
          }}
        ></div>

        <div
          className='absolute inset-0 opacity-20'
          style={{
            backgroundImage:
              'radial-gradient(circle at 60% 60%, var(--secondary), transparent 70%)',
            animation: 'gentle-pulse 22s ease-in-out infinite reverse',
          }}
        ></div>
        <Meteors
          number={50}
          maxDuration={15}
        />
      </div>

      <div className='relative z-10 text-foreground text-center space-y-10 px-6 sm:px-0'>
        <h1
          className={cn(
            'text-4xl text-gradient md:text-7xl font-bold tracking-tight',
            'leading-tight cursor-default',
          )}
        >
          I'm Arthur Teixeira
          <p className='text-2xl md:text-5xl font-semibold'>
            Frontend Developer
          </p>
        </h1>

        <div className='flex justify-center items-center'>
          <MediaInfo />
        </div>

        <Link href='/about'>
          <Button
            variant={'default'}
            className={cn(
              'rounded-full px-10 cursor-pointer relative',
              'text-foreground',
              'bg-muted-foreground/15 hover:bg-muted-foreground/30',
            )}
          >
            <ShineBorder shineColor={'var(--muted-foreground)'} />
            Read more about me
          </Button>
        </Link>
      </div>
    </section>
  )
}
