import React, { Component } from "react";
import NewsItem from "./newsItem";
import Loader from "./loader";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    let x = [];

    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=359550&count=1&maxlength=300&format=json"
    )
      .then((res) => res.json())
      .then((json) => {
        x.push(json.appnews.newsitems[0]);
      });

    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=552990&count=1&maxlength=300&format=json"
    )
      .then((res) => res.json())
      .then((json) => {
        x.push(json.appnews.newsitems[0]);
      });

    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=230410&count=1&maxlength=300&format=json"
    )
      .then((res) => res.json())
      .then((json) => {
        x.push(json.appnews.newsitems[0]);
        this.setState({
          isLoaded: true,
          items: x,
        });
      });

    console.log(x);
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <Loader></Loader>;
    } else {
      return (
        <div className="News">
          {items.map((item) => (
            <NewsItem
              key={item.appid}
              title={item.title}
              link={item.url}
            ></NewsItem>
          ))}
        </div>
      );
    }
  }
}

export default News;
