import uuid from 'uuid';
import { ADD_TODO, GET_TODOS, REMOVE_TODO, COMPLETE_TODO, GET_TODO, EDIT_TODO } from './Types';
import { AsyncStorage } from 'react-native';

export const getTodos = () => dispatch => {
    let Todos = [];

    // Get all keys from async storage
    AsyncStorage.getAllKeys()
        .then(keys => {
            // Get all the elements responding to these keys, in this case every element
            AsyncStorage.multiGet(keys)
            .then(response => {
                // Map through these elements and format em
                response.map(obj => {
                    Todos.push(JSON.parse(obj[1]))
                })
            })
            .then(() => {
                // After loop finishes
                dispatch({
                    type: GET_TODOS,
                    payload: Todos
                });            
            })
        })
}

export const addTodo = (Todo) => dispatch => {
    const id = uuid.v4();
    AsyncStorage.setItem(id, JSON.stringify({id: id, name: Todo, completed: false}));

    dispatch({
        type: ADD_TODO,
        payload: {id: id, name: Todo}
    })
}

export const deleteTodo = (key) => dispatch => {
    AsyncStorage.removeItem(key);

    dispatch({
        type: REMOVE_TODO,
        payload: key
    })
}

export const completeTodo = (key) => dispatch => {
    AsyncStorage.getItem(key)
        .then(asyncTodo => {
            const todo = JSON.parse(asyncTodo);
            todo.completed = !todo.completed;

            AsyncStorage.setItem(key, JSON.stringify(todo));
            dispatch({
                type: COMPLETE_TODO,
                payload: key
            })
        })
}

export const getTodo = (key) => dispatch => {
    AsyncStorage.getItem(key)
        .then(todo => {
            dispatch({
                type: GET_TODO,
                payload: JSON.parse(todo)
            })
        })
}

export const editTodo = (todo) => dispatch => {
    AsyncStorage.setItem(todo.id, JSON.stringify(todo));

    dispatch({
        type: EDIT_TODO,
        payload: todo
    })
}

// just for testing purposes 
export const removeAllTodos = () => dispatch => {
    AsyncStorage.getAllKeys()
    .then(keys => {
        keys.forEach(key => {
            AsyncStorage.removeItem(key);
        })
    })
}