import React from 'react';
import  comparisonLibrary  from '../../../public/comparison_data.json';

const ComparisonTable = ({ id }:{id:any}) => {

    const libraryItem = (comparisonLibrary.comparision_library).find(item => item.id === id);

    if (!libraryItem) {
        return <p>Library item not found</p>;
    }
  
    return (
      <div className='max-w-xl mx-auto text-center py-20 pb-12 md:pb-20'>
        <h1 className="h1 mb-4">Get so much more than website builder with NotionBear.</h1>
        <p className="text-xl text-gray-600">NotionBear has everything you need, from task tracking to templates to documentation. Get comfortable — you won’t be leaving all that often.</p>
  
        <div className="max-w-xl mx-auto p-4">
          <div className="overflow-x-auto p-4 bg-gray-200 rounded">
            <table className="table-auto w-full text-left text-sm bg-gray-200 rounded">
              <thead>
                <tr>
                  <th className="px-4 py-2">Features</th>
                  <th className="px-4 py-2 text-center">Webflow</th>
                  <th className="px-4 py-2 text-center">NotionBear</th>
                </tr>
              </thead>
              <tbody>
                {libraryItem.comparison_table.map((item:any, index:number) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.feature}</td>
                    <td className="border px-4 py-2 text-center">✓</td>
                    <td className="border px-4 py-2 text-center">{item.feature_value ? '✓' : '✕'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default ComparisonTable;