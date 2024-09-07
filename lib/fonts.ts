import { Crimson_Pro, Noto_Serif_Bengali } from 'next/font/google'

export const fontEnglish = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '600']
})

export const fontBengali = Noto_Serif_Bengali({
  subsets: ['bengali'],
  weight: ['400', '600']
})
