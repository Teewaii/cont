import React from 'react';

import Card from '../../components/card/Card';
import Chat from '../../components/chat/Chat';
import About from '../about/About';

export default function Main() {
  return (
    <div className='main container xl:flex lg:gap-[30px] xl:justify-between'>
   <div className="left flex flex-col xl:flex-1">
     <Card />
     <About/>
     </div>
     <div className="chatt">
      <Chat className='xl:flex-[0.7]' />
      </div>
    </div>
  )
}
