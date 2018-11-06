import { combineReducers } from 'redux';
import todos from './todos';

// We define our redux state.
// The given reducers will be combined to create the structure of our redux state.
const rootReducer = combineReducers({
    todos
});

export default rootReducer;
