import getTodosFromLocalStorage from '../api/get/todos';
import postTodosToLocalStorage from '../api/post/todos';

// We define our action that can be dispatched
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const receiveTodos = todos => ({
    type: RECEIVE_TODOS,
    todos
});

// We define our action that can be dispatched
export const ADD_TODO = 'ADD_TODO';
export const addTodo = todo => ({
    type: ADD_TODO,
    todo
});

// We define our action that can be dispatched
export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
});

// We load our data and after that we save the result via dispatching our receiveTodos action
export const getTodos = () => dispatch => getTodosFromLocalStorage().then((todos) => {
    dispatch(receiveTodos(todos));
});

// We use another function to handle the dispatch and side effects
export const handleAddTodo = todo => (dispatch, getState) => {
    dispatch(addTodo(todo));
    postTodosToLocalStorage(getState().todos);
};

// We use another function to handle the dispatch and side effects
export const handleRemoveTodo = id => (dispatch, getState) => {
    dispatch(removeTodo(id));
    postTodosToLocalStorage(getState().todos);
};
