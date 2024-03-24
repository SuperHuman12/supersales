import Link from 'next/link';
import Image from 'next/image';
import { _loadFromJson } from '@/app/utils/helper';


export const metadata = {
  title: 'Notion Bear Templates',
  description: 'Jumpstart your SaaS business with pre-built solutions from NotionBear and our community',
}


export default async function Template() {

  const templates = await _loadFromJson();



  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Find your Template</h1>
            <p className="text-xl text-gray-600">Jumpstart your SaaS business with pre-built solutions from NotionBear and our community.</p>
          </div>

          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300">
              <div><a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.notionbear.com">Ask our Designer for Help</a></div>
              <div><a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="/template">View all Templates</a></div>
          </div>


        
          <div className="max-w-3xl mx-auto mt-20 aos-init aos-animate max-w-sm grid md:grid-cols-1 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none gap-6 ">
          {templates.map((template:any, index:number) => (
              <Link key={index} href={"/template/"+template.id}  className="cursor-pointer   m-2 relative flex items-center p-6 bg-white rounded shadow-xl h-full border mt-6">
                <div>
                  <div>
                    <div className="items-start">
                      <Image className="w-full rounded mb-4 border border-dashed"
                        width={100}
                        height={100}
                        src={template?.product?.logo} 
                        unoptimized
                        alt={template?.product?.name} />

                      <span className="text-dark font-bold">{template?.product?.name}</span>
                    </div>
                    <p className="text-gray-600">{template?.product?.description}</p>
                    <button className="text-white bg-gray-900 rounded w-full p-2 mt-4">
                      {template?.callToCopy?.text || "Create Website" }
                    </button>
                  </div>
                </div>
              </Link>
            ))}

            </div>
        </div>
      </div>
    </section>
  )
}
