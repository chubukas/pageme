/* eslint-disable jsx-a11y/anchor-has-content */
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars, faHome,
  faAddressBook, faUserSecret,
  faFileContract, faSuitcase
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { MobileNav, NonMobileNav, MobileDropDown } from "./StyledComponents"


const NavBar = () => {

  const [dropDown, setDropDown] = useState<boolean>(false);
  const [location, setlocation] = useState<string>("");

  const [homeActive, setHomeActive] = useState<boolean>(false);
  const [aboutActive, setAboutActive] = useState<boolean>(false);
  const [resumeActive, setResumeActive] = useState<boolean>(false);
  const [contactActive, setContactActive] = useState<boolean>(false);
  const [portfolioActive, setPortfolioActive] = useState<boolean>(false);

  const Location = useLocation();

  useEffect(() => {

    setlocation(() => Location.pathname)

    switch (location) {
      case "/":
        setHomeActive(() => true);
        break;
      case "/about":
        setAboutActive(() => true)
        break;
      case "/resume":
        setResumeActive(() => true)
        break;
      case "/portfolio":
        setPortfolioActive(() => true)
        break;
      case "/contact":
        setContactActive(() => true)
        break;
      default:
        break;
    }

  }, [Location.pathname, location])


  return (
    <>
      <NonMobileNav>
        <ul>
          <Link to="/">
            <li className={homeActive ? `active` : ""}>Home</li>
          </Link>
          <Link to="/about">
            <li className={aboutActive ? `active` : ""}>About</li>
          </Link>
          <Link to="/resume">
            <li className={resumeActive ? `active` : ""}>Resume</li>
          </Link>
          <Link to="/portfolio">
            <li className={portfolioActive ? `active` : ""}>PortFolio</li>
          </Link>
          <Link to="/contact">
            <li className={contactActive ? `active` : ""}>Contact</li>
          </Link>
        </ul>
      </NonMobileNav>
      <MobileNav>
        <button className="fs-4 text-white" onClick={() => setDropDown(!dropDown)}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* {dropDown && */}
        <div className={`${dropDown ? "d-block" : "d-none"}`}>
          <MobileDropDown>
            <ul>
              <Link to="/">
                <li className={homeActive ? `active` : ""}>
                  <FontAwesomeIcon icon={faHome} />
                </li>
              </Link>
              <Link to="/about">
                <li className={aboutActive ? `active` : ""}>
                  <FontAwesomeIcon icon={faUserSecret} />
                </li>
              </Link>
              <Link to="/resume">
                <li className={resumeActive ? `active` : ""}>
                  <FontAwesomeIcon icon={faFileContract} />
                </li>
              </Link>
              <Link to="/portfolio">
                <li className={portfolioActive ? `active` : ""}>
                  <FontAwesomeIcon icon={faSuitcase} />
                </li>
              </Link>
              <Link to="/contact">
                <li className={contactActive ? `active` : ""}>
                  <FontAwesomeIcon icon={faAddressBook} />
                </li>
              </Link>
            </ul>
          </MobileDropDown>
        </div>
        {/* } */}
      </MobileNav>
    </>
  );
}

export default NavBar;

