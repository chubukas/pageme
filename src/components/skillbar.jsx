import React, { useEffect } from "react";
import $ from "jquery";
import jQuery from "jquery";

const SkillBar = ({ skillName, skillLevel }) => {
  useEffect(() => {
    var offsetTop = $("#skills").offset().top;
    $(window).on("scroll", function() {
      var height = $(window).height();
      if ($(window).scrollTop() + height > offsetTop) {
        jQuery(".skillbar").each(function() {
          jQuery(this)
            .find(".skillbar-bar")
            .animate(
              {
                width: jQuery(this).attr("data-percent")
              },
              1000
            );
        });
      }
    });
  }, []);

  return (
    // <!-- Skill Area -->
    <div id="skills" className="skill-area">
      {/* <!-- Single skill --> */}
      <div className="single-skill">
        <div className="skillbar" data-percent={`${skillLevel}%`}>
          <div className="skillbar-title">
            <span>{skillName}</span>
          </div>
          <div className="skillbar-bar"></div>
          <div className="skill-bar-percent">{skillLevel} %</div>
        </div>
      </div>
      {/* <!-- //Single skill --> */}
    </div>

    // <!-- //Skill Area -->
  );
};

export default SkillBar;
