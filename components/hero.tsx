import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image' // Import the Image component from Next.js

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Notion to <span className="bg-clip-text text-transparent text-orange">website.</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              <b>AI Website builder</b> that helps to quickly create websites without design or development skills for <b>SaaS, Apps, Directories, Blogs, Helpdesks</b>.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Get free lifetime plan</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">View Demos</a>
                </div>
              </div>

              <div className="mx-auto mt-4 mb-1 max-w-xs md:max-w-lg flex flex-col items-center justify-center space-y-4 lg:mt-12">
                  <div className="flex justify-center">
                  <img alt="Ana" src="https://d33wubrfki0l68.cloudfront.net/679ef4276d68b8417b1e0e9410ba8b0d81fa2145/1ba87/assets/images/influencers/ana.png" className="rounded-full ring-2 ring-gray-100" style={{width: '2.5rem', height: '2.5rem', marginLeft: '-0.65rem', position: 'relative'}} />
    <img alt="Anthony" src="https://d33wubrfki0l68.cloudfront.net/154f3c5cfb6472e3c3271b06e99d94fc5508bcc5/16c0e/assets/images/influencers/anthony.png" className="rounded-full ring-2 ring-gray-100" style={{width: '2.5rem', height: '2.5rem', marginLeft: '-0.65rem', position: 'relative'}} />
    <img alt="Ayush" src="https://d33wubrfki0l68.cloudfront.net/c6f92e1ae2769f7cc13d3ece99c16d591564bf4a/7114a/assets/images/influencers/ayush.png" className="rounded-full ring-2 ring-gray-100" style={{width: '2.5rem', height: '2.5rem', marginLeft: '-0.65rem', position: 'relative'}} />
    <img alt="Damon" src="https://d33wubrfki0l68.cloudfront.net/bab5fdfe723835e12924bb22730b06ede3dd6192/8e44b/assets/images/influencers/damon.png" className="rounded-full ring-2 ring-gray-100" style={{width: '2.5rem', height: '2.5rem', marginLeft: '-0.65rem', position: 'relative'}} />
    <img alt="Roberto" src="https://d33wubrfki0l68.cloudfront.net/fa50407454a0301048b246364e635b2a6c58045c/b2181/assets/images/influencers/roberto.png" className="rounded-full ring-2 ring-gray-100" style={{width: '2.5rem', height: '2.5rem', marginLeft: '-0.65rem', position: 'relative'}} />
    <img alt="Alex MacCaw" src="https://d33wubrfki0l68.cloudfront.net/75af78aa9bf70a1c124768d0b60e37a5cd1bd9b7/11cb5/assets/images/influencers/alex.png" className="rounded-full ring-2 ring-gray-100" style={{width: '2.5rem', height: '2.5rem', marginLeft: '-0.65rem', position: 'relative'}} />
    <img alt="Tibo" src="https://d33wubrfki0l68.cloudfront.net/a55f9800ba70015a07c09f87c30a24f4fcfdbb83/4c349/assets/images/influencers/tibo.png" className="rounded-full ring-2 ring-gray-100" style={{width: '2.5rem', height: '2.5rem', marginLeft: '-0.65rem', position: 'relative'}} />
    <img alt="Corey Haines" src="https://d33wubrfki0l68.cloudfront.net/36ee27ca00ba110131c925e463c42c885e523d10/de5f0/assets/images/influencers/corey.png" className="rounded-full ring-2 ring-gray-100" style={{width: '2.5rem', height: '2.5rem', marginLeft: '-0.65rem', position: 'relative'}} />
                  </div>

                  <p className="mt-2 pb-2 text-center text-base text-gray-900 md:mt-0 md:ml-4">
                      <span className="block">Loved by <strong className="font-semibold mx-2">100+ of users, and brands</strong></span>
                  </p>
              </div>



            </div>
          </div>

          {/* Hero image */}
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
  )
}