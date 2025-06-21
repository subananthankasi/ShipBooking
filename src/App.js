
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/contact" element={<div>Contact Us Page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
