// npm imports
import type { Metadata } from 'next'
import { Crimson_Pro, DM_Mono, DM_Sans } from 'next/font/google'

// local imports
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import './globals.css'

// serif/default font
const fontSerif = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600']
})

// sans font
const fontSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400']
})

// monospace font
const fontMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400']
})

// metadata
export const metadata: Metadata = {
  title: 'Smartological',
  description: 'Smartological is a Career Support Agency.'
}

// root layout
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          fontSerif.variable,
          fontSans.variable,
          fontMono.variable,
          'antialiased bg-background min-h-screen'
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
