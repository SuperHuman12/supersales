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
        <h2 className="mb-1 font-semibold leading-6 tracking-wide text-center text-orange-600 uppercase">
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
              Hey 👋 <br className="block sm:hidden" />
              I’m Vaibhav, the founder of supersalesagro.
            </p>
            <p className='my-2'>
              There are already a couple of website builders and knowledge base softwares out there to help you post and manage content. And while most of them are certainly doing a good job,
              <strong className="text-gray-900">are they actually making use of the best content management system in the world?</strong>
            </p>
            <p className='my-2'>
              I have been using <strong className="text-gray-900">Notion</strong> for a few years now. It's an amazing tool for storing and organizing all of my company's knowledge and writings. It should feel similiar to tools such as Intercom or Zendesk when it comes to support or webflow and framer if your building catalogs with 1000s of documents. <br />
              <br />
              Since I couldn't find the right solution – <strong className="text-gray-900">I built supersalesagro</strong>. Sure, you can publish your Notion page on its own but it might come across as unprofessional. The messy Notion url, distracting links pointing to
              Notion and the lack of customizability are just a few disadvantages...
            </p>
            <p className='my-2'><strong className="text-gray-900">supersalesagro is solving all of this. It is for businesses who need an easy way to create a reliable knowledge site powered by Notion. </strong></p>
            <br /> <br />
            <p className='my-2'>— Vaibhav, Founder</p>
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
                  I had a blog and use to struggle with markdown, recompiling, and overthinking. <b className="text-orange-600"> Now, I just write to @NotionHQ, with my website deployed on @supersalesagro showing always pin and proper</b>.
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Corey Haines</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-orange-600 hover:underline" href="#0">Conversion Factory</a>
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
                  “Getting to build and manage my company helpdesk using notion as a content provider is really slick, it has got <b className="text-orange-600">our writers focus on what is important.</b>“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Ayush</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-orange-600 hover:underline" href="#0">Indie Master Minds</a>
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
                  “ I've been trying to find a blogging solution that not only is <b className="text-orange-600">easy to work with but also is SEO ready</b>, supersalesagro is worth every penny.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Tom</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-orange-600 hover:underline" href="#0">TweetHunter</a>
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
                  “ Since migrating to supersalesagro, our recruitment marketing agency has bypassed the need to outsource web development, <b className="text-orange-600">attracted bigger clients, and introduced a new revenue stream </b>.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Alex MacCaw</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-orange-600 hover:underline" href="#0">ClearBit</a>
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
                  “ With limited resources and no in-house developers, <b className="text-orange-600">our team can easily manage our blog, helpdesk and company wiki faster</b>.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Adam Wathan</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-orange-600 hover:underline" href="#0">Tailwind</a>
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
                  I needed <b className="text-orange-600"> a place for quick documentation and AI support that can help people who come looking for support </b> , supersalesagro solved that for me.
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-orange-600 hover:underline" href="#0">Floosh</a>
                </div>
              </div>

            </div>



          </div>


          <BigCustomers />

        </div>
      </div>

      <div className="px-6 pt-16 mb-10 md:pt-20 max-w-6xl mx-auto px-4 sm:px-6 pb-12" id="contact_us">
        <h2 className="mb-1 font-semibold leading-6 tracking-wide text-center text-orange-600 uppercase">
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


          <div className="w-1/2 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4">
              <button className="bg-yellow-300 text-white font-bold py-2 px-4 rounded hover:bg-yellow-400 flex items-center">
                <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v5H9V5zm0 6h2v2H9v-2z" /></svg>
                Join Channel
              </button>
              <button className="bg-green-400 text-white font-bold py-2 px-4 rounded hover:bg-green-500 flex items-center">
                <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 20 20"><path d="M18 8h-2V5a2 2 0 0 0-2-2h-3V0H9v3H6a2 2 0 0 0-2 2v3H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4v-2H3v-5h14v5h-3v2h4a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM5 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3H5V5z" /></svg>
                Message on Whatsapp
              </button>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2M16 3.13a4 4 0 100 7.75 4 4 0 000-7.75zM8 3.13a4 4 0 100 7.75 4 4 0 000-7.75z" /></svg>
                <p className="text-gray-600">A-285, 1st and 2nd floor, New Subzi Mandi, Azadpur, Delhi-110034</p>
              </div>
              <div className="flex items-center mt-4">
                <svg className="w-6 h-6 mr-2 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m0 4v10m-6 4h12a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <p className="text-gray-600">+91-9899262264</p>
                <p className="text-gray-600 ml-4">+91-981645230</p>
              </div>
              <div className="flex items-center mt-4">
                <svg className="w-6 h-6 mr-2 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zM8 6h8m-8 4h8m-8 4h4" /></svg>
                <p className="text-gray-600">hello@reallygreatsite.com</p>
              </div>
            </div>
          </div>


        </div>
      </div>



    </section>



  )
}