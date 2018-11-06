// It's useful to define several functions for data interactions like get, post, update ... and split them in different directories
export default function postTodosToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}
