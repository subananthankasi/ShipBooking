import React from "react";
import homepagepic from "../../Assets/HomePic.jpg";
import { Carousel } from "react-responsive-carousel";
import banner from "../../Assets/banner-bg-1.png";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      {/* <div>
        <Carousel>
          <div className="">
            <img src={homepagepic} />
            <p className="legend">Boat 1</p>
          </div>
          <div>
            <img src={homepagepic} />
            <p className="legend">Boat 2</p>
          </div>
          <div>
            <img src={homepagepic} />
            <p className="legend">Boat 3</p>
          </div>
        </Carousel>
      </div> */}
      <section
        className="hero-layout"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <div className="hero-mask">
          <div
            className="vs-carousel"
            id="hero-slider"
            data-slide-show="1"
            autoplay="false"
          >
            <div className="">
              <div className="container" style={{padding:"80px"}}>
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6">
                    <div className="hero-content">
                      <span className="hero-subtitle">Let's Go Now</span>
                      <h1 className="hero-title">
                        Explore Sea And Find The Beauty
                      </h1>
                      <p className="hero-text">
                        Cras ultricies ligula sed magna dictum porta. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus. Quisque velit nisi, pretium ut lacignia
                        convallis at tellus.
                      </p>
                      <button className="btn btn-read">Read More</button>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="hero-img align-items-center justify-content-center">
                      <img className="img1" src={homepagepic} alt="hero" />
                      <img className="img2" src={homepagepic} alt="hero" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
