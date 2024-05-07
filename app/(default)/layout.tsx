'use client'

import { useEffect } from 'react'
import Head from 'next/head'  // Import Head component

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'
import Newsletter from '@/components/newsletter'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <Head>
      <script defer data-domain="notionbear.com" src="https://plausible.io/js/script.js"></script>
      </Head>
      <main className="grow">
        {children}
      </main>
      <Footer />
    </>
  )
}
