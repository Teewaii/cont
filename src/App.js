import { useState } from 'react';
import './App.css';
import './index.css'
import Top from './components/top/Top';
import Nav from './components/nav/Nav';
import Auditing from './components/auditing/Auditing';
import Main from './components/main/Main';

function App() {
  const[toggle, setToggle]=useState(true);

  function toggleMenu(){
    setToggle(prev=>!prev)
  }
  return (
    <>
      <Top
      toggle={toggle}
      toggleMenu={toggleMenu} />
      <Nav
      toggle={toggle}
      toggleMenu={toggleMenu} />
      <Auditing/>
      <Main/>
    </>
  );
}

export default App;
