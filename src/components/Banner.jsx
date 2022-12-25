import React from 'react'
import arrows from "../assets/arrows.svg"
import banner from "../assets/image 1.png"
import share from "../assets/share.svg"
import badge from "../assets/badge.svg"

function Banner() {
  return (
      <div className='my-4'>
          <div className='flex items-center gap-2 group hover:cursor-pointer w-36'>
              <img src={arrows} className="bg-transparent group-hover:-translate-x-2 transition-all ease-linear duration-150"/>
              <h2 className='text-lg font-bold'>Back to jobs</h2>
          </div>

          <div className='bg-white p-4 box-border mt-2'>
              <div className='flex items-center justify-between'>
                  <div className='flex gap-4 items-center'>
                      <img src={banner} className="w-28 h-32" />
                      <div className='flex flex-col gap-3 my-auto'>
                          <h1 className='text-3xl font-bold'>Architectural Designer</h1>
                          <span className='text-lg'>Black Mountain Architecture</span>
                          <span className='text-lg font-semibold'>Posted 07/27/2022</span>
                      </div>
                  </div>
                   <div className='flex flex-col gap-3 my-auto'>
                      <div className='flex items-center gap-4 justify-end '>
                          <div className='w-9 h-9 hover:bg-gray-200 flex items-center justify-center rounded-full transition-all ease-linear duration-150 cursor-pointer'>
                              <img src={share} className="bg-transparent"/>
                          </div>
                          <div className='w-9 h-9 hover:bg-gray-200 flex items-center justify-center rounded-full transition-all ease-linear duration-150 cursor-pointer'>
                              <img src={badge}  className="bg-transparent"/>
                           </div>
                          </div>
                      <div className='py-1 px-3 bg-[#BBFEB5] text-lg font-semibold rounded-md'>
                          Status: Accepting Applications
                          </div>
                      <div className='flex items-center justify-end'>
                           <button className='apply text-white text-xl font-bold rounded-3xl py-2 px-6 transition-all ease-linear duration-150 hover:opacity-90'>
                          Apply on Archslate
                    </button>
                     </div>
                    </div>
              </div>
              <div className='flex items-center gap-3 flex-wrap mt-4'>
                  <div className='py-1 px-4 bg-black text-white rounded-3xl'>Architecture</div>
                  <div className='py-1 px-4 bg-[#E7FFCD] font-semibold rounded-3xl'>Freelance</div>
                  <div className='py-1 px-4 bg-[#CCE6FF] font-semibold rounded-3xl'>Long-Term</div>
              </div>
          </div>

    </div>
  )
}

export default Banner