
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Home/HomePage';
import Footer from './Components/Footer/Footer';
import ContactForm from './Pages/ContactForm';

function App() {
  return (
    <div className="App">
      {/* check */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/" element={<Footer/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/contact" element={<div>Contact Us Page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
