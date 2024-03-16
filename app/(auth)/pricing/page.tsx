export const metadata = {
  title: 'Sign In - Simple',
  description: 'Page description',
}

import Link from 'next/link'

export default function SignIn() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1">Websites should be easy. Start for free.</h1>
          </div>

          {/* Form */}
          <div className="max-w-3xl m-auto">

          <div>
    <div className="w-full text-center ltr:mr-4 rtl:ml-4 md:block mb-8">
        <p className="mt-2 text-lg font-medium text-gray-400">Enjoy 2 months free with our annual plan.</p>
    </div>
    <div className="justify-center mb-4 w-100 my-5"><div className="w-100"></div></div>
    <div dir="ltr" data-orientation="horizontal" className="mt-8 mb-8 w-1/2 lg:mb-13 border rounded-full m-auto">
        <div role="tablist" aria-orientation="horizontal" className="relative flex w-full rounded-full bg-gray-100 font-semibold z-0 border-2 border-gray-600"  data-orientation="horizontal">
            <span id="tab-marker" className="absolute inset-y-0 left-0 -z-10 rounded-full border-2 bg-gray-900 w-1/2 h-14"></span>
            <button className="w-1/2 text-md h-14 flex items-center justify-center uppercase text-white bg-primary-50" type="button" role="tab" aria-selected="true">
                Yearly<span className="relative -top-0.5 rounded-full bg-neutral-200 p-1 text-xs font-normal text-gray-900 ml-4 px-3">-20%</span>
            </button>
            <button className="w-1/2 text-md h-14 flex items-center justify-center uppercase" type="button" role="tab" aria-selected="false">Monthly</button>
        </div>
    </div>
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Number of Users Every Month</label>
        <select className="mt-1 block w-full py-2 px-3 bg-white border-2 border-gray-500 font-normal leading-6 shadow-lg rounded-md text-2xl" id="num-of-views">
            <option value="3000">3K Users</option>
            <option value="10000">10K Users</option>
            <option value="50000">50K Users</option>
            <option value="100000">100K Users</option>
            <option value="1000000">1 Million Users</option>
        </select>
    </div>
    <div >
        <article className="overflow-hidden rounded-lg border-2 pb-5 bg-primary-50">
            <div className="border-b-2 border-dashed px-7 py-6 md:pt-7">
                <h5 className="font-cal leading-[100%] md:!leading-h1 text-[40px] md:text-5xl lg:text-[50px] xl:text-6xl text-primary-700 flex items-end gap-2 md:min-h-[48px] md:items-center lg:min-h-[50px] xl:min-h-[60px]">
                    <span><div>$50</div></span><span className=":top-2 relative text-3xl leading-8 text-neutral-500 lg:top-3">/Yearly</span>
                </h5>
                <div className="flex grow flex-col gap-2 md:flex-row md:items-end mt-6 mb-4"><button className="bg-gray-900 text-white w-full p-4 rounded-lg text-center">Upgrade</button></div>
                <p className="text-md max-w-[482px] pt-6 text-gray-500 md:pt-4">We work better in teams. Extend your workflows with round-robin and collective events and make advanced routing forms.</p>
                <ul className="flex gap-4">
                    <div className="p-4">
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Unlimited articles &amp; collections</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Unlimited languages</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>5 Help Centers</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Custom Domain / SSL</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Private Help Center</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Password Protection</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Guest Accounts</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Integrations</span>
                        </li>
                    </div>
                    <div className="p-4">
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Advanced Customization</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Article Suggester</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Advanced Article Search</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Content Rating</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Auto Sync</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Remove 'Powered by' badge</span>
                        </li>
                        <li className="text-md flex items-start gap-2 leading-[32px]">
                            <figure className="min-w-6 flex min-h-[32px] items-center text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-check-circle text-gray-900 opacity-50 mr-2"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </figure>
                            <span>Report / Analytics</span>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="flex gap-3">
                <div className="mt-4 border-2 border-gray-200 p-4 shadow-lg rounded grid w-full mx-3">
                    <div className="text-left w-full">
                        <h6 className="opacity-75">NotionBear AI Pro</h6>
                        <h3 className="font-bold text-lg p-2 px-0">$5 / month</h3>
                    </div>
                    <div className="w-full m-auto"><a className="bg-gray-900 text-white px-4 w-full rounded-lg p-2">+ Add</a></div>
                </div>
                <div className="mt-4 border-2 border-gray-200 p-4 shadow-lg rounded grid w-full mx-3">
                    <div className="text-left w-full">
                        <h6 className="opacity-75">Remove Branding AddOn</h6>
                        <h3 className="font-bold text-lg p-2 px-0">$5 / month</h3>
                    </div>
                    <div className="w-full m-auto" ><a className="bg-gray-900 text-white px-4 w-full rounded-lg p-2">+ Add</a></div>
                </div>
            </div>
        </article>
    </div>
</div>




          </div>

        </div>
      </div>
    </section>
  )
}
