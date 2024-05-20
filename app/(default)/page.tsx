export const metadata = {
  title: 'Super Sales Agro : Best wholesaler in delhi fruit mandi, himachal fruit mandi, narkanda fruit mandi.',
  description: 'Super Sales Agro is the most trustworthy wholesaler in india which is founded by Sushil Kalra and sons Vaibhav Kalra and Manav Kalra, To partner with us : give us a call 9899262264, 9811645230, 9711269346 or email us at supersalesagro@hotmail.com',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Showcases from '@/components/showcase'
import Newsletter from '@/components/newsletter'
import TrustedBy from '../(auth)/compare-against/TrustedBy'
import BigCustomers from '../(auth)/compare-against/BigCustomers'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <FeaturesBlocks />
      <BigCustomers / >
      <Testimonials />
      <Newsletter />
    </>
  )
}
