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
    <>
      <Head>
        <script defer data-domain="notionbear.com" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <div className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <Header />
        {children}
        <Banner />
      </div>
    </>
  )
}
