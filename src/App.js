
import './App.css';
import './index.css'
import Top from './components/top/Top';
import Nav from './components/nav/Nav';
import Auditing from './components/auditing/Auditing';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <Top />
      <Nav />
      <Auditing/>
      <Main/>
    </>
  );
}

export default App;
