import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { cartContext } from "../contexts/cartContext";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Cart() {
  const [open, setOpen] = useState(true);
  const {
    cartProducts,
    setCartProducts,
    addToCart,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,

    total,
  } = useContext(cartContext);
  return (
    <>
      <div className="w-full lg:px-28">
        <div className="flex h-full flex-col  bg-white justify-center lg:px-56 px-4">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <h1 className="text-lg font-medium text-gray-900">
                Shopping cart
              </h1>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => setOpen(false)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close panel</span>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartProducts.length > 0 ? (
                    <>
                      {cartProducts?.map((product) => (
                        <li key={product.id} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3 className="">
                                  <a href={product.href}>{product.name}</a>
                                </h3>
                              </div>
                            </div>

                            <div className=" flex gap-x-2 h-[36px] text-sm ">
                              {/* quantity  */}
                              <div className=" h-full  text-primary font-medium  max-w-[100px] items-center ">
                                {/* decrease the  quantity of the products  */}
                                <div className="">
                                  <div className="flex py-2  ">
                                    <div
                                      onClick={() => decreaseAmount(product.id)}
                                      className="flex items-center justify-center flex-1 h-full cursor-pointer border-2"
                                    >
                                      <IoMdRemove />
                                    </div>
                                    {/* {/* increment the quantity of the products  */}
                                    <div className="flex items-center justify-center h-full px-6">
                                      {product.amount}{" "}
                                    </div>
                                    <div
                                      onClick={() => increaseAmount(product.id)}
                                      className="flex items-center justify-center flex-1 h-full cursor-pointer border-2"
                                    >
                                      <IoMdAdd />
                                    </div>
                                  </div>
                                </div>
                                <p className="ml-4">${product.price}</p>
                              </div>

                              {/* final price  */}
                              <div className="flex  justify-end w-full gap-8 items-center ">
                                <div className="flex items-end justify-end flex-1 text-sm font-medium flex-col gap-y-1">
                                  {`$ ${parseFloat(
                                    product.price * product.amount
                                  ).toFixed(2)}`}{" "}
                                </div>
                                {/* remove the product from the cart  */}
                                <div
                                  className="text-xl text-red-500 cursor-pointer"
                                  onClick={() => removeFromCart(product.id)}
                                >
                                  <FaRegTrashAlt />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </>
                  ) : (
                    <>
                      <div className="flex justify-center items-center h-[300px] flex-col gap-y-4">
                        <p className="text-2xl">Your cart is empty</p>
                        {/* Redirecting to shopping page button */}
                        <Link
                          to="/shop"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Shop Now
                        </Link>
                      </div>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-red-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 capitalize"
                onClick={clearCart}
              >
                clear cart
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
