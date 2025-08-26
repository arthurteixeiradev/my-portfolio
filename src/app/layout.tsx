import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from '@/components/ui/sonner'

const font = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

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
