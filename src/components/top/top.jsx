import React from 'react'
import logo from '../../img/Logo.svg'

export default function top() {
    return (
        <div className=' px-[10.6rem] lg:px-[6rem] py-[33px] flex justify-between items-center'>
            <div className="block w-[234px] pr[328.5px]">
                <img src={logo} alt="" />
            </div>

            <div className="flex flex-row justify-end gap-[40px] items-center">
                <ul className="flex gap-[41px]">
                    <li className="text-grey-header font-semibold text-[16px]"><a href='#'>Conversations</a></li>
                    <li className="text-grey-header font-semibold text-[16px]"><a href='#'>Calender</a></li>
                </ul>

                <div className="flex items-center searchbar ">
                    <input className='w-[257px] py-[10px] focus:outline-none border-2 border-grey300 pl-[20px] pr-[34px] rounded-tl-[5px] rounded-bl-[5px]' type="text" placeholder='Find services for your business' />
                    <button className='bg-blue hover:bg-blueHover ease-in delay-100 p-2 w-[48px] h-[48px] flex items-center justify-center rounded-tr-[5px] rounded-br-[5px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
