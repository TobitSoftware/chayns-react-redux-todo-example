import { combineReducers } from 'redux';

// Reducers
import todos from './todos/reducer';
import todo from './todos/todo/reducer';

// The given reducers will be combined to create the structure of our redux state.
const rootReducer = combineReducers({
    todos,
    todo,
});

export default rootReducer;
