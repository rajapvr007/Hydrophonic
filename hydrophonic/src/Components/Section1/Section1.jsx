import React from "react";
import Box from "./Box";
import section1_img from "../../assets/section1_img.png";

export default function Section1() {
  return (
    <>
      <div className=" px-6 py-20 md:px-16">
        <div className="font-montserrat px-8 py-1">
          <h1 className="text-2xl font-bold lg:text-4xl">
            Caring For Your <span className="text-green-600">Private</span>
            <br />
            <span className="text-green-600">Plants</span>, Our Expertise
          </h1>
          <p className=" pt-3">
            "Nurturing Your Green Haven: Where Your Private Plants Blossom, Our
            Expertise Blooms. Cultivating Care, Expertly Tailored for Your
            Personal Organic Oasis."
          </p>
        </div>
        <div className="flex pt-5 lg:flex-row">
          <Box />
        </div>
      </div>
    </>
  );
}
