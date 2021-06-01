import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { selectAbout } from "../../features/data/selectors"
import { useAppSelector } from '../../app/hooks';


const AboutMe = ({ children: Element }) => {

  const aboutMe = useAppSelector(selectAbout);

  const allAboutMe = aboutMe.map(({ icon, abt }, i) =>
  (
    <div className="row mt-3" key={i}>
      <div className="col-1 links">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="col-10">
        <span className="ml-4">
          {abt}
        </span>
      </div>
    </div>
  )
  )

  return (
    <>
      <div className="col-lg-4 text-center mt-4">
        <img className="img-fluid img-thumbnail rounded bg-warning" src="/images/programer.gif" alt="programmer" />
      </div>
      <div className="col-lg-7 mt-4">
        <p className="fw-bolder">Ok, Lets start...</p>
        <div className="container">
          {allAboutMe}
        </div>
        {Element}
      </div>
    </>
  );
}

export default AboutMe;