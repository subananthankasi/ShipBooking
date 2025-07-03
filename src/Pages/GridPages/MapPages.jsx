import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel styles

import demovideo_1 from "../../Assets/Videos/demovideo_1.mp4";
import demovideo_2 from "../../Assets/Videos/demovideo_2.mp4";
import demovideo_3 from "../../Assets/Videos/demovideo_3.mp4";
import demovideo_4 from "../../Assets/Videos/demovideo_4.mp4";

const MapPages = () => {
  const videos = [demovideo_1, demovideo_2, demovideo_3, demovideo_4];

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Carousel with Videos */}
        <div className="col-lg-6 col-12">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            showArrows={true}
            interval={8000}
            swipeable
          >
            {videos.map((video, index) => (
              <div key={index}>
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  className="w-100"
                  height="450"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Google Map */}
        <div className="col-lg-6 col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28899.870956793926!2d55.13174015!3d25.1193271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1529c2653b15%3A0x3dcabcae764a3e16!2sPalm%20Jumeirah!5e0!3m2!1sen!2sin!4v1750764372522!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapPages;
