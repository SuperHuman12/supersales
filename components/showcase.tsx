import Image from 'next/image'
import showcaseImage from '@/public/images/showcase.jpg'

export default function showcases() {
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
            <h2 className="h2 mb-4 p-2">Incredible sites built with NotionBear</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Browse through examples of live Notion websites, built with NotionBear</p>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300"><div><a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.notionbear.com">Ask our Designer for Help</a></div><div><a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="/template">View all Templates</a></div></div>


          </div>


          {/* showcases */}
          <div className="mx-auto mt-20" data-aos="zoom-y-out">

<div role="list" className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://pxweb.simple.ink/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/65c20db81cf1396c0cfe158a_pxweb.png" alt="PreviewX" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">PreviewX</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2 text-white w-full mt-4">Clone Template</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://ong.ph/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c0771_brandbird%20(50)-min.jpg" alt="Ong Pe Hon" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">Ong Pe Hon</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2 text-white w-full mt-4">Clone Template</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://buildinpublic.simple.ink/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c076b_brandbird%20(48)-min.jpg" alt="Build In Public Cheatsheet" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">Build In Public Cheatsheet</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2 text-white w-full mt-4">Clone Template</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="http://chdavid.com" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c076d_brandbird.jpg" alt="Ch David" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">Ch David</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
      <button className="border p-2 px-4 rounded my-2 text-dark w-full mt-4">Private Template</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://stevemarks.io/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c076c_brandbird%20(54).jpg" alt="Steve Marks" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">Steve Marks</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2 text-white w-full mt-4">Clone Template</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://stevemarksvoice.com/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c0776_brandbird%20(53).jpg" alt="Steve Marks Voice" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">Steve Marks Voice</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
      <button className="border p-2 px-4 rounded my-2 text-dark w-full mt-4">Private Template</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://fisayoosilaja.simple.ink/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c07d2_brandbird%20(59).jpg" alt="Fisayo Osilaja" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">Fisayo Osilaja</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2 text-white w-full mt-4">Clone Template</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://soundmindcareers.com/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c07ff_brandbird%20(60).jpg" alt="SoundMind Careers" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">SoundMind Careers</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2 text-white w-full mt-4">Clone Template</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://rizkimulyawan.simple.ink/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c0831_brandbird-min.jpeg" alt="Rizki Mulyawan" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">Rizki Mulyawan</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
      <button className="border p-2 px-4 rounded my-2 text-dark w-full mt-4">Private Template</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://mailthis.co/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c08c6_brandbird%20(71).jpg" alt="MailThis.co" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">MailThis.co</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2 text-white w-full mt-4">Clone Template</button>
      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://georgebugianishvili.simple.ink/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c08c2_brandbird%20(77).jpg" alt="George Bugianishvili" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">George Bugianishvili</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
      <button className="bg-gray-900 border p-2 px-4 rounded my-2 text-white w-full mt-4">Clone Template</button>

      </div>
    </a>
  </div>
  <div role="listitem" className="mb-4 border rounded p-2">
    <a href="https://stampfans.com/" target="_blank" className="block" rel="noopener noreferrer">
      <img src="https://assets-global.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c08c3_brandbird%20(70).jpg" alt="StampFans.com" className="w-auto mx-auto px-4 mt-4" />
      <div className="p-4">
      <h2 className="text-start mt-2 font-bold">StampFans.com</h2>
      <h5 className="card-title text-start mb-4 text-gray-500">help.notionbear.com</h5>
      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>
      <button className="border p-2 px-4 rounded my-2 text-dark w-full mt-4">Private Template</button>

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