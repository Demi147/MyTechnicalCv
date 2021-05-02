import React, { Component } from "react";
import NewsItem from "./newsItem";

class News extends Component {
  componentDidMount() {}

  render() {
    let dataArray = [
      [
        "Warframe",
        "https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=230410&count=1&maxlength=300&format=json",
      ],
      [
        "World Of Warships",
        "https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=552990&count=1&maxlength=300&format=json",
      ],
      [
        "Rainbow 6 Seige",
        "https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=359550&count=1&maxlength=300&format=json",
      ],
    ];

    let x = [];

    var i;
    for (i = 0; i < dataArray.length; i++) {
      x.push(
        <NewsItem
          key={dataArray[i][0]}
          appName={dataArray[i][0]}
          link={dataArray[i][1]}
        ></NewsItem>
      );
    }

    return (
      <div id="news" className="News flexbox-container flexbox-column">
        <h3>News</h3>
        {x}
      </div>
    );
  }
}

export default News;
