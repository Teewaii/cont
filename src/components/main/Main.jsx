import React from 'react';

import Card from '../../components/card/Card';
import Chat from '../../components/chat/Chat';
import About from '../about/About';

export default function Main() {
  return (
    <div className='xl:px-[10.6rem] lg:px-[6rem] flex gap-[30px] justify-between'>
   <div className="left flex flex-col flex-1">
     <Card />
     <About/>
     </div>
     <div className="chatt">
      <Chat className='flex-[0.8]' />
      </div>
    </div>
  )
}
