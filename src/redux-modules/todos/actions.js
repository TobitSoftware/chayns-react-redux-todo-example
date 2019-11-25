// Actions
import { ADD_TODO, REMOVE_TODO, SET_TODOS } from './types';

// Api functions
import { getTodosFromLocalStorage } from '../../api/todos/get';
import { postTodosToLocalStorage } from '../../api/todos/post';

// Selectors
import { getTodos } from './selectors';


export const addTodo = (todo) => (dispatch, getState) => {
    dispatch({ type: ADD_TODO, todo });

    const state = getState();

    const todos = getTodos(state);

    postTodosToLocalStorage(todos);
};

export const removeTodo = (id) => (dispatch, getState) => {
    dispatch({ type: REMOVE_TODO, id });

    const state = getState();

    const todos = getTodos(state);

    postTodosToLocalStorage(todos);
};

export const setTodos = (todos) => ({ type: SET_TODOS, todos });

export const loadTodos = () => async (dispatch) => {
    const { status, data: todos } = await getTodosFromLocalStorage();

    if (status === 200) {
        dispatch(setTodos(todos));
    }
};
