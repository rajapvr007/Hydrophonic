import React, { useContext, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import "./navbar.css";
import { cartContext } from "../../contexts/cartContext";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { itemAmount } = useContext(cartContext);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     return window.scrollY > 60 ? setIsActive(true) : setIsActive(false); // 60px scroll
  //   });
  // });

  return (
    <header
    // className={`${
    //   isActive ? "bg-white py-2 shadow-md" : "bg-none "
    // } fixed w-full z-50 transition-all `}
    >
      <div
        className={` container flex items-center justify-between h-full mx-auto  ${
          navbar ? "bg-white" : ""
        }`}
      >
        <nav className="w-full  ">
          <div className="justify-between  px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link to="/">
                  <h2 className="lg:text-1xl text-xl font-bold">Hydroponic</h2>
                </Link>
                <div className="md:hidden ">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-between  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="space-y-8 md:flex md:space-x-6 md:space-y-0 text-black ">
                  <li className="navlinks">
                    <NavLink to="/" className="item-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/shop">Shopping</NavLink>
                  </li>
                  <li className="   ">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="   ">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li className="   ">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li className=" ">
                    <NavLink to="/cart">
                      {/* {cart }   */}
                      <div className="relative flex cursor-pointer ">
                        <BsBag className="text-2xl" />
                        <div className="lg:bg-red-500  lg:absolute -right-2  -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center text-white bg-red-500">
                          {itemAmount}
                        </div>
                      </div>
                    </NavLink>
                  </li>
                  <li className="   ">
                    <NavLink to="/signup">Sign Up</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    // <header class="sticky w-full border-b bg-white pb-4">
    //   <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
    //     <div class="inline-flex items-center space-x-2">
    //       {/* <span>
    //       <svg
    //         width="30"
    //         height="30"
    //         viewBox="0 0 50 56"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
    //           fill="black"
    //         ></path>
    //       </svg>
    //     </span> */}
    //       <span class="font-bold">DevUI</span>
    //     </div>
    //     <div class="hidden lg:block">
    //       <ul class="inline-flex space-x-8">
    //         <li>
    //           <a
    //             href="#"
    //             class="text-sm font-semibold text-gray-800 hover:text-gray-900"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="text-sm font-semibold text-gray-800 hover:text-gray-900"
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="text-sm font-semibold text-gray-800 hover:text-gray-900"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="text-sm font-semibold text-gray-800 hover:text-gray-900"
    //           >
    //             Blogs
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div class="hidden lg:block">
    //       <button
    //         type="button"
    //         class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    //       >
    //         Button text
    //       </button>
    //     </div>
    //     <div class="lg:hidden">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         stroke-width="2"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         class="h-6 w-6 cursor-pointer"
    //       >
    //         <line x1="4" y1="12" x2="20" y2="12"></line>
    //         <line x1="4" y1="6" x2="20" y2="6"></line>
    //         <line x1="4" y1="18" x2="20" y2="18"></line>
    //       </svg>
    //     </div>
    //   </div>
    // </header>
  );
}
