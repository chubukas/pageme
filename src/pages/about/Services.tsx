import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { MyServices } from "./styleAbout"
import { selectServices } from "../../features/data/selectors"
import { useAppSelector } from '../../app/hooks';


const Services = () => {

  const services = useAppSelector(selectServices)

  const allServices = services.map(({ icon, service }, i) =>
  (
    <div className="col-6 col-md-3 text-center my-3 my-xl-0" key={i}>
      <MyServices>
        <FontAwesomeIcon icon={icon} className="fs-5" /><br />
        <span>{service}</span>
      </MyServices>
    </div>
  )
  )

  return (
    <>
      <div className="my-4">
        <p className="fw-bolder">Let Talk About My Services...</p>
        <div className="container">
          <div className="row">
            {allServices}
          </div>
        </div>
      </div>

      <small>
        <p>
          Now that you have known alot about me ,
          i will like to know about you,
          if you don't mind.
        </p>
        <p>
          Lets hangout over a cup
          {" "} <FontAwesomeIcon icon={faCoffee} />{" "}
          of coffee and discuss some of your ideas.
        </p>
        <p>
          Don't be shy to {" "}
          <Link className="text-decoration-none links" to="/contact">
            contact me
          </Link>{" "} or call me on
          <a className="text-decoration-none links" href="tel:{+234 806 670 2567}">
            {" "} +234 806 670 2567{" "}
          </a>,
          am always available for a talk, i can't wait to hear from you soon.
        </p>
      </small>
    </>
  );
}

export default Services;