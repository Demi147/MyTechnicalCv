import React, { Component } from "react";
import Loader from "../Util/loader";

export class github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    const url =
      "https://api.github.com/search/repositories?q=user:Demi147&sort=updated";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //code here
        json.items.length = 4;
        this.setState({
          data: json.items,
          isLoaded: true,
        });
      });
  }

  render() {
    var { data, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <div className="News flexbox-container flexbox-column">
          <h3>Github links</h3>
          {data.map((item) => (
            <a key={item.id} href={item.html_url}>
              {item.name}
            </a>
          ))}
        </div>
      );
    } else {
      return <Loader></Loader>;
    }
  }
}

export default github;
