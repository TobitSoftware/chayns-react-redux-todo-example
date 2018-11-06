import { List, fromJS } from 'immutable';

import { ADD_TODO, REMOVE_TODO, RECEIVE_TODOS } from '../actions/todos';
import { TOGGLE_TODO_CHECKED } from '../actions/todo';

import todoReducer from './helper/todo';

export const initialState = List();

// We define our todos reducer to handle the dispatch of different actions.
// Reducers are the only correct way to change our redux state.
const todos = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TODOS:
            return fromJS(action.todos);
        case ADD_TODO:
            return state.push(action.todo);
        case REMOVE_TODO:
            return state.filter(todo => todo.get('id') !== action.id);
        case TOGGLE_TODO_CHECKED:
            return state.map(todo => todoReducer(todo, action));
        default:
            return state;
    }
};

export default todos;
