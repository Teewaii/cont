import React from 'react'
import logo from '../../img/Logo.svg';
import mobileLogo from '../../img/logo-mobile.svg';
import hamburger from '../../img/toggle-icon.svg';


export default function top({toggle,toggleMenu}) {
    return (
        <div className=''>
           
           <div className="bucket container py-[33px] flex justify-between items-center">
            <div className=" 
            lg:w-[234px] pr[328.5px]">
                <img className='hidden lg:block'  src={logo} alt="" />
                <img className='lg:hidden w-[58px]' src={mobileLogo} alt="" />
            </div>

            <div className="flex flex-row justify-end gap-[40px] items-center">
                <ul className="hidden lg:flex gap-[41px]">
                    <li className="text-grey-header font-semibold text-[16px]"><a href='#'>Conversations</a></li>
                    <li className="text-grey-header font-semibold text-[16px]"><a href='#'>Calender</a></li>
                </ul>

                <div className="flex searchbar mx-0 ">
                    <input className='w-[100px] focus:min-w-[180px] text-[12px]  border-b-2 rounded-0                    lg:text-[14px] lg:w-[257px] lg:py-[10px] focus:outline-none lg:border-[1px] border-grey300 lg:pl-[20px]  lg:rounded-tl-[5px] lg:rounded-bl-[5px]' type="text" placeholder='Find services for your business' />
                    <button className=' stroke-grey300
                    w-[26px]
                    lg:bg-blue py-[10px] lg:hover:bg-blueHover ease-in delay-100 lg:w-[46.5px] flex items-center justify-center rounded-tr-[5px] rounded-br-[5px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="
                    w-[20px] h-[20px] lg:stroke-[white]
                    lg:w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </button>
                </div>
            </div>
            <div className="menu-icon w-[24px] h-[20px] lg:hidden" onClick={toggleMenu}>
                <img className='w-full cursor-pointer' src={hamburger} alt="" />
            </div>
            </div>
        </div>
    )
}
