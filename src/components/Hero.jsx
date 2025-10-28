import React from "react";
import "../assets/css/Hero.css";
import bannerimg1 from "../assets/images/bannerimg1.png";
import bannerimg2 from "../assets/images/bannerimg2.png";
import bannerimg3 from "../assets/images/bannerimg3.png";

function Hero() {
  return (
    
    <div id="heroCarousel" className="carousel slide hero-container" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true">01</button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1">02</button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2">03</button>
      </div>
<div className="hero-section">
  <div className="sharethis-inline-share-buttons"></div>
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-12 hero-text">
                <h1>Ice<br />Cream</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <button className="btn-pink">Order Now</button>
              </div>
              <div className="col-md-6 col-12 text-center">
                <img src={bannerimg1} alt="banner 1" className="img-fluid hero-img" />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-12 hero-text">
                <h1>Ice<br />Cream</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <button className="btn-pink">Order Now</button>
              </div>
              <div className="col-md-6 col-12 text-center">
                <img src={bannerimg2} alt="banner 2" className="img-fluid hero-img" />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-12 hero-text">
                <h1>Ice<br />Cream</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <button className="btn-pink">Order Now</button>
              </div>
              <div className="col-md-6 col-12 text-center">
                <img src={bannerimg3} alt="banner 3" className="img-fluid hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
