import React from 'react'
import hero from '../../img/hero.svg';
import headShot from '../../img/headshot.svg';
import location from '../../img/location.svg'
import shortlist from '../../img/shortlist.svg'


export default function Card() {
    return (
        <div className='CardContainer rounded-[5px] border-[1px] lg:overflow-hidden 
        pb-[30px]  
        lg:pb-[20px] lg:mt-0 border-grey100
     
        '>
            <div className="hero  bg-hero-bg bg-no-repeat bg-cover min-h-[82px] 
            bg:rounded-4
            lg:min-h-[280px]">
                {/* <img className='object-fill w-[850px] ' src={hero} alt="" /> */}
            </div>
            <div className="user relative flex justify-between pt-[20px] mt-[-30px] md:mt-[-40px]  ">
                <div className="user  flex gap-[8px] ">

                    <div className="pix flex
                    absolute top-[5px] right-[40%]
                    md:top-0 md:relative md:right-0
                    ">
                        <img
                            className='rounded-full border-[4px] border-[white]  w-[76px] h-[76px] 
                            
                            md:w-[150px] md:h-[150px] md:ml-[20px] md:border-[5px]' src={headShot} alt="" />
                    </div>
                    <div className=' flex flex-col items-start justify-center gap-[20px]
                    mt-[55px] ml-[17px] md:mt-0 md:ml-[0]
                   '>
                        <div className="info flex flex-col gap-[4px] mt-4 ">
                            <h1 className="name text-[18px] text-grey-header font-[800] 
                            md:text-[21px]
                            ">Carlos Cruz</h1>
                            <span className='text-[11px] text-grey300
                            md:text-[12px]
                            '>Health & Safety and Food Safety auditor </span>
                        </div>
                        <p className='text-[11px] text-grey300 flex items-center justify-center 
                        md:text-[12px]
                        '><span className='inline-block mr-[10px]'>
                                <img src={location} alt="location" /></span>Lisbon, Portugal</p>
                    </div>
                </div>

                <div className='shortlist-contflex flex-col justify-center gap-[20px]
                 mt-[75px] lg:mt-0
                
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
