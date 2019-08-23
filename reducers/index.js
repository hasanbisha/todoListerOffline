import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { userReducer } from './userReducer';

export default combineReducers({
    todos: todoReducer,
    user: userReducer
})