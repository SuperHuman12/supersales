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
      <div className="absolute bottom-0 pointer-events-none z-1 h-screen w-screen" aria-hidden="true" style={{
        width: '-webkit-fill-available'
      }}>


        <Image src={BackgroundCover} unoptimized alt="Logo" className='w-full h-full' />




      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-screen">
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
                <a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="#contact_us">Get in Touch</a>
              </div>
              <div>
                <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#testimonials">Why Traders Love Us</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-x-2 space-y-1 text-sm opacity-60 sm:flex-row sm:space-y-0 mt-6"><div className="flex items-center justify-start"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" className="mr-2 text-orange-600"><path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="currentColor"></path></svg>
            42 years experience
          </div> <div className="flex items-center justify-start"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" className="mr-2 text-orange-600"><path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="currentColor"></path></svg>
              Same Day Payment
            </div> <div className="flex items-center justify-start"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" className="mr-2 text-orange-600"><path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="currentColor"></path></svg>
              Family Owned
            </div></div>




        </div>
      </div>
    </section>
  );
}





