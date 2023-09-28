import React from "react";
import heroImg from "../../assets/img/hero-img.png";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <div className="banner-content">
            <h2>Let’s figure this out together.</h2>
            <p>
              Computer moving at a snail’s pace? Can’t figure out the office
              WiFi password? Need help getting a new employee set up? You’ve
              come to the right place! Our service catalog is here to guide you
              to someone who can help.
            </p>
            <a href="#" className="btn btn-custom">
              Get Help
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="banner-img">
            <img src={heroImg} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
