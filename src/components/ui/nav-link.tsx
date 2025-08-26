import Link from 'next/link'
import { ReactNode } from 'react'

type NavLinkProps = {
  href: string
  children: ReactNode
  ariaLabel?: string
  onClick?: () => void
}

export const NavLink = ({
  href,
  children,
  ariaLabel,
  onClick,
}: NavLinkProps) => {
  const isExternal = href.startsWith('http')
  if (isExternal) {
    return (
      <Link
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={ariaLabel}
        className='w-full h-full flex items-center gap-2 p-3'
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className='w-full h-full flex items-center gap-2 p-3'
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
