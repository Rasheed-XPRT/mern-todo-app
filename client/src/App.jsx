import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from './components/Navbar';
import { useState } from 'react';
import './styles/Home.css'; 
import './styles/Navbar.css'; 
function App(){
  const [darkMode, setDarkMode] = useState(false);
  return(
    <BrowserRouter>
       <div className={darkMode ? "dark-theme" : "light-theme"}>
       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;