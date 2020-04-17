import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="col-lg-4 col-md-6 graphic">
      <div className="single-portfolio">
        <a href={project.link} rel="noopener noreferrer" target="_blank">
          <img
            src={`${project.image}`}
            alt={project.projectname}
            className="img-fluid"
          />
        </a>

        <div className="portfolio-hover">
          <h6>
            Project : <span>{project.projectname}</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
