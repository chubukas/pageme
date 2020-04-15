import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { context } from "../../context";
import SkillBar from "../skillbar";

const About = () => {
  const { skills, social } = useContext(context);

  const displaySkills = skills.map((item, i) => {
    const skillLength = Math.round(skills.length / 2);

    return i === skillLength ? (
      <div className="col-md-6" key={i}>
        <SkillBar
          key={i}
          skillName={item.name}
          skillLevel={item.percent}
        ></SkillBar>
      </div>
    ) : (
      <div className="col-md-6" key={i}>
        <SkillBar
          key={i}
          skillName={item.name}
          skillLevel={item.percent}
        ></SkillBar>
      </div>
    );
  });

  const displaySocialIcons = social.map((item, i) => {
    return (
      <a target="_blank" rel="noopener noreferrer" key={i} href={item.link}>
        <FontAwesomeIcon key={i} icon={item.icon} />
      </a>
    );
  });

  return (
    <div className="container mb-4">
      <div className="aboutMe">
        <div className="row">
          <div className=" about-header mx-auto">
            <h2>LET ME INTRODUCE MYSELF</h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className=" col-md-6 picsHolder animated bounceInRight delays-3s">
            <img
              src="/images/ebuka.jpg"
              className="img-fluid "
              alt="Chukwuebuka"
            />
            <div className="social-aria">{displaySocialIcons}</div>
          </div>
          <div className="col-md-6 font-weight-bolder animated bounceInLeft delays-3s">
            <p className="myName">
              Hello, I am{" "}
              <span className="text-warning">Chukwuebuka Anyadiegwu</span>
            </p>
            <p className="my-2 stack">FullStack Developer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              numquam ipsam ut deleniti perferendis aliquid ullam, voluptatibus
              nam sunt eum laudantium cupiditate iste, obcaecati deserunt
              dolores aliquam quia cum minus animi ipsa est facere culpa fugiat,
              maxime quam! Itaque aperiam sequi accusantium impedit recusandae
              nobis quod sunt deserunt provident omnis.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h5>My Skills</h5>
          <div className="row">{displaySkills}</div>
        </div>
        <div className="col-md-6">
          <div className="experience-area">
            <div className="d-flex flex-row years-area">
              <h2 className="p-3 years">3</h2>
              <h2>
                <span>Years</span>
                <span>Experience</span>
                <span>Working</span>
              </h2>
            </div>
            <div className="d-flex flex-row flex-wrap call-area">
              <span className="px-3">
                <FontAwesomeIcon icon={faPhone} size="2x" rotation={90} />
              </span>
              <div className="call-now">
                <p className="text-uppercase text-warning">Call Now</p>
                <span className="py-2 phone">(+234)-80-667-02567</span>
              </div>
            </div>
            <div className="bg-panel"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
