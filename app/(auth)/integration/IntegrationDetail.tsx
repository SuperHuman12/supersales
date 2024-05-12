import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';


function IntegrationDetail() {
  const router = useRouter();
  const { integrationName } = router.query;

  // Use integrationName to fetch or display integration details

  return (
    <div>
      <h1>  Integration: {integrationName}</h1>
      {/* Integration details here */}

            {/* Integration Details */}

            <div className="space-y-8 bg-gray-100 p-8">

              <div className="flex space-y-6" >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4" >
                    <div className="w-20 h-20 rounded-full overflow-hidden" >
                      <img src="https://framerusercontent.com/images/FS1of0gxF0A6UP7GmCpIBKQM.png" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-2" >
                      <h1 className="text-2xl font-bold text-gray-800">Arcade</h1>
                      <p className="text-md text-gray-600">By supersalesagro</p>
                    </div>
                  </div>
                  <div className="text-gray-800" >
                    <p>Embed interactive product demos in your documentation and turn all users into power users.</p>
                  </div>
                  <div className="flex space-x-2 items-center" >
                    <a href="https://app.supersalesagro.com/integrations/arcade" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
                      <span>Install</span>
                    </a>
                  </div>
                </div>
                <div className="relative w-full" >
                  <img src="https://framerusercontent.com/images/JwSD9igebl5YjP1p0XBssmuRU4.png" alt="" className="w-full h-full object-contain" />
                </div>
              </div>


              {/* Integration Overview */}
              <div>
                <h3 className="h3 font-bold mt-4 mb-4">Overview</h3>
                <p>Arcade lets you create interactive product demos in minutes and turn all users into power users. Let users experience your product through interactive, guided demos. No more pausing and rewinding, users can progress at their own pace. This integration allow you to embed Arcade interactive demos into your supersalesagro documentation.</p>
                <h3 className="h3 font-bold mt-4 mb-4">How it works</h3>
                <p>Embedding an Arcade flow in your documentation is simple - just paste an Arcade flow link into the supersalesagro editor. The app will turn the link into an Arcade embed showing your recorded demo.</p>
                <h3 className="h3 font-bold mt-4 mb-4">Configure</h3>
                <p>To install on a single space navigate to integrations in sub-navigation. If you prefer to install the Arcade integration on multiple or all spaces, navigate to your organization settings and enable it from the integrations panel. This will give you access to the custom arcade block.</p>
              </div>

              </div>

    </div>
  );
}

export default IntegrationDetail;








