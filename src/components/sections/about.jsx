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
      <a target="_blank" rel="noopener noreferrer" key={i} href={item.account}>
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
              Dynamic and creative software developer with over 5 years of
              experience in producing robust code for high-volume companies.
              Eager to support the dev team at your company with top-notch
              coding skills. In previous roles, doubled code-efficiency of the
              company, and increased customer retention by 30% among others.
            </p>
            <p>
              I have 5 years of production experience with JavaScript, PHP,
              Mysql and 3 years of production experience with Vue, React,
              Express js, node js and Mongodb.
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
              <h2 className="p-3 years">{new Date().getFullYear() - 2015}</h2>
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
