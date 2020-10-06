import React, { Component } from "react";
import CV from "../../Files/CAREl Haasbroek.pdf";

export class someCoolLinks extends Component {
  render() {
    return (
      <div className="News flexbox-container flexbox-column">
        <h3>Some cool links</h3>
        <a href="https://demi147.github.io/PlatformerForMyWebsites/">
          A WebGL game i made
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.DemiGodProductions.ShootTheZombies">
          My android game project (Beta)
        </a>
        <a href="https://dimensiondatacollab.azurewebsites.net/">
          Dimention Data Colab Site
        </a>
        <a href={CV}>Download my CV</a>
      </div>
    );
  }
}

export default someCoolLinks;
