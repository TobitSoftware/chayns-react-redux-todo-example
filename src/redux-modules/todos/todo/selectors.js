import { getTodos } from '../selectors';

export const getTodo = (state, id) => getTodos(state).find((todo) => todo.id === id);
