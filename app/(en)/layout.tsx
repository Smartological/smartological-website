// npm imports
import clsx from 'clsx'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

// local imports
import '@/app/globals.css'
import { fontEnglish } from '@/lib/fonts'

// setting metadata
export const metadata: Metadata = {
  title: 'Smartological',
  description: 'Smartological will support your career growth!'
}

// English (default) site layout
export default function EnglishLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={clsx(fontEnglish.className, 'text-2xl')}>
        {children}
      </body>
    </html>
  )
}
