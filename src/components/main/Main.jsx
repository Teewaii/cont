import React from 'react';

import Card from '../../components/card/Card';
import Chat from '../../components/chat/Chat';
import About from '../about/About';

export default function Main({toggle,toggleMenu}) {
  return (
    <div className='main container xl:flex lg:gap-[30px] xl:justify-between'>
   <div className="left flex flex-col xl:flex-1">
     <Card />
     <About/>
     </div>
     <div className="chatt">
      <Chat className='xl:flex-[0.7]' />
      </div>
      {toggle &&
      <div className="overlay absolute top-0 bottom-0 left-0 right-0 bg-[black] opacity-[0.7]">
                
                </div>}
    </div>
  )
}
