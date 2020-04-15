import React from "react";

import ClientsList from "../clientsList";

const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <div className="about-title">
              <h1 className="text-uppercase title-h1">Client Say about me</h1>
              <p className="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus, deleniti recusandae. Esse incidunt rem repellendus
                ab voluptates maxime? Nemo, numquam!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-lg-5">
        <ClientsList />
      </div>
    </section>
  );
};

export default Clients;
