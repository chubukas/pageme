import { selectWorkExprience } from "../../features/data/selectors"
import { useAppSelector } from '../../app/hooks';

const WorkExprience = () => {

  const worksExprience = useAppSelector(selectWorkExprience)

  const allWorks = worksExprience.map(({ date, rank, company, works }, i) =>
  (
    <div className={i === 0 ? `` : `mt-5`} key={i}>
      <div>
        <span className="text-warning">{date}</span><br />
        <span className="h5 fw-bolder">{rank}</span><br />
        <span className="text-muted">{company}</span>
      </div>
      <div>
        <ul>
          {works.map((work, i) => <li key={i}>{work}</li>)}
        </ul>
      </div>
    </div>
  ))

  return (
    <>
      <div className="col-lg-3  mt-5">
        <p className="h3">Work Experience</p>
        <p className="text-muted">PRESENT & PREVIOUS JOBS</p>
      </div>
      <div className="col-lg-2 d-none d-lg-block"></div>
      <div className="col-lg-7 mt-lg-5 border-start border-warning border-2">
        {allWorks}
      </div>
    </>
  );
}

export default WorkExprience;