import Image from 'next/image'
import templateImage from '@/public/images/template.jpg'

export default function templates() {
  return (


    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 p-2">Kickstart your idea with a profesionally designed template</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Start your website from a selection of beautifully crafted templates and customize it to fit your needs.</p>
          </div>


          {/* templates */}
          <div className="mx-auto mt-20" data-aos="zoom-y-out">

<div role="list" className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://pxweb.simple.ink/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/65c20db81cf1396c0cfe158a_pxweb.png" alt="PreviewX" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">PreviewX</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-200 border p-2 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2">Clone</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://ong.ph/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c0771_brandbird%20(50)-min.jpg" alt="Ong Pe Hon" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">Ong Pe Hon</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-200 border p-2 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2">Clone</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://buildinpublic.simple.ink/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c076b_brandbird%20(48)-min.jpg" alt="Build In Public Cheatsheet" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">Build In Public Cheatsheet</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-200 border p-2 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2">Clone</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="http://chdavid.com" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c076d_brandbird.jpg" alt="Ch David" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">Ch David</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-200 border p-2 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2">Clone</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://stevemarks.io/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c076c_brandbird%20(54).jpg" alt="Steve Marks" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">Steve Marks</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-200 border p-2 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2">Clone</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://stevemarksvoice.com/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c0776_brandbird%20(53).jpg" alt="Steve Marks Voice" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">Steve Marks Voice</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-200 border p-2 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2">Clone</button>
      </div>
    </a>
  </div>

</div>


          </div>

        </div>
      </div>
    </section>


  )
}