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

export function ProjectsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Year</TableHead>
          <TableHead>Project</TableHead>
          <TableHead>Made at</TableHead>
          <TableHead>Link</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projectsList.map(project => (
          <TableRow key={project.name}>
            <TableCell className='text-muted-foreground'>
              {project.year}
            </TableCell>
            <TableCell>{project.name}</TableCell>
            <TableCell className='text-muted-foreground'>
              {project.madeAt}
            </TableCell>
            <TableCell>
              <HoverCardInfo
                title={project.name}
                placeholder='Open project ->'
                description={project.description}
                icon={project.icon}
                link={project.link}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
