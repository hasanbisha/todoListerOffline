import { GET_TODOS, ADD_TODO, REMOVE_TODO, COMPLETE_TODO, GET_TODO, EDIT_TODO } from '../actions/Types';

let initialState = {
    todos: [],
    todo: {}
}

export const todoReducer = (state = initialState, action) => {
    let newTodos = [];

    switch(action.type) {
        case GET_TODOS: 
            return {
                ...state,
                todos: action.payload
            };
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO:
            state.todos = state.todos.filter(todo => todo.id !== action.payload);

            return {
                ...state
            }
        case COMPLETE_TODO:
            for (let i = 0; i < state.todos.length; i++) {
                if(state.todos[i].id == action.payload && action.payload !== undefined){
                    state.todos[i].completed = !state.todos[i].completed;
                    newTodos.push(state.todos[i]);
                } else {
                    newTodos.push(state.todos[i]);
                }
            }

            return {
                ...state,
                todos: [...newTodos]
            };
        case GET_TODO:
            return {
                ...state,
                todo: action.payload
            }
        case EDIT_TODO:
                for (let i = 0; i < state.todos.length; i++) {
                    if(state.todos[i].id == action.payload && action.payload !== undefined){
                        state.todos[i] = action.payload;
                        newTodos.push(state.todos[i]);
                    } else {
                        newTodos.push(state.todos[i]);
                    }
                }

                return {
                    ...state,
                    todos: [...newTodos]
                };
        default:
            return state;
    }
}