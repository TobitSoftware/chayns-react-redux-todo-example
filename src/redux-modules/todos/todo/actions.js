// Types
import { TOGGLE_TODO_CHECKED } from './types';

// Selectors
import { getTodos } from '../selectors';

// Api functions
import { postTodosToLocalStorage } from '../../../api/todos';

export const toggleTodoChecked = (id) => (dispatch, getState) => {
    dispatch({ type: TOGGLE_TODO_CHECKED, id });

    const state = getState();

    const todos = getTodos(state);

    postTodosToLocalStorage(todos);
};
