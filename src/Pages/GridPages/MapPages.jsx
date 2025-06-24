import React from "react";
import smallbanner from "../../Assets/smallbanner.png";

const MapPages = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img
              src={smallbanner}
              style={{ width: "100%", height: "450px" }}
              alt=""
            />
          </div>
          <div className="col-lg-6 col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28899.870956793926!2d55.13174015!3d25.1193271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1529c2653b15%3A0x3dcabcae764a3e16!2sPalm%20Jumeirah!5e0!3m2!1sen!2sin!4v1750764372522!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapPages;
