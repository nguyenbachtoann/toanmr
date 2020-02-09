import React, { Component } from "react";
// import { Row, Col, Button, Icon } from "antd";
import Constants from "../../../constants/index";
import axios from "axios";

const YOUTUBE_API = "https://www.googleapis.com/youtube/v3/playlistItems?";


class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: undefined,
      data: undefined,
      isFetching: false
    };
  }

  componentDidMount() {
    // this.handleGetDataFromAPI();
  }

  handleGetDataFromAPI = () => {
    this.setState({
      isFetching: true
    });
    const API = `${YOUTUBE_API}part=snippet&maxResults=${Constants.YOUTUBE_API_MAX_RESULT}&playlistId=${Constants.YOUTUBE_API_PLAYLIST_ID}&key=${Constants.GOGGLE_KEY}`;
    axios
      .get(API)
      .then(res => {
        setTimeout(() => {
          this.setState({
            data: res.data,
            isFetching: false
          });
        }, 800);
      })
      .catch(err => {
        console.log("SS: ", err.status);
      });
  };

  render() {
    return (
      <div id="radio-container">
        <div className="radio-title">
          <div className="title-wrapper">
            <span className="title-span" title="radio title">
              for your anima - soul
            </span>
          </div>
        </div>
        <div className="video-wrapper">
          <iframe
            className="video-iframe"
            src={Constants.YOUTUBE_PLAYLIST_SRC}
            title="video-iframe"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Radio;
