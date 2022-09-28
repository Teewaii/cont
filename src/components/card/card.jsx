import React from 'react'
import hero from '../../img/hero.svg';
import headShot from '../../img/headshot.svg';
import location from '../../img/location.svg'
import shortlist from '../../img/shortlist.svg'


export default function Card() {
    return (

        <div className="flex flex-col flex-[1] justify-end h-[20rem] bg-hero-bg bg-no-repeat bg-contain border-[1px] relative border-grey100 rounded-[5px]">
            {/* <img class='min-w-[600px]' src={hero} alt="card-hero-image" /> */}

            <div className="profile flex justify-end ">
            <img className='rounded-full border-[5px] border-[white] w-[130px] h-[130px] left-[35px] absolute mt-[-12%] ' src={headShot} alt="" />
               
                <div className="userdata flex items-end gap-[10px] ml-[30px] mb-[25px]">
                
                 <div className="flex justify-between gap-[53px]">

                    <div className=' flex flex-col gap-[20px]  border-blue '>
                    <div className="info flex flex-col gap-[4px] ">
                        <h1 className="text-[21px] text-grey-header font-[800] name">Carlos Cruz</h1>
                        <span className='text-[12px] text-grey300'>Health & Safety and Food Safety auditor </span>
                        </div>

                    <div className="location flex items-center gap-[10px]">
                        <span>
                        <img src={location} alt="location" /></span>
                    <p className='text-[12px] text-grey300'>Lisbon, Portugal</p>
                </div>

                </div>
                <div className="flex bg-grey100 items-center cursor-pointer px-[20px] py-[15px] rounded-[3px] font-bold text-grey-header text-[12px] gap-[10px] mr-[20px] h-[40px]  hover:bg-[white] hover:ease-in duration-150 shortlist">
                        <img className='' src={shortlist} alt="" />
                        <p>Shortlist</p>                   
                    </div>

                    </div>                   
                </div>

                
                

            </div>
        </div>
    )
}
