// npm imports
import clsx from 'clsx'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

// local imports
import '@/app/globals.css'
import { fontBengali } from '@/lib/fonts'

// setting metadata
export const metadata: Metadata = {
  title: 'স্মার্টোলজিক্যাল',
  description: 'স্মার্টোলজিক্যাল আপনার ক্যারিয়ার গ্রোথের জন্য সহায়তা করবে!'
}

// English (default) site layout
export default function BengaliLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='bn'>
      <body className={clsx(fontBengali.className, 'text-2xl')}>
        {children}
      </body>
    </html>
  )
}
