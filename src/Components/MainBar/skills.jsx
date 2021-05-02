import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <div className="skills">
        <h2 className="skillTitle">Technical skills</h2>
          <div className="expertSkills">
            <h4>Things i work with every day. (Primary skills)</h4>
            <ul>
              <li>
                Unity
                <ul>
                  I made more than a few prototypes.
                  <li>A racing game</li>
                  <li>A small horror game</li>
                  <li>A 2D mobile zombie shooter</li>
                  <li>Im especially focused advanced statemachine AI.</li>
                </ul>
              </li>
              <li>
                C#
                <ul>
                  <li>Xamirin</li>
                  <li>Blazor</li>
                  <li>MVC</li>
                </ul>
              </li>
            </ul>
          </div>
          <br></br>
          <div className="rookieSkills">
            <h4>Things i have surface level knowladge of.</h4>
            <ul>
              <li>Blender</li>
              <li>
                Python
                <ul>
                  <li>Basic machine learning in TensorFlow</li>
                </ul>
              </li>
              <li>Html</li>
              <li>CSS</li>
              <li>
                C# backend tools
                <ul>
                  <li>Dapper</li>
                </ul>
              </li>
              <li>Java script</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
