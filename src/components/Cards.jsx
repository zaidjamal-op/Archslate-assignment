import React from 'react'
import light from "../assets/light.svg"
import lightwhite from "../assets/light-white.svg"
import star from "../assets/star.svg"
import dollar from "../assets/dollar.svg"
import location from "../assets/location.svg"

function Cards() {
  return (
      <div className='grid grid-cols-4 gap-3 mt-3'>
          <div className='bg-white  h-48 p-3 rounded-md hover:-translate-y-2 hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer'>
              <div className='flex items-center justify-center gap-3 relative '>
                  <img src={light} className="absolute bg-transparent left-5"/>
                  <h1 className='text-lg font-semibold'>Software Skills</h1>
              </div>
              <div className='flex items-center justify-center gap-2 flex-wrap w-3/4 mx-auto mt-4'>
                  <div className='py-1 px-3 bg-black text-white rounded-3xl flex items-center gap-2'>
                      <img src={lightwhite} className="bg-transparent" />
                      Rhino
                  </div>
                  <div className='py-1 px-3 bg-black text-white rounded-3xl'>Sketchup</div>
                    <div className='py-1 px-3 bg-black text-white rounded-3xl'>Vectorworks</div>
              </div>
          </div>
          <div className='bg-white  h-48 p-3 rounded-md hover:-translate-y-2 hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer'>
              <div className='flex items-center justify-center gap-3 relative '>
                  <img src={star} className="absolute bg-transparent left-5"/>
                  <h1 className='text-lg font-semibold'>Experience</h1>
              </div>
              <div className='flex items-center justify-center gap-2 flex-wrap w-[45%] mx-auto mt-4'>
                 <span className='text-center text-2xl'>Associate 3+ years</span>
              </div>
          </div>
            <div className='bg-white  h-48 p-3 rounded-md hover:-translate-y-2 hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer'>
              <div className='flex items-center justify-center gap-3 relative '>
                  <img src={dollar} className="absolute bg-transparent left-5"/>
                  <h1 className='text-lg font-semibold'>Rate</h1>
              </div>
              <div className='flex items-center justify-center gap-2 flex-wrap w-[45%] mx-auto mt-4'>
                 <span className='text-center text-2xl'>$55-$65/hour</span>
              </div>
          </div>
          <div className='bg-white h-48 p-3 rounded-md hover:-translate-y-2 hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer'>
              <div className='flex items-center justify-center gap-3 relative '>
                  <img src={location} className="absolute bg-transparent left-5"/>
                  <h1 className='text-lg font-semibold'>Location</h1>
              </div>
              <div className='flex items-center justify-center gap-2 flex-wrap w-[55%] mx-auto mt-4'>
                 <span className='text-2xl'>Bozeman, MT USA</span>
              </div>
              <div className='flex items-center w-[55%] mx-auto mt-2'>
                  <div className='py-1 px-4 bg-[#FCCDED] rounded-3xl text-center font-semibold'>on-site</div>
               </div>
          </div>
    </div>
  )
}

export default Cards