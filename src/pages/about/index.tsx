import { Header } from "./styleAbout"
import PageLayout from "../PageLayout";
import AboutMe from "./AboutMe"
import Services from "./Services"

export interface AboutPageProps {

}

const AboutPage = () => {


  return (
    <>
      <PageLayout>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header>
                Wanna Know Me?
              </Header>
            </div>
            <AboutMe>
              <Services />
            </AboutMe>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default AboutPage;