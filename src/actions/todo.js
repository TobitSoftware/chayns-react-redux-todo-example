import postTodosToLocalStorage from '../api/post/todos';

// We define our action that can be dispatched
export const TOGGLE_TODO_CHECKED = 'TOGGLE_TODO_CHECKED';
export const toggleTodoChecked = id => ({
    type: TOGGLE_TODO_CHECKED,
    id
});

// We use another function to handle the dispatch and side effects
export const handleToggleTodoChecked = id => (dispatch, getState) => {
    dispatch(toggleTodoChecked(id));
    postTodosToLocalStorage(getState().todos);
};
