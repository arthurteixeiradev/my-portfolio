import { NavItem } from '@/types/NavItemType'
import {
  Folder,
  House,
  Layers,
  Link,
  Mail,
  MessageCircle,
  User,
} from 'lucide-react'

export const suggestions: NavItem[] = [
  { title: 'My links', icon: Link, link: '/links' },
  { title: 'Send an e-mail', icon: Mail, link: '/contact' },
  {
    title: 'Send a message',
    icon: MessageCircle,
    link: 'https://wa.me/5563984550806',
  },
]

export const goTo: NavItem[] = [
  { title: 'Home', icon: House, link: '/' },
  { title: 'About', icon: User, link: '/about' },
  { title: 'Projects', icon: Folder, link: '/projects' },
  { title: 'Stack', icon: Layers, link: '/stack' },
  { title: 'Contact', icon: Mail, link: '/contact' },
]
