import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight, faVideo } from "@fortawesome/free-solid-svg-icons"

import PageLayout from "../PageLayout";
import { BreadCrumb, MainPortfolio } from "./StyledPortfolio"
import { selectProjects } from "../../features/data/selectors"
import { useAppSelector } from '../../app/hooks';
import Page404 from "../page404";


type projects = {
  slug: string;
  image: string;
  projectname: string;
  link: string;
  description: string;
}[];


const findProject = (theslug: string, allProject: projects) => {
  return allProject.find(({ slug }) => slug === theslug)
}


const SinglePortfolio = () => {

  const { slug } = useParams();
  const AllProject = useAppSelector(selectProjects)
  let allproject = findProject(slug, AllProject);

  return (
    <>
      {
        allproject === undefined ? (
          <Page404 />
        ) :
          <PageLayout>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <BreadCrumb>
                    <a href="/portfolio" className="mx-2 p-2">
                      Portfolio
                </a>
                    <i>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </i>
                    <span className="mx-2 p-2">
                      {allproject?.projectname}
                    </span>
                  </BreadCrumb>
                </div>

                <div className="mt-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <MainPortfolio>
                          <img
                            src={allproject?.image}
                            alt={allproject?.projectname}
                            className="img-fluid"
                          />
                        </MainPortfolio>

                      </div>
                      <div className="col-md-2"></div>
                      <div className="col-md-6 mt-5 mt-md-0">
                        <p className="mb-3 h5 fw-bold text-muted">
                          {allproject?.projectname}
                        </p>
                        <p>
                          {allproject?.description}
                        </p>
                        <div className="text-center my-5">
                          <a href={allproject?.link} className="btn btn-warning fw-bold text-white">
                            <FontAwesomeIcon icon={faVideo} />
                            <span className="mx-2">
                              view live
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </PageLayout>
      }
    </>
  );
}

export default SinglePortfolio;