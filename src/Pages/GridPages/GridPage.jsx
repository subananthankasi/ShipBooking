import React, { useState } from "react";
import "./Grid.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PartyPages from "./PartyPages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import banner_Img from "../../Assets/GridImg/panorama-dubai-marina-sunset-600nw-687119689 .jpeg";
import { Carousel } from "react-responsive-carousel";
import { Dialog } from "primereact/dialog";
import { useNavigate } from "react-router-dom";

const AzimuthImages = require
  .context("../../Assets/GridImg/Azimut", false, /\.(jpe?g|png)$/)
  .keys()
  .map((key) =>
    require(`../../Assets/GridImg/Azimut/${key.replace("./", "")}`)
  );

const GulfImages = require
  .context("../../Assets/GridImg/Gulfcraft", false, /\.(jpe?g|png)$/)
  .keys()
  .map((key) =>
    require(`../../Assets/GridImg/Gulfcraft/${key.replace("./", "")}`)
  );

const MajestyImages = require
  .context("../../Assets/GridImg/Mejesty_70", false, /\.(jpe?g|png)$/)
  .keys()
  .map((key) =>
    require(`../../Assets/GridImg/Mejesty_70/${key.replace("./", "")}`)
  );

const MeridianImages = require
  .context("../../Assets/GridImg/Meridian_45", false, /\.(jpe?g|png)$/)
  .keys()
  .map((key) =>
    require(`../../Assets/GridImg/Meridian_45/${key.replace("./", "")}`)
  );

const CranchiImages = require
  .context("../../Assets/GridImg/Cranchi", false, /\.(jpe?g|png)$/)
  .keys()
  .map((key) =>
    require(`../../Assets/GridImg/Cranchi/${key.replace("./", "")}`)
  );

const RivieraImages = require
  .context("../../Assets/GridImg/Riviera", false, /\.(jpe?g|png)$/)
  .keys()
  .map((key) =>
    require(`../../Assets/GridImg/Riviera/${key.replace("./", "")}`)
  );

const GridPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const [selectedGallery, setSelectedGallery] = useState(null);

  const isOpen = selectedGallery !== null;
  const images =
    selectedGallery === "gulf"
      ? GulfImages
      : selectedGallery === "majesty"
      ? MajestyImages
      : selectedGallery === "azimuth"
      ? AzimuthImages
      : selectedGallery === "meridian"
      ? MeridianImages
      : selectedGallery === "cranchi"
      ? CranchiImages
      : selectedGallery === "riviera"
      ? RivieraImages
      : [];

  const header =
    selectedGallery === "gulf"
      ? "GulfCraft"
      : selectedGallery === "majesty"
      ? "Majesty 70"
      : selectedGallery === "azimuth"
      ? "Azimuth"
      : selectedGallery === "meridian"
      ? "Meridian"
      : selectedGallery === "cranchi"
      ? "Cranchi"
      : selectedGallery === "riviera"
      ? "Riviera"
      : "";

  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          <div className="col " data-aos="zoom-in-right">
            <div className="card p-0">
              <div
                className="p-3"
                onClick={() => setSelectedGallery("gulf")}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={GulfImages[0]}
                  alt=""
                  style={{ height: "230px", width: "100%", objectFit: "" }}
                />
              </div>

              <div style={{ backgroundColor: "#f9f2eb" }}>
                <div className="row align-items-center px-3 mt-2 mb-2">
                  <div className="col-6">
                    <h5 className="text-center card-title ">Gulfcraft </h5>
                  </div>

                  <div className="col-6 d-flex justify-content-end gap-2">
                    {/* <button className="booking_btn">
                      <WhatsAppIcon />{" "}
                    </button> */}
                    <a
                      href="https://wa.me/+971525644209"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="booking_btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <WhatsAppIcon />
                    </a>
                    <button
                      className="booking_btn"
                      onClick={() =>
                        window.open("https://wa.me/971525644209", "_blank")
                      }
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                <div className="row m-0 p-0">
                  <div className="col-4 p-0 m-0">
                    <p className="p-0 m-0 content_name">Length</p>
                    <p className="fw-bold p-0 m-0">60 FT</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{
                      borderLeft: "1px solid #ccc",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    <p className="p-0 m-0 content_name">Capacity</p>
                    <p className="fw-bold p-0 m-0">22 PAX</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{ borderLeft: "1px solid #ccc" }}
                  >
                    <p className="p-0 m-0 content_name">Price</p>
                    <p className="fw-bold p-0 m-0">550 Per Hour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col " data-aos="zoom-in-up">
            <div className="card p-0">
              <div
                className="p-3"
                onClick={() => setSelectedGallery("majesty")}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={MajestyImages[0]}
                  alt=""
                  style={{ height: "230px", width: "100%", objectFit: "" }}
                />
              </div>
              <div style={{ backgroundColor: "#f9f2eb" }}>
                <div className="row align-items-center px-3 mt-2 mb-2">
                  <div className="col-6">
                    <h5 className="text-center card-title ">Majesty</h5>
                  </div>

                  <div className="col-6 d-flex justify-content-end gap-2">
                    {/* <button className="booking_btn">
                      <WhatsAppIcon />{" "}
                    </button> */}
                    <a
                      href="https://wa.me/+971525644209"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="booking_btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <WhatsAppIcon />
                    </a>
                    <button
                      className="booking_btn"
                      onClick={() =>
                        window.open("https://wa.me/971525644209", "_blank")
                      }
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                <div className="row m-0 p-0">
                  <div className="col-4 p-0 m-0">
                    <p className="p-0 m-0 content_name">Length</p>
                    <p className="fw-bold p-0 m-0">70 FT</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{
                      borderLeft: "1px solid #ccc",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    <p className="p-0 m-0 content_name">Capacity</p>
                    <p className="fw-bold p-0 m-0">35 PAX</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{ borderLeft: "1px solid #ccc" }}
                  >
                    <p className="p-0 m-0 content_name">Price</p>
                    <p className="fw-bold p-0 m-0">700 per Hour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in-left">
            <div className="card p-0">
              <div
                className="p-3"
                onClick={() => setSelectedGallery("azimuth")}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={AzimuthImages?.[0]}
                  alt=""
                  style={{ height: "230px", width: "100%", objectFit: "" }}
                />
              </div>
              <div style={{ backgroundColor: "#f9f2eb" }}>
                <div className="row align-items-center px-3 mt-2 mb-2">
                  <div className="col-6">
                    <h5 className="text-center card-title ">Azimuth</h5>
                  </div>

                  <div className="col-6 d-flex justify-content-end gap-2">
                    {/* <button className="booking_btn">
                      <WhatsAppIcon />{" "}
                    </button> */}
                    <a
                      href="https://wa.me/+971525644209"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="booking_btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <WhatsAppIcon />
                    </a>
                    <button
                      className="booking_btn"
                      onClick={() =>
                        window.open("https://wa.me/971525644209", "_blank")
                      }
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                <div className="row m-0 p-0">
                  <div className="col-4 p-0 m-0">
                    <p className="p-0 m-0 content_name">Length</p>
                    <p className="fw-bold p-0 m-0">80 FT</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{
                      borderLeft: "1px solid #ccc",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    <p className="p-0 m-0 content_name">Capacity</p>
                    <p className="fw-bold p-0 m-0">40 PAX</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{ borderLeft: "1px solid #ccc" }}
                  >
                    <p className="p-0 m-0 content_name">Price</p>
                    <p className="fw-bold p-0 m-0">900 Per Hour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in-right">
            <div className="card p-0">
              <div
                className="p-3"
                onClick={() => setSelectedGallery("meridian")}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={MeridianImages?.[1]}
                  alt=""
                  style={{ height: "230px", width: "100%" }}
                />
              </div>
              <div style={{ backgroundColor: "#f9f2eb" }}>
                <div className="row align-items-center px-3 mt-2 mb-2">
                  <div className="col-6">
                    <h5 className="text-center card-title ">Meridian</h5>
                  </div>

                  <div className="col-6 d-flex justify-content-end gap-2">
                    {/* <button className="booking_btn">
                      <WhatsAppIcon />{" "}
                    </button> */}
                    <a
                      href="https://wa.me/+971525644209"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="booking_btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <WhatsAppIcon />
                    </a>
                    <button
                      className="booking_btn"
                      onClick={() =>
                        window.open("https://wa.me/971525644209", "_blank")
                      }
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                <div className="row m-0 p-0">
                  <div className="col-4 p-0 m-0">
                    <p className="p-0 m-0 content_name">Length</p>
                    <p className="fw-bold p-0 m-0">45 FT</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{
                      borderLeft: "1px solid #ccc",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    <p className="p-0 m-0 content_name">Capacity</p>
                    <p className="fw-bold p-0 m-0">15 PAX</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{ borderLeft: "1px solid #ccc" }}
                  >
                    <p className="p-0 m-0 content_name">Price</p>
                    <p className="fw-bold p-0 m-0">450 per hour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in-up">
            <div className="card p-0">
              <div
                className="p-3"
                onClick={() => setSelectedGallery("cranchi")}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={CranchiImages?.[0]}
                  alt=""
                  style={{ height: "230px", width: "100%" }}
                />
              </div>
              <div style={{ backgroundColor: "#f9f2eb" }}>
                <div className="row align-items-center px-3 mt-2 mb-2">
                  <div className="col-6">
                    <h5 className="text-center card-title ">Cranchi</h5>
                  </div>

                  <div className="col-6 d-flex justify-content-end gap-2">
                    {/* <button className="booking_btn">
                      <WhatsAppIcon />{" "}
                    </button> */}
                    <a
                      href="https://wa.me/+971525644209"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="booking_btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <WhatsAppIcon />
                    </a>
                    <button
                      className="booking_btn"
                      onClick={() =>
                        window.open("https://wa.me/971525644209", "_blank")
                      }
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                <div className="row m-0 p-0">
                  <div className="col-4 p-0 m-0">
                    <p className="p-0 m-0 content_name">Length</p>
                    <p className="fw-bold p-0 m-0">44 FT</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{
                      borderLeft: "1px solid #ccc",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    <p className="p-0 m-0 content_name">Capacity</p>
                    <p className="fw-bold p-0 m-0">12 PAX</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{ borderLeft: "1px solid #ccc" }}
                  >
                    <p className="p-0 m-0 content_name">Price</p>
                    <p className="fw-bold p-0 m-0">450 Per hour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in-left">
            <div className="card p-0">
              <div
                className="p-3"
                onClick={() => setSelectedGallery("riviera")}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={RivieraImages?.[0]}
                  alt=""
                  style={{ height: "230px", width: "100%" }}
                />
              </div>
              <div style={{ backgroundColor: "#f9f2eb" }}>
                <div className="row align-items-center px-3 mt-2 mb-2">
                  <div className="col-6">
                    <h5 className="text-center card-title ">Riviera</h5>
                  </div>

                  <div className="col-6 d-flex justify-content-end gap-2">
                    {/* <button className="booking_btn">
                      <WhatsAppIcon />{" "}
                    </button> */}
                    <a
                      href="https://wa.me/+971525644209"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="booking_btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <WhatsAppIcon />
                    </a>
                    <button
                      className="booking_btn"
                      onClick={() =>
                        window.open("https://wa.me/971525644209", "_blank")
                      }
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                <div className="row m-0 p-0">
                  <div className="col-4 p-0 m-0">
                    <p className="p-0 m-0 content_name">Length</p>
                    <p className="fw-bold p-0 m-0">48 FT</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{
                      borderLeft: "1px solid #ccc",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    <p className="p-0 m-0 content_name">Capacity</p>
                    <p className="fw-bold p-0 m-0">15 PAX</p>
                  </div>
                  <div
                    className="col-4 p-0 m-0"
                    style={{ borderLeft: "1px solid #ccc" }}
                  >
                    <p className="p-0 m-0 content_name">Price</p>
                    <p className="fw-bold p-0 m-0">450 Per Hour</p>
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
              onClick={() =>
                window.open("https://wa.me/971525644209", "_blank")
              }
            >
              <WhatsAppIcon style={{ fontSize: "20px" }} /> WhatsApp
            </button>
          </div>
        </div>
      </div>

      <PartyPages />

      <Dialog
        header={header}
        visible={isOpen}
        style={{ width: "70vw" }}
        onHide={() => setSelectedGallery(null)}
      >
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          swipeable
        >
          {images.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                style={{ width: "100%", height: "70vh", objectFit: "cover" }}
              />
            </div>
          ))}
        </Carousel>
      </Dialog>
    </>
  );
};

export default GridPage;
