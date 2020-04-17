import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { context } from "../context";

const Footer = () => {
  const { social } = useContext(context);
  const displaySocialIcons = social.map((item, i) => {
    return (
      <a target="_blank" rel="noopener noreferrer" key={i} href={item.account}>
        <FontAwesomeIcon key={i} icon={item.icon} />
      </a>
    );
  });

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="site-logo text-center py-4">
          <img
            src="/images/ebuka.jpg"
            alt="logo"
            className="rounded-circle"
            width="50"
            height="50"
          />
        </div>
        <div className="social text-center">
          <h6 className="text-uppercase">Follow me</h6>
          {displaySocialIcons}
        </div>
        <div className="copyrights text-center">
          <p className="para">
            Copyright {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
