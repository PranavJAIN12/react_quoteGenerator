
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  const[Mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#212121"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
    }
  }
  return (
   <>
    <Navbar name="InspireMe" mode={Mode} toggleMode={toggleMode}/>
    <Quote mode={Mode}/>
    <Footer mode={Mode}/>
   </>
  );
}

export default App;
