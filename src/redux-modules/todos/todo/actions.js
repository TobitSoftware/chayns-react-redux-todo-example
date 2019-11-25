// Types
import { TOGGLE_TODO_CHECKED } from './types';

// Api functions
import { postTodosToLocalStorage } from '../../../api/todos/post';

// Selectors
import { getTodos } from '../selectors';

export const toggleTodoChecked = (id) => (dispatch, getState) => {
    dispatch({ type: TOGGLE_TODO_CHECKED, id });

    const state = getState();

    const todos = getTodos(state);

    postTodosToLocalStorage(todos);
};
