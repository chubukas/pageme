import React, { useContext} from "react";
import { SRLWrapper } from "simple-react-lightbox";
import ProjectItem from "../projectItem";
import Filters from "../filters";
import { context } from "../../context";

const Projects = () => {
  const theContext = useContext(context);
  const { project, stateProject, filterButtons, activeButton } = theContext;

  const projects = stateProject.map((item, i) => (
    <ProjectItem project={item} key={i} />
  ));

    const uniqueType = (items, value) => {
      return [...new Set(items.map((item) => item[value]))];
    };

    let unquieButtons = uniqueType(project, "type");
    unquieButtons = ["all", ...unquieButtons];

    
   const buttonsFilters = unquieButtons.map((item, i) => (
      <Filters
        key={i}
        name={item}
        actions={filterButtons}
        active={activeButton}
      />
    ));


  return (
    <section className="section-padding portfolio-area bg-light py-5">
      <div className="container">
        {/* <!-- Section Title --> */}
        <div className="row justify-content-center">
          <div className="col-lg-6 ">
            <div className="section-title text-center">
              <h2>Recent Work</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        {/* <!-- //Section Title --> */}
        <div className="row justify-content-center">
          {/* <!-- Work List Menu--> */}
          <div className="col-8">
            <div className="work-list text-center">
              <ul>{buttonsFilters}</ul>
            </div>
          </div>
          {/* <!-- // Work List Menu --> */}
        </div>
        <SRLWrapper>
          <div className="row portfolio">{projects}</div>
        </SRLWrapper>
      </div>
    </section>
  );
};

export default Projects;
