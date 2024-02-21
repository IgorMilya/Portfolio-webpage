import { ReactNode } from 'react'
import Head from 'next/head'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ihor Milevskyi',
  description: 'My own website portfolio',
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Head>
        <meta name="freelancehunt" content="95202bcf13b6d79" />
      </Head>
      <html lang="en">
      <body className={inter.className}>
      <div className="bg-background-black">
        {children}
      </div>
      </body>
      </html>
    </>
  )
}

export default RootLayout
