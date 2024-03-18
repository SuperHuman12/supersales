"use client";
import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'; // Adjusted imports for Next.js 13
import { _loadFromJson, _transformDataToPostPageView, renderContent } from '../../../utils/helper';

interface CallToAction {
  link: string;
  text: string;
}

interface CallToAction {
  text: string;
  link: string;
}

interface Product {
  logo: string;
  name: string;
  provider: string;
  description: string;
  callToAction: CallToAction;
}

interface ContentSection {
  content: string;
}

interface Proof {
  screenshot: string;
  youtubevideo: string;
}

interface FilterBySlugType {
  id: string;
  product: Product;
  overview: ContentSection;
  howItWorks: ContentSection;
  configuration: ContentSection;
  proof: Proof;
}


const Page: React.FC = () => {
  const [filterBySlug, setFilterBySlug] = useState<FilterBySlugType | null>(null);
  const [postPageView, setPostPageView] = useState<any[]>([]);
  const pathname = usePathname();
  const [searchParams]:any = useSearchParams();

  useEffect(() => {
    const slug = pathname.split('/').pop();

    if (slug) {
      const fetchData = async () => {
        const content = await _loadFromJson(false);
        const filteredContent = content.find((item: { id: string }) => item.id === slug) as FilterBySlugType;
        if (filteredContent) {
          setFilterBySlug(filteredContent);
          const transformedData = _transformDataToPostPageView(filteredContent);
          setPostPageView(transformedData);
        }
      };
      fetchData();
    }
  }, [pathname, searchParams]); // Reacting to changes in pathname and searchParams


  if (!filterBySlug) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8 mt-24 mb-16 ml-16 mr-16 bg-gray-100 p-8">
      <div className="flex space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src={filterBySlug?.product?.logo} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-800">{filterBySlug?.product?.name}</h1>
              <p className="text-md text-gray-600">{filterBySlug?.product?.provider}</p>
            </div>
          </div>
          <div className="text-gray-800">
            <p>{filterBySlug?.product?.description}</p>
          </div>
          <div className="flex">
            <div className="flex mr-1 space-x-2 items-center">
            <a href={filterBySlug?.product?.callToAction?.link} className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
  <span>{filterBySlug?.product?.callToAction?.text}</span>
</a>

            </div>
          </div>
        </div>
      </div>
      <div>
        {postPageView?.map((item, index) => renderContent(item, index))}
      </div>
    </div>
  );
};

export default Page;
