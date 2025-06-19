import React from "react";
import logo from "../../../src/Assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Navbar = () => {
  return (
    <header className="vs-header header-layout1">
      <div className="container">
        <div className="header-top">
          <div className="row justify-content-between align-items-center">
            <div className="col d-none d-lg-block text-start p-1">
              <ul className="header-contact">
                <li>
                  <i className="fas fa-phone-alt"><EmailIcon/> </i>
                  <a href="mailto:titanyachtsofficial@gmail.com">titanyachtsofficial@gmail.com</a>
                </li>
                <li>
                  <i className="fas fa-phone-alt"><CallIcon/>  </i>
                  <a href="tel:+97152564429">+97152564429</a>
                </li>
              </ul>
            </div>
            <div className="col-auto">
              <div className="header-social">
                <a href="#"><FacebookIcon/></a>
                <a href="#"><InstagramIcon/></a>
                <a href="#"><WhatsAppIcon/></a>
                <a href="#"><TwitterIcon/></a>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-wrapper">
        <div className="sticky-active">
          <div className="container position-relative z-index-common">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="vs-logo">
                  <Link to="/">
                    <img src={logo} alt="logo" style={{ width: "150px", height: "120px" }} />
                  </Link>
                </div>
              </div>

              <div className="col text-end text-xl-center">
                <nav className="main-menu menu-style1 d-none d-lg-block">
                  <ul>
                    <li className="menu-item-has-children">
                      <Link to="#">Home</Link>
                      <ul className="sub-menu">
                        <li><Link to="/">Home One</Link></li>
                        <li><Link to="/home2">Home Two</Link></li>
                        <li><Link to="/home3">Home Three</Link></li>
                        <li><Link to="/home4">Home Four</Link></li>
                        <li><Link to="/home5">Home Five</Link></li>
                        <li><Link to="/home6">Home Six</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">About Us</Link>
                      <ul className="sub-menu">
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/destination-details">Destination Details</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
