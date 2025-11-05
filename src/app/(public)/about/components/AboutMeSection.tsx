import { HoverCardInfo } from '@/components/ui/HoverCardInfo'

export const AboutMeSection = () => {
  return (
    <div className='space-y-4'>
      <p className='text-sm sm:text-base text-muted-foreground'>
        My name is Arthur Teixeira, and I’m a software engineer passionate about
        turning ideas into real, beautiful, and functional applications.
      </p>
      <p className='text-sm sm:text-base text-muted-foreground'>
        I’m currently pursuing a degree in Computer Science, which allows me to
        explore the tech world from a broader perspective while applying
        everything I learn directly in practice. I like to say I’m always in
        development mode — evolving my code, my projects, and the way I see
        technology.
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
        , and with{' '}
        <HoverCardInfo
          title='Node.js'
          description='A JavaScript runtime environment, created and maintained by Node.js Foundation.'
          icon='https://github.com/nodejs.png'
          link='https://nodejs.org/en/'
        />{' '}
        and{' '}
        <HoverCardInfo
          title='Express'
          description='Fast, unopinionated, minimalist web framework for Node.js, created by @expressjs.'
          icon='https://github.com/expressjs.png'
          link='https://expressjs.com/'
        />{' '}
        on the back end, building complete, modern, and well-structured
        applications. I’m especially interested in design systems, software
        architecture, user experience, and best practices that make code
        cleaner, scalable, and easier to maintain.
      </p>
      <p className='text-sm sm:text-base text-muted-foreground'>
        I believe software development goes far beyond writing code — it’s about
        creating experiences and solutions that connect people, ideas, and
        technology.
      </p>
    </div>
  )
}
