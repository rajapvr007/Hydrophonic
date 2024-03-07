import React from "react";
import HomePic from "../../assets/000001.png";

export default function HeroSection() {
  return (
    <div>
      <header>
        <div className="relative  outline bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={HomePic}
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">Hydroponics</h1>
            <p className="text-lg text-gray-300 mb-8">
            Dive into a world of freshness with Hydroponic, where we cultivate nature's bounty to bring you the crispiest, tastiest, and most vibrant organic green vegetables. Elevate your plate, and let the goodness grow right from our farms to your table!
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
