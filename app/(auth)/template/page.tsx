import Link from 'next/link';


export const metadata = {
  title: 'Reset Password - Simple',
  description: 'Page description',
}

export default function ResetPassword() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Find your Template</h1>
            <p className="text-xl text-gray-600">Jumpstart your SaaS business with pre-built solutions from NotionBear and our community.</p>
          </div>




          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <Link href="/template/remotejobs" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full border">
              <div>
                <div className="items-start space-x-2 ">
                  <img className="w-full rounded" src="../images/remotejobs.png" alt="" />
                  <span className="text-dark font-bold">Remote Jobs</span>
                </div>
                <p className="text-gray-600">Attract your audience by creating a blog.</p>
                <button className="text-white bg-gray-900 rounded w-full p-2 mt-4">Clone Template</button>
              </div>
            </Link>

            {/* 2nd item */}
            <Link href="/integration/slack" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full border">
            <div>
                <div className="items-start space-x-2 ">
                  <img className="w-full rounded" src="../images/remotejobs.png" alt="" />
                  <span className="text-dark font-bold">Remote Jobs</span>
                </div>
                <p className="text-gray-600">Attract your audience by creating a blog.</p>
                <button className="text-white bg-gray-900 rounded w-full p-2 mt-4">Clone Template</button>
              </div>
            </Link>

            {/* 3rd item */}
            <Link href="/integration/arcade" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full border">
            <div>
                <div className="items-start space-x-2 ">
                  <img className="w-full rounded" src="../images/remotejobs.png" alt="" />
                  <span className="text-dark font-bold">Remote Jobs</span>
                </div>
                <p className="text-gray-600">Attract your audience by creating a blog.</p>
                <button className="text-white bg-gray-900 rounded w-full p-2 mt-4">Clone Template</button>
              </div>
            </Link>

            {/* 4th item */}
            <Link href="/integration/discord" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full border">
            <div>
                <div className="items-start space-x-2 ">
                  <img className="w-full rounded" src="../images/remotejobs.png" alt="" />
                  <span className="text-dark font-bold">Remote Jobs</span>
                </div>
                <p className="text-gray-600">Attract your audience by creating a blog.</p>
                <button className="text-white bg-gray-900 rounded w-full p-2 mt-4">Clone Template</button>
              </div>
            </Link>

            {/* 5th item */}
            <Link href="/integration/fathom" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full border">
            <div>
                <div className="items-start space-x-2 ">
                  <img className="w-full rounded" src="../images/remotejobs.png" alt="" />
                  <span className="text-dark font-bold">Remote Jobs</span>
                </div>
                <p className="text-gray-600">Attract your audience by creating a blog.</p>
                <button className="text-white bg-gray-900 rounded w-full p-2 mt-4">Clone Template</button>
              </div>
            </Link>

            {/* 6th item */}
            <Link href="/integration/figma" className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full border">
            <div>
                <div className="items-start space-x-2 ">
                  <img className="w-full rounded" src="../images/remotejobs.png" alt="" />
                  <span className="text-dark font-bold">Remote Jobs</span>
                </div>
                <p className="text-gray-600">Attract your audience by creating a blog.</p>
                <button className="text-white bg-gray-900 rounded w-full p-2 mt-4">Clone Template</button>
              </div>
            </Link>

          </div>




            {/* Integration Details */}

          <div className="space-y-8 bg-gray-100 p-8">

          <a href="/templates"><small> ← Back to Templates</small></a>

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
                    <span>Install</span>
                    {/* SVG or icon for arrow here if needed */}
                  </a>
                </div>
              </div>
              <div className="relative w-full" >
                <img src="../images/remotejobs.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>


            {/* Integration Overview */}
            <div>
              <h3 className="h3 font-bold mt-4 mb-4">Overview</h3>
              <p>Arcade lets you create interactive product demos in minutes and turn all users into power users. Let users experience your product through interactive, guided demos. No more pausing and rewinding, users can progress at their own pace. This integration allow you to embed Arcade interactive demos into your GitBook documentation.</p>
              <h3 className="h3 font-bold mt-4 mb-4">How it works</h3>
              <p>Embedding an Arcade flow in your documentation is simple - just paste an Arcade flow link into the GitBook editor. The app will turn the link into an Arcade embed showing your recorded demo.</p>
              <h3 className="h3 font-bold mt-4 mb-4">Configure</h3>
              <p>To install on a single space navigate to integrations in sub-navigation. If you prefer to install the Arcade integration on multiple or all spaces, navigate to your organization settings and enable it from the integrations panel. This will give you access to the custom arcade block.</p>
            </div>

          </div>






        </div>
      </div>
    </section>
  )
}
