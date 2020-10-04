import React, { Component } from "react";
import Image from "../../img/Me.jpg";

class AboutMe extends Component {
  render() {
    return (
      <div id="about" className="flexbox-item flexbox-column">
        <div className="aboutMe">
          <div>
            <img src={Image} alt="A long drive"></img>
          </div>
          <div className="aboutText">
            <h3>About me</h3>
            <p>
              I'm an indie game developer that dabbles mainly in AI and backend
              systems for games.
            </p>
            <p>
              I also dabble in c# frameworks like blazor and MVC for personal
              projects. I like learning new technologies and how to practically
              apply them in real life. I would like to become a software
              engineer, creating big complex programs that make life easy.
            </p>
            <p>
              One day I would like to add robotics to my hobbies just like I'm
              making games now.
            </p>
            <h4>Strengths</h4>
            <ul>
              <li>Can learn technologies and frameworks easily.</li>
              <li>
                Can solve complex problems, if I have the necessary knowledge.
              </li>
              <li>
                I can plan when developing a program, figuring out a plan of
                action, and executing that plan dynamically, changing the plan
                as necessary.
              </li>
            </ul>
            <h4>Weaknesses</h4>
            <ul>
              <li>Gives up easily.</li>
              <li>Procrastinates a lot.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
