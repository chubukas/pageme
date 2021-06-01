import { Header } from "../about/styleAbout"
import PageLayout from "../PageLayout";
import { MainPortfolio, PortfolioHover } from "./StyledPortfolio"
import { selectProjects } from "../../features/data/selectors"
import { useAppSelector } from '../../app/hooks';


const PortFolioPage = () => {

  const portfolio = useAppSelector(selectProjects)

  const allPortfolio = portfolio.map(({ slug, image, projectname }, i) => (
    <div className="col-lg-4 col-md-6 my-4" key={i}>
      <MainPortfolio>
        <a href={`/portfolio/${slug}`}>
          <img
            src={image}
            alt={projectname}
            className="img-fluid"
          />
        </a>

        <PortfolioHover>
          <span className="h6 text-center fw-bold text-white">
            {projectname}
          </span>
        </PortfolioHover>
      </MainPortfolio>
    </div>
  ))

  return (
    <>
      <PageLayout>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header>
                My PortFolio
              </Header>
              <div className="fw-bold text-muted">
                <span className="text-sm">
                  Happy to see you again my good friend... These are some of my skills in display. Enjoy !!!
                </span>
              </div>
            </div>
            <div className="mt-4 row">
              {allPortfolio}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default PortFolioPage;