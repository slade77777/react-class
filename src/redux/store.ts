import {combineReducers, createStore, applyMiddleware} from "redux";
import {userReducer} from "./reducers/userReducer";
import thunk from 'redux-thunk'

export const store = createStore(combineReducers({
  user: userReducer
}), applyMiddleware(thunk));
