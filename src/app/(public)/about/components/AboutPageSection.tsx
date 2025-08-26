import { HoverCardInfo } from '@/components/ui/HoverCardInfo'

export const AboutPageSection = () => {
  return (
    <div className='flex flex-col items-start gap-4 mt-6'>
      <h1 className='text-lg sm:text-2xl text-gradient-br font-semibold'>
        About this website
      </h1>
      <p className='text-sm sm:text-base text-muted-foreground'>
        This website was developed using{' '}
        <HoverCardInfo
          title='Next.js'
          description='The React Framework – created and maintained by @vercel.'
          icon='https://github.com/nextjs.png'
          link='https://nextjs.org/'
        />{' '}
        as the main framework, styled with{' '}
        <HoverCardInfo
          title='Tailwind CSS'
          description='A utility-first CSS framework for rapid UI development, created and maintained by Tailwind Labs.'
          icon='https://github.com/tailwindcss.png'
          link='https://tailwindcss.com/'
        />{' '}
        and enhanced with components from{' '}
        <HoverCardInfo
          title='Shadcn/UI'
          description='A set of beautifully designed components that you can customize, extend, and build on.'
          icon='https://github.com/shadcn-ui.png'
          link='https://ui.shadcn.com/'
        />
        . Form handling is powered by{' '}
        <HoverCardInfo
          title='React Hook Form'
          description='Performant, flexible and extensible forms with easy-to-use validation.'
          icon='https://github.com/react-hook-form.png'
          link='https://react-hook-form.com/'
        />{' '}
        with validation provided by{' '}
        <HoverCardInfo
          title='Zod'
          description='TypeScript-first schema validation with static type inference, created by @colinhacks'
          icon='https://zod.dev/_next/image?url=%2Flogo%2Flogo-glow.png&w=640&q=100'
          link='https://zod.dev/'
        />
        , and message delivery is handled through{' '}
        <HoverCardInfo
          title='EmailJS'
          description='Send Email Directly From Your Code - No server code needed. Focus on things that matter!'
          icon='https://github.com/emailjs-com.png'
          link='https://www.emailjs.com/'
        />
        .
      </p>
      <p className='text-sm sm:text-base text-muted-foreground'>
        Beyond being a showcase of my projects and professional journey, this
        space also works as a personal laboratory — a place where I explore,
        test, and refine new tools, technologies, and practices across web
        development.
      </p>
    </div>
  )
}
