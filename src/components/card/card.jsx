import React from 'react'
import hero from '../../img/hero.svg';
import headShot from '../../img/headshot.svg';
import location from '../../img/location.svg'
import shortlist from '../../img/shortlist.svg'


export default function Card() {
    return (
        <div className="card flex flex-col justify-end  h-[350px] bg-hero-bg bg-no-repeat bg-contain border-[1px] relative  border-grey100 rounded-[5px]">
            <div className="user flex justify-between mt-[50px] absolute bottom-[10px] left-[0] right-0 border-2 border-blue">
                <div className="user flex gap-[8px]">
                    <div className="pix flex">
                        <img
                            className='rounded-full border-[5px] border-[white] w-[150px] h-[150px] ml-[20px] ' src={headShot} alt="" />
                    </div>
                    <div className=' flex flex-col items-start justify-center gap-[20px]'>
                        <div className="info flex flex-col gap-[4px] ">
                            <h1 className="text-[21px] text-grey-header font-[800] name">Carlos Cruz</h1>
                            <span className='text-[12px] text-grey300'>Health & Safety and Food Safety auditor </span>
                        </div>
                        <p className='text-[12px] text-grey300 flex items-center justify-center  '><span className='inline-block mr-[10px]'>
                            <img src={location} alt="location" /></span>Lisbon, Portugal</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center gap-[20px]' >
                    <p className="flex bg-grey100 items-center cursor-pointer px-[20px] py-[15px] rounded-[3px] font-bold text-grey-header text-[12px] gap-[10px] mr-[20px] h-[40px]  hover:opacity-70 hover:ease-in duration-150 shortlist"
                    >  <img src={shortlist} alt="" />Shortlist</p>
                    <span className='invisible'>fff</span>
                </div>

            </div>


        </div>
    )
}
