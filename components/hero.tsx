'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BackgroundCover from '@/public/images/backgroundcover.png';

export default function Hero() {
  const words = ["🍎 Apples", "🍊 Oranges", "🥭 Mangoes", "🍐 Pears"];
  console.log(words);
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image src={BackgroundCover} unoptimized alt="Background Cover" layout="fill" objectFit="cover" className="w-full h-full" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col pt-20">
        <div className="pt-20 pb-12 md:pt-28 md:pb-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tighter tracking-tighter mb-4">
              Fruit Wholesalers with over 42 years of experience in <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">{words[index]}</span>
            </h1>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a className="btn text-white bg-green-600 hover:bg-green-700 w-full sm:w-auto" href="#contact_us">Get in Touch</a>
              <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto" href="#testimonials">Why Traders Love Us</a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-6 text-sm opacity-80">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" className="mr-2 text-green-600"><path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="currentColor"></path></svg>
              42 years experience
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" className="mr-2 text-green-600"><path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="currentColor"></path></svg>
              Same Day Payment
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" className="mr-2 text-green-600"><path d="M9.1.3L4 5.4l-2-2c-.3-.3-.7-.4-1-.3S0 3.5 0 4c0 .4 0 .8.3 1l2.8 2.8c.2.2.5.3.8.3s.6-.1.8-.3l6-5.9c.3-.2.4-.6.3-1a1 1 0 0 0-.8-.8c-.4 0-.8 0-1 .3z" fill="currentColor"></path></svg>
              Family Owned
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
