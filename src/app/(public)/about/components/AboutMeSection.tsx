import { HoverCardInfo } from '@/components/ui/HoverCardInfo'

export const AboutMeSection = () => {
  return (
    <div className='space-y-4'>
      <p className='text-sm sm:text-base text-muted-foreground'>
        I’m Arthur Teixeira, a fullstack developer drawn to the work behind a
        seamless experience: clear interfaces, reliable integrations, and
        systems that hold up in production.
      </p>
      <p className='text-sm sm:text-base text-muted-foreground'>
        My experience spans marketplace and ERP integrations, production
        incident investigation, and delivering features from development through
        deployment. I’ve led frontend development for two web platforms and
        built a reusable component library that reduced UI development time by
        approximately 30%.
      </p>
      <p className='text-sm sm:text-base text-muted-foreground'>
        My frontend toolkit combines{' '}
        <HoverCardInfo
          title='React'
          description='A JavaScript library for building user interfaces, created and maintained by Meta.'
          icon='https://github.com/react.png'
          link='https://react.dev/'
        />
        ,{' '}
        <HoverCardInfo
          title='Next.js'
          description='The React Framework – created and maintained by @vercel.'
          icon='https://github.com/nextjs.png'
          link='https://nextjs.org/'
        />
        ,{' '}
        <HoverCardInfo
          title='TypeScript'
          description='A programming language that extends JavaScript with static types, helping catch errors before code runs.'
          icon='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
          link='https://www.typescriptlang.org/'
        />
        , and{' '}
        <HoverCardInfo
          title='Tailwind CSS'
          description='A utility-first CSS framework for rapid UI development, created and maintained by Tailwind Labs.'
          icon='https://github.com/tailwindcss.png'
          link='https://tailwindcss.com/'
        />
        . On the backend, I work with{' '}
        <HoverCardInfo
          title='Node.js'
          description='A JavaScript runtime environment, created and maintained by Node.js Foundation.'
          icon='https://github.com/nodejs.png'
          link='https://nodejs.org/en/'
        />
        ,{' '}
        <HoverCardInfo
          title='Express'
          description='Fast, unopinionated, minimalist web framework for Node.js, created by @expressjs.'
          icon='https://github.com/expressjs.png'
          link='https://expressjs.com/'
        />
        , and{' '}
        <HoverCardInfo
          title='C#'
          description='A modern, type-safe programming language for building applications on the .NET platform.'
          icon='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
          link='https://dotnet.microsoft.com/en-us/languages/csharp'
        />
        , using{' '}
        <HoverCardInfo
          title='Redis'
          description='An in-memory data store used for caching, session management, and fast data access.'
          icon='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg'
          link='https://redis.io/'
        />{' '}
        for caching and{' '}
        <HoverCardInfo
          title='RabbitMQ'
          description='A messaging broker that enables reliable, asynchronous communication between applications and services.'
          icon='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg'
          link='https://www.rabbitmq.com/'
        />{' '}
        for asynchronous messaging. I also develop real-time features with{' '}
        <HoverCardInfo
          title='WebSockets'
          description='A communication protocol that keeps a connection open for bidirectional data exchange between clients and servers.'
          icon='https://developer.mozilla.org/favicon.svg'
          link='https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API'
        />{' '}
        and{' '}
        <HoverCardInfo
          title='Socket.IO'
          description='A library for real-time, bidirectional communication, with automatic reconnection and transport fallback.'
          icon='https://github.com/socketio.png'
          link='https://socket.io/'
        />
        .
      </p>
      <p className='text-sm sm:text-base text-muted-foreground'>
        Alongside my work, I’m pursuing a Computer Science degree at ULBRA. My
        personal projects include Docheck, a fleet management platform spanning
        web and mobile. Across both professional and personal projects, I care
        about clear architecture, maintainable code, and making complex tasks
        feel straightforward for the people using what I build.
      </p>
    </div>
  )
}
