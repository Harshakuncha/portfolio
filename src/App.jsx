import './App.css';
import "./style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Recruiters from './pages/Recruiters';
import ContactMe from './pages/ContactMe';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/recruiters" element={<Recruiters/>}/>
        <Route path="/ContactMe" element={<ContactMe/>}/>
      </Routes>
    </BrowserRouter>
     
      {/* <h2>Hey, Good morning</h2> */}
      
    </div>
  );
}

export default App;