import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ihor Milevskyi',
  description: 'My own website portfolio',
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode; }>) => {
  return (
    <html lang="en">
    <body className={inter.className}>
    <div className="bg-blackPhon">
      {children}
    </div>
    </body>
    </html>
  )
}

export default RootLayout
