import React from "react";

const ProductCard = ({ image, name, price, description }) => {
  return (
    <div className="w-68 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700 m-2 inline-block drop-shadow-lg hover:bg-green-100 hover:scale-105 ease-in">
      <a href="#">
        <img
          className="p-8 rounded-t-lg w-68 h-48 object-contain"
          src={image}
          alt="img-prouct"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
            {name}
          </h5>
        </a>
        <p classNameName="text-gray-900 dark:text-black mt-1">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-gray-900 dark:text-black">
            ${price}
          </span>
          <a
            href="#"
            className="text-white w-24 bg-light-700 hover:bg-green-800 font-small rounded-lg text-xs py-2 text-center dark:bg-green-500 dark:hover:bg-green-600"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// Akash Jr Code

// <div classNameName="product-card pcard">
//   <img src={image} alt={name} />
//   <h4>{name}</h4>
//   <p classNameName="price">{price}</p>
//   <p classNameName="description">{description}</p>
// </div>
