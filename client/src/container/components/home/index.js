import React, { Component } from "react";
import Banner from "./Banner";
import Constants from "../../../constants/index";
import Introduction from "./Introduction";
import { Row, Col, Icon } from "antd";
import { OverPack } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import Hobbies from "./Hobbies";

const hobbyList = Constants.HOBBIES;

class Home extends Component {
  render() {
    return (
      <div className="home-body">
        <Row className="home-body-container">
          <Col
            xs={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
            xl={{ span: 12 }}
          >
            <div>
              <Introduction />
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
            xl={{ span: 12 }}
          >
            <div>
              <Banner />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="animated fadeInUp faster hobbies-title">
              <h2>
                <Icon type="down" />
              </h2>
            </div>
          </Col>
        </Row>

        <OverPack id="hobbies-overpack">
          <QueueAnim
            className="hobbies-queue"
            key="hobbies-queue-title"
            leaveReverse
          >
            <div key="queue-title" className="code-box-shape queue-anim-demo">
              <span className="infor-title">Hobbies</span>
            </div>
          </QueueAnim>
          <TweenOne
            id="hobbies-tweenone"
            key="hobbies-tweenone"
            animation={{ opacity: 1 }}
          >
            <Row justify="center" type="flex">
              {hobbyList.map((hobby, i) => {
                return (
                  <Col
                    className="hobbies-col"
                    xs={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 8 }}
                    xl={{ span: 6 }}
                    key={i}
                  >
                    <Hobbies data={hobby} />
                  </Col>
                );
              })}
            </Row>
          </TweenOne>
          <QueueAnim
            className="hobbies-queue"
            key="hobbies-queue-description"
            leaveReverse
          >
            <div
              key="queue-description"
              className="code-box-shape queue-anim-demo infor-description-container"
            >
              <span className="infor-description">
                I also have some hobbies such as playing Sports, Travelling,
                Reading books, ...
              </span>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Home;
