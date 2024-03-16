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
            <h1 className="h1 mb-4">Earn <b className="text-orange-600">$957 per month</b>* promoting an award-winning landing page builder</h1>
            <p className="text-xl text-gray-600">For every paid client you refer to NotionBear, you will be paid 33% of the recurring commission. Forever.</p>
          </div>

          <div><a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Sign Up</a></div>




          {/* Items */}
          <div className="max-w-sm mx-auto items-start md:max-w-2xl lg:max-w-none">


          <div className="py-12 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-tight" style={{ lineHeight: '1.2em', fontSize: '1.2em' }}>How it works</h2>
          <div className="mt-4 text-gray-600">
            <p>You can start earning money in 30 minutes.</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ul className="space-y-8">
          <li className="flex flex-col items-center">
            <div className="relative">
              <img src="https://unicorn-cdn.b-cdn.net/f4c11501-66cc-4a9c-9694-8f231129469a/become-a-partner.png" alt="Become a partner" className="w-40 h-40"/>
              <div className="absolute -right-4 -bottom-4">
                {/* SVG icon */}
              </div>
            </div>
            <div className="mt-4 text-center">Join Unicorn Platform's affiliate program, grab your unique link and share it.</div>
          </li>
          <li className="flex flex-col items-center">
            <div className="relative">
              <img src="https://unicorn-cdn.b-cdn.net/ec5d5e0b-4494-44ba-98f0-33ad508a15f7/earn-money.png" alt="Earn money" className="w-40 h-40"/>
              <div className="absolute -right-4 -bottom-4">
                {/* SVG icon */}
              </div>
            </div>
            <div className="mt-4 text-center">Someone clicks your link and upgrades to a paid plan. You earn 33% of all their payments.</div>
          </li>
          <li className="flex flex-col items-center">
            <div className="relative">
              <img src="https://unicorn-cdn.b-cdn.net/5746b5d4-8e1e-43dd-af51-1a0ab1713d07/cash-out-in-one-click.png" alt="Cash out in one click" className="w-40 h-40"/>
            </div>
            <div className="mt-4 text-center">Check in anytime to view referrals. Cash out in one click (Bank, Paypal, Wise).</div>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <a href="https://partner.unicornplatform.com/" target="_self" className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Become our Partner</a>
      </div>
    </div>


          </div>




            {/* Integration Details */}

          <div className="space-y-8 bg-gray-100 p-8">

          <a href="/templates"><h2> ← Back to Templates</h2></a>

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
