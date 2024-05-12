'use client'

import { useEffect } from 'react'
import PlausibleProvider from 'next-plausible'

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
    <PlausibleProvider domain="supersalesagro.com">
      <main className="grow">
        {children}
      </main>
      <Footer />
    </PlausibleProvider>
  )
}
