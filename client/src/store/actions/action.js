import ActionTypes from './actionTypes';

const setChosenMenu = text => ({
  type: ActionTypes.SET_CHOSEN_MENU,
  text
});

// todo list - get
const fetchTodoListPending = () => ({
  type: ActionTypes.FETCH_TODO_LIST_PENDING
});
const fetchTodoListSuccess = todos => ({
  type: ActionTypes.FETCH_TODO_LIST_SUCCESS,
  todos: todos
});
const fetchTodoListFailed = error => ({
  type: ActionTypes.FETCH_TODO_LIST_FAILED,
  error: error
});

// todo list - post
const postTodoListPending = () => ({
  type: ActionTypes.POST_TODO_LIST_PENDING
});
const postTodoListSuccess = postedTodo => ({
  type: ActionTypes.POST_TODO_LIST_SUCCESS,
  postedTodo: postedTodo
});
const postTodoListFailed = postedTodoError => ({
  type: ActionTypes.POST_TODO_LIST_FAILED,
  postedTodoError: postedTodoError
});

// todo list priorities
const fetchTodoPrioritiesPending = () => ({
  type: ActionTypes.FETCH_TODO_PRIORITIES_PENDING
});
const fetchTodoPrioritiesSuccess = priorities => ({
  type: ActionTypes.FETCH_TODO_PRIORITIES_SUCCESS,
  priorities: priorities
});
const fetchTodoPrioritiesFailed = error => ({
  type: ActionTypes.FETCH_TODO_PRIORITIES_FAILED,
  error: error
});

const Actions = {
  setChosenMenu,
  fetchTodoListPending,
  fetchTodoListSuccess,
  fetchTodoListFailed,
  postTodoListPending,
  postTodoListSuccess,
  postTodoListFailed,
  fetchTodoPrioritiesPending,
  fetchTodoPrioritiesSuccess,
  fetchTodoPrioritiesFailed
};

export default Actions;
