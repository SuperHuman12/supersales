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
        <ul className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
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




        </div>
      </div>
    </section>
  )
}
