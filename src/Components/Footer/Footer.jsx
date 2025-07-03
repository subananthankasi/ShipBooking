import React from "react";
import companyLogo from "../../Assets/logo.png";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0a1f44",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Column 1: Logo & Address */}
          <div className="col-md-3 mb-4">
            <img
              src={companyLogo}
              alt="Company Logo"
              style={{ width: "100px" }}
            />
            <p className="mt-1">
              Palm Jumeirah, Dubai <br />
              United Arab Emirates
              <br />
              Zip Code: 123456
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="col-md-3 mb-4 text-center">
            <h5>About</h5>
            <ul className="list-unstyled footer_text">
              <li className="">About Us</li>
              <li>ORGANISATION</li>
              <li>FAQ’s</li>
              <li> WORK WITH US</li>
              <li>Privacy Policy</li>
              <li>CONTACT US</li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-md-3 mb-4 text-center">
            <h5>Services</h5>
            <ul className="list-unstyled footer_text">
              <li>Yacht Rental</li>
              <li>Event Booking</li>
              <li>Corporate Packages</li>
              <li>Luxury Cruises</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-md-3 mb-4 text-center ">
            <h5>Contact Us</h5>
            <p>
              Phone:+97152564209
              <br />
              Email: titanyachtsofficial@gmail.com
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <FacebookIcon
                className="facebook_icon"
                sx={{ fontSize: 21 }}
                onClick={() =>
                  window.open("https://www.facebook.com/titanyachtsofficial", "_blank")
                }
              />
              <InstagramIcon
                className="insta_icon"
                sx={{ fontSize: 21 }}
                onClick={() =>
                  window.open(" https://instagram.com/titan_yachts_official", "_blank")
                }
              />
              <WhatsAppIcon className="whatsapp_icon" sx={{ fontSize: 21 }}  onClick={() =>
                        window.open("https://wa.me/971525644209", "_blank")
                      }/>
              <TwitterIcon className="twitter_icon" sx={{ fontSize: 21 }} />
            </div>
          </div>
        </div>
        <hr style={{ borderTop: "1px solid white" }} />
        <p className="text-center mt-3 mb-0 p-0">
          © 2025 Titan Yacht Rental Dubai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
