import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBusinessTime,
  faMoneyBill,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

const WhyChooseMe = () => {
  return (
    <section className="why-section">
      <div className="container">
        {/* <!-- Section Title --> */}
        <div className="row justify-content-center">
          <div className="col-lg-6 ">
            <div className="section-title text-center">
              <h2>Why choose Me</h2>
              <p>This is why we stand out.</p>
            </div>
          </div>
        </div>
        {/* <!-- //Section Title --> */}
        <div className="row">
          {/* <!-- Single Why choose me --> */}
          <div className="col-md-6">
            <div className="single-why-me why-me-left">
              <div className="why-me-icon">
                <div className="d-table">
                  <div className="d-table-cell">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                </div>
              </div>
              <h4>Delivers on time</h4>
              <p>
                Time is considered seriously, all projects are completed before
                the desired period.
              </p>
            </div>
          </div>
          {/* <!-- // Single Why choose me --> */}

          {/* <!-- Single Why choose me --> */}
          <div className="col-md-6">
            <div className="single-why-me why-me-right">
              <div className="why-me-icon">
                <div className="d-table">
                  <div className="d-table-cell">
                    <FontAwesomeIcon icon={faBusinessTime} />
                  </div>
                </div>
              </div>
              <h4>Delivers the best product</h4>
              <p>
                I deliver the best of what you have asked for and more, this is why
                my customers keeps coming back.
              </p>
            </div>
          </div>
          {/* <!-- // Single Why choose me --> */}

          {/* <!-- Single Why choose me --> */}
          <div className="col-md-6">
            <div className="single-why-me why-me-left">
              <div className="why-me-icon">
                <div className="d-table">
                  <div className="d-table-cell">
                    <FontAwesomeIcon icon={faChalkboardTeacher} />
                  </div>
                </div>
              </div>
              <h4>Updates you with new technologies</h4>
              <p>
                Updating you on the latest softwares and top notch solution is
                what solidifies the business.
              </p>
            </div>
          </div>
          {/* <!-- // Single Why choose me -->

          <!-- Single Why choose me --> */}
          <div className="col-md-6">
            <div className="single-why-me why-me-right">
              <div className="why-me-icon">
                <div className="d-table">
                  <div className="d-table-cell">
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </div>
                </div>
              </div>
              <h4>Gives the right price</h4>
              <p>
                I give you the best price you can't find any where, just try and
                see what am taking about.
              </p>
            </div>
          </div>
          {/* <!-- // Single Why choose me --> */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
