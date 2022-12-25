import React from 'react'

function HeaderLink({logo, title}) {
  return (
    <div  className='flex items-center gap-2 flex-col hover:bg-gray-200 cursor-pointer transition-all ease-linear duration-150 p-2 rounded-md w-20'>
                    <img src={logo} className="bg-transparent w-4 h-4" />
          <span className="text-xs font-bold bg-transparent">{title}</span>
                 </div>
  )
}

export default HeaderLink