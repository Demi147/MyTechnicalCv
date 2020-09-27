import React, { Component } from "react";
import AboutMe from "./aboutMe";
import Skills from "./skills";

class MainBar extends Component {
  render() {
    return (
      <div className="flexbox-container flexbox-column centre-bar">
        <h1>Main bar</h1>
        <AboutMe></AboutMe>
        <Skills></Skills>
      </div>
    );
  }
}

export default MainBar;
