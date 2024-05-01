
import { Urbanist } from 'next/font/google'
import { Ubuntu } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import { Jost } from 'next/font/google'


export const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
})

export const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
})

export const jb_mono = JetBrains_Mono({
  weight: ['400', '500', '700', '300'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jb_mono',
})

export const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jb_mono',
})