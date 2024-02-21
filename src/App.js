
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';

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
    <BrowserRouter>
   <>
    {/* <Navbar name="InspireMe" mode={Mode} toggleMode={toggleMode}/>
    <Quote mode={Mode}/>
    <Footer mode={Mode}/> */}

<Navbar name="InspireMe" mode={Mode} toggleMode={toggleMode}/>
<Footer mode={Mode}/>
<Routes>
<Route path="/about" element={<About mode={Mode}/>} />
<Route path = "/" element={<Quote mode={Mode}/>}/>




</Routes>
   </>
</BrowserRouter>
  );
}

export default App;
