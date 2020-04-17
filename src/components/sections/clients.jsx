import React, { useContext } from "react";

import ClientsList from "./clientsList";
import { context } from "../../context";

const Clients = () => {
  const { clients } = useContext(context);

  const client = clients.map((aClient, i) => (
    <ClientsList myclient={aClient} key={i} />
  ));

  return (
    <section className="clients">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <div className="about-title">
              <h2 className="text-uppercase title-h1">
                What Clients Say about Me
              </h2>
              <p className="para">My Clients Are Always Happy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-lg-1">
        <div className="row">{client}</div>
      </div>
    </section>
  );
};

export default Clients;
