import React, { Component } from "react";
import News from "./news";

class SideBar extends Component {
  render() {
    return (
      <div className="container flexbox-container flexbox-column side-bar">
        <h3>News</h3>
        <News></News>
        <hr></hr>
        maby github here?
        <hr></hr>
        Some cool links here?
        <hr></hr>
        Nothing here?
      </div>
    );
  }
}

export default SideBar;
