import React from 'react'
import Logo from '../assets/logoblue.png'
import LogoText from '../assets/Archslate.png'
import spark from "../assets/spark.svg"
import community from "../assets/community.svg"
import jobs from "../assets/jobs.svg"
import person from "../assets/person.svg"
import email from "../assets/email.svg"
import HeaderLink from './HeaderLink'

function Header() {
  return (
      <div className='box-border bg-white shadow-md w-full p-1'>
      <div className='xl:w-[95%] mx-auto flex justify-between items-center'>
         <div className='bg-white flex items-center gap-2 p-2'>
              <img src={Logo} />
          <img src={LogoText}/>
          </div>
          
              <div className='flex items-center space-x-8'>
          <HeaderLink logo={spark} title="Candidates" />
          <HeaderLink logo={community} title="Companies" />
          <HeaderLink logo={jobs} title="Jobs" />
          <HeaderLink logo={email} title="Notifications" />
          <HeaderLink logo={person} title="User Name"/>
              </div>
          
         </div>
    </div>
  )
}

export default Header