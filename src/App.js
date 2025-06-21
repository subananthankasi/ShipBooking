
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* check */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/contact" element={<div>Contact Us Page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
