import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Toaster } from '@/components/ui/sonner'

const font = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Arthur Teixeira | Portfolio',
  description:
    'Portfolio of Arthur Teixeira, a frontend developer specialized in Next.js, React, and modern interfaces.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className='no-scrollbar'
    >
      <body className={`${font.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster
            position='top-right'
            richColors
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
