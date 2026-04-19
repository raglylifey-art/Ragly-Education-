import type { Metadata } from 'next'
import { Cherry_Bomb_One, Quicksand } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cherryBombOne = Cherry_Bomb_One({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-cherry-bomb',
});

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: 'Ragly Education Center | Fun & Learning',
  description: 'Where every child\'s story takes flight! Quality daycare services with themed rooms, CDA certified staff, and before/after school care.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={`${cherryBombOne.variable} ${quicksand.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
