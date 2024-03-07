import React from "react";
import About_Img1 from "../assets/about_img1.png";
import About_Img2 from "../assets/about_img2.png";
import About_Img3 from "../assets/about_img3.png";

export default function About() {
  return (
    <>
      <div>
        <header>
          <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
            <div class="absolute inset-0">
              <img
                src={About_Img1}
                alt="Background Image"
                class="object-cover object-center w-full h-full"
              />
              <div class="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
              <h1 class="text-5xl font-bold leading-tight mb-4">About Us</h1>
              <p class="text-lg text-gray-300 mb-8">
                Cultivating Nature's Bounty: Sowing Sustainability, Harvesting
                Health with Our Organic Farming Commitment.
              </p>
            </div>
          </div>
        </header>
      </div>

      <section className="">
        <h1 className=" text-center text-xl font-semibold pt-10 lg:text-4xl">
          Welcome to <span className="text-green-600">Hydroponics</span>
        </h1>

        <div className=" grid lg:grid-cols-3 w-full pt-4  my-4">
          <div className="  flex justify-center lg:justify-end lg:px-4">
            <img src={About_Img2} alt="" className="w-72 " />
          </div>
          <div className="lg:col-span-2">
            <p className="sm:pb-4 sm:mx-5 lg:pt-8 px-4  lg:flex lg:justify-start mx-7 my-2 text-sm lg:text-base lg:pr-56 ">
              Where passion meets purpose in the fertile fields of sustainable
              agriculture. Our journey began with a simple yet powerful belief –
              that the earth's bounty, when nurtured with care and respect,
              yields not just crops but a legacy of health and sustainability.{" "}
              At Hydroponics, we are more than just farmers; we are stewards of
              the land, committed to cultivating a greener, healthier future for
              generations to come. Founded on the principles of organic farming,
              we embrace a holistic approach that harmonizes with nature rather
              than exploiting it.
            </p>
          </div>
        </div>
      </section>

      <section className=" ">
        <h1 className=" text-center text-2xl lg:text-4xl font-semibold pt-10">
          Our <span className="text-green-600">Roots</span>Run Deep
        </h1>
        <div className="grid  pt-8 lg:grid-cols-3 md:grid-cols-1 grid-cols-1">
          <div className="col-span-2 lg:py-16 mb-4">
            <p className=" flex justify-end lg:pr-8 lg:pl-52 mx-7 px-5 text-sm  items-center lg:text-base">
              Our story starts in [Year of Establishment], when a group of
              like-minded individuals came together with a shared vision: to
              create a haven for organic cultivation. Over the years, our roots
              have grown deep, intertwining with the rich soil that sustains our
              crops. Today, we stand proud as a beacon of sustainable
              agriculture, dedicated to producing food that not only nourishes
              the body but also nurtures the planet.
            </p>
          </div>
          <div className=" mx-auto lg:mx-0 ">
            <img src={About_Img3} alt="" className=" w-72" />
          </div>
        </div>
      </section>

      <section>
        <h1 className=" text-center text-2xl lg:text-4xl font-semibold pt-10 ">
          Our <span className="text-green-600">Gallery</span>
        </h1>
        <p class="text-sm text-center pb-4 pt-2 mx-8">
          Organic Symphony: A Visual Harvest of Our Journey. Explore the Gallery
          and Witness the Beauty of Sustainable Farming, Wholesome Produce, and
          the Vibrancy of Organic Living.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-2 lg:w-fit md:px-16  px-[10%] pb-[3%] gap-x-3">
          <img src={About_Img2} alt="" className="md:p-8 lg:p-2 " />
          <img src={About_Img2} alt="" className=" md:p-8 lg:p-2" />
          <img src={About_Img2} alt="" className=" md:p-8 lg:p-2" />
          <img src={About_Img2} alt="" className=" md:p-8 lg:p-2" />
        </div>
      </section>
    </>
  );
}
