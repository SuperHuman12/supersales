import './css/style.css'
import Head from 'next/head';


import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'NotionBear vs {children}',
  description: 'Compare notionbear to {children}',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
          <>
            <Head>
            <script defer data-domain="notionbear.com" src="https://plausible.io/js/script.js"></script>
            </Head>
            {children}
          </>
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          
          <Banner />
        </div>
      </body>
    </html>
  )
}
