import React, { Component } from "react";
import Constants from "../../../constants/index";
import { Button, Row, Col, Icon } from "antd";
import Weather from "./Weather";

const buttonLinks = Constants.BUTTON_INFORMATION_LINK;
class Introduction extends Component {
  render() {
    return (
      <div id="home-introduction">
        <div className="introduction-wrapper">
          <div className="animated lightSpeedIn faster intro-title">
            <Row justify="center" type="flex">
              <Col span={18}>
                <span className="title-span">{Constants.TITLE}</span>
              </Col>
            </Row>
          </div>
          <div className="animated lightSpeedIn faster intro-content">
            <span className="content-span">{Constants.CONTENT}</span>
          </div>
          <div className="animated zoomIn faster text-title-thin intro-contact">
            <span>{Constants.CONTACT}</span>
          </div>
          <div className="animated slideInLeft faster button-group">
            <div className="button-wrapper">
              <Row justify="center" type="flex" className="button-wrapper-row">
                <Col
                  xs={{ span: 24 }}
                  md={{ span: 6 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                  className="button-wrapper-col"
                >
                  <a
                    href={buttonLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="button-facebook" size="large">
                      <Icon type="facebook" className="button-icon" />
                      Facebook
                    </Button>
                  </a>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  md={{ span: 6 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                  className="button-wrapper-col"
                >
                  <a
                    href={buttonLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="button-instagram" size="large">
                      <Icon type="instagram" className="button-icon" />
                      Instagram
                    </Button>
                  </a>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  md={{ span: 6 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                  className="button-wrapper-col"
                >
                  <a
                    href={buttonLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="button-github" size="large">
                      <Icon type="github" className="button-icon" />
                      Github
                    </Button>
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="weather-wrapper">
          <Weather />
        </div>
      </div>
    );
  }
}

export default Introduction;
