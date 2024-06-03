'use client';

import { useState, useEffect } from 'react';
import { data } from "../CategoryData"; 
import Card from './Card';
import Navbar from './Navbar';



const Category = ({ initialData }) => {
  

  const [categoryWiseData, setCategoryWiseData] = useState("All Items");
  const [displayData, setDisplayData] = useState(initialData); // Initialize with initialData
  
  useEffect(() => {
    if (categoryWiseData === "All Items") {
      setDisplayData(initialData);
    } else {
      const filteredData = initialData.filter(
        (item) => item.category === categoryWiseData
      );
      setDisplayData(filteredData);
    }
    
  }, [categoryWiseData, initialData]);

  const handleCategoryClick = (category) => {
    setCategoryWiseData(category);
  };



  return (
    <div>
         <div className=' flex flex-col fixed w-full  gap-y-4 top-0 py-3 z-10 bg-black mx-auto'>
            <Navbar/>
      <div className="w-full z-10 gap-x-8 rounded-md p-4 flex flex-wrap gap-y-3 justify-center items-center">
        {data.map((category, index) => (
          <div
            key={index}
            className={`cursor-pointer ${categoryWiseData === category ? 'font-light text-gray-200' : 'font-light text-gray-500 hover:text-gray-300'}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
         </div>

      <div className="flex lg:flex-row flex-col mt-[250px] xs:mt-[180px]">
        <div className="flex flex-wrap w-11/12 justify-center items-center mx-auto">
          {displayData.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
