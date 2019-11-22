import produce from 'immer';

// Other reducers
import todoReducer from './todo/reducer';

// Action types
import { ADD_TODO, REMOVE_TODO, SET_TODOS } from './types';
import { SET_TODO_NAME, TOGGLE_TODO_CHECKED } from './todo/types';

const initialState = [];

// eslint-disable-next-line consistent-return
export default (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case ADD_TODO:
            draft.push(action.todo);
            break;
        case SET_TODOS:
            return action.todos;
        case REMOVE_TODO:
            draft.filter((todo) => todo.id !== action.id);
            break;
        case SET_TODO_NAME:
        case TOGGLE_TODO_CHECKED:
            draft.map((todo) => todoReducer(todo, action));
            break;
        default:
            break;
    }
});
