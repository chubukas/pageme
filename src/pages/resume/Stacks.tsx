import { selectStacks } from "../../features/data/selectors"
import { useAppSelector } from '../../app/hooks';

const Stacks = () => {

  const stacks = useAppSelector(selectStacks);

  const allSacks = stacks.map(({ name, link,width }, i) => (
    <div className="col-3 col-lg-2 mt-3" key={i}>
      <div data-bs-toggle="tooltip" title={name}>
        <img src={link} alt={name} width={width}/>
      </div>
    </div>
  ))


  return (
    <>
      <div className="col-lg-3  mt-5">
        <p className="h3">Tech Stacks</p>
        <p className="text-muted">TOOLS & TECHNOLOGIES</p>
      </div>
      <div className="col-lg-2 d-none d-lg-block"></div>
      <div className="col-lg-7 mt-lg-5 border-start border-warning border-2 mb-5">
        <div className="mt-lg-4 container">
          <div className="row">
            {allSacks}
          </div>
        </div>
      </div >
    </>
  );
}

export default Stacks;