import React from "react";
import boxDetails from "./boxDetails";
import { products } from "../../ProductData/products";

export default function Box() {
  return (
    <div  className="mx-2 grid lg:flex-row lg:grid-cols-2 md:grid-col sm:grid-col ">
      {boxDetails.map((i) => {
        return (
          <div  className="flex flex-row mx-3 mt-3 ">
            <div className="w-full  mx-auto rounded-lg  border border-gray-200 p-5 text-gray-800 font-light mb-6 ">
              <div className="w-full  flex mb-4 items-center">
                <div  className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src={i.img} alt="" />
                </div>
                <div  className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    {i.title}
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  {i.desc}
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
          
    </div>
  );
}

