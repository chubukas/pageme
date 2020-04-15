import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBusinessTime,
  faMoneyBill,
  faChalkboardTeacher
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                laboriosam, soluta voluptate, quod dolore facilis iusto
                eligendi.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                laboriosam, soluta voluptate, quod dolore facilis iusto
                eligendi.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                laboriosam, soluta voluptate, quod dolore facilis iusto
                eligendi.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                laboriosam, soluta voluptate, quod dolore facilis iusto
                eligendi.
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
