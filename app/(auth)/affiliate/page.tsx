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
          <div className="max-w-3xl mx-auto text-center pb-4">
            <h1 className="h1 mb-4">Earn <b className="text-orange-600">$957 per month</b>* promoting an award-winning landing page builder</h1>
            <p className="text-xl text-gray-600">For every paid client you refer to NotionBear, you will be paid 33% of the recurring commission. Forever.</p>
          </div>

          <div className="m-auto text-center"><a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Sign Up</a></div>




          {/* Items */}
          <div className="max-w-sm mx-auto items-start md:max-w-2xl lg:max-w-none mt-20">


            <div className="py-12">
              <div className="max-w-md mx-auto">
                <div className="text-center">
                  <h2 className="h2 font-bold leading-tight">How it works</h2>
                  <div className="mt-4 text-gray-600">
                    <p>You can start earning money in 30 minutes.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <ul className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                  <li className="flex flex-col items-center">
                    <div className="relative">
                      <img src="https://unicorn-cdn.b-cdn.net/f4c11501-66cc-4a9c-9694-8f231129469a/become-a-partner.png" alt="Become a partner" className="w-40 h-40" />
                      <div className="absolute -right-4 -bottom-4">
                        {/* SVG icon */}
                      </div>
                    </div>
                    <div className="mt-4 text-center">Join Unicorn Platform's affiliate program, grab your unique link and share it.</div>
                  </li>
                  <li className="flex flex-col items-center">
                    <div className="relative">
                      <img src="https://unicorn-cdn.b-cdn.net/ec5d5e0b-4494-44ba-98f0-33ad508a15f7/earn-money.png" alt="Earn money" className="w-40 h-40" />
                      <div className="absolute -right-4 -bottom-4">
                        {/* SVG icon */}
                      </div>
                    </div>
                    <div className="mt-4 text-center">Someone clicks your link and upgrades to a paid plan. You earn 33% of all their payments.</div>
                  </li>
                  <li className="flex flex-col items-center">
                    <div className="relative">
                      <img src="https://unicorn-cdn.b-cdn.net/5746b5d4-8e1e-43dd-af51-1a0ab1713d07/cash-out-in-one-click.png" alt="Cash out in one click" className="w-40 h-40" />
                    </div>
                    <div className="mt-4 text-center">Check in anytime to view referrals. Cash out in one click (Bank, Paypal, Wise).</div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center">
                <a href="https://partner.unicornplatform.com/" target="_self" className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0">Become our Partner</a>
              </div>
            </div>


          </div>




          <div className="container mx-auto py-8">
            <div className="flex gap-4 justify-center space-x-4 relative items-center p-6 bg-white rounded shadow-xl text-center h-full border w-fit m-auto">
              {/* Affiliate Detail Item */}
              <a href="." className="flex flex-col items-center space-y-2 px-8 border p-6 rounded">
                {/* SVG icon */}
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#E9F1FF" className="fill-bg-light" cx="20" cy="20" r="20"></circle><g fill-rule="nonzero"><path d="M23.723 18.901a.287.287 0 0 0-.26-.166h-3.398l3.354-5.295a.287.287 0 0 0-.242-.44h-4.589a.287.287 0 0 0-.256.159l-4.302 8.603a.286.286 0 0 0 .257.414h2.949l-3.214 7.632a.287.287 0 0 0 .484.296l9.177-10.897a.287.287 0 0 0 .04-.306z" fill="#4D61FC" className="fill-main"></path><path d="M26.973 18.901a.287.287 0 0 0-.26-.166h-3.398l3.354-5.295a.287.287 0 0 0-.242-.44h-4.589a.287.287 0 0 0-.256.159l-4.302 8.603a.286.286 0 0 0 .257.414h2.949l-3.214 7.632a.287.287 0 0 0 .484.296l9.177-10.897a.287.287 0 0 0 .04-.306z" stroke="#E9F1FF" className="stroke-light fill-secondary" fill="#00396B"></path></g></g></svg>
                <h2 className="h2 font-semibold">33%</h2>
                <span className="text-base text-gray-600">your commission</span>
              </a>

              {/* Affiliate Detail Item */}
              <a href="." className="flex flex-col items-center space-y-2 px-8 border p-6 rounded">
                {/* SVG icon */}
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#E9F1FF" className="fill-bg-light" cx="20" cy="20" r="20"></circle><path fill="#4D61FC" className="fill-main" d="M13 13h6v6h-6zM21 13h6v6h-6zM13 21h6v6h-6z"></path><path fill="#00396B" className="fill-secondary" d="M21 21h6v6h-6z"></path></g></svg>
                <h2 className="h2 font-semibold">60 days</h2>
                <span className="text-base text-gray-600">cookie period</span>
              </a>

              {/* Affiliate Detail Item */}
              <a href="." className="flex flex-col items-center space-y-2 px-8 border p-6 rounded">
                {/* SVG icon */}
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#E9F1FF" className="fill-bg-light" cx="20" cy="20" r="20"></circle><path fill="#4D61FC" className="fill-main" d="M20 13l7 8.235H13z"></path><path stroke="#E9F1FF" className="stroke-light fill-secondary" fill="#00396B" d="M20 17.588L28 27H12z"></path></g></svg>
                <h2 className="h2 font-semibold">10%</h2>
                <span className="text-base text-gray-600">2nd tier commission</span>
              </a>
            </div>
          </div>





          <div className="flex mx-auto px-4 py-8">
            <div className="w-full lg:w-1/2">
              <h2 className="h2 font-bold text-accent">An essential collection of banners</h2>
              <p>We prepared designs for you to download and use right away — no extra work. Missing a format? Just ask and we will make unique design files just for you. Free of charge.</p>
            </div>
            <img src="https://unicorn-cdn.b-cdn.net/3b687e30-49bc-449c-a14b-e0ba8bee1962/banners-free-pack.png" alt="Banners free pack" className="w-full lg:w-1/2" />
          </div>


          <div className="flex mx-auto px-4 py-8">
          <img src="https://unicorn-cdn.b-cdn.net/1236c021-4a34-48ea-9bbe-9940811c9794/design-agency.png" alt="Design agency" className="w-full lg:w-1/2" />
            <div className="w-full lg:w-1/2">
              <h2 className="h2 font-bold mb-8">You’re a freelancer or an agency</h2>
              <p>Demonstrate your industry knowledge by recommending Unicorn Platform to your clients and fellow marketers. This will help you create an additional revenue source for your business. "Diversification is the key to financial resilience." — Warren Buffett.</p>
            </div>
          </div>


          <div className="flex mx-auto px-4 py-8">
            <div className="w-full lg:w-1/2">
              <h2 className="h2 font-bold mb-8">You have an audience</h2>
              <p>Have an X.com account that is followed by marketers? Or a website about web design? Monetize your audience by recommending them a great tool. Use our affiliate program link alongside with your existing monetization. Boost your earnings!</p>
            </div>
            <img src="https://unicorn-cdn.b-cdn.net/1239feb7-1d79-4971-9412-eecdb199a3f4/influencer.png" alt="Influencer" className="w-full lg:w-1/2" />
          </div>




          <div className="pt-12 pb-16 relative z-10 bg-white">
            <div className="max-w-lg mx-auto text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Make Passive Income!</h2>
              <p>Just imagine this amount of cash coming into your bank account every single month. *Calculations are based on the Startup plan.</p>
            </div>
            <div className="container mx-auto">
              <ul className="flex flex-wrap justify-center">
                <li className="w-1/3 px-2 mb-4">
                  <div className="bg-gray-100 p-4 rounded-lg shadow">
                    <div className="mb-4 p-4">
                      <img src="https://unicorn-cdn.b-cdn.net/cfff0d95-5a57-4fa0-9d26-0df3689a78ea/$191-a-month.png" alt="20 people = $191/m" className="mx-auto p-8" loading="lazy" />
                    </div>
                    <div className="text-center">
                      20 people = $191/m
                    </div>
                  </div>
                </li>
                <li className="w-1/3 px-2 mb-4">
                  <div className="bg-gray-100 p-4 rounded-lg shadow">
                    <div className="mb-4 p-4">
                      <img src="https://unicorn-cdn.b-cdn.net/417b2251-1927-42cd-aa17-693ea3ed3c5e/$957-a-month.png" alt="100 people = $957/m" className="mx-auto p-8" loading="lazy" />
                    </div>
                    <div className="text-center">
                      100 people = $957/m
                    </div>
                  </div>
                </li>
                <li className="w-1/3 px-2 mb-4">
                  <div className="bg-gray-100 p-4 rounded-lg shadow">
                    <div className="mb-4 p-4">
                      <img src="https://unicorn-cdn.b-cdn.net/b4d37552-91be-489d-aff3-5f46c83ba9ac/$4785-a-month.png" alt="500 people = $4785/m" className="mx-auto p-8" loading="lazy" />
                    </div>
                    <div className="text-center">
                      500 people = $4785/m
                    </div>
                  </div>
                </li>
              </ul>
              <div className="text-center mt-8">
                <a href="https://partner.unicornplatform.com/" target="_self" className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0">Start to earn money</a>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  )
}
