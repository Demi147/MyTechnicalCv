import React, { Component } from "react";

export class socialMedia extends Component {
  render() {
    return (
      <div className="social flexbox-container flexbox-column">
        <h3>Social</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/carel.haasbroek.5">
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/demi147">
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/carel_haasbroek/">
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default socialMedia;
