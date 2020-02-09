import React, { Component } from 'react';
import { randomColor } from '../../../services/common-services';
import {
  Button,
  Modal,
  Row,
  Col,
  Menu,
  Dropdown,
  Icon,
  Input,
  Badge,
  Tooltip,
  Tag
} from 'antd';
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apiTodoFunction from '../../../store/actions/apiTodoFunction';
import {
  getPostedTodo,
  getPostedTodoError,
  getPostedTodoPending
} from '../../../store/reducers/reducer';
class TodoModal extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      locale: 'vi'
    });
    const { todo } = this.props;
    this.state = {
      todo: todo
        ? todo
        : {
            title: undefined,
            description: undefined,
            createdTime: Date.now(),
            tags: undefined,
            tasks: undefined
          },
      tasks: [],
      priority: undefined,
      tags: [],
      fakeDeleteLoading: undefined,
      inputTagVisible: false,
      inputTagValue: {
        name: '',
        color: ''
      }
    };
  }

  handleSubmitModal = () => {
    const { createTodo, handleOkModal, postedTodo } = this.props;
    const { tasks, todo, tags } = this.state;
    todo.tasks = tasks;
    todo.tags = tags;
    createTodo(todo);
    !postedTodo.pendingPostedTodo && handleOkModal();
  };

  handleOnChangeInput = (e, index) => {
    const { tasks, todo } = this.state;
    if (index !== undefined) {
      tasks[index].title = e.target.value;
    } else {
      todo[e.target.name] = e.target.value;
    }
    this.setState({
      tasks,
      todo
    });
  };

  handleChoosePrioiority = key => {
    const { inputindex, priority } = key.item.props;
    const { tasks } = this.state;
    tasks[inputindex].priority = priority;
    this.setState({
      tasks
    });
  };

  handleDeleteTask = async (e, inputIndex) => {
    const { tasks } = this.state;
    this.setState({
      fakeDeleteLoading: inputIndex
    });
    setTimeout(() => {
      tasks.splice(inputIndex, 1);
    }, 1000);

    setTimeout(async () => {
      this.setState({
        tasks,
        fakeDeleteLoading: undefined
      });
    }, 1000);
  };

  handleAddTask = () => {
    const { tasks } = this.state;
    const task = {
      title: undefined,
      priority: undefined
    };
    this.setState({
      tasks: [...tasks, task]
    });
  };
  handleRemoveAllTasks = () => {
    let { tasks } = this.state;
    tasks = [];
    this.setState({
      tasks
    });
  };

  handleCloseTag = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
  };

  handleShowInputTag = () => {
    this.setState({ inputTagVisible: true }, () => this.input.focus());
  };

  handleInputChangeTag = e => {
    const { inputTagValue } = this.state;
    inputTagValue.name = e.target.value;
    const tagColor = randomColor();
    if (inputTagValue.color === '') {
      inputTagValue.color = tagColor;
    }

    this.setState({ inputTagValue });
  };

  handleInputTagConfirm = () => {
    const { inputTagValue } = this.state;
    let { tags } = this.state;
    if (inputTagValue && tags.indexOf(inputTagValue) === -1) {
      tags = [...tags, inputTagValue];
    }
    this.setState({
      tags,
      inputTagVisible: false,
      inputTagValue: {
        name: '',
        color: ''
      }
    });
  };

  saveInputTagRef = input => (this.input = input);
  render() {
    const {
      visible,
      postedTodo,
      handleOkModal,
      handleCancelModal,
      priorities
    } = this.props;
    const {
      tasks,
      fakeDeleteLoading,
      inputTagValue,
      inputTagVisible,
      tags
    } = this.state;

    const menu = inputIndex => (
      <Menu
        onClick={this.handleChoosePrioiority}
        id='todo-create-priority-menu'
      >
        {priorities !== undefined &&
          priorities.length > 0 &&
          priorities.map((priority, i) => {
            return (
              <Menu.Item key={i} inputindex={inputIndex} priority={priority}>
                <Row type='flex' justify='space-between' align='middle'>
                  <Col span={4}>
                    <Row type='flex' justify='start'>
                      <div
                        className='color-props'
                        style={{ backgroundColor: priority.color }}
                        title={priority.name}
                      />
                    </Row>
                  </Col>
                  <Col span={20}>{priority.name}</Col>
                </Row>
              </Menu.Item>
            );
          })}
      </Menu>
    );
    const CreateTodo = (
      <Row type='flex' justify='center' id='modal-create'>
        <Col span={22}>
          <h3 className='animated slideInRight faster'>General</h3>
        </Col>
        <Col span={22}>
          <div className='animated zoomIn faster modal-input-group'>
            <Input
              placeholder='Enter title...'
              name='title'
              onChange={e => this.handleOnChangeInput(e)}
            />
          </div>
        </Col>
        <Col span={22}>
          <div className='animated zoomIn faster modal-input-group '>
            <Input
              placeholder='Enter description...'
              name='description'
              onChange={e => this.handleOnChangeInput(e)}
            />
          </div>
        </Col>
        <Col span={22}>
          <h3 className='animated slideInRight faster'>Tasks</h3>
        </Col>

        <Col span={22}>
          {tasks.length > 0 && (
            <Button
              className='animated slideInRight faster btn-faded-color faded-danger'
              onClick={this.handleRemoveAllTasks}
            >
              <Icon type='close' />
              <span>Remove all</span>
            </Button>
          )}
          {tasks.map((task, i) => {
            return (
              <Row
                type='flex'
                key={i}
                className='animated pulse faster task-input-item '
              >
                <Col span={19}>
                  <Row type='flex' justify='space-between'>
                    <Col span={3}>
                      <div className='modal-btn-cancel-container'>
                        <div onClick={e => this.handleDeleteTask(e, i)}>
                          {fakeDeleteLoading === i ? (
                            <Icon type='loading' className='loading-data' />
                          ) : (
                            <Badge
                              count='X'
                              title='delete task'
                              className='btn-delete'
                            ></Badge>
                          )}
                        </div>
                      </div>
                    </Col>
                    <Col span={21}>
                      <Input
                        placeholder='Enter tasks...'
                        value={task.title}
                        onChange={e => {
                          this.handleOnChangeInput(e, i);
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={5}>
                  <div className=' modal-priorities'>
                    <Dropdown overlay={menu(i)}>
                      <a className='ant-dropdown-link' href='#'>
                        {task.priority !== undefined
                          ? task.priority.name
                          : 'Priorities'}
                        <Icon type='down' />
                      </a>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
            );
          })}
          <Button
            className='animated slideInRight faster btn-faded-color faded-primary'
            onClick={this.handleAddTask}
          >
            <Icon type='plus' />
            <span>Add task</span>
          </Button>
        </Col>
        <Col span={22}>
          <h3 className='animated slideInRight faster'>Tags</h3>
        </Col>
        <Col span={22}>
          {tags !== undefined &&
            tags.length > 0 &&
            tags.map((tag, index) => {
              const isLongTag = tag.name.length > 20;
              const tagElem = (
                <Tag
                  className='animated jello faster todos-tag'
                  color={tag.color}
                  key={tag.name}
                  closable={true}
                  onClose={() => this.handleCloseTag(tag.name)}
                >
                  {isLongTag ? `${tag.name.slice(0, 20)}...` : tag.name}
                </Tag>
              );
              return isLongTag ? (
                <Tooltip title={tag.name} key={tag.name}>
                  {tagElem}
                </Tooltip>
              ) : (
                tagElem
              );
            })}
          {inputTagVisible && (
            <Input
              ref={this.saveInputTagRef}
              type='text'
              size='small'
              style={{ width: 78 }}
              value={inputTagValue.name}
              onChange={this.handleInputChangeTag}
              onBlur={this.handleInputTagConfirm}
              onPressEnter={this.handleInputTagConfirm}
            />
          )}
          {!inputTagVisible && (
            <Tag
              className='animated fadeIn faster'
              onClick={this.handleShowInputTag}
              style={{ background: '#fff', borderStyle: 'dashed' }}
            >
              <Icon type='plus' /> New Tag
            </Tag>
          )}
        </Col>
      </Row>
    );

    return (
      <Modal
        className='todo-modal'
        visible={visible}
        title='Create todo'
        onOk={handleOkModal}
        onCancel={handleCancelModal}
        footer={[
          <Button key='back' onClick={handleCancelModal}>
            Return
          </Button>,
          <Button
            key='submit'
            type='primary'
            loading={postedTodo.pendingPostedTodo}
            onClick={this.handleSubmitModal}
          >
            Submit
          </Button>
        ]}
      >
        {CreateTodo}
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  postedTodo: {
    postedTodo: getPostedTodo(state),
    pendingPostedTodo: getPostedTodoPending(state),
    postedTodoError: getPostedTodoError(state)
  }
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createTodo: apiTodoFunction.createTodo
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoModal);
