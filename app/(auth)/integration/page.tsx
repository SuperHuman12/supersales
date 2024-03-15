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
            <h1 className="h1 mb-4">NotionBear Integrations</h1>
            <p className="text-xl text-gray-600">Integrate with your stack and extend functionality with powerful integrations built by us and our amazing community.</p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <h2>
              We believe NotionBear should work with all the tools and services you use every day. That‘s why we have integrations for issue trackers, diagrams, interactive code sandboxes and more.
            </h2>
          </div>

          <div className="space-y-4">
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <div className="space-y-2">
          {/* Integration Item 1 */}
          <a href="./integrations/linear" className="block">
            <div className="relative rounded overflow-hidden">
              <img className="w-full h-full object-cover" src="https://framerusercontent.com/images/TpVgEjlOmmrPt10GnAZxILWqLvU.svg" alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center space-x-2">
                  <img className="w-10 h-10 rounded-full" src="https://framerusercontent.com/images/l4nnn6kmtzSkPgFoWWlwzYFzEA.png" alt="" />
                  <span className="text-white font-bold">Linear</span>
                </div>
              </div>
            </div>
          </a>
          {/* Integration Item 2 */}
          <a href="./integrations/slack" className="block">
            <div className="relative rounded overflow-hidden">
              <img className="w-full h-full object-cover" src="https://framerusercontent.com/images/TpVgEjlOmmrPt10GnAZxILWqLvU.svg" alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center space-x-2">
                  <img className="w-10 h-10 rounded-full" src="https://framerusercontent.com/images/Yo5xVE0shfRCQvIwRDGU6KqIbzM.png" alt="" />
                  <span className="text-white font-bold">Slack</span>
                </div>
              </div>
            </div>
          </a>
          {/* Integration Item 3 */}
          <a href="./integrations/arcade" className="block">
            <div className="relative rounded overflow-hidden">
              <img className="w-full h-full object-cover" src="https://framerusercontent.com/images/TpVgEjlOmmrPt10GnAZxILWqLvU.svg" alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center space-x-2">
                  <img className="w-10 h-10 rounded-full" src="https://framerusercontent.com/images/FS1of0gxF0A6UP7GmCpIBKQM.png" alt="" />
                  <span className="text-white font-bold">Arcade</span>
                </div>
              </div>
            </div>
          </a>
          {/* Integration Item 4 */}
          <a href="./integrations/discord" className="block">
            <div className="relative rounded overflow-hidden">
              <img className="w-full h-full object-cover" src="https://framerusercontent.com/images/TpVgEjlOmmrPt10GnAZxILWqLvU.svg" alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center space-x-2">
                  <img className="w-10 h-10 rounded-full" src="https://framerusercontent.com/images/m9aUcDVUAGUkouzars7JOPL4pzU.png" alt="" />
                  <span className="text-white font-bold">Discord</span>
                </div>
              </div>
            </div>
          </a>
          {/* Integration Item 5 */}
          <a href="./integrations/figma" className="block">
            <div className="relative rounded overflow-hidden">
              <img className="w-full h-full object-cover" src="https://framerusercontent.com/images/TpVgEjlOmmrPt10GnAZxILWqLvU.svg" alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center space-x-2">
                  <img className="w-10 h-10 rounded-full" src="https://framerusercontent.com/images/Dies87xzsIZvlFyRdxkVgDUnU.png" alt="" />
                  <span className="text-white font-bold">Figma</span>
                </div>
              </div>
            </div>
          </a>
          {/* Add more items as needed */}
        </div>
      </div>
    </div>


        </div>
      </div>
    </section>
  )
}
