import React, { Component } from "react";
import Loader from "../Util/loader";

export class catFactspia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    const url = "https://cat-fact.herokuapp.com/facts/random";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json.text,
          isLoaded: true,
        });
      });
  }

  render() {
    var { isLoaded, data } = this.state;
    if (isLoaded) {
      return (
        <div className="News flexbox-container flexbox-column">
          <h3>Random cat fact</h3>
          <p>{data}</p>
        </div>
      );
    } else {
      return <Loader></Loader>;
    }
  }
}

export default catFactspia;
