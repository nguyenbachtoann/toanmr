import React, { Component } from 'react';
import { Row, Col, Icon, Checkbox, Badge, Divider, Tag } from 'antd';
import style from './DynamicStyle';
import Constants from '../../../constants/index';
import TaskBoxEditorButtons from './taskBoxEditorButton';
import { formatDateTime } from '../../../services/common-services';
const editorButtons = Constants.TASKBOX_EDITOR_BUTTONS;
class TaskBox extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      tasksCount: data.tasks.length,
    };
  }

  // componentDidMount() {
  //   this.handleCalculateTag();
  // }

  handleDeleteTaskBox = () => {
    console.log('Clicked Delete Task Box: ');
  };

  // handleCalculateTag = () => {
  //   const { data } = this.props;
  //   const tasks = data.tasks;
  //   let tagsArr = [];
  //   tasks.map(task => {
  //     return tagsArr.push(task.tag);
  //   });
  //   const tags = tagsArr.reduce((acc, current) => {
  //     const x = acc.find(item => item.name === current.name);
  //     if (!x) {
  //       return acc.concat([current]);
  //     } else {
  //       return acc;
  //     }
  //   }, []);
  //   this.setState({
  //     tags
  //   });
  // };

  handleRenderPriority = priority => {
    switch (priority.name) {
      case "High":
        return (
          <div
            className='color-props priority'
            style={style.priorityHigh}
            title={priority.name}
          />
        );
      case "Medium":
        return (
          <div
            className='color-props priority'
            style={style.priorityMedium}
            title={priority.name}
          />
        );
      case "Low":
        return (
          <div
            className='color-props priority'
            style={style.priorityLow}
            title={priority.name}
          />
        );

      default:
        break;
    }
  };

  render() {
    const { tasksCount } = this.state;
    const { data } = this.props;
    const tasks = data.tasks;
    const tags = data.tags;
    return (
      <div className='list-item'>
        <div onClick={this.handleDeleteTaskBox} id='btn-task-box-delete'>
          <Badge count='X' title='delete task'></Badge>
        </div>
        <div className='list-item-title'>
          <span className='item-title text-title-thin' title='task title'>
            {data.title}
          </span>
        </div>
        <div className='list-description '>
          <span className='item-content content-span' title='task descriptions'>
            {data.description}
          </span>
        </div>
        <div className='list-tasks-count '>
          <span className='item-content content-span' title='total tasks'>
            <span className='font-bold'>{tasksCount}</span> tasks
          </span>
        </div>
        <div className='list-tasks-count '>
          <span className='item-content date-time'>
            <Icon type='calendar' />
            {formatDateTime(data.createdTime)}
          </span>
        </div>
        <Row type='flex' justify='center'>
          <Col span={14}>
            <div className='list-tasks-options'>
              <Row type='flex' justify='center'>
                {editorButtons.map((button, i) => {
                  return <TaskBoxEditorButtons key={i} buttonData={button} />;
                })}
              </Row>
            </div>
          </Col>
        </Row>
        <Row type='flex' justify='center'>
          <Col span={16}>
            <Divider className='todos-divider' />
          </Col>
        </Row>
        <Row type='flex' justify='center'>
          <Col span={16} className='todos-tags'>
            {tags !== undefined &&
              tags.map((tag, i) => {
                return (
                  <Tag key={i} title={`tag ${tag.name}`} color={tag.color}>
                    #{tag.name}
                  </Tag>
                );
              })}
          </Col>
        </Row>
        <div id='hidden-item'>
          <Row type='flex' justify='center'>
            <Col span={16}>
              {tasks !== undefined && tasks !== null ? (
                tasks.map((task, i) => {
                  return (
                    <Row key={i} type='flex' justify='start'>
                      <Col span={24} className='todos-col'>
                        {this.handleRenderPriority(task.priority)}
                        <Checkbox
                          value={task.id}
                          className='todos-checkbox'
                          checked={task.isDone}
                        />

                        <span className='content-span'>{task.title}</span>
                      </Col>
                    </Row>
                  );
                })
              ) : (
                <Row type='flex' justify='start'>
                  <Col span={24} className='todos-col'>
                    <span className='content-span'>No task</span>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default TaskBox;
