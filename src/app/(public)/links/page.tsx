import { Button } from '@/components/ui/button'
import { Github, Globe, Instagram, Linkedin } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Links | Arthur Teixeira',
  description: 'Explore useful links and resources curated by Arthur Teixeira.',
}

export default function LinksPage() {
  const links = [
    {
      title: 'My website',
      url: 'https://arthurteixeira.vercel.app/',
      icon: Globe,
      description: 'see my page',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/arthurteixeiradev',
      icon: Github,
      description: 'See my repositories',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/arthurtxeira/',
      icon: Instagram,
      description: 'Follow me on Instagram',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/arthur-teixeira-451768215/',
      icon: Linkedin,
      description: 'Connect with me on LinkedIn',
    },
  ]

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='w-full max-w-md mx-auto'>
        <div className='text-center mb-8'>
          <div className='relative w-24 h-24 mx-auto mb-4'>
            <img
              src='https://media.licdn.com/dms/image/v2/D4D03AQGydnr_aRUsJA/profile-displayphoto-shrink_400_400/B4DZPfW280G0Ag-/0/1734619132943?e=1758758400&v=beta&t=kkvicQ5P2565ZWJJS2TNuMkg6McPwQaRyactbwqd3YM'
              alt='Arthur Teixeira'
              width={96}
              height={96}
              className='rounded-full object-cover border-2 border-muted-foreground shadow-lg'
            />
          </div>

          <h1 className='text-2xl font-bold mb-2'>Arthur Teixeira</h1>

          <p className='text-muted-foreground text-sm'>Developer</p>
        </div>

        <div className='space-y-4'>
          {links.map(link => (
            <Button
              key={link.title}
              asChild
              variant='outline'
              size='lg'
              className='w-full h-16 rounded-sm'
            >
              <Link
                href={link.url}
                aria-label={`Go to ${link.title}`}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-start gap-4 px-6'
              >
                <link.icon className='w-5 h-5 text-foreground' />
                <div className='flex flex-col items-start'>
                  <span className='font-semibold text-foreground'>
                    {link.title}
                  </span>
                  <span className='text-xs text-muted-foreground'>
                    {link.description}
                  </span>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
