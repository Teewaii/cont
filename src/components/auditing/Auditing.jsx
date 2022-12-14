import React from 'react'
import caret from '../../img/rightCaret.svg'

export default function auditing() {
  return (
    <div className='container mt-[30px] 
    lg:mt-[60px] mb-[20px]'>
      <ul className="flex gap-[11px] items-center">
        <li className='text-[14px] text-blue font-medium '><a href="#">Auditing services</a></li>
        <img className='w-[6px] h-[12px]' src={caret} alt="" />

        <li className='text-[14px] text-blue font-medium '><a href="#">ISO auditors</a></li>
      </ul>
    </div>
  )
}
