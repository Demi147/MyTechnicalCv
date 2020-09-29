import React, { Component } from "react";
import AboutMe from "./aboutMe";
import Skills from "./skills";
import Loader from "../Util/loader";

class MainBar extends Component {
  render() {
    return (
      <div className="container flexbox-container flexbox-column centre-bar">
        <h1>Main bar</h1>
        <Loader></Loader>
        <AboutMe></AboutMe>
        <Skills></Skills>
      </div>
    );
  }
}

export default MainBar;
