import React from "react";

const ClientsList = ({ myclient }) => {
  const { image, name, message } = myclient;

  return (
    <div className="col-md-6">
      <div className="client row">
        <div className="col-lg-4 col-md-12 client-img">
          <img
            src={image}
            alt={name}
            className="rounded-circle"
            width="120"
            height="120"
          />
        </div>
        <div className="col-lg-8 col-md-12 about-client">
          <h5 className="text-uppercase">{name}</h5>
          <p className="para">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientsList;
