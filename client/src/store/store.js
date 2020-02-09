import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from "./reducers/reducer";

const inittialState = {
    text: "initialState"
}
const middlewares = [thunk];

export const store = createStore(reducer, inittialState, applyMiddleware(...middlewares));