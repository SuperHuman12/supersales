import React from 'react';
import Link from 'next/link'; 
import templateData from '@/public/template_data.json';

const TemplateLibrary = () => {
  return (
    <section className='max-w-3xl m-auto text-center space-y-4'>
      <h1 className="h1 mb-4">Get Ready-To-Execute businesses, not just templates.</h1>
      <p className="text-xl text-gray-600 mb-8">supersalesagro has thousands of templates for different uses from project management to meeting agendas, team wikis, and CRMs. Using these templates makes getting setup and up-to-speed easier than ever.</p>
      <button className="text-dark border rounded w-fit p-2 mt-4 px-4 bg-gray-200">View all Templates</button>
      <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none mt-9">
        {templateData.template_library.map((template, index) => (
          <Link key={index} href={template.product.callToCopy.link} className="relative flex flex-col text-start items-center p-6 bg-white rounded shadow-xl h-full border">
            <div>
              <div>
                <img className="w-full rounded mb-4" src={template.product.logo} alt={template.product.name} />
                <span className="text-dark font-bold">{template.product.name}</span>
              </div>
              <p className="text-gray-600">{template.product.description}</p>
              <button className="text-white bg-gray-900 rounded w-fit p-2 mt-4 px-4">{template.product.callToCopy.text}</button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TemplateLibrary;
