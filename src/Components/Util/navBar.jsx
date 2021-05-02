import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar sticky">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
