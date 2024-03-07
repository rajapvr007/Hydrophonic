import React from "react";
import ItemsContainer from "./ItemsContainer";


function Footer() {
  return (
    <>
      <footer className="bg-teal-600 text-white">
 
        <ItemsContainer />
        <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-sm pb-8"
      >
        <span>© 2023 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        
      </div>
        
      </footer>
    </>
  );
}

export default Footer;
