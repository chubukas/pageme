import React from "react";

const Filters = ({ active, name, actions }) => {
  return (
    <li
      className={active === name ? "filter active" : "filter"}
      onClick={() => actions(name)}
    >
      {name}
    </li>
  );
};

export default Filters;
