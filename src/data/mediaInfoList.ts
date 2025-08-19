import { MediaInfoType } from '@/types/MediaInfoType'
import { Github, Instagram, Linkedin } from 'lucide-react'

export const mediaInfoList: MediaInfoType[] = [
  {
    title: 'LinkedIn',
    description: "Arthur Teixeira's LinkedIn profile",
    link: 'https://www.linkedin.com/in/arthur-teixeira-451768215/',
    icon: Linkedin,
  },
  {
    title: 'GitHub',
    description: "Arthur Teixeira's GitHub repositories",
    link: 'https://github.com/arthurteixeiradev',
    icon: Github,
  },
  {
    title: 'Instagram',
    description: "Arthur Teixeira's Instagram profile",
    link: 'https://www.instagram.com/arthurtxeira/',
    icon: Instagram,
  },
]
