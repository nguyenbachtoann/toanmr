import React, { Component } from "react";
class Hobby extends Component {
  constructor(props) {
    super(props);
    const {data} = this.props;
    this.state = {
        data: data,
    };
  }
  render() {
      const {data} = this.state;
    return (
      <div className="code-box-shape queue-anim-demo hobbies-item">
        <div className="hobbies-img-container">
          <img src={data.src} alt={data.content} />
        </div>
        <div className="hobbies-content-container">
          <span className="hobbies-content">{data.content}</span>
        </div>
      </div>
    );
  }
}

export default Hobby;
