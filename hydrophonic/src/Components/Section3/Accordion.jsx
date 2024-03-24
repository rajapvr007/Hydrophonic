import React, { useState } from 'react'
import Accor from './Accor';

export default function Accordion() {
    const [accordions, setAccordion] = useState([ 
        { 
            key: 1, 
            ques: 'Do you specialize in both residential and commercial landscaping?', 
            desc: "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
            isOpen: false
        }, 
        { 
            key: 2, 
            ques: 'Do you provide sustainable and eco-friendly landscaping options?', 
            desc: "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
            isOpen: false
        }, 
        { 
            key: 3, 
            ques: ' How do I request a consultation or estimate for my landscaping project?', 
            desc: "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
            isOpen: false
        }, 
        { 
            key: 4, 
            ques: 'What factors influence the cost of a landscaping project?', 
            desc: "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
            isOpen: false
        }, 
        { 
            key: 5, 
            ques: 'How often should I schedule landscape maintenance services?', 
            desc: "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
            isOpen: false
        }, 
    ]); 
  
    const toggleAccordion = (accordionkey) => { 
        const updatedAccordions = accordions.map((accord) => { 
            if (accord.key === accordionkey) { 
                return { ...accord, isOpen: !accord.isOpen }; 
            } else { 
                return { ...accord, isOpen: false }; 
            } 
        }); 
  
        setAccordion(updatedAccordions); 
    }; 
    return (
        <>
            <div className="p-2 my-8"> 
                {accordions.map((accordion) => ( 
                    <Accor 
                        key={accordion.key} 
                        title={accordion.ques} 
                        data={accordion.desc} 
                        isOpen={accordion.isOpen} 
                        toggleAccordion={() => toggleAccordion(accordion.key)} 
                    /> 
                ))} 
            </div> 
        </>
    )
}
