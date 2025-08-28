'use client'

import { HoverCardInfo } from '@/components/ui/HoverCardInfo'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { projectsList } from '@/data/projectsList'
import { useIsMobile } from '@/hooks/use-mobile'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function ProjectsTable() {
  const isMobile = useIsMobile()

  return (
    <div className='flex items-center flex-col gap-4'>
      <h1 className='text-lg sm:text-2xl text-gradient-br max-w-max font-semibold'>
        Projects
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Year</TableHead>
            <TableHead>Project</TableHead>
            {!isMobile && (
              <>
                <TableHead>Made at</TableHead>
                <TableHead>Link</TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {projectsList.map(project => (
            <TableRow key={project.name}>
              <TableCell className='text-muted-foreground'>
                {project.year}
              </TableCell>

              <TableCell>
                {isMobile ? (
                  <Link
                    href={project.link}
                    aria-label={`Go to ${project.name} site`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2'
                  >
                    {project.name} <ExternalLink size={14} />
                  </Link>
                ) : (
                  project.name
                )}
              </TableCell>

              {!isMobile && (
                <>
                  <TableCell className='text-muted-foreground'>
                    <Link
                      href={project.madeAtLink}
                      aria-label={`Go to ${project.madeAt} site`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.madeAt}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <HoverCardInfo
                      title={project.name}
                      placeholder='Open project ->'
                      description={project.description}
                      icon={project.icon}
                      link={project.link}
                      table
                    />
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
