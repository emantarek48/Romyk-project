import React from "react";
import "../assets/css/Blog.css";
import clientimg from "../assets/images/client-img.png";

function Blog() {
  return (
    
    <section className="testimonial-section py-5">
        <div className="fixed"></div>
      <div className="container text-center">
        <h1 className="fw-bold mb-5">Testimonial</h1>

        <div className="testimonial-box mx-auto shadow p-5 bg-white rounded ">
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">

              {/* Slide 1 */}
              <div className="carousel-item active">
                <p className="testimonial-text">
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint
                </p>
                <h5 className="mt-4 fw-bold">Marri Fen</h5>
                <img
                  src={clientimg}
                  className="client-img mt-3 "
                  alt="Client"
                />
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <p className="testimonial-text">
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                </p>
                <h5 className="mt-4 fw-bold">Marri Fen</h5>
                <img
                  src={clientimg}
                  className="client-img mt-3 "
                  alt="Client"
                />
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <p className="testimonial-text">
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                </p>
                <h5 className="mt-4 fw-bold">Marri Fen</h5>
                <img
                  src={clientimg}
                  className="client-img mt-3 "
                  alt="Client"
                />
              </div>
            </div>

           
            <button
              className="carousel-control-prev custom-arrow"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button
              className="carousel-control-next custom-arrow"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
