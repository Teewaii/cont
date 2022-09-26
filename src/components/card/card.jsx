import React from 'react'
import share from '../../img/share.svg'
export default function Card() {
  return (
    <div className='px-[10.6rem] lg:px-[6rem] flex items-center justify-between relative border-t-[1px] border-b-[1px] border-grey100'>
      <div className="navLink">
        <ul className=' py-[19.5px] flex gap-[40px] '>
          <li className='text-[14px] font-medium active:font-bold text-grey-header'><a href="#">Overview</a></li>
          <li className='text-[14px] font-medium active:font-bold text-grey-header'><a href="#">Description</a></li>
          <li className='text-[14px] font-medium active:font-bold text-grey-header'><a href="#">About the seller</a></li>
          <li className='text-[14px] font-medium active:font-bold text-grey-header'><a href="#">Order details</a></li>
        </ul>
      </div>

      <div className="b border-l-[1px] border-r-[1px] h-[60px] flex items-center justify-center cursor-pointer border-grey100 px-[22px] share">
        <img className='w-[14px] h-[16px]' src={share} alt="" />
      </div>
    </div>
  )
}
