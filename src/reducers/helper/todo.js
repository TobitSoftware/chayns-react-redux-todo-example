import { TOGGLE_TODO_CHECKED } from '../../actions/todo';

// We define a helper reducer to split the code.
// This reducer will not be used in the rootReducer.
// It's only helping the todosReducer to stay readable.
const todoReducer = (todo, action) => {
    if (todo.get('id') !== action.id) {
        return todo;
    }

    switch (action.type) {
        case TOGGLE_TODO_CHECKED:
            return todo.set('checked', !todo.get('checked'));
        default:
            return todo;
    }
};

export default todoReducer;
