import React from "react";
import WhyChooseMe from "./whyMe";

const Services = () => {
  return (
    <>
      <section className="service-area bg-light">
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="row justify-content-center">
            <div className="col-lg-6 ">
              <div className="section-title text-center mt-4">
                <h2>Service</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          {/* <!-- //Section Title --> */}

          <div className="row servicetext">
            {/* <!-- Single Service --> */}
            <div className="col-lg-4 col-md-6">
              <div className="single-service">
                <div className="text-center">
                  <img src="/images/s3.png" alt="grafix icon" width="40px" />
                </div>
                <h2>Web Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente minima repudiandae amet, accusamus ea impedit aperiam
                  consectetur libero. Deleniti id sit minima.
                </p>
              </div>
            </div>
            {/* <!-- //Single Service -->
          <!-- Single Service --> */}
            <div className="col-lg-4 col-md-6">
              <div className="single-service">
                <div className="text-center">
                  <img src="/images/s4.png" alt="grafix icon" width="40px" />
                </div>
                <h2>Software Development</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente minima repudiandae amet, accusamus ea impedit aperiam
                  consectetur libero. Deleniti id sit minima.
                </p>
              </div>
            </div>
            {/* <!-- //Single Service -->
          <!-- Single Service --> */}
            <div className="col-lg-4 col-md-6">
              <div className="single-service">
                <div className="text-center">
                  <img src="/images/s2.png" alt="grafix icon" width="40px" />
                </div>
                <h2>Grafix Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente minima repudiandae amet, accusamus ea impedit aperiam
                  consectetur libero. Deleniti id sit minima.
                </p>
              </div>
            </div>
            {/* <!-- //Single Service --> */}
          </div>
        </div>
      </section>
      <WhyChooseMe />
    </>
  );
};

export default Services;
