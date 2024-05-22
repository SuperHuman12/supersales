'use client'


import React, { useState, useEffect } from 'react'; // Import React hooks
import Image from 'next/image'; // Import the Image component from Next.js
import notionfooterImage from '@/public/images/notionfooter.png';

export default function Newsletter() {
  const words = ["Apples", "Oranges", "Mangoes", "Pears", "Guava"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" 
          >

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" >

             

            <Image alt="Logo" 
              width={500} 
              className="block" 
              src={notionfooterImage} />



            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Looking for the best rates for your  <span className=" -translate-y-full slideUp h-full w-full bg-clip-text text-transparent text-green-600">{words[index]}</span> ?</h3>
                <p className="text-xl text-gray-600 mb-4"><p className="text-xl text-gray-600 mb-4">We help you grow your business by using technologies and best practices.</p></p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <a className="btn text-white bg-green-600 hover:bg-green-700 shadow" href="#contact_us">Get in Touch</a>
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}