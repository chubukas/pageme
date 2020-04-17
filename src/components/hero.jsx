import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ModalComponent from "./modal";

const Hero = () => {
  const [openModal, setModal] = useState(false);

  const modal = () => setModal(!openModal);

  return (
    /* // <!-- ====== Hero Area ====== --> */
    <div className="hero-aria" id="home">
      {/* <!-- Hero Area Content --> */}
      <div className="container">
        <div className="hero-content">
          <h1 className="text-uppercase pb-3 animated fadeInDownBig delays-3s">
            Hey...
          </h1>
          <h2 className="text-uppercase pb-3 animated zoomInDown delays-5s">
            I am Chukwuebuka
          </h2>
          <h3 className="text-uppercase pb-3 animated lightSpeedIn delays-8s">
            <span>FullStack Developer</span>
          </h3>
          <div className="d-flex">
            <button
              className="button smooth-scroll bg-white text-dark"
              onClick={modal}
            >
              Contact Me
            </button>
            <a
              href="/images/Chukwuebuka Anyadiegwu.pdf"
              className="button smooth-scroll ml-5 text-white"
              download="Chukwuebuka Anyadiegwu CV"
            >
              Get CV
            </a>
          </div>
        </div>
      </div>
      {/* <!-- // Hero Area Content -->
        <!-- Hero Area Slider --> */}
      <div className="hero-area-slids">
        <Carousel infiniteLoop autoPlay showArrows={false} showThumbs={false}>
          {/* <!-- Single Background --> */}
          <div className="slider-bg">
            <img
              src="/images/hero-area/img-2.jpg"
              alt="heroPics"
              height="625px"
            />
          </div>

          {/* <!-- Single Background --> */}
          <div className="slider-bg">
            <img
              src="/images/hero-area/img-1.jpg"
              alt="heroPics"
              height="625px"
            />
          </div>
        </Carousel>
      </div>
      {/* <!-- // Hero Area Slider --> */}
      {openModal ? <ModalComponent toggles={true}></ModalComponent> : null}
    </div>
  );
};

export default Hero;
