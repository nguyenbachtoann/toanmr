import React, { Component } from 'react';
import { Row, Icon, Button, Col, Empty, Divider } from 'antd';
import TaskBox from './TaskBox';
import TodoModal from './TodoModal';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apiTodoFunction from '../../../store/actions/apiTodoFunction';
import apiPriorityFunction from '../../../store/actions/apiPriorityFunction';
import {
  getTodos,
  getTodosError,
  getTodosPending,
  getPostedTodo,
  getTodoPriorities,
  getTodoPrioritiesPending,
  getTodoPrioritiesError
} from '../../../store/reducers/reducer';
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      reload: false
    };
  }

  handleShowModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOkModal = () => {
    this.setState({ visible: false });
  };
  handleCancelModal = () => {
    this.setState({ visible: false });
  };

  handleClick = e => {
    console.log('click ', e);
  };

  componentDidMount() {
    const { fetchTodos, fetchPriorities } = this.props;
    fetchTodos();
    fetchPriorities();
  }

  render() {
    const { todoList, priorityList } = this.props;
    const { visible } = this.state;
    return (
      <div id='todo-container'>
        <div id='todo-wrapper'>
          <Row type='flex' justify='center'>
            <Col span={24}>
              <div className='todo-title'>
                <span className='title-span'>TO DO LIST</span>
              </div>
            </Col>
            <Col span={24}>
              <Row type='flex' justify='center'>
                <span className='content-span date-time'>Priorities</span>
              </Row>
            </Col>
            <Col span={24} className='todo-priorities'>
              <div className='priorities-wrapper'>
                {priorityList.pendingPriorities ? (
                  <div className='animated zoomIn fast priorities'>
                    <Icon type='loading' className='loading-data' />
                  </div>
                ) : priorityList.priorities !== undefined &&
                  priorityList.priorities.length > 0 ? (
                  priorityList.priorities.map((priority, i) => {
                    return (
                      <div
                        key={i}
                        className='animated fast rubberBand priorities'
                      >
                        <div
                          className='color-props priority'
                          style={{
                            backgroundColor: priority.color,
                            boxShadow: `2px 1px 6px -1px ${priority.color}`
                          }}
                          title={priority.name}
                        />
                        <span>{priority.name}</span>
                      </div>
                    );
                  })
                ) : (
                  <div className='animated zoomIn fastpriorities'>
                    <span>Somethings went wrong!</span>
                    <Icon type='frown' />
                  </div>
                )}
              </div>
            </Col>
            <Col span={24}>
              <Row type='flex' justify='center'>
                <Col span={4}>
                  <Row type='flex' justify='space-around'>
                    <Col
                      span={12}
                      className='animated zoomIn faster todos-list-options-menu'
                    >
                      <Button
                        className='btn-tasks-option'
                        type='primary'
                        onClick={this.handleShowModal}
                      >
                        <Icon type='plus' />
                        Add new todo
                      </Button>
                    </Col>
                    <Col
                      span={12}
                      className='animated zoomIn faster todos-list-options-menu'
                    >
                      <Button className='btn-tasks-option' type='danger'>
                        <Icon type='minus' />
                        Delete todos
                      </Button>
                    </Col>
                    <TodoModal
                      visible={visible}
                      handleOkModal={this.handleOkModal}
                      handleCancelModal={this.handleCancelModal}
                      priorities={priorityList.priorities}
                    />
                  </Row>
                </Col>
              </Row>
              <Row type='flex' justify='center'>
                <Col span={10}>
                  <Divider className='todos-divider' />
                </Col>
              </Row>
            </Col>
            <Col span={22}>
              <Row gutter={16}>
                <OverPack id='todos-overpack'>
                  <QueueAnim
                    className='todos-queue'
                    duration={1000}
                    // ease="easeOutBounce"
                    // key="hobbies-queue-title"
                    key='todos-queue'
                    // leaveReverse
                  >
                    {todoList.pendingTodos ? (
                      <Row type='flex' justify='center'>
                        <Icon type='loading' className='loading-data' />
                      </Row>
                    ) : todoList.todos !== undefined &&
                      todoList.todos.length > 0 ? (
                      todoList.todos.map((todo, i) => {
                        return (
                          <Col
                            tabIndex={i}
                            key={i}
                            xs={{ span: 24 }}
                            md={{ span: 8 }}
                            lg={{ span: 6 }}
                            xl={{ span: 4 }}
                            className='gutter-row list-col'
                          >
                            <TaskBox data={todo} />
                          </Col>
                        );
                      })
                    ) : (
                      <Empty className='animated jello fast' />
                    )}
                  </QueueAnim>
                </OverPack>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: {
    todos: getTodos(state),
    pendingTodos: getTodosPending(state),
    error: getTodosError(state)
  },
  priorityList: {
    priorities: getTodoPriorities(state),
    pendingPriorities: getTodoPrioritiesPending(state),
    error: getTodoPrioritiesError(state)
  },
  postedTodo: getPostedTodo(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTodos: apiTodoFunction.fetchTodos,
      fetchPriorities: apiPriorityFunction.fetchPriorities
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
