import React, { Component } from "react";

class NewsItem extends Component {
  state = {};
  render() {
    let x = this.props;
    return (
      <div>
        <a href={x.link}>{x.title}</a>
      </div>
    );
  }
}

export default NewsItem;
