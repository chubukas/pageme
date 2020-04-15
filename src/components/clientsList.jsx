import React from "react";

const ClientsList = () => {
  return (
    <div className="client row item">
      <div className="col-lg-4 col-md-12 client-img">
        <img src="./img/testimonials/t1.jpg" alt="img1" className="img-fluid" />
      </div>
      <div className="col-lg-8 col-md-12 about-client">
        <h4 className="text-uppercase">John Martin</h4>
        <p className="para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          architecto consequuntur ratione, obcaecati corrupti deserunt.
        </p>
      </div>
    </div>
  );
};

export default ClientsList;
