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
          Explore the projects below to see how I merge thoughtful design with
          robust engineering to create experiences that are not only memorable
          but highly efficient for the user.
        </p>
      </div>

      <ProjectsTable />
    </section>
  )
}
