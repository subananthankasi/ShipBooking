import React from "react";
import "./Grid.css";
import Gulf_1 from "../../Assets/GridImg/Gulfcraft/Gulfcraft1.png";
import Gulf_2 from "../../Assets/GridImg/Gulfcraft/Gulfcraft2.jpeg";
import Gulf_3 from "../../Assets/GridImg/Gulfcraft/Gulfcraft3.jpeg";
import Gulf_4 from "../../Assets/GridImg/Gulfcraft/Gulfcraft4.jpeg";
import Gulf_5 from "../../Assets/GridImg/Gulfcraft/Gulfcraft5.jpeg";
import Gulf_6 from "../../Assets/GridImg/Gulfcraft/Gulfcraft6.jpeg";
import Gulf_7 from "../../Assets/GridImg/Gulfcraft/Gulfcraft7.jpeg";
import Gulf_8 from "../../Assets/GridImg/Gulfcraft/Gulfcraft8.jpeg";
import Gulf_9 from "../../Assets/GridImg/Gulfcraft/Gulfcraft9.jpeg";
import Gulf_10 from "../../Assets/GridImg/Gulfcraft/Gulfcraft10.jpeg";
import Gulf_11 from "../../Assets/GridImg/Gulfcraft/Gulfcraft11.jpeg";
import Gulf_12 from "../../Assets/GridImg/Gulfcraft/Gulfcraft12.jpeg";
import Gulf_13 from "../../Assets/GridImg/Gulfcraft/Gulfcraft13.jpeg";
import Mejesty_50_1 from "../../Assets/GridImg/Mejesty_50/Mejesty_50_1.jpeg";
import Mejesty_70_1 from "../../Assets/GridImg/Mejesty_70/Mejasty_70_1.jpeg";
import Azimut_1 from "../../Assets/GridImg/Azimut/Azimut_1.jpeg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PartyPages from "./PartyPages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import banner_Img from "../../Assets/GridImg/panorama-dubai-marina-sunset-600nw-687119689 .jpeg";

const GridPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration
      // only animate once
    });
  }, []);

  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          <div className="col " data-aos="zoom-in-right">
            <div className="card p-0">
              <img
                src={Gulf_2}
                alt=""
                style={{ height: "250px", width: "100%", objectFit: "" }}
              />
              <div style={{ backgroundColor: "#f9f2eb" }}>
                <div className="row align-items-center px-3 mt-2 mb-2">
                  <div className="col-6">
                    <h5 className="text-center card-title ">Gulfcraft 2</h5>
                  </div>

                  <div className="col-6 d-flex justify-content-end gap-2">
                    <button className="booking_btn">
                      <WhatsAppIcon />{" "}
                    </button>
                    <button className="booking_btn">Book Now</button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                <div className="row m-0 p-0">
                  <div className="col-4 p-0 m-0">
                    <p className="p-0 m-0 content_name">Length</p>
                    <p className="fw-bold p-0 m-0">55 FT</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{
                      borderLeft: "1px solid #ccc",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    <p className="p-0 m-0 content_name">Capacity</p>
                    <p className="fw-bold p-0 m-0">55 PAX</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{ borderLeft: "1px solid #ccc" }}
                  >
                    <p className="p-0 m-0 content_name">Price</p>
                    <p className="fw-bold p-0 m-0">55 AED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col " data-aos="zoom-in-up">
            <div className="card p-0">
              <img
                src={Mejesty_70_1}
                alt=""
                style={{ height: "250px", width: "100%", objectFit: "" }}
              />
              <div style={{ backgroundColor: "#f9f2eb" }}>
                <div className="row align-items-center px-3 mt-2 mb-2">
                  <div className="col-6">
                    <h5 className="text-center card-title ">Gulfcraft 2</h5>
                  </div>

                  <div className="col-6 d-flex justify-content-end gap-2">
                    <button className="booking_btn">
                      <WhatsAppIcon />{" "}
                    </button>
                    <button className="booking_btn">Book Now</button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                <div className="row m-0 p-0">
                  <div className="col-4 p-0 m-0">
                    <p className="p-0 m-0 content_name">Length</p>
                    <p className="fw-bold p-0 m-0">55 FT</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{
                      borderLeft: "1px solid #ccc",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    <p className="p-0 m-0 content_name">Capacity</p>
                    <p className="fw-bold p-0 m-0">55 PAX</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{ borderLeft: "1px solid #ccc" }}
                  >
                    <p className="p-0 m-0 content_name">Price</p>
                    <p className="fw-bold p-0 m-0">55 AED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in-left">
            <div className="card p-0">
              <img
                src={Azimut_1}
                alt=""
                style={{ height: "250px", width: "100%", objectFit: "" }}
              />
              <div style={{ backgroundColor: "#f9f2eb" }}>
                <div className="row align-items-center px-3 mt-2 mb-2">
                  <div className="col-6">
                    <h5 className="text-center card-title ">Gulfcraft 2</h5>
                  </div>

                  <div className="col-6 d-flex justify-content-end gap-2">
                    <button className="booking_btn">
                      <WhatsAppIcon />{" "}
                    </button>
                    <button className="booking_btn">Book Now</button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                <div className="row m-0 p-0">
                  <div className="col-4 p-0 m-0">
                    <p className="p-0 m-0 content_name">Length</p>
                    <p className="fw-bold p-0 m-0">55 FT</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{
                      borderLeft: "1px solid #ccc",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    <p className="p-0 m-0 content_name">Capacity</p>
                    <p className="fw-bold p-0 m-0">55 PAX</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{ borderLeft: "1px solid #ccc" }}
                  >
                    <p className="p-0 m-0 content_name">Price</p>
                    <p className="fw-bold p-0 m-0">55 AED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in-right">
            <div className="card p-0">
              <img
                src={Azimut_1}
                alt=""
                style={{ height: "250px", width: "100%", objectFit: "" }}
              />
              <div style={{ backgroundColor: "#f9f2eb" }}>
                <div className="row align-items-center px-3 mt-2 mb-2">
                  <div className="col-6">
                    <h5 className="text-center card-title ">Gulfcraft 2</h5>
                  </div>

                  <div className="col-6 d-flex justify-content-end gap-2">
                    <button className="booking_btn">
                      <WhatsAppIcon />{" "}
                    </button>
                    <button className="booking_btn">Book Now</button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                <div className="row m-0 p-0">
                  <div className="col-4 p-0 m-0">
                    <p className="p-0 m-0 content_name">Length</p>
                    <p className="fw-bold p-0 m-0">55 FT</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{
                      borderLeft: "1px solid #ccc",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    <p className="p-0 m-0 content_name">Capacity</p>
                    <p className="fw-bold p-0 m-0">55 PAX</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{ borderLeft: "1px solid #ccc" }}
                  >
                    <p className="p-0 m-0 content_name">Price</p>
                    <p className="fw-bold p-0 m-0">55 AED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in-up">
            <div className="card p-0">
              <img
                src={Azimut_1}
                alt=""
                style={{ height: "250px", width: "100%", objectFit: "" }}
              />
              <div style={{ backgroundColor: "#f9f2eb" }}>
                <div className="row align-items-center px-3 mt-2 mb-2">
                  <div className="col-6">
                    <h5 className="text-center card-title ">Gulfcraft 2</h5>
                  </div>

                  <div className="col-6 d-flex justify-content-end gap-2">
                    <button className="booking_btn">
                      <WhatsAppIcon />{" "}
                    </button>
                    <button className="booking_btn">Book Now</button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                <div className="row m-0 p-0">
                  <div className="col-4 p-0 m-0">
                    <p className="p-0 m-0 content_name">Length</p>
                    <p className="fw-bold p-0 m-0">55 FT</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{
                      borderLeft: "1px solid #ccc",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    <p className="p-0 m-0 content_name">Capacity</p>
                    <p className="fw-bold p-0 m-0">55 PAX</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{ borderLeft: "1px solid #ccc" }}
                  >
                    <p className="p-0 m-0 content_name">Price</p>
                    <p className="fw-bold p-0 m-0">55 AED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in-left">
            <div className="card p-0">
              <img
                src={Azimut_1}
                alt=""
                style={{ height: "250px", width: "100%", objectFit: "" }}
              />
              <div style={{ backgroundColor: "#f9f2eb" }}>
                <div className="row align-items-center px-3 mt-2 mb-2">
                  <div className="col-6">
                    <h5 className="text-center card-title ">Gulfcraft 2</h5>
                  </div>

                  <div className="col-6 d-flex justify-content-end gap-2">
                    <button className="booking_btn">
                      <WhatsAppIcon />{" "}
                    </button>
                    <button className="booking_btn">Book Now</button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                <div className="row m-0 p-0">
                  <div className="col-4 p-0 m-0">
                    <p className="p-0 m-0 content_name">Length</p>
                    <p className="fw-bold p-0 m-0">55 FT</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{
                      borderLeft: "1px solid #ccc",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    <p className="p-0 m-0 content_name">Capacity</p>
                    <p className="fw-bold p-0 m-0">55 PAX</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{ borderLeft: "1px solid #ccc" }}
                  >
                    <p className="p-0 m-0 content_name">Price</p>
                    <p className="fw-bold p-0 m-0">55 AED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-4 mb-2"
        style={{ position: "relative", height: "300px" }}
      >
        <img
          className="p-0 m-0"
          src={banner_Img}
          alt=""
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />

        <div
          className="row m-0 p-3"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "8px",
            width: "100%",
            height: "300px",
          }}
        >
          {/* Left Column - Text */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <p className="banner_h mb-2 fw-bold fs-5">
              Special Offers on Yacht Rental in Dubai – Cheap and Best Options
            </p>
            <p className="banner_p fs-6" style={{ fontSize: "14px" }}>
              Ready to embark on an unforgettable adventure? Contact us today to
              book your best luxury yacht rental in Dubai. Our dedicated team is
              available 24/7 to assist you with your booking and ensure a
              seamless experience.
            </p>
          </div>

          {/* Right Column - Button */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            <button
              style={{
                backgroundColor: "#25D366",
                border: "none",
                borderRadius: "25px",
                color: "white",
                fontWeight: "bold",
                padding: "10px 20px",
                fontSize: "16px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <WhatsAppIcon style={{ fontSize: "20px" }} /> WhatsApp
            </button>
          </div>
        </div>
      </div>

      <PartyPages />
    </>
  );
};

export default GridPage;
