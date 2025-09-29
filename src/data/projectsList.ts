import blomboLogo from '@/assets/images/blomboLogo.png'
import siteIgreja from '@/assets/images/siteIgreja.png'
import { ProjectsListType } from '@/types/ProjectsListType'

export const projectsList: ProjectsListType[] = [
  {
    year: '2025',
    name: 'Blombô',
    description:
      'Founded in 2017, Blombô is an art gallery specializing in the auction market and online art sales. Based in São Paulo, the gallery stands out for hosting auctions of art, wine, luxury accessories, and designer furniture.',
    madeAt: 'VIFE Solutions',
    madeAtLink: 'https://vifesolutions.com/',
    image: blomboLogo.src,
    icon: 'https://github.com/blombotech.png',
    link: 'https://blombo.com/',
    technologies: ['React', 'Next.js', 'NodeJS', 'AWS'],
  },
  {
    year: '2024',
    name: 'Batista Ágape Church',
    description:
      'Batista Ágape Church. We are a community of Christians whose greatest purpose is to worship and serve Jesus Christ.',
    madeAt: 'Arthur Teixeira',
    madeAtLink: 'https://arthurteixeira.vercel.app/',
    image: siteIgreja.src,
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsPOdj86Bf05jUzeaU1Q59Z-cVKDN-05vIQ&s',
    link: 'https://igreja-batista-agape.vercel.app/',
    technologies: ['React', 'Next.js', 'shadcn/ui', 'Hygraph'],
  },
]
