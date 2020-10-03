import React, { Component } from "react";
import AboutMe from "./aboutMe";
import Skills from "./skills";

class MainBar extends Component {
  render() {
    return (
      <div className="container flexbox-container flexbox-column centre-bar">
        <AboutMe></AboutMe>
        <Skills></Skills>
      </div>
    );
  }
}

export default MainBar;
