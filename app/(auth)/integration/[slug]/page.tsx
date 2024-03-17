import React from 'react';
import Image from 'next/image';
import { readFile } from 'fs/promises';

const loadContent = async (slug: string) => {
  try {
    const file = await readFile(process.cwd() + `/public/data/${slug}.json`, 'utf8');
    const data = JSON.parse(file);
    return data;
  } catch (error) {
    console.error("Failed to load content", error);
    return null;
  }
};

const renderContent = (item: any, index: number) => {
  switch (item.type) {
    case 'heading':
      return <h3 key={index} className="text-xl font-bold text-gray-900 mt-4 mb-2">{item.text}</h3>;
    case 'paragraph':
      return <p key={index} className="text-base text-gray-700 my-2">{item.text}</p>;
    case 'image':
      return (
      <div key={index} className="flex justify-center">
        <Image width={1000} height={1000} src={item.url} alt={item.alt} className="max-w-full h-auto rounded-lg shadow-md" />
      </div>
      );  case 'bold':
      return <strong key={index} className="font-semibold">{item.text}</strong>;
    case 'list':
      return (
        <ul key={index} className="list-disc pl-5 space-y-1">
          {item.items.map((listItem: string, listItemIndex: number) => (
            <li key={listItemIndex} className="text-gray-700">{listItem}</li>
          ))}
        </ul>
      );
    case 'link':
      return <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">{item.text}</a>;
    case 'blockquote':
      return <blockquote key={index} className="italic border-l-4 border-gray-200 pl-4 py-2 my-2">{item.text}</blockquote>;
    case 'code':
      return (
        <pre key={index} className="bg-gray-100 rounded-md p-3 overflow-auto">
          <code className="text-sm">{item.code}</code>
        </pre>
      );
    case 'video':
      return <video key={index}  width={1000} height={1000}   src={item.src} loop className="w-full h-auto max-w-full rounded-lg shadow-md"></video>;
    case 'iframe':
      return <iframe key={index} src={item.src} frameBorder="0" allowFullScreen className="w-full h-64 md:h-96 rounded-lg shadow-md"></iframe>;
    default:
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
