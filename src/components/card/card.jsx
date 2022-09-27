import React from 'react'
import hero from '../../img/hero.svg';
import headShot from '../../img/headshot.svg';
import location from '../../img/location.svg'
import shortlist from '../../img/shortlist.svg'


export default function Card() {
    return (

        <div className="flex-1 h-[280px] w-full bg-hero-bg bg-no-repeat bg-contain border-[1px] relative border-grey100 rounded-[5px]">
            {/* <img class='min-w-[600px]' src={hero} alt="card-hero-image" /> */}

            <div className="profile flex flex-col gap-[20px] items-start  ml-[180px] mt-[20px]">
                <img className='rounded-full border-[5px] border-[white] w-[130px] h-[130px] left-[35px] bottom-[25px] absolute' src={headShot} alt="" />

                <div className="userdata flex gap-[30px] mr-[20px]">
                    <div className="flex flex-col gap-[4px]">
                        <h1 className="text-[21px] text-grey-header font-[800] name">Carlos Cruz</h1>
                        <span className='text-[12px] text-grey300'>Health & Safety and Food Safety auditor </span>
                    </div>
                    <div className="flex bg-grey100 items-center cursor-pointer px-[20px] py-[16px] rounded-[3px] font-bold text-grey-header text-[12px] gap-[10px] absolute right-[20px] shortlist">
                        <img className='w-[11px] h-[10px]' src={shortlist} alt="" />
                        <p>Shortlist</p>
                    </div>
                </div>

                <div className="location flex items-center gap-[10px]">
                    <span><img src={location} alt="location" /></span>
                    <p className='text-[12px] text-grey300'>Lisbon, Portugal</p>
                </div>

            </div>
        </div>
    )
}
