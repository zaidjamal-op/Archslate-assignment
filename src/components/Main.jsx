import React from 'react'
import profile from "../assets/profile.png"
import email from "../assets/emailwhite.svg"
import star from "../assets/starwhite.svg"
import sharewhite from "../assets/sharewhite.svg"

function Main() {
  return (
      <div className='grid grid-cols-4 gap-3 mt-5 mb-4'>
          <div className="col-span-3 bg-white p-3 box-border rounded-md">
              <div className="w-[80%] mx-auto space-y-4">
                  <div>
                       <h1 className='text-lg font-semibold'>About this role </h1>
                  <p className='mt-2'>Short overview about job and the way that the candidate would fit into the company. Can also include extra instructions for the application process if any exist.</p>
                  </div>
                   <div>
                       <h1 className='text-lg font-semibold'>Responsibilities</h1>
                     <ul className="list-disc px-7">
                          <li>specific day to day taks 

</li><li>deliverables</li><li>work environment requirements
</li><li>role within the current team
</li><li>etc.</li>
                  </ul>
                  </div>
                  <div>
                      <h1 className='text-lg font-semibold'>Skills</h1>
                      <ul className="list-disc px-7">
                          <li>software skills
</li><li>technical skills</li><li>soft skills

</li><li>other
</li>
                  </ul>
                      
                  </div>
                  <div>
                      <h1 className='text-lg font-semibold'>Qualifications</h1>
                      Required
                      <ul className="list-disc px-7">
                          
                          <li>education
</li><li>licenses and certifications
</li><li>experience needed

</li>
                      </ul>
                      Bonus
                      <ul className="list-disc px-7">
                          
                          <li>education
</li><li>licenses and certifications
</li><li>experience needed

</li>
                  </ul>
                      
                  </div>
                  <div>
                      <h1 className='text-lg font-semibold'>Rate</h1>
                      <ul className="list-disc px-7">
                          <li>if available</li>
                  </ul>
                      
                  </div>
                  <div>
                      <h1 className='text-lg font-semibold'>Time Estimate</h1>
                      <ul className="list-disc px-7">
                          <li>if applicable</li>
                  </ul>
                      
                  </div>
                   <div>
                      <h1 className='text-lg font-semibold'>Work Autoriation</h1>
                      <ul className="list-disc px-7">
                          <li>tbd</li>
                  </ul>
                      
                  </div>
                  <div>
                      <h1 className='text-lg font-semibold'>About Company</h1>
                     <p className='mt-2'>Description of company with any uniform info or disclaimers - equal hiring opportunity, etc.
</p>
                      
                  </div>
                   <div className='flex items-center flex-wrap gap-4'>
                           <button className='apply text-white text-xl font-bold rounded-3xl py-2 px-6 transition-all ease-linear duration-150 hover:opacity-90'>
                          Apply on Archslate
                      </button>
                      <button className='bg-black text-white text-xl font-bold rounded-3xl py-2 px-6 transition-all ease-linear duration-150 hover:opacity-90 flex items-center gap-2'>
                          <img src={star} />
                          Save
                      </button>
                     <button className='bg-black text-white text-xl font-bold rounded-3xl py-2 px-6 transition-all ease-linear duration-150 hover:opacity-90 flex items-center gap-2'>
                          <img src={sharewhite} />
                          Share & Refer
                      </button>
                     </div>
              </div>
          </div>
          <div className="col-span-1 bg-white rounded-md p-4 box-border h-52 sticky top-0">
              <div className="w-[70%] mx-auto">
                  <h1 className='text-lg font-bold'>Job Poster</h1>

                  <div className='mt-4 flex items-center gap-2'>
                      <img src={profile} />
                      <div>
                          <h1 className='text-lg'>John Carlos</h1>
                          <span className='text-sm font-semibold'>Project Manager</span>
                      </div>
                  </div>
                  <div className='flex items-center justify-center'>
                      <div className='py-1 px-6 mt-5 bg-black text-white rounded-3xl flex items-center gap-2 hover:cursor-pointer'>
                      <img src={email} className="bg-transparent" />
                     <span className='font-bold'>Message</span>
                  </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Main