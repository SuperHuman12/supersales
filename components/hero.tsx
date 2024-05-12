'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BackgroundCover from '@/public/images/backgroundcover.png'


export default function Hero() {
  const words = ["Apples", "Oranges", "Mangoes", "Pears", "Guava"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section>
      <div className="absolute bottom-0 pointer-events-none z-1 h-screen w-screen" aria-hidden="true" style={{ width: '-webkit-fill-available', opacity: 0.5 }}>


        <Image src={BackgroundCover} unoptimized alt="Logo" className='w-full h-full' />



        
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate" data-aos="zoom-y-out">
            Fruit Wholesalers with over 42 years of experience in <span className=" -translate-y-full slideUp h-full w-full bg-clip-text text-transparent text-orange-600">{words[index]}</span>
            </h1>
          </div>
          {/* Additional JSX content */}
          <div className="max-w-3xl mx-auto text-center">

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              <div>
                <a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.supersalesagro.com">Get in Touch</a>
              </div>
              <div>
                <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="/template">Why Traders Love Us</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-x-2 space-y-1 text-sm opacity-60 sm:flex-row sm:space-y-0 mt-6"><div className="flex items-center justify-start"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" className="mr-2 text-orange-600"><path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="currentColor"></path></svg>
            Free 7-day trial
          </div> <div className="flex items-center justify-start"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" className="mr-2 text-orange-600"><path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="currentColor"></path></svg>
              No credit card required
            </div> <div className="flex items-center justify-start"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" className="mr-2 text-orange-600"><path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="currentColor"></path></svg>
              24/7 support
            </div></div>

          <div className="hidden sm:flex justify-center items-center mt-8 sm:mb-0 mb-3 sm:mt-12 sm:w-[60%] mx-auto">
            <div className="flex-shrink-0 sm:block hidden"><img src="https://www.helpkit.so/imgs/testimonials/adjust_square_portrait.jpg" alt="Author's image" className="w-16 h-16 object-cover text-gray-300 bg-white rounded-full" /></div>
            <div className="ml-5">
              <div className="text-left">
                <p className="-mt-1 opacity-70">
                  <span className="mr-1 text-xl italic opacity-60 font-medium">"</span>With supersalesagro we literally went
                  <span className="bg-[#ffecd7] text-[##ce6a01] font-medium px-0.5 py-0.5">from 0 to fully functional knowledge-base in 1 hour.</span> I highly recommend it!<span className="ml-0 font-serif text-xl italic opacity-50">"</span>
                </p>
                <div className="mt-2 text-sm opacity-100 text-gray-400 inline-flex justify-start items-center">
                  <div className="inline-flex mr-2 space-x-0.5 justify-start text-yellow-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                  </div>

                  Dan Kelly, CEO at Adjust Square
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}





