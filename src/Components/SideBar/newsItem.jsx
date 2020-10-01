import React, { Component } from "react";
import Loader from "../Util/loader";

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props,
      isLoaded: false,
    };
  }

  componentDidMount() {
    let q = this.state.item.link;
    fetch(q)
      .then((res) => res.json())
      .then((json) => {
        //code here
        this.setState({
          data: json.appnews.newsitems[0],
          isLoaded: true,
        });
      });
  }

  state = {};
  render() {
    var { isLoaded, item } = this.state;

    if (!isLoaded) {
      return <Loader></Loader>;
    } else {
      let x = this.state.data;
      return (
        <div>
          <a href={x.url}>
            {item.appName} : {x.title}
          </a>
        </div>
      );
    }
  }
}

export default NewsItem;
