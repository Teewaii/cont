import { useState } from 'react';
import './App.css';
import './index.css'
import Top from './components/top/Top';
import Nav from './components/nav/Nav';
import Auditing from './components/auditing/Auditing';
import Main from './components/main/Main';
import Chat from './components/chat/Chat'
function App() {
  const [toggle, setToggle] = useState(true);

  function toggleMenu() {
    setToggle(prev => !prev)
  }
  return (
    <div className='bucket relative'>
      <Top
        toggle={toggle}
        toggleMenu={toggleMenu} />
      <Nav
        toggle={toggle}
        toggleMenu={toggleMenu} />
      <Auditing />
      <Main />

      {!toggle &&
        <div onClick={toggleMenu} className="overlay absolute top-0 bottom-0 left-0 right-0 bg-[black] opacity-[0.7]">
          <Chat />
        </div>}

    </div>

  );
}

export default App;
