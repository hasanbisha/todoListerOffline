import { SIGN_UP, ERROR } from '../actions/Types';

let initialState = {
    name: '',
    accessToken: '',
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
            return {
                ...state,
                accessToken: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            } 
        default:
            return state
    }
}