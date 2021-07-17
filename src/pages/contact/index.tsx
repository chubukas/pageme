import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faSmileWink} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Header } from "../about/styleAbout"
import PageLayout from "../PageLayout";
import Form from "./Form";

export interface ContactPageProps {

}

const ContactPage = () => {
  return (
    <>
      <PageLayout>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header>
                Let's Connect,  Friend
                 <FontAwesomeIcon icon={faSmileWink} />
              </Header>
              <div className="fs-6 text-muted">
                <span className="">
                  It has always been my pressure to hear from you.
                </span>
                <p className="">
                  Let talk about all those ideas, and build them together for humanity.
                </p>
              </div>
              <div>
                <a href="mailto:chubukass@gmail.com" className="badge bg-danger text-decoration-none text-wrap">
                  My mail is always open for you, friend
                  <span className="mx-2 fs-5">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </a>
              </div>
            </div>
            <div className="my-5">
              <Form />
            </div>
            <div className="my-4 my-md-0 text-center">
              <small className="fw-bold">You can contact me on social media via these channels</small>
              <div className="d-flex justify-content-center">

                <a target="_blank" className="text-primary px-3 fs-5"
                  rel="noopener noreferrer" href="https://www.twitter.com/chubukas">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a target="_blank" className="text-danger px-3 fs-5"
                  rel="noopener noreferrer" href="https://www.instagram.com/chubukas">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a target="_blank" className="text-primary px-3 fs-5"
                  rel="noopener noreferrer" href="https://www.facebook.com/chukwuebuka.anyadiegwu">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a target="_blank" className="text-info px-3 fs-5"
                  rel="noopener noreferrer" href="https://www.linkedin.com/in/chubukas">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default ContactPage;