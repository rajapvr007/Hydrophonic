import React, { useContext, useEffect, useRef, useState } from "react";
import ShopPic from "../assets/sbg.jpg";

//import { products } from "../ProductData/products";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cartContext } from "../contexts/cartContext";
import axios from "axios";
const Shop = (Products) => {
  const { addToCart } = useContext(cartContext);
  const { id, name, price, imageSrc, imageAlt } = Products;

  

  const [products,setproducts]=useState([])

  const targetDivRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/product/allProducts",{
          withCredentials: true
        });
        
        console.log(response.data); 
        setproducts(response.data)
      } catch (error) {
       
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData(); 
  
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: "smooth" }, 100);
    }
  }, []);

  

  

  return (
    <>
      {/* {   // header of the shope page } */}
      <header>
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={ShopPic}
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4 text-slate-300">
              Shop With
              <span className="text-green-500">Us</span>
            </h1>
            <p className="text-slate-300 text-xl">
              Cultivate success with us – where each purchase is a step towards
              a greener, more efficient tomorrow.
            </p>
            <p className="text-slate-300 text-xl">
              Shop with confidence, grow with success – because the future of
              farming is now, and it's{" "}
              <span className="font-bold text-green-500">hydroponic!</span>.
            </p>
          </div>
        </div>
      </header>
      {/* title of the shop page    */}
      <div
        className="text-center underline underline-offset-8 under mt-32"
        ref={targetDivRef}
      >
        <h1 className=" text-4xl ">Our Products</h1>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-5  box-border  w-full  justify-center lg:flex ">
        {/* <Sidebar /> */}

        <div className="bg-white col-span-4  my- mx-4  ">
          <div className="mx-auto  max-w-5xl px-4  sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8  ">
            {/* <h2 className="sr-only">Our Products</h2> */}

            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8 ">
              {products?.map((Products) => (
                <Link
                  key={Products.id}
                  to={Products.href}
                  className="group  shadow-xl rounded-xl p-4 border "
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={Products.img}
                      alt={Products.imageAlt}
                      className="lg:h-full lg:w-full object-cover object-center group-hover:opacity-75 "
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {Products.name}
                  </h3>
                  <div className="flex justify-between items-center lg:py-2">
                    <p className="mt-1 text-lg font-medium text-gray-900 gap-y-2 flex  items-center gap-x-1 my-2">
                      <FaRupeeSign className="inline" />
                      {Products.price}
                    </p>
                    <Link>
                      <button
                        onClick={() => {addToCart(Products,Products._id)
                        console.log(Products._id)}}
                        className=" m-2 bg-green-400 rounded p-1.5 text-sm cursor-pointer hover:bg-green-600"
                      >
                        Add to Cart
                      </button>
                    </Link>
                  </div>
                </Link>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
