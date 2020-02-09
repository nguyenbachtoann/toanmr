import ActionTypes from '../actions/actionTypes';

// const initialState = {
//   pending: false,
//   todos: [],
//   error: undefined
// };

export default (state, action) => {
  switch (action.type) {
    // get todo -----------------------------------
    case ActionTypes.FETCH_TODO_LIST_PENDING:
      return {
        ...state,
        pendingTodos: true
      };
    case ActionTypes.FETCH_TODO_LIST_SUCCESS:
      return {
        ...state,
        pendingTodos: false,
        todos: action.todos
      };
    case ActionTypes.FETCH_TODO_LIST_FAILED:
      return {
        ...state,
        pendingTodos: false,
        error: action.error
      };
    // post todo -----------------------------------
    case ActionTypes.POST_TODO_LIST_PENDING:
      return {
        ...state,
        pendingPostTodo: true
      };

    case ActionTypes.POST_TODO_LIST_SUCCESS:
      return {
        ...state,
        pendingPostTodo: false,
        postedTodo: action.postedTodo
      };
    case ActionTypes.POST_TODO_LIST_FAILED:
      return {
        ...state,
        pendingPostTodo: false,
        postedTodoError: action.error
      };
    // get priority -----------------------------------
    case ActionTypes.FETCH_TODO_PRIORITIES_PENDING:
      return {
        ...state,
        pendingPriorities: true
      };

    case ActionTypes.FETCH_TODO_PRIORITIES_SUCCESS:
      return {
        ...state,
        pendingPriorities: false,
        priorities: action.priorities
      };
    case ActionTypes.FETCH_TODO_PRIORITIES_FAILED:
      return {
        ...state,
        pendingPriorities: false,
        error: action.error
      };
    default:
      return state;
  }
};

// todo list getters
export const getTodos = state => state.todos;
export const getTodosPending = state => state.pendingTodos;
export const getTodosError = state => state.error;
export const getPostedTodo = state => state.postedTodo;
export const getPostedTodoPending = state => state.pendingPostTodo;
export const getPostedTodoError = state => state.postedTodoError;
// todo prioroty getters
export const getTodoPriorities = state => state.priorities;
export const getTodoPrioritiesPending = state => state.pendingPriorities;
export const getTodoPrioritiesError = state => state.error;
