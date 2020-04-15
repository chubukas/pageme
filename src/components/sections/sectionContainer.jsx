import React from "react";
import About from "./about";
import Services from "./services";
import Project from "./projects";
import Clients from "./clients";
import SimpleReactLightbox from "simple-react-lightbox";

const SectionContainer = () => {
  return (
    <>
      <About />
      <Services />
      <SimpleReactLightbox>
        <Project />
      </SimpleReactLightbox>
      <Clients />
    </>
  );
};

export default SectionContainer;
