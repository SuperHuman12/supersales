export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Showcases from '@/components/showcase'
import Newsletter from '@/components/newsletter'


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Features />
      <Showcases />
      <Testimonials />
      <Newsletter />
    </>
  )
}
