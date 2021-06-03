import { selectEducation } from "../../features/data/selectors"
import { useAppSelector } from '../../app/hooks';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward } from "@fortawesome/free-solid-svg-icons"

const Education = () => {

  const educations = useAppSelector(selectEducation)

  const allEducations = educations.map(({ cert, school, date, description, learned, certImage }, i) => (

    <div className={i === 0 ? "" : "mt-5"} key={i}>
      <div className="mb-3">
        <span className="text-warning h-3 fw-bolder">{cert}</span><br />
        <i className="text-muted">{school}</i><br />
        <span className="badge bg-warning">{date}</span>
        {certImage &&
          <div className="badge btn-info btn-sm mx-3 mb-3 fw-bold text-white">
            <span className="mx-2"><FontAwesomeIcon icon={faAward} /></span>
            <a className="text-decoration-none text-white" href={certImage}>
              view certificate
              </a>
          </div>

        }
        {cert === "HND in Computer Science" ?
          (
            <ul className="mt-3">
              <li><b>Main Coursework:</b>{description}
              </li>
            </ul>
          ) :
          (
            <p>
              {description}
            </p>
          )
        }
      </div>
      <div>
        <ul>
          {!learned.length ? "" : (learned.map((leand, i) => <li key={i}>{leand}</li>))}
        </ul>
      </div>
    </div>
  ))

  return (
    <>
      <div className="col-lg-3  mt-5">
        <p className="h3">Education</p>
        <p className="text-muted">ACADEMIC AND TECH CAREER</p>
      </div>
      <div className="col-lg-2 d-none d-lg-block"></div>
      <div className="col-lg-7 mt-lg-5 border-start border-warning border-2">
        {allEducations}
      </div>
    </>
  );
}

export default Education;