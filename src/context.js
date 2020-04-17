import React, { Component } from "react";

import data from "./data";

const { project, skills, social, clients } = data;
const context = React.createContext();

class DataContext extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: project,
      stateProject: [],
      activeButton: "all",
    };
  }

  componentDidMount() {
    this.setState({ stateProject: project });
  }

  filterButtons = (i) => {
    const filtered =
      i === "all" ? project : project.filter((item) => item.type === i);

    this.setState({ stateProject: filtered, activeButton: i });
  };

  render() {
    return (
      <>
        <context.Provider
          value={{
            ...this.state,
            filterButtons: this.filterButtons,
            skills,
            social,
            clients,
          }}
        >
          {this.props.children}
        </context.Provider>
      </>
    );
  }
}

export { DataContext, context };
