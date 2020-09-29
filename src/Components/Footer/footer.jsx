import React, { Component } from "react";
import Social from "./socialMedia";
import ContactMe from "./contactMe";

export class Footer extends Component {
  render() {
    return (
      <div className="BottomBar">
        <Social></Social>
        <ContactMe></ContactMe>
      </div>
    );
  }
}

export default Footer;
