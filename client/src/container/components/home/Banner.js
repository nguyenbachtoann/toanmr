import React, { Component } from "react";
import banner from "../../../assets/images/banner4.jpg";
// import { Row, Col } from "antd";
class Banner extends Component {
  render() {
    return (
      <div id="home-banner" className="animated zoomIn faster">
        <img src={banner} alt="banner" title={`main-banner`} />
      </div>
    );
  }
}

export default Banner;
