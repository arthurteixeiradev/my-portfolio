import { MediaInfo } from '@/components/media-info'
import { AboutMeSection } from './AboutMeSection'
import { AboutPageSection } from './AboutPageSection'
import { CareerSection } from './CareerSection'

export const About = () => {
  return (
    <section className='flex flex-col gap-10 mx-auto mt-16 sm:mt-40 max-w-5xl'>
      <div className='space-y-6'>
        <h1 className='text-[32px] sm:text-6xl text-gradient font-semibold'>
          I'm Arthur — a software engineer, computer science student, music
          enthusiast and investor.
        </h1>

        <MediaInfo />
      </div>

      <AboutMeSection />
      <CareerSection />
      <AboutPageSection />
    </section>
  )
}
