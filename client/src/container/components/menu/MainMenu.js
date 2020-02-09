import React, { Component } from "react";
import { Menu, Icon, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
const MENU = [
  {
    to: "/",
    content: "Home",
    icon: "home"
  },
  {
    to: "/todo",
    content: "To Do",
    icon: "file-text"
  },
  {
    to: "/radio",
    content: "Radio",
    icon: "audio"
  }
];
class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "Home"
    };
  }

  UNSAFE_componentWillMount() {
    this.handleGetMenuFromSessionStorage();
  }

  handleGetMenuFromSessionStorage = () => {
    const current = sessionStorage.getItem("chosenMenu");
    this.setState({
      current: current === null ? "Home" : current
    });
  };

  handleSetMenuToSessionStorage = e => {
    const chosenMenu = e.key;
    sessionStorage.setItem("chosenMenu", chosenMenu);
    this.setState({
      current: chosenMenu
    });
  };

  resetMenuState = () => {
    sessionStorage.removeItem("chosenMenu");
    this.setState({
      current: "Home"
    });
  };
  render() {
    const { current } = this.state;
    return (
      <Row id="menu-container">
        <Col span={8} offset={1}>
          <div className="menu-title">
            <img src={logo} id="img-menu" alt="logo" title="logo" />
            <NavLink to="/" onClick={this.resetMenuState}>
              <span className="menu-title font-bold" title="website name">
                toanmr.
              </span>
            </NavLink>
          </div>
        </Col>
        <Col span={6} offset={8}>
          <Menu
            id="main-menu"
            onClick={this.handleSetMenuToSessionStorage}
            selectedKeys={[current]}
            mode="horizontal"
          >
            {MENU.map(menu => {
              return (
                <Menu.Item
                  key={menu.content}
                  className="menu-item font-bold"
                  title={menu.content}
                >
                  <NavLink to={menu.to} activeClassName="active">
                    <Icon type={menu.icon} />
                    {menu.content}
                  </NavLink>
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default MainMenu;
