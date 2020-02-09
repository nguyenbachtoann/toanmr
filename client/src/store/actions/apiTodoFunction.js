import Actions from './action';
import axios from 'axios';
const fetchTodos = () => {
  return dispatch => {
    dispatch(Actions.fetchTodoListPending());

    axios
      .get('http://localhost:5000/api/todos')
      .then(res => {
        return res.data;
      })
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(Actions.fetchTodoListSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(Actions.fetchTodoListFailed(error));
      });
  };
};

const createTodo = body => {
  return dispatch => {
    dispatch(Actions.postTodoListPending());
    axios
      .post('http://localhost:5000/api/todos', body)
      .then(res => {
        return res.data;
      })
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(Actions.postTodoListSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(Actions.postTodoListFailed(error));
      });
  };
};

const apiTodoFunction = {
  fetchTodos,
  createTodo
};

export default apiTodoFunction;
