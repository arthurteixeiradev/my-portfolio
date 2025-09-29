import { projectsList } from '@/data/projectsList'
import { ProjectCard } from './ProjectCard'

export const FeaturedProjects = () => {
  return (
    <div className='space-y-4'>
      <div className='flex justify-center items-center'>
        <h1 className='text-lg sm:text-2xl font-semibold text-gradient-br max-w-max'>
          Featured projects
        </h1>
      </div>

      <div className='flex flex-col lg:gap-20 md:gap-12 gap-8'>
        {projectsList.map(project => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}
