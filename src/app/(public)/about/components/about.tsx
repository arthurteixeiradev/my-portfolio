'use client'

import { HoverCardInfo } from '@/components/ui/HoverCardInfo'
import { MediaInfo } from '@/components/media-info'

export const About = () => {
  return (
    <section className='flex flex-col gap-16 mx-auto mt-40 max-w-[1345px]'>
      <div className='space-y-10'>
        <h1 className='text-6xl text-gradient font-normal max-w-[1000px]'>
          I'm Arthur Teixeira — a frontend developer focused on crafting
          well-designed digital experiences with attention to detail,
          aesthetics, and usability.
        </h1>

        <MediaInfo />
      </div>

      <div className='space-y-4'>
        <p className='text-base text-muted-foreground'>
          I'm Arthur Teixeira, a front-end developer passionate about turning
          ideas into real, beautiful, and functional interfaces.
        </p>
        <p className='text-base text-muted-foreground'>
          I'm currently studying Computer Science, which allows me to explore
          the tech world from a broader perspective while applying everything I
          learn directly into practice. I like to say I'm always in development
          mode — evolving my code, my projects, and the way I see technology.
        </p>
        <p className='text-base text-muted-foreground'>
          I work mainly with{' '}
          <HoverCardInfo
            title='React'
            description='A JavaScript library for building user interfaces, created and maintained by Meta.'
            icon='https://github.com/react.png'
            link='https://react.dev/'
          />
          ,{' '}
          <HoverCardInfo
            title='Next.js'
            description='The React Framework – created and maintained by @vercel.'
            icon='https://github.com/vercel.png'
            link='https://nextjs.org/'
          />
          , and{' '}
          <HoverCardInfo
            title='Tailwind CSS'
            description='A utility-first CSS framework for rapid UI development, created and maintained by Tailwind Labs.'
            icon='https://github.com/tailwindcss.png'
            link='https://tailwindcss.com/'
          />
          , building modern, responsive, and well-structured interfaces. I'm
          especially interested in design systems, user experience, and best
          practices that make code cleaner, scalable, and easier to maintain.
        </p>
        <p className='text-base text-muted-foreground'>
          I believe front-end development is not just about writing code — it's
          about creating experiences that connect people and ideas.
        </p>
      </div>

      <div className='flex flex-col gap-6'>
        <p className='text-2xl font-normal text-gradient-br self-start'>
          Career
        </p>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <p className='text-base font-semibold'>
              VIFE Solutions (Dec 2024 - Current)
            </p>
            <p className='text-muted-foreground italic'>
              Frontend Development Intern
            </p>
            <p>
              <HoverCardInfo
                placeholder='vifesolutions.com ->'
                title='VIFE Solutions'
                description='A software development company that provides services to companies and individuals.'
                icon='https://github.com/vifesolutions.png'
                link='https://vifesolutions.com/'
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
