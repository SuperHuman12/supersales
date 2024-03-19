import Image from 'next/image'
import Link from 'next/link';
import CompareHero from '@/public/images/heroimage.png'



export const metadata = {
  title: 'Reset Password - Simple',
  description: 'Page description',
}
export default function ResetPassword() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-20 md:pb-20">

          {/* 🔴 Page header */}
          <div className="max-w-xl mx-auto text-center pb-12 md:pb-20">
            <Image src={CompareHero} unoptimized alt="Logo" className="w-100 rounded p-8 mb-8 dyanmictext" />

            <h1 className="h1 mb-4">Tired of <b className="dyanmictext">Webflow</b>? <br /> Say hi to NotionBear</h1>
            <p className="text-xl text-gray-600">Jumpstart your SaaS business with pre-built solutions from NotionBear and our community.</p>
            <button className="text-white bg-gray-900 rounded w-fit p-2 mt-4 px-4">Get Started</button>
          </div>

          {/* 🔴 Trusted by Teams */}

          <div>
            <p className="text-center">Trusted by teams</p>
            <div className="flex flex-row flex-wrap max-w-800 gap-4 mx-auto justify-center flex items-center p-6">
              <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                <img
                  alt="image"
                  loading="lazy"
                  width="144"
                  height="42.48"
                  decoding="async"
                  className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto"
                  src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/3d6d8b9e-51b7-4733-8611-12babc56d8c3/Strapi/w=441.59999999999997,quality=90"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                <img
                  alt="image"
                  loading="lazy"
                  width="200"
                  height="34"
                  decoding="async"
                  className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto"
                  src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/1ea0aa17-ae1d-48f6-a613-2b9aa5ad3db3/gumroad-min_(1)/w=736,quality=90"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                <img
                  alt="image"
                  loading="lazy"
                  width="120"
                  height="35.4"
                  decoding="async"
                  className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto"
                  src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/8f49a317-faff-4d7b-b378-a151042a1ce3/circle/w=294.4,quality=90"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                <img
                  alt="image"
                  loading="lazy"
                  width="144"
                  height="39.6"
                  decoding="async"
                  className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto"
                  src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d4e13333-1551-4114-b1a6-d2a7041c58a4/spline/w=441.59999999999997,quality=90"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                <img
                  alt="image"
                  loading="lazy"
                  width="192"
                  height="30.72"
                  decoding="async"
                  className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto"
                  src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/fe61ffd3-2569-4810-b59c-06ff0f58e32f/Clubhouse/w=441.59999999999997,quality=90"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                <img
                  alt="image"
                  loading="lazy"
                  width="144"
                  height="72.50704225352112"
                  decoding="async"
                  className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto"
                  src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4f2d2e91-850a-49df-b099-c685aba7c766/browser-company/w=441.59999999999997,quality=90"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 px-4">
                <img
                  alt="image"
                  loading="lazy"
                  width="240"
                  height="48"
                  decoding="async"
                  className="flex items-center justify-center py-2 col-span-2 md:col-auto m-auto"
                  src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cba078a4-ecf1-4336-97d9-bffabc5fb432/Harmony/w=736,quality=90"
                />
              </div>
            </div>
          </div>

          {/* 🔴 Comparision Table (Dynamic) */}


          <div className='max-w-xl mx-auto text-center py-20 pb-12 md:pb-20'>
            <h1 className="h1 mb-4">Get so much more than website builder with NotionBear.</h1>
            <p className="text-xl text-gray-600">NotionBear has everything you need, from task tracking to templates to documentation. Get comfortable — you won’t be leaving all that often.</p>


            <div className="max-w-xl mx-auto p-4">
              <div className="overflow-x-auto p-4 bg-gray-200 rounded">
                <table className="table-auto w-full text-left text-sm bg-gray-200 rounded">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Features</th>
                      <th className="px-4 py-2 text-center"><span className="dyanmictext">Webflow</span></th>
                      <th className="px-4 py-2 text-center">NotionBear</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Project management</td>
                      <td className="border px-4 py-2 text-center"><span className="dyanmictext">✓</span></td>
                      <td className="border px-4 py-2 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Issue tracking</td>
                      <td className="border px-4 py-2 text-center"><span className="dyanmictext">✓</span></td>
                      <td className="border px-4 py-2 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Unlimited automations</td>
                      <td className="border px-4 py-2 text-center"><span className="dyanmictext">✓</span></td>
                      <td className="border px-4 py-2 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">AI answers</td>
                      <td className="border px-4 py-2 text-center"><span className="dyanmictext">✓</span></td>
                      <td className="border px-4 py-2 text-center">✓</td>
                    </tr>                    
                    <tr>
                      <td className="border px-4 py-2">Databases</td>
                      <td className="border px-4 py-2 text-center"><span className="dyanmictext">✓</span></td>
                      <td className="border px-4 py-2 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Project management</td>
                      <td className="border px-4 py-2 text-center"><span className="dyanmictext">✓</span></td>
                      <td className="border px-4 py-2 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Docs</td>
                      <td className="border px-4 py-2 text-center"><span className="dyanmictext">✓</span></td>
                      <td className="border px-4 py-2 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Collaboration</td>
                      <td className="border px-4 py-2 text-center"><span className="dyanmictext">✓</span></td>
                      <td className="border px-4 py-2 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Mobile</td>
                      <td className="border px-4 py-2 text-center"><span className="dyanmictext">✓</span></td>
                      <td className="border px-4 py-2 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Enterprise admin</td>
                      <td className="border px-4 py-2 text-center"><span className="dyanmictext">✓</span></td>
                      <td className="border px-4 py-2 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Integrations</td>
                      <td className="border px-4 py-2 text-center"><span className="dyanmictext">✓</span></td>
                      <td className="border px-4 py-2 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Templates</td>
                      <td className="border px-4 py-2 text-center"><span className="dyanmictext">✓</span></td>
                      <td className="border px-4 py-2 text-center">✓</td>
                    </tr>                    
                  </tbody>
                </table>
              </div>
            </div>

          </div>


          {/* 🔴 Rating Crux G2 */}


          <div className='max-w-3xl mx-auto text-center py-20 pb-12 md:pb-20'>
            <h1 className="h1 mb-4">NotionBear is rated the best on G2</h1>
            <p className="text-xl text-gray-600">Jumpstart your SaaS business with pre-built solutions from NotionBear and our community.</p>


            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-4 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
              {/* 1st item */}
              <Link href="#0" className="relative flex flex-col items-center p-6 bg-white rounded h-full">
                <div>
                  <div >
                    <h1 className="h1 mb-4 text-gray-500">86%</h1>
                    <span className="text-dark font-bold">Ease of Use</span>
                  </div>
                </div>
              </Link>

              {/* 2nd item */}
              <Link href="#0" className="relative flex flex-col items-center p-6 bg-white rounded h-full">
                <div>
                  <div>
                    <h1 className="h1 mb-4 text-gray-500">90%</h1>
                    <span className="text-dark font-bold">Ease of Admin</span>
                  </div>
                </div>
              </Link>
              {/* 3rd item */}
              <Link href="#0" className="relative flex flex-col items-center p-6 bg-white rounded h-full">
                <div>
                  <div>
                    <h1 className="h1 mb-4 text-gray-500">91%</h1>
                    <span className="text-dark font-bold">Meets requirements</span>
                  </div>
                </div>
              </Link>
              {/* 4th item */}
              <Link href="#0" className="relative flex flex-col items-center p-6 bg-white rounded h-full">
                <div>
                  <div>
                    <h1 className="h1 mb-4 text-gray-500">86%</h1>
                    <span className="text-dark font-bold">Ease of Setup</span>
                  </div>
                </div>
              </Link>
            </div>

          </div>


          {/* 🔴 Features of NotionBear */}


          <section>

          <div className="grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-2 lg:items-center xl:gap-x-16 mb-12">
              <div className="max-w-sm">
                  <div className="flex items-center space-x-4">
                      <div className="space-y-2">
                          <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">Customize your task management workflow to suit your needs</h1>
                          <p className="mt-2 text-base font-normal text-gray-700 lg:text-lg">
                              Webflow is what you use if you only need to monitor task progress. To avoid paying for Webflow and be empowered to create something uniquely suited to you, try NotionBear for free.
                          </p>
                      </div>
                  </div>
                  <div className="mt-6 space-y-3 text-base font-normal text-gray-700 lg:text-lg">
                      <a href="https://app.gitbook.com/integrations/arcade" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank"><span>Sign Up</span></a>
                  </div>
              </div>
              <div className="relative w-full"><img src="../images/remotejobs.png" alt="" className="h-full w-full rounded-2xl border border-gray-200 object-cover shadow-xl" /></div>
          </div>



          <div className="grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-2 lg:items-center xl:gap-x-16 mb-12">
          <div className="relative w-full"><img src="../images/remotejobs.png" alt="" className="h-full w-full rounded-2xl border border-gray-200 object-cover shadow-xl" /></div>

              <div className="max-w-sm">
                  <div className="flex items-center space-x-4">
                      <div className="space-y-2">
                          <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">Customize your task management workflow to suit your needs</h1>
                          <p className="mt-2 text-base font-normal text-gray-700 lg:text-lg">
                              Webflow is what you use if you only need to monitor task progress. To avoid paying for Webflow and be empowered to create something uniquely suited to you, try NotionBear for free.
                          </p>
                      </div>
                  </div>
                  <div className="mt-6 space-y-3 text-base font-normal text-gray-700 lg:text-lg">
                      <a href="https://app.gitbook.com/integrations/arcade" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank"><span>Sign Up</span></a>
                  </div>
              </div>
          </div>



          <div className="grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-2 lg:items-center xl:gap-x-16 mb-12">
              <div className="max-w-sm">
                  <div className="flex items-center space-x-4">
                      <div className="space-y-2">
                          <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">Customize your task management workflow to suit your needs</h1>
                          <p className="mt-2 text-base font-normal text-gray-700 lg:text-lg">
                              Webflow is what you use if you only need to monitor task progress. To avoid paying for Webflow and be empowered to create something uniquely suited to you, try NotionBear for free.
                          </p>
                      </div>
                  </div>
                  <div className="mt-6 space-y-3 text-base font-normal text-gray-700 lg:text-lg">
                      <a href="https://app.gitbook.com/integrations/arcade" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank"><span>Sign Up</span></a>
                  </div>
              </div>
              <div className="relative w-full"><img src="../images/remotejobs.png" alt="" className="h-full w-full rounded-2xl border border-gray-200 object-cover shadow-xl" /></div>
          </div>


          <div className="grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-2 lg:items-center xl:gap-x-16 mb-12">

          <div className="relative w-full"><img src="../images/remotejobs.png" alt="" className="h-full w-full rounded-2xl border border-gray-200 object-cover shadow-xl" /></div>

              <div className="max-w-sm">
                  <div className="flex items-center space-x-4">
                      <div className="space-y-2">
                          <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">Customize your task management workflow to suit your needs</h1>
                          <p className="mt-2 text-base font-normal text-gray-700 lg:text-lg">
                              Webflow is what you use if you only need to monitor task progress. To avoid paying for Webflow and be empowered to create something uniquely suited to you, try NotionBear for free.
                          </p>
                      </div>
                  </div>
                  <div className="mt-6 space-y-3 text-base font-normal text-gray-700 lg:text-lg">
                      <a href="https://app.gitbook.com/integrations/arcade" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank"><span>Sign Up</span></a>
                  </div>
              </div>
          </div>





          </section>






          <div className='max-w-xl mx-auto text-center py-20 pb-12 md:pb-20'>
            <h1 className="h1 mb-4">Pricing, side-by-side</h1>
            <p className="text-xl text-gray-600">You can also try Notion for free. See all pricing plans.</p>
          </div>

          <div className="relative mx-auto mt-8 max-w-3xl flex gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white w-full">
                  <div className="p-6 md:px-10 md:py-9">
                      <div className="flex items-center justify-center"><h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Webflow</h1></div>

                      <p className="mt-2 mb-8 space-y-2 text-xl font-normal text-gray-600 text-center"><span className="block">Difficult to manage. </span></p>

                      <div className="mt-2 flex items-end justify-center mb-8">
                          <p className="text-xl font-bold text-gray-500">$</p>
                          <p className="text-7xl font-bold text-gray-900">39</p>
                          <p className="text-lg font-bold text-gray-600">/ month</p>
                      </div>

                      <div className="">
                          <ul className="space-y-3 text-base font-medium text-gray-900 md:col-span-6 xl:pl-2">
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Unlimited Blog Sites
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Unlimited Custom Domains
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Advanced Analytics
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Excellent SEO
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Collect Emails
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Free SSL
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Comments
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Localization
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Programmatic SEO
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white w-full">
                  <div className="p-6 md:px-10 md:py-9">
                      <div className="flex items-center justify-center"><h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">NotionBear</h1></div>

                      <p className="mt-2 mb-8 space-y-2 text-xl font-normal text-gray-600 text-center"><span className="block">Use Notion CMS </span></p>

                      <div className="mt-2 flex items-end justify-center mb-8">
                          <p className="text-xl font-bold text-gray-500">$</p>
                          <p className="text-7xl font-bold text-gray-900">39</p>
                          <p className="text-lg font-bold text-gray-600">/ month</p>
                      </div>

                      <div className="">
                          <ul className="space-y-3 text-base font-medium text-gray-900 md:col-span-6 xl:pl-2">
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Unlimited Blog Sites
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Unlimited Custom Domains
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Advanced Analytics
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Excellent SEO
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Collect Emails
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Free SSL
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Comments
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Localization
                              </li>
                              <li className="flex items-center">
                                  <svg className="mr-2.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  Programmatic SEO
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

          



          {/* 🔴  Crux of what our testimonials*/}


          <section>

            <div className='max-w-3xl mx-auto text-center py-20 pb-12 md:pb-20'>
              <h1 className="h1 mb-4">More work gets done with NotionBear.</h1>
              <p className="text-xl text-gray-600">Jumpstart your SaaS business with pre-built solutions from NotionBear and our community.</p>


              {/* Items */}
              <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-4 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
                {/* 1st item */}
                <Link href="#0" className="relative flex flex-col items-center p-6 bg-white rounded h-full">
                  <div>
                    <div >
                      <h1 className="h1 mb-4 text-gray-500">86%</h1>
                      <span className="text-dark font-bold">of users save time with NotionBear</span>
                    </div>
                  </div>
                </Link>

                {/* 2nd item */}
                <Link href="#0" className="relative flex flex-col items-center p-6 bg-white rounded h-full">
                  <div>
                    <div>
                      <h1 className="h1 mb-4 text-gray-500">90%</h1>
                      <span className="text-dark font-bold">of users replaced 2+ tools</span>
                    </div>
                  </div>
                </Link>
                {/* 3rd item */}
                <Link href="#0" className="relative flex flex-col items-center p-6 bg-white rounded h-full">
                  <div>
                    <div>
                      <h1 className="h1 mb-4 text-gray-500">91%</h1>
                      <span className="text-dark font-bold">faster project completion</span>
                    </div>
                  </div>
                </Link>
                {/* 4th item */}
                <Link href="#0" className="relative flex flex-col items-center p-6 bg-white rounded h-full">
                  <div>
                    <div>
                      <h1 className="h1 mb-4 text-gray-500">86%</h1>
                      <span className="text-dark font-bold">less emails sent and received</span>
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </section>


          {/* 🔴 Our Business Templates */}


          <section className='max-w-3xl m-auto text-center space-y-4'>

            <h1 className="h1 mb-4">Get Ready-To-Execute businesses , not just templates.</h1>
            <p className="text-xl text-gray-600 mb-8">NotionBear has thousands of templates for different uses from project management to meeting agendas, team wikis, and CRMs. Using these templates makes getting setup and up-to-speed easier than ever.</p>

            <button className="text-dark border rounded w-fit p-2 mt-4 px-4 bg-gray-200">View all Templates</button>


            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none mt-9">
              {/* 1st item */}
              <Link href="/template/remotejobs" className="relative flex flex-col text-start items-center p-6 bg-white rounded shadow-xl h-full border">
                <div>
                  <div >
                    <img className="w-full rounded" src="../images/remotejobs.png" alt="" />
                    <span className="text-dark font-bold">Remote Jobs</span>
                  </div>
                  <p className="text-gray-600">Attract your audience by creating a blog.</p>
                  <button className="text-white bg-gray-900 rounded w-fit p-2 mt-4 px-4">Clone Template</button>
                </div>
              </Link>

              {/* 2nd item */}
              <Link href="/integration/slack" className="relative flex flex-col text-start items-center p-6 bg-white rounded shadow-xl h-full border">
                <div>
                  <div >
                    <img className="w-full rounded" src="../images/remotejobs.png" alt="" />
                    <span className="text-dark font-bold">Remote Jobs</span>
                  </div>
                  <p className="text-gray-600">Attract your audience by creating a blog.</p>
                  <button className="text-white bg-gray-900 rounded w-fit p-2 mt-4 px-4">Clone Template</button>
                </div>
              </Link>


              {/* 3rd item */}
              <Link href="/integration/arcade" className="relative flex flex-col text-start items-center p-6 bg-white rounded shadow-xl h-full border">
                <div>
                  <div >
                    <img className="w-full rounded" src="../images/remotejobs.png" alt="" />
                    <span className="text-dark font-bold">Remote Jobs</span>
                  </div>
                  <p className="text-gray-600">Attract your audience by creating a blog.</p>
                  <button className="text-white bg-gray-900 rounded w-fit p-2 mt-4 px-4">Clone Template</button>
                </div>
              </Link>


              {/* 4th item */}
              <Link href="/integration/discord" className="relative flex flex-col text-start items-center p-6 bg-white rounded shadow-xl h-full border">
                <div>
                  <div >
                    <img className="w-full rounded" src="../images/remotejobs.png" alt="" />
                    <span className="text-dark font-bold">Remote Jobs</span>
                  </div>
                  <p className="text-gray-600">Attract your audience by creating a blog.</p>
                  <button className="text-white bg-gray-900 rounded w-fit p-2 mt-4 px-4">Clone Template</button>
                </div>
              </Link>

            </div>

          </section>




        </div>
      </div>
    </section>
  )
}