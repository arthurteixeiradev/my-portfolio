import { FeaturedProjects } from './FeaturedProjects'
import { ProjectsTable } from './ProjectsTable'

export const Projects = () => {
  return (
    <section className='flex flex-col gap-16 mx-auto mt-16 sm:mt-40 max-w-5xl'>
      <div className='space-y-10'>
        <h1 className='text-[32px] sm:text-6xl text-gradient font-semibold'>
          Explore each project's journey and watch ideas turn into working
          applications.
        </h1>
        <p className='text-sm sm:text-base text-muted-foreground'>
          In this section, I showcase projects I’ve developed, reflecting my
          focus on modern, functional, and well-structured solutions. I use
          current technologies and best practices, prioritizing performance,
          accessibility, and responsive design. The projects demonstrate my
          technical skills and commitment to delivering digital products with
          excellent user experience and real value.
        </p>
      </div>

      <FeaturedProjects />
      <ProjectsTable />
    </section>
  )
}
