import type { Metadata } from 'next'
import { Crimson_Pro } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/app/components/theme-provider'
import { cn } from '@/app/lib/utils'

const crimsonpro = Crimson_Pro({
  display: 'swap',
  fallback: ['sans-serif'],
  subsets: ['latin'],
  weight: ['300', '500']
})

export const metadata: Metadata = {
  title: 'Smartological',
  description:
    'Your one stop gateway for career development!!'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          crimsonpro.className,
          'text-3xl font-light'
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
