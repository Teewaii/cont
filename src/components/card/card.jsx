import React from 'react'
import hero from '../../img/hero.svg';
import headShot from '../../img/headshot.svg';
import location from '../../img/location.svg'
import shortlist from '../../img/shortlist.svg'


export default function Card() {
    return (
        <div className='CardContainer rounded-[5px] border-[1px] lg:overflow-hidden 
        pb-[30px] relative mt-6
        lg:pb-[20px] lg:mt-0 border-grey100
     
        '>
            <div className="hero  bg-hero-bg bg-no-repeat bg-cover min-h-[82px] 
            bg:rounded-4
            lg:min-h-[280px]">
                {/* <img className='object-fill w-[850px] ' src={hero} alt="" /> */}
            </div>
            <div className="user flex justify-between pt-[20px] mt-[-40px]  ">
                <div className="user  flex gap-[8px] ">
                    <div className="pix flex
                    absolute top-[-30px] right-[40%]
                    lg:top-0 lg:relative lg:right-0
                    ">
                        <img
                            className='rounded-full border-[4px] border-[white]  w-[76px] h-[76px] 
                            
                            lg:w-[150px] lg:h-[150px] lg:ml-[20px] lg:border-[5px]' src={headShot} alt="" />
                    </div>
                    <div className=' flex flex-col items-start justify-center gap-[20px]
                    mt-[30px] ml-[17px] lg:mt-0 lg:ml-[0]
                   '>
                        <div className="info flex flex-col gap-[4px] ">
                            <h1 className="name text-[18px] text-grey-header font-[800] 
                            lg:text-[21px]
                            ">Carlos Cruz</h1>
                            <span className='text-[11px] text-grey300
                            lg:text-[12px]
                            '>Health & Safety and Food Safety auditor </span>
                        </div>
                        <p className='text-[11px] text-grey300 flex items-center justify-center 
                        lg:text-[12px]
                        '><span className='inline-block mr-[10px]'>
                            <img src={location} alt="location" /></span>Lisbon, Portugal</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center gap-[20px]
                 mt-[30px] lg:mt-0
                
                ' >
                    <p className="shortlist  flex bg-grey100 items-center cursor-pointer text-[10px] px-[10px] py-[18px] rounded-[3px] font-bold text-grey-header
                     h-[30px]
                     lg:text-[12px]  lg:px-[20px] lg:py-[15px] gap-[10px] mr-[20px] lg:h-[40px]  
                         
                     hover:opacity-70 hover:ease-in duration-150 "
                    >  <img src={shortlist} alt="" />Shortlist</p>
                    <span className='invisible'>fff</span>
                </div>

            </div>
        </div>

    )
}
