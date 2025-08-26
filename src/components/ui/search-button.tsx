import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { goTo, suggestions } from '@/data/navItems'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { Button } from './button'
import { NavLink } from './nav-link'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

type Props = {
  disableTooltip?: boolean
}

export const SearchButton = ({ disableTooltip }: Props) => {
  const [open, setOpen] = useState(false)

  const button = (
    <Button
      variant='outline'
      size='icon'
      className='w-8 h-8 shadow-md'
    >
      <Search />
      <span className='sr-only'>Search</span>
    </Button>
  )

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      {disableTooltip ? (
        <DialogTrigger asChild>{button}</DialogTrigger>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>{button}</DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Open search</p>
          </TooltipContent>
        </Tooltip>
      )}
      <DialogContent
        showCloseButton={false}
        className='h-[450px]'
      >
        <DialogHeader className='sr-only'>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>
            Enter a keyword to quickly find what you are looking for.
          </DialogDescription>
        </DialogHeader>
        <Command className='rounded-sm'>
          <CommandInput placeholder='Type to search...' />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading='Suggestions'>
              {suggestions.map(item => (
                <CommandItem key={item.title}>
                  <NavLink
                    href={item.link}
                    ariaLabel={`Go to ${item.title}`}
                    onClick={() => setOpen(false)}
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
                    onClick={() => setOpen(false)}
                  >
                    <item.icon className='mr-2 hover:text-foreground' />
                    <span>{item.title}</span>
                  </NavLink>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
