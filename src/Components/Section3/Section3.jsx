import React from "react";
import Accordion from "./Accordion";

export default function Section3() {
  return (
    <>
      <div className="px-8 lg:px-20 pb-10">
        <h1 className=" font-bold text-2xl lg:text-3xl text-center mb-2">
          Frequently Asked <span className="text-green-600">Questions</span>
        </h1>
        <p className="text-center">
          Digging Deeper: Your Organic FAQ Garden. Find Answers to Common
          Questions about Sustainable Farming, Organic Living, and Our Green
          Initiatives. Cultivate Knowledge, Harvest Insight!
        </p>
        <Accordion />
      </div>
    </>
  );
}
