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

          {/* Page header */}
          <div className="max-w-xl mx-auto text-center pb-12 md:pb-20">

            <Image src={CompareHero} unoptimized alt="Logo" className="w-100 rounded p-8 mb-8" />


            <h1 className="h1 mb-4">Tired of <b>Webflow</b>? <br /> Say hi to NotionBear</h1>
            <p className="text-xl text-gray-600">Jumpstart your SaaS business with pre-built solutions from NotionBear and our community.</p>
            <button className="text-white bg-gray-900 rounded w-full p-2 mt-4">Get Started</button>
          </div>
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
          <div className='max-w-xl mx-auto text-center py-20 pb-12 md:pb-20'>
            <h1 className="h1 mb-4">Get so much more than task management with Notion.</h1>
            <p className="text-xl text-gray-600">Notion has everything you need, from task tracking to templates to documentation. Get comfortable — you won’t be leaving all that often.</p>


            <div className="max-w-xl mx-auto p-4">
              <div className="overflow-x-auto">
                <table className="table-auto w-full text-left text-sm bg-gray-200 rounded">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Features</th>
                      <th className="px-4 py-2">Jira</th>
                      <th className="px-4 py-2">Notion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Project management</td>
                      <td className="border px-4 py-2">✓</td>
                      <td className="border px-4 py-2">✓</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Issue tracking</td>
                      <td className="border px-4 py-2">✓</td>
                      <td className="border px-4 py-2">✓</td>
                    </tr>
                    {/* Add more features as needed */}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          <div className='max-w-xl mx-auto text-center py-20 pb-12 md:pb-20'>
            <h1 className="h1 mb-4">Notion is rated the best on G2</h1>
            <p className="text-xl text-gray-600">Jumpstart your SaaS business with pre-built solutions from NotionBear and our community.</p>


            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-4 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
              {/* 1st item */}
              <Link href="#0" className="relative flex flex-col items-center p-6 bg-white rounded h-full">
                <div>
                  <div className="items-start space-x-2 ">
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


          <section>
            <div className="flex space-y-6" >
              <div className="space-y-4">
                <div className="flex items-center space-x-4" >
                  <div className="space-y-2" >
                    <h1 className="text-2xl font-bold text-gray-800">RemoteJobs</h1>
                    <p className="text-md text-gray-600">By NotionBear</p>
                  </div>
                </div>
                <div className="text-gray-800" >
                  <p>Simple, powerful and flexible notion-powered job listing website site. Built on NotionBear.</p>
                </div>
                <div className="flex space-x-2 items-center" >
                  <a href="https://app.gitbook.com/integrations/arcade" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
                    <span>Duplicate</span>
                    {/* SVG or icon for arrow here if needed */}
                  </a>
                  <a href="https://app.gitbook.com/integrations/arcade" className="border text-dark font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
                    <span>View Demo</span>
                    {/* SVG or icon for arrow here if needed */}
                  </a>
                </div>
              </div>
              <div className="relative w-full" >
                <img src="../images/remotejobs.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>


            <div className="flex space-y-6" >
              <div className="space-y-4">
                <div className="flex items-center space-x-4" >
                  <div className="space-y-2" >
                    <h1 className="text-2xl font-bold text-gray-800">RemoteJobs</h1>
                    <p className="text-md text-gray-600">By NotionBear</p>
                  </div>
                </div>
                <div className="text-gray-800" >
                  <p>Simple, powerful and flexible notion-powered job listing website site. Built on NotionBear.</p>
                </div>
                <div className="flex space-x-2 items-center" >
                  <a href="https://app.gitbook.com/integrations/arcade" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
                    <span>Duplicate</span>
                    {/* SVG or icon for arrow here if needed */}
                  </a>
                  <a href="https://app.gitbook.com/integrations/arcade" className="border text-dark font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
                    <span>View Demo</span>
                    {/* SVG or icon for arrow here if needed */}
                  </a>
                </div>
              </div>
              <div className="relative w-full" >
                <img src="../images/remotejobs.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>


            <div className="flex space-y-6" >
              <div className="space-y-4">
                <div className="flex items-center space-x-4" >
                  <div className="space-y-2" >
                    <h1 className="text-2xl font-bold text-gray-800">RemoteJobs</h1>
                    <p className="text-md text-gray-600">By NotionBear</p>
                  </div>
                </div>
                <div className="text-gray-800" >
                  <p>Simple, powerful and flexible notion-powered job listing website site. Built on NotionBear.</p>
                </div>
                <div className="flex space-x-2 items-center" >
                  <a href="https://app.gitbook.com/integrations/arcade" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
                    <span>Duplicate</span>
                    {/* SVG or icon for arrow here if needed */}
                  </a>
                  <a href="https://app.gitbook.com/integrations/arcade" className="border text-dark font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
                    <span>View Demo</span>
                    {/* SVG or icon for arrow here if needed */}
                  </a>
                </div>
              </div>
              <div className="relative w-full" >
                <img src="../images/remotejobs.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>



          </section>



          <div className='max-w-xl mx-auto text-center py-20 pb-12 md:pb-20'>
            <h1 className="h1 mb-4">More work gets done with Notion.</h1>
            <p className="text-xl text-gray-600">Jumpstart your SaaS business with pre-built solutions from NotionBear and our community.</p>


            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-4 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
              {/* 1st item */}
              <Link href="#0" className="relative flex flex-col items-center p-6 bg-white rounded h-full">
                <div>
                  <div className="items-start space-x-2 ">
                    <h1 className="h1 mb-4 text-gray-500">86%</h1>
                    <span className="text-dark font-bold">of users save time with Notion</span>
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



          {/* Integration Details */}
          <div className="space-y-8 bg-gray-100 p-8">
            <a href="/templates"><h2> ← Back to Templates</h2></a>


          </div>
        </div>
      </div>
    </section>
  )
}