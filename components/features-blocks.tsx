
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ConnectingTogether from '@/public/images/connectingtogether.png'
import TrustedBy from '@/app/(auth)/compare-against/TrustedBy';
import BigCustomers from '@/app/(auth)/compare-against/BigCustomers';

export default function FeaturesBlocks() {
  return (
    <section className="relative" id="products">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div>
          <section className="mt-2">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pt-12 ">
              <h2 className="h2 mb-4">We deal in various produce.</h2>
              <p className="text-xl text-gray-600">Super Sales Agro is a powerful website builder for startups, solo-entrepreneurs and hackers. Try it for free.</p>
            </div>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex aos-init aos-animate mt-6 justify-center py-12" data-aos="zoom-y-out" data-aos-delay="300">
              <div><a className="btn text-dark bg-green-600 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0" href="#contact_us">Get in Touch</a></div>
            </div>

            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              {/* 1st item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                <img alt="image" loading="lazy" decoding="async" className="mb-2 p-8" src="/images/appleicon.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Apples</h4>
                </div>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                <img alt="image" loading="lazy" decoding="async" className="mb-2 p-8" src="/images/mangoicon.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Mangoes</h4>
                </div>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                <img alt="image" loading="lazy" decoding="async" className="mb-2 p-8" src="/images/kinnowicon.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kinnow</h4>
                </div>
              </div>

              {/* 4th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                <img alt="image" loading="lazy" decoding="async" className="mb-2 p-8" src="/images/pearicon.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Pears</h4>
                </div>
              </div>

              {/* 5th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                <img alt="image" loading="lazy" decoding="async" className="mb-2 p-8" src="/images/pomogranateicon.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Pomegranate</h4>
                </div>
              </div>

              {/* 6th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                <img alt="image" loading="lazy" decoding="async" className="mb-2 p-8" src="/images/guavaicon.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Guavas</h4>
                </div>
              </div>


            </div>
          </section>

          <br />
          <br />

          <TrustedBy />



          <section className="py-12 mt-8 mb-8 grid">

            <div className="md:w-1/2 sm:w-full">
              <div className="text-start mt-6 w-full p-4">
                <h2 className="h2 font-bold mb-4">We Bridge the gap between <span className='text-green-600'>FARMERS</span> and <span className='text-green-600'>BUYERS</span></h2>
                <p className="text-gray-700">
                  Your work stays in a place you control and love, while supersalesagro handles the technical parts of publishing it to your website. This means you can focus what’s actually important to you: creating content and building
                  your brand without worrying about configurations, plugins, downtime, performance, or security.
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300">
                  <div><a className="btn text-dark bg-green-600 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0" href="#contact_us">Get in Touch</a></div>
                </div>
              </div>
            </div>

            <div className="flex justify-start mt-6 md:w-full sm:w-full rounded">
              <div >

                <Image src={ConnectingTogether} unoptimized alt="Logo" className="w-full rounded" />


              </div>
            </div>
          </section>


<BigCustomers />


        </div>
      </div>

      <br />
      <br />



    </section>




  )
}