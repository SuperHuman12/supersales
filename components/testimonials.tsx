import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'
import familyteam from '@/public/images/familyteam.png'
import addresspart from '@/public/images/contactustogether.png'
import TrustedBy from '@/app/(auth)/compare-against/TrustedBy'
import BigCustomers from '@/app/(auth)/compare-against/BigCustomers'

export default function Testimonials() {
  return (
    <section className="relative" id="about_us">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="px-6 pt-16 mb-10 md:pt-20 max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="mb-1 font-semibold leading-6 tracking-wide text-center text-green-600 uppercase">
          About supersalesagro
        </h2>
        <h3 className="pb-8 text-2xl font-black text-center text-gray-900 sm:text-4xl tracking-snug sm:leading-15 md:leading-20">
          We not a business we are a family.
        </h3>
        <div className="grid items-start pt-6 mx-auto gap-8 md:flex md:items-start justify-center">
          <div className="float-right w-1/2 mb-6 ml-6 sm:float-none sm:mb-0 ">


            <Image src={familyteam} unoptimized alt="Logo" width="600"
              height="905"
              className="rounded-md"
              style={{ filter: 'grayscale(1)' }} />


          </div>
          <div className="prose-sm text-gray-600 sm:prose sm:w-2/3 prose-indigo">
  <p className='my-2'>
    SSA was founded as a small business in 1982 with produce distribution which later made them leading distributors in Delhi, Himachal, and Gujarat.
  </p>

  <strong className="text-gray-900">
  Today, our loyal customer base extends beyond national barriers to the U.K, Europe, Australia, Middle East and South East Asia.
  </strong>

  <p className='my-2'>
    Super Sales Agro is one of the pioneering entities in the agricultural sector, committed to delivering <strong className="text-gray-900">the best rates</strong> with solutions that revolutionize farming practices. Specializing in the distribution and management of agricultural produce, ensuring that every step from the farm to the consumer is handled with <strong className="text-gray-900">utmost precision and care</strong>.
  </p>

  <p className='my-2'>
    Founded with a vision to address the challenges in the agricultural industry, <strong className="text-gray-900">SSA DELHI</strong> has embarked on a journey to establish itself as a leader in the field. Over the years, we have expanded into various sectors including cold chain logistics, packaging, and advanced agricultural technology. Our use of <strong className="text-gray-900">state-of-the-art machinery</strong> and adherence to international standards has positioned us at the forefront of the global agricultural market.
  </p>
  <p className='my-2'>
    Our dedication to sustainable growth and prices ensures that we not only meet the demands of our farmers/suppliers but exceed the expectations of our buyers. At supersalesagro, we operate like a family, together cultivating a future where <strong className="text-gray-900">supply and quality go hand in hand</strong>.
  </p>
  <p className='my-2'>
    — Sushil Kalra
  </p>
</div>


        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6" id="testimonials">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Trusted by 250+ Traders & Businesses</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">We have happy vendors and suppliers all around India.</p>
          </div>

          {/* Items */}

          <TrustedBy />

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-8 aos-init aos-animate max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none" data-aos="zoom-y-out">
            <div className="relative flex flex-col items-center bg-white rounded shadow-xl h-full border">

              {/* Testimonial */}
              <div className="px-12 py-8 pt-12 mx-4 md:mx-0">
                <div className="mb-4">
                  <Image className="relative rounded-full" src="https://d33wubrfki0l68.cloudfront.net/36ee27ca00ba110131c925e463c42c885e523d10/de5f0/assets/images/influencers/corey.png" unoptimized width={50} height={50} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  Good service, trustworthy fruit sales. <b className="text-green-600">Sushil sir is the best</b>. I have been sending my fruits to them for 17 years. <b className="text-green-600">Their advice has helped me save a lot of money</b>, best agents I have done business with.
                </blockquote>



                <cite className="block font-bold text-lg not-italic mb-1">Aman</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-green-600 hover:underline" href="#0">Conversion Factory</a>
                </div>
              </div>

            </div>

            <div className="relative flex flex-col items-center bg-white rounded shadow-xl h-full border">

              {/* Testimonial */}
              <div className="px-12 py-8 pt-12 mx-4 md:mx-0">
                <div className="mb-4">
                  <Image className="relative rounded-full" src="https://d33wubrfki0l68.cloudfront.net/c6f92e1ae2769f7cc13d3ece99c16d591564bf4a/7114a/assets/images/influencers/ayush.png" unoptimized width={50} height={50} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  I send my harvested fruits and I was happy with the friendly and good service.
                </blockquote>

                <cite className="block font-bold text-lg not-italic mb-1">Ayush</cite>
                <div className="text-gray-600">
                  <span>Farmer</span> <a className="text-green-600 hover:underline" href="#0">GC Orchards</a>
                </div>
              </div>

            </div>

            <div className="relative flex flex-col items-center bg-white rounded shadow-xl h-full border">

              {/* Testimonial */}
              <div className="px-12 py-8 pt-12 mx-4 md:mx-0">
                <div className="mb-4">
                  <Image className="relative rounded-full" src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Ftom.png&optimizer=image" unoptimized width={50} height={50} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  I have been taking my fruits there since 10 years ago, they give me good price for it, thank you for your service. <b className="text-green-600">Let's hope our business keeps going up and growing.</b>
                </blockquote>

                <cite className="block font-bold text-lg not-italic mb-1">Tom</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-green-600 hover:underline" href="#0">TweetHunter</a>
                </div>
              </div>

            </div>

            <div className="relative flex flex-col items-center bg-white rounded shadow-xl h-full border">

              {/* Testimonial */}
              <div className="px-12 py-8 pt-12 mx-4 md:mx-0">
                <div className="mb-4">
                  <Image className="relative rounded-full" src="https://d33wubrfki0l68.cloudfront.net/75af78aa9bf70a1c124768d0b60e37a5cd1bd9b7/11cb5/assets/images/influencers/alex.png" unoptimized width={50} height={50} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  Super excellence service... <b className="text-green-600">they are really good at handling the fruit freshly and carefully. Have a good relation with them, so satisfied and happy with their service so far.</b>
                </blockquote>

                <cite className="block font-bold text-lg not-italic mb-1">Alex MacCaw</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-green-600 hover:underline" href="#0">ClearBit</a>
                </div>
              </div>

            </div>


            <div className="relative flex flex-col items-center bg-white rounded shadow-xl h-full border">

              {/* Testimonial */}
              <div className="px-12 py-8 pt-12 mx-4 md:mx-0">
                <div className="mb-4">
                  <Image className="relative rounded-full" src="https://twitter-avatars.s3.us-east-1.amazonaws.com/avatars/adamwathan" unoptimized width={50} height={50} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  Had a good relation with sir, working with him from last year. <b className="text-green-600">Good experience.</b>
                </blockquote>

                <cite className="block font-bold text-lg not-italic mb-1">Adam Wathan</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-green-600 hover:underline" href="#0">Tailwind</a>
                </div>
              </div>

            </div>


            <div className="relative flex flex-col items-center bg-white rounded shadow-xl h-full border">

              {/* Testimonial */}
              <div className="px-12 py-8 pt-12 mx-4 md:mx-0">
                <div className="mb-4">
                  <Image className="relative rounded-full" src={TestimonialImage} unoptimized width={50} height={50} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  I needed <b className="text-green-600"> a place for quick documentation and AI support that can help people who come looking for support </b> , supersalesagro solved that for me.
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-green-600 hover:underline" href="#0">Floosh</a>
                </div>
              </div>

            </div>



          </div>

<br/>
<br/>
          <BigCustomers />

        </div>
      </div>

      <div className="px-6 pt-16 mb-10 md:pt-20 max-w-6xl mx-auto px-4 sm:px-6 pb-12" id="contact_us">
        <h2 className="mb-1 font-semibold leading-6 tracking-wide text-center text-green-600 uppercase">
          About Super Sales Agro
        </h2>
        <h3 className="pb-8 text-2xl font-black text-center text-gray-900 sm:text-4xl tracking-snug sm:leading-15 md:leading-20">
          Ready to ship?  Come see how well we sell.
        </h3>
        <div className="grid items-start pt-6 mx-auto gap-8 md:flex md:items-start justify-center">

          <div className="float-right w-1/2 mb-6 ml-6 sm:float-none sm:mb-0 ">
            <Image src={addresspart} unoptimized alt="Logo" width="600"
              height="905"
              className="rounded-md" />
          </div>


          <div className="w-1/2 h-screen p-4 border mx-auto bg-white shadow-lg rounded-md overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4">
              <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-yellow-400 flex items-center">
                <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v5H9V5zm0 6h2v2H9v-2z" /></svg>
                Join Channel
              </button>
              <button className="bg-green-400 text-white font-bold py-2 px-4 rounded hover:bg-green-500 flex items-center">
                <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 20 20"><path d="M18 8h-2V5a2 2 0 0 0-2-2h-3V0H9v3H6a2 2 0 0 0-2 2v3H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4v-2H3v-5h14v5h-3v2h4a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM5 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3H5V5z" /></svg>
                Message on Whatsapp
              </button>
            </div>
            <div className="px-6 py-4 gap-4 grid">
            <a href="https://twitter.com/absurdfounder" aria-label="Twitter" className="mb-2">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                </svg>
                <p className="text-gray-600">A-285, 1st and 2nd floor, New Subzi Mandi, Azadpur, Delhi-110034</p>
              </a>
              <a href="https://twitter.com/absurdfounder" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
                <p className="text-gray-600">+91-9899262264</p>
                <p className="text-gray-600 ml-4">+91-9711269346</p>
              </a>
              <a href="https://twitter.com/absurdfounder" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                 <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                </svg>
                <p className="text-gray-600">supersalesagro@gmail.com</p>
              </a>
              <a href="https://twitter.com/absurdfounder" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                </svg>
                <p className="text-gray-600">Licence No.: B-4881,  A-1022 New Subzi Mandi, Azadpur, Delhi-110034</p>
              </a>              
            </div>
          </div>


        </div>
      </div>



    </section>



  )
}