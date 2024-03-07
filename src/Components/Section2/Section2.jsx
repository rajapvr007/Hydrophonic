import React from 'react'
import Section2_img from '../../assets/section2_img.png'
import Tick from '../../assets/tick.png'

export default function Section2() {
  return (
    <>
    <section>
        <div className="box-border  lg::px-24 md:gap-x-16  lg:flex  sm:flex-col items-center px-24 lg:flex-row pb-20 md:flex lg:justify-between w-full ">
            <div className="img ">
                <img src={Section2_img} alt="img" className='' />
            </div>
            <div className='ml-5 mt-7 '>
                <h1 className='text-3xl font-bold'>They <span className='text-green-600'>Choose Us</span></h1>
                <p className='mt-3 mb-3 font-light text-sm'>Rooted in Trust: Why They Choose Us. Join the Growing Community Embracing Sustainable Farming, Wholesome Harvests, and the Organic Lifestyle. Cultivate Change with a Trusted Partner.</p>
                <ul className=''>
                    <div className='flex m-5'>
                        <img src={Tick} alt="" className='w-5 h-5 mr-2' />
                        <li>Expertise In Organic Farming</li>
                    </div>
                    <div className='flex m-5'>
                        <img src={Tick} alt="" className='w-5 h-5 mr-2' />
                        <li>Healthier Living</li>
                    </div>
                    <div className='flex m-5'>
                        <img src={Tick} alt="" className='w-5 h-5 mr-2' />
                        <li>Farm-to-Table Freshness</li>
                    </div>
                    <div className='flex m-5'>
                        <img src={Tick} alt="" className='w-5 h-5 mr-2' />
                        <li>Certified Organic Assurance</li>
                    </div>
                </ul>
            </div>
        </div>
    </section> 
    </>
  )
}
