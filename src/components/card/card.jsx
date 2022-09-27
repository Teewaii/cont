import React from 'react'
 import hero from '../../img/hero.svg';
 import headShot from '../../img/headshot.svg'

export default function Card() {
  return (
   
   <div className="w-[600px] h-[280px] border-[1px] border-grey100 rounded-[5px]">
      <img src={hero} alt="" />

      <div className="profile ">
        <img className='rounded-full border-[5px] border-[white] w-[130px] h-[130px]' src={headShot} alt="" />
      </div>
    </div>
  )
}
