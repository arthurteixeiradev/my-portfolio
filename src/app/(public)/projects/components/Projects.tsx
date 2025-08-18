import { ProjectsTable } from './ProjectsTable'

export const Projects = () => {
  return (
    <section className='flex flex-col gap-10 mx-auto mt-40 max-w-5xl'>
      <div className='flex flex-col gap-16'>
        <div className='space-y-10'>
          <h1 className='text-6xl text-gradient'>
            Explore each project's journey and watch ideas turn into working
            applications.
          </h1>
          <p className='text-base text-muted-foreground'>
            Explore the projects below to see how I merge thoughtful design with
            robust engineering to create experiences that are not only memorable
            but highly efficient for the user.
          </p>
        </div>

        <div className='flex items-center flex-col gap-4'>
          <h1 className='text-3xl text-gradient-br max-w-max'>Projects</h1>

          <ProjectsTable />
        </div>
      </div>
    </section>
  )
}
