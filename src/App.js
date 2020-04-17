import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap/js/dist/collapse";

import "./main.css";
import Navbar from "./components/navbar";
import Preloader from "./components/preloader";
import Hero from "./components/hero";
import SectionContainer from "./components/sections/sectionContainer";
import Footer from "./components/footer";

function App() {
  /*::::::::::::::::::::::::::::::::::::
    Preloader Mounted With Hooks
    ::::::::::::::::::::::::::::::::::::*/

  useEffect(() => {
    $(window).on("load", function () {
      $(".preloader").fadeOut();
    });
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <SectionContainer />
      <Footer></Footer>
    </>
  );
}

export default App;
