import React from 'react'

export default function Accor(props) {
  return (
    <>
      <div className="border rounded-md mb-1 "> 
            <button 
                className="w-full p-4 text-left bg-gray-200  
                           hover:bg-green-400 transition duration-100"
                onClick={props.toggleAccordion} 
            > 
                {props.title} 
                <span className={`float-right transform ${props.isOpen ?  
                                 'rotate-180' : 'rotate-0'}  
                                 transition-transform duration-300`}> 
                    &#9660; 
                </span> 
            </button> 
            {props.isOpen && ( 
                <div className="p-4 bg-green-200"> 
                    {props.data} 
                </div> 
            )} 
        </div> 
    </>
  )
}
