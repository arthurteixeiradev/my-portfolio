'use client'

import { MediaInfo } from '@/components/media-info'

export const About = () => {
  return (
    <section className='flex flex-col gap-24'>
      <div className='flex flex-col gap-12 mx-auto mt-20 max-w-[1345px] w-full'>
        <div className='space-y-2'>
          <h1 className='text-foreground text-6xl font-bold max-w-[1000px]'>
            I'm Arthur Teixeira — a frontend developer focused on crafting
            well-designed digital experiences with attention to detail,
            aesthetics, and usability.
          </h1>
        </div>

        <MediaInfo />

        <div className='space-y-4'>
          <p className='text-base text-muted-foreground'>
            I'm Arthur Teixeira, a front-end developer passionate about turning
            ideas into real, beautiful, and functional interfaces.
          </p>
          <p className='text-base text-muted-foreground'>
            I'm currently studying Computer Science, which allows me to explore
            the tech world from a broader perspective while applying everything
            I learn directly into practice. I like to say I'm always in
            development mode — evolving my code, my projects, and the way I see
            technology.
          </p>
          <p className='text-base text-muted-foreground'>
            I work mainly with React, Next.js, and Tailwind CSS, building
            modern, responsive, and well-structured interfaces. I'm especially
            interested in design systems, user experience, and best practices
            that make code cleaner, scalable, and easier to maintain.
          </p>
          <p className='text-base text-muted-foreground'>
            I believe front-end development is not just about writing code —
            it's about creating experiences that connect people and ideas.
          </p>
        </div>
      </div>
    </section>
  )
}
