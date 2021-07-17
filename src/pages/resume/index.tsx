import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

import { Header } from "../about/styleAbout"
import PageLayout from "../PageLayout";
import Work from "./WorkExprience";
import Education from "./Education"
import Stacks from "./Stacks"

export interface ResumePageProps {

}

const ResumePage = () => {
  return (
    <>
      <PageLayout>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header>
                My Resume
              </Header>
              <div className="fw-bold text-muted">
                <span className="text-sm">
                  Hello friend, am happy you are here...
                  Lets talk about my skills, qualifications and experiences.
                </span>
              </div>
            </div>

            <Work />
            <Education />
            <Stacks />

          </div>


          <div className="text-center d-flex justify-content-center mb-5">
            <p className="d-none d-md-block fw-bold text-muted">You can download my resume here</p>
            <a
              href="/images/Chukwuebuka Anyadiegwu.pdf"
              className="btn btn-warning mx-3 mx-md-5 fw-bold rounded-pill"
              download="Chukwuebuka Anyadiegwu CV"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span className="mx-3">Download Resume</span>
            </a>
          </div>

        </div>
      </PageLayout>
    </>
  );
}

export default ResumePage;