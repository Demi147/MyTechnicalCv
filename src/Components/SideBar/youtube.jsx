import React, { Component } from "react";
import Loader from "../Util/loader";
import Config from "../../Config.json";

export class youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    const url =
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCt2VF2PFve1cfD1UgrJ9oyQ&maxResults=3&order=date&key=" +
      Config.ApiKeys.Youtube;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //code here
        this.setState({
          data: json.items,
          isLoaded: true,
        });
      });
  }

  render() {
    var { data, isLoaded } = this.state;
    const youtubeWatchUrl = "https://www.youtube.com/watch?v=";
    if (!isLoaded) {
      return <Loader></Loader>;
    } else {
      //page here
      return (
        <div className="News flexbox-container flexbox-column">
          <h3>My Latest Youtube Videos</h3>
          {data.map((item) => (
            <a key={item.id.videoId} href={youtubeWatchUrl + item.id.videoId}>
              {item.snippet.title}
            </a>
          ))}
        </div>
      );
    }
  }
}

export default youtube;
