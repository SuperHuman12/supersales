import Link from 'next/link';
import { readFile } from 'fs/promises';

export const metadata = {
  title: 'Reset Password - Simple',
  description: 'Page description',
}


const loadTemplate = async () => {
  try {
    const file = await readFile(process.cwd() + '/public/data/TemplatesFile/templatelist.json', 'utf8');
    const data = JSON.parse(file);
    return data.templates;
  } catch (error) {
    console.error("Failed to load templates", error);
    return [];
  }
}


export default async function Template() {

  const templates = await loadTemplate();


  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Find your Template</h1>
            <p className="text-xl text-gray-600">Jumpstart your SaaS business with pre-built solutions from NotionBear and our community.</p>
          </div>



          {/* Templates grid */}
          <div className="flex ">


          {templates.map((template:any, index:number) => (
              <Link key={index} href={template.href} passHref>
                <div
                style={{width: '400px'}}
                className="cursor-pointer   m-2 relative flex items-center p-6 bg-white rounded shadow-xl h-full border">
                  <div>
                    <div className="items-start space-x-2">
                      <img className="w-full rounded" src={template.imageSrc} alt={template.altText} />
                      <span className="text-dark font-bold">{template.name}</span>
                    </div>
                    <p className="text-gray-600">{template.description}</p>
                    <button className="text-white bg-gray-900 rounded w-full p-2 mt-4">Clone Template</button>
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
