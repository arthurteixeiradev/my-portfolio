import { HoverCardInfo } from '@/components/ui/HoverCardInfo'

export const AboutMeSection = () => {
  return (
    <div className='space-y-4'>
      <p className='text-sm sm:text-base text-muted-foreground'>
        My name is Arthur Teixeira, a software engineer passionate about turning
        ideas into real, beautiful, and functional interfaces.
      </p>
      <p className='text-sm sm:text-base text-muted-foreground'>
        I'm currently studying Computer Science, which allows me to explore the
        tech world from a broader perspective while applying everything I learn
        directly into practice. I like to say I'm always in development mode —
        evolving my code, my projects, and the way I see technology.
      </p>
      <p className='text-sm sm:text-base text-muted-foreground'>
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
          icon='https://github.com/nextjs.png'
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
      <p className='text-sm sm:text-base text-muted-foreground'>
        I believe front-end development is not just about writing code — it's
        about creating experiences that connect people and ideas.
      </p>
    </div>
  )
}
