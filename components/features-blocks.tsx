export default function FeaturesBlocks() {
  return (
    <section className="relative">
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
              <div><a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.supersalesagro.com">Get in Touch</a></div>
              <div><a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">View all features</a></div>
            </div>

            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              {/* 1st item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                <img alt="image" loading="lazy" decoding="async" className="mb-2" src="/images/appleicon.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Apples</h4>
                  <p className="text-gray-600 text-center">Build a website or make changes with prompts.</p>
                </div>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                <img alt="image" loading="lazy" decoding="async" className="mb-2" src="/images/mangoicon.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Mangoes</h4>
                  <p className="text-gray-600 text-center">Accept payments with secure Stripe</p>
                </div>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                <img alt="image" loading="lazy" decoding="async" className="mb-2" src="/images/kinnowicon.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kinnow</h4>
                  <p className="text-gray-600 text-center">No need to code to build a powerful website.</p>
                </div>
              </div>

              {/* 4th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                <img alt="image" loading="lazy" decoding="async" className="mb-2" src="/images/pearicon.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Pears</h4>
                  <p className="text-gray-600 text-center">No need to be a designer.</p>
                </div>
              </div>

              {/* 5th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                <img alt="image" loading="lazy" decoding="async" className="mb-2" src="/images/pomogranateicon.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Pomegranate</h4>
                  <p className="text-gray-600 text-center">If you need more, you can add custom code.</p>
                </div>
              </div>

              {/* 6th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                <img alt="image" loading="lazy" decoding="async" className="mb-2" src="/images/guavaicon.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Guavas</h4>
                  <p className="text-gray-600 text-center">Know how your website performs.</p>
                </div>
              </div>


            </div>
          </section>

          <section className="py-12 mt-8 mb-8 md:flex sm:grid">

            <div className="md:w-1/2 sm:w-full">
              <div className="text-start mt-6 w-full p-4">
                <h2 className="h2 font-bold mb-4">Your content lives in Notion</h2>
                <p className="text-gray-700">
                  Your work stays in a place you control and love, while supersalesagro handles the technical parts of publishing it to your website. This means you can focus what’s actually important to you: creating content and building
                  your brand without worrying about configurations, plugins, downtime, performance, or security.
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300">
                  <div><a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.supersalesagro.com">Get in Touch</a></div>
                </div>
              </div>
            </div>

            <div className="flex justify-start mt-6 md:w-1/2 sm:w-full rounded">
              <div >
                <img
                  alt="image"
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded"
                  src="https://dazzling-cat.netlify.app/write%20on%20notion.png"
                />
              </div>
            </div>
          </section>



        </div>
      </div>

      <br />
      <br />
    </section>

  )
}