import React, { Component } from "react";
import News from "./news";
import Github from "./github";
import CoolLinks from "./someCoolLinks";
import Catapi from "./catFactspia";
import Youtube from "./youtube";

class SideBar extends Component {
  render() {
    return (
      <div className="container flexbox-container flexbox-column side-bar">
        <Github></Github>
        <hr></hr>
        <Youtube></Youtube>
        <hr></hr>
        <Catapi></Catapi>
        <hr></hr>
        <CoolLinks></CoolLinks>
      </div>
    );
  }
}

export default SideBar;
