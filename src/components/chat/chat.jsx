import React from 'react'
import headShot from '../../img/headshot.svg';
import pin from '../../img/attache.svg';
import Meeting from '../meeting/Meeting';

export default function
    () {
    return (
        <div className="chatContainer flex flex-col items-center">
        <div className='card px-[18px]  border-[1px] border-grey100 rounded-[5px] min-w-[470px]  mb-[20px]'>
          <div className="head flex  justify-between items-center mt-[18px] mb-[63px] ">
          <div className="user flex gap-[6px]">
            <div className="shot">
            <img className=' w-[38px] h-[38px] left-[38px] ' src={headShot} alt="" />
             
            </div>
           <div className=" flex flex-col gap-[1px]">
                <div className="name flex items-center">
                <h1 className='text-grey-header font-medium text-[12px] mr-[10px]'>Carlos Cruz</h1>
                <p className='font-semibold text-grey-body inline-block mr-[2px] text-[9px]' >14:02</p><span className='text-grey300 text-[9px]'> Local time</span>
                </div>
                <small className='text-grey300  text-[9px]'>Average response time:<span className='font-semibold text-grey-body ml-[2px] text-[9px]'>3 hours</span></small>
            </div>
            </div>
            <div className="open">
                <small className='text-blue text-[10px] cursor-pointer'>Open in your conversations</small>
            </div>
            </div>

            <div className="msgs">
        <div className="prim-user flex flex-col items-end gap-[5px] ">
            <span className='text-[10px] text-grey300'>You 11:40</span>
            <p className='bg-grey100 text-[13px] max-w-[232px]  p-[10px]  rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] mb-[10px]'>Hey Carlos</p>
        </div>

        <div className="sec-user flex flex-col items-start gap-[5px] ">
            <span className='text-[10px] text-grey300'>Carlos 12:00</span>
            <p className='bg-grey-blue text-[13px] max-w-[232px]  p-[10px] w-fit rounded-tl-[7px] rounded-tr-[7px] rounded-br-[7px]'>Hi!</p>
        </div>

        <div className="prim-user flex flex-col items-end gap-[5px] ">
            <span className='text-[10px] text-grey300'>You 13:20</span>
            <p className='bg-grey100 text-[13px]  p-[10px] max-w-[232px] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] mb-[10px]'>Would you be available in June to travel to Sapporo?</p>
        </div>
        </div>
<form action="#"
className='flex my-[20px]  w-[100%] '
>
        <div className="msgbox flex mr-[10px] items-center relative w-[100%]">
            <input className='placeholder:text-[12px] pl-[20px] py-[13px] h-[40px] w-[100%] focus:outline-none focus:opacity-70 bg-grey100 rounded-l-[3px] ' type="text" placeholder='Write a message...' />
           <img className='absolute right-[10px]' src={pin} alt="" />
        </div>

        <button
        className='bg-grey300 py-[6px] px-[22px] rounded-r-[3px] ml-[-10px] text-[white] hover:opacity-80 hover:ease-in-out duration-150 '
        >Send
        </button>
        </form>
        
        </div>
        <Meeting/>
        </div>
    )
}
