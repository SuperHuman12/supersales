import React, { useState, useEffect } from 'react';
import VideoThumb from '@/public/images/hero-image.png';
import ModalVideo from '@/components/modal-video';
import Image from 'next/image';

export default function Hero() {
  const words = ["Helpdesk", "Blog", "Company Wiki", "Documentation"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="absolute bottom-0 pointer-events-none z-1 h-screen w-screen" aria-hidden="true" style={{ width: '-webkit-fill-available', opacity: 0.1 }}>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Easily build your <span className="word-flip">{words[index]}</span> on <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Notion.</span>
            </h1>
          </div>
          {/* Additional JSX content */}
          <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                <b className="text-gray-900">Turn your Notion docs</b> quickly into a beautiful <b className="text-gray-900">SaaS, Apps, Directories, Blogs, Helpdesks</b> – no code required.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.notionbear.com">Get free lifetime plan</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="/template">View Examples</a>
                </div>
              </div>
            </div>
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />
        </div>
      </div>
    </section>
  );
}





