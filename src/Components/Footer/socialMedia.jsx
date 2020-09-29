import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

export class socialMedia extends Component {
  render() {
    return (
      <div className="social container">
        <h3>Social</h3>
        <a href="https://www.facebook.com/carel.haasbroek.5">
          <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
          <span> Facebook</span>
        </a>
        <a href="https://github.com/demi147">
          <FontAwesomeIcon icon={faGitSquare} size="lg" />
          <span> GitHub</span>
        </a>
        <a href="https://www.instagram.com/carel_haasbroek/">
          <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
          <span> Instagram</span>
        </a>
      </div>
    );
  }
}

export default socialMedia;
