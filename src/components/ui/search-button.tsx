import { goTo, suggestions } from '@/data/navItems'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { Button } from './button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './command'
import { NavLink } from './nav-link'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

type Props = {
  disableTooltip?: boolean
  onSelectOption?: () => void
}

export const SearchButton = ({ disableTooltip, onSelectOption }: Props) => {
  const [open, setOpen] = useState(false)

  const button = (
    <Button
      variant='outline'
      size='icon'
      className='w-8 h-8 shadow-md'
      onClick={() => setOpen(true)}
    >
      <Search />
      <span className='sr-only'>Search</span>
    </Button>
  )

  return (
    <>
      {disableTooltip ? (
        button
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>{button}</TooltipTrigger>
          <TooltipContent>
            <p>Open search</p>
          </TooltipContent>
        </Tooltip>
      )}

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title='Search'
        description='Enter a keyword to quickly find what you are looking for.'
        showCloseButton={false}
      >
        <CommandInput placeholder='Type to search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            {suggestions.map(item => (
              <CommandItem key={item.title}>
                <NavLink
                  href={item.link}
                  ariaLabel={`Go to ${item.title}`}
                  onClick={() => {
                    setOpen(false)
                    onSelectOption?.()
                  }}
                >
                  <item.icon className='mr-2 hover:text-foreground' />
                  <span>{item.title}</span>
                </NavLink>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Go to'>
            {goTo.map(item => (
              <CommandItem key={item.title}>
                <NavLink
                  href={item.link}
                  ariaLabel={`Go to ${item.title}`}
                  onClick={() => {
                    setOpen(false)
                    onSelectOption?.()
                  }}
                >
                  <item.icon className='mr-2 hover:text-foreground' />
                  <span>{item.title}</span>
                </NavLink>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
