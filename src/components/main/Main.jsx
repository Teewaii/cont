import React from 'react';

import Card from '../../components/card/Card';
import Chat from '../../components/chat/Chat';

export default function Main() {
  return (
    <div className='xl:px-[10.6rem] lg:px-[6rem] flex gap-[30px]  justify-between'>
      <Card />
      <Chat />
    </div>
  )
}
