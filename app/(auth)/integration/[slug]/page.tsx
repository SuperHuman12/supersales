import React from 'react';
import { readFile } from 'fs/promises';
import {renderContent} from '../../../utils/helper';



const loadContent = async (slug: string) => {
  try {
    const file = await readFile(process.cwd() + `/public/data/integrationFile/${slug}.json`, 'utf8');
    const data = JSON.parse(file);
    return data;
  } catch (error) {
    console.error("Failed to load content", error);
    return null;
  }
};





const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const content = await loadContent(slug);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8 mt-24 mb-16 ml-16 mr-16 bg-gray-100 p-8">
      <div className="flex space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src={content.image} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-800">{content.title}</h1>
              <p className="text-md text-gray-600">{content.subtitle}</p>
            </div>
          </div>
          <div className="text-gray-800">
            <p>{content.description}</p>
          </div>
          <div className="flex space-x-2 items-center">
            <a href={content.link} className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
              <span>Install</span>
            </a>
          </div>
        </div>
        <div className="relative w-full">
          <img src={content.secondaryImage} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <div>
        {content.sections.map((item: any, index: number) => renderContent(item, index))}
      </div>
    </div>
  );
};

export default Page;
