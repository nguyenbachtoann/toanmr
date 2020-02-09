import React, { Component } from 'react';
import { Col, Button, Icon } from 'antd';
class TaskBoxEditorButtons extends Component {
  render() {
    const { buttonData } = this.props;
    return (
      <Button className='btn-tasks-option' type={buttonData.buttonType}>
        <Icon type={buttonData.iconType} />
        {buttonData.name}
      </Button>
    );
  }
}

export default TaskBoxEditorButtons;
