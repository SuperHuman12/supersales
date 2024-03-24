'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import helpdeskImage from '@/public/images/helpdesk.gif';
import catalogImage from '@/public/images/catalog.gif';

export default function Features() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative mt-4 mb-4 pb-4 bg-gray-200">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Designed for all types of knowledge.</h1>
            <p className="text-xl text-gray-600">From AI support to blog posts and technical documentation, NotionBear helps flexibly manage any website your company needs.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">

              {/* Tabs buttons */}
              <div className="grid gap-2 mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${tab !== 1 ? 'bg-white' : 'bg-gray-900 text-white'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 mr-3">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                  <div>
                    <div className="h4 font-bold leading-snug tracking-tight mb-1">Notion to <span className='bg-clip-text text-transparent text-orange-600'>Helpdesk</span></div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${tab !== 2 ? 'bg-white' : 'bg-gray-900 text-white'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 mr-3">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>

                  <div>
                    <div className="h4 font-bold leading-snug tracking-tight mb-1">Notion to <span className='bg-clip-text text-transparent text-orange-600'>Blog</span></div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${tab !== 3 ? 'bg-white' : 'bg-gray-900 text-white'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >

                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 mr-3">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>

                  <div>
                    <div className="h4 font-bold leading-snug tracking-tight mb-1">Notion to <span className='bg-clip-text text-transparent text-orange-600'>Catalog</span></div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${tab !== 4 ? 'bg-white' : 'bg-gray-900 text-white'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(4); }}
                >

                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 mr-3">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>

                  <div>
                    <div className="h4 font-bold leading-snug tracking-tight mb-1">Notion to  <span className='bg-clip-text text-transparent text-orange-600'>Company Wiki</span></div>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 grid gap-4 mb-8 md:mb-0 md:order-1 m-auto w-full">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded border border-2 border-gray-600 shadow-lg"
                        src={helpdeskImage}
                        unoptimized
                        width={500}
                        height={462} alt="Features bg" />
                        <div className="text-gray-600 flex gap-2 justify-center mt-4 text-xl">A simpler alternative to <img alt="Ana" src="./images/simpler-helpdesk2.png" className="rounded-full w-auto h-8" /> and <img alt="Ana" src="./images/simpler-helpdesk.png" className="rounded-full w-auto h-8" /></div>
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded border border-2 border-gray-600 shadow-lg" src="/images/blog.gif" unoptimized width={500} height="462" alt="Features bg" />
                      <div className="text-gray-600 flex gap-2 justify-center mt-4 text-xl">A simpler alternative to <img alt="Ana" src="./images/simpler-blog.png" className="rounded-full w-auto h-8" /> and <img alt="Ana" src="./images/simpler-blog2.png" className="rounded-full w-auto h-8" /></div>
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded border border-2 border-gray-600 shadow-lg"
                        src={catalogImage} width={500} height={462}
                        unoptimized
                        alt="Features bg" />
                      <div className="text-gray-600 flex gap-2 justify-center mt-4 text-xl">A simpler alternative to <img alt="Ana" src="./images/simpler-catalogue2.png" className="rounded-full w-auto h-8" /> and <img alt="Ana" src="./images/simpler-catalogue.png" className="rounded-full w-auto h-8" /></div>
                    </div>
                  </Transition>

                  <Transition
                    show={tab === 4}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded border border-2 border-gray-600 shadow-lg"
                        src={"/path/to/your/fourth-tab-image.gif"} // Update this path
                        width={500}
                        height={462}
                        unoptimized
                        alt="Fourth tab gif" />
                      <div className="text-gray-600 flex gap-2 justify-center mt-4 text-xl">A simpler alternative to <img alt="Ana" src="./images/webflow-icon.png" className="rounded-full w-auto h-8" /> and <img alt="Ana" src="./images/framer-icon.png" className="rounded-full w-auto h-8" /></div>
                    </div>
                  </Transition>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <br />
      <br />

    </section>
  )
}