import React from 'react'
import share from '../../img/share.svg'
export default function Nav({toggle,toggleMenu}) {
    return (
        <div className='relative border-t-[1px] border-b-[1px] border-grey100 bg-[red] '>
          
          <div className="bucket container flex items-center justify-between  ">
            <div className="navLink  ">
                <ul className={toggle?'hidden py-[19.5px] lg:flex gap-[40px] ':'py-[19.5px] flex flex-col gap-[20px] bg-[#eeeeee] pb-[45px] absolute z-30 top- left-0 right-0 '}>
                    <li className='text-[14px] font-medium active:font-bold text-grey-header first-letter 
                    container border-b-2 pb-[20px] border-grey100                    '><a className=' lg:focus:border-b-4  lg:focus:border-blue focus:ease-in-out duration-150 lg:py-[18px]' href="#">Overview</a></li>
                    <li className='text-[14px] font-medium active:font-bold text-grey-header first-letter 
                    container  border-b-2 pb-[20px] border-grey100     
                    '><a className='lg:focus:border-b-4  lg:focus:border-blue focus:ease-in-out duration-150 lg:py-[18px]' href="#">Description</a></li>
                    <li className='text-[14px] font-medium active:font-bold text-grey-header first-letter 
                    container border-b-2 pb-[20px] border-grey100                    '><a className='lg:focus:border-b-4  lg:focus:border-blue focus:ease-in-out duration-150 lg:py-[18px]' href="#">About the seller</a></li>
                    <li className='text-[14px] font-medium active:font-bold text-grey-header first-letter 
                    container border-b-2 pb-[20px] border-grey100                    '><a className='lg:focus:border-b-4  lg:focus:border-blue focus:ease-in-out duration-150 lg:py-[18px]' href="#">Order details</a></li>
                </ul>
            </div>
         
            <div className="share hidden border-l-[1px] border-r-[1px] h-[60px] lg:flex items-center justify-center cursor-pointer border-grey100 px-[22px]  hover:bg-grey100 hover:ease-in duration-150 share">
                <img className='w-[14px] h-[16px]' src={share} alt="" />
            </div>
            </div>
        </div>
    )
}
