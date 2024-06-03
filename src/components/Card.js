"use client"
import { useState } from 'react';
import { CiBookmark } from "react-icons/ci";




export default function Card({ product }) {
const [isExpanded, setIsExpanded] = useState(false);
const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  
  const getDescription = () => {
   
    const words = product.description
    if (isExpanded) {
      return product.description;
    }
    else{
if(words){
      return words.slice(0, 35) + '...';
    }}
  };

  const getTitle = () => {
    const words = product.title;
   if(words){
    return words.slice(0, 20) + '...';}
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Filled star
      } else {
        stars.push(<span key={i} className="text-gray-300">&#9733;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className="bg-zinc-900 rounded-xl border border-gray-500 cursor-pointer shadow-md hover:shadow-lg overflow-hidden max-w-[18rem] mx-auto my-4 transition transform hover:scale-105">
      <div className="w-full h-[250px] relative">
        <img src={product.image} alt={product.title} className="w-full h-full object-fill" />
        <CiBookmark className='absolute top-2 right-2 text-black text-3xl hover:text-gray-400'/>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2 text-white">{getTitle()}</h2>
        <p className="text-gray-500 text-sm mb-2">{product.category}</p>
        <p className="text-gray-400 mb-3">
          {getDescription()}
          <button onClick={toggleDescription} className="text-blue-500 ml-2">
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </p>
        <p className="text-xl font-semibold text-blue-500 mb-3">${product.price}</p>
        <div className="flex items-center gap-x-1">
          <span className="flex">{(product.rating.rate)}</span>
          <span className="flex">{renderStars(Math.round(product.rating.rate))}</span>
          <span className="text-gray-500 text-sm ml-2">({product.rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
}
