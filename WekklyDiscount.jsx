import React, { useState } from "react";
import Categories from "../data/Categories";
import { AiOutlineArrowRight } from "react-icons/ai";

const WekklyDiscount = () => {
    const [allProducts, setAllProducts] = useState (8)

    const handleShowMore = () => {
      setAllProducts(prevCount => prevCount + 4)
    }

    const slice = Categories.slice(0, allProducts)
  return (
    <div>
      <div className="container-fluid w-[95%] mx-auto mt-10">
        <div className="flex items-center justify-between mx-10">
          <h2 className="text-2xl mb-5">Weekly Discount</h2>
          {
            allProducts < Categories.length && (
              <button onClick={handleShowMore} className="text-lg font-semibold text-sky-500 hover:text-gray-900 flex items-center underline decoration-sky-500 decoration-2 active:text-sky-800 ">
                Show More
                <AiOutlineArrowRight className="mx-2"/>
              </button>
            )
          }
        </div>
        <div className="grid grid-cols-8 gap-2">
          {slice.map((item, index) => (
            <div key={index}
            className="flex flex-col items-center"
            >
              <div className="w-[200px] h-[200px] relative flex flex-col items-center justify-center rounded-full ">
                <img
                  className="object-cover bg-lime-100 w-full h-[200px] rounded-full  hover:scale-100 delay-75 scale-90"
                  src={item.image}
                  alt={item.name}
                />
                
              </div>
              <h2 className="text-xl font-sans">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WekklyDiscount;
