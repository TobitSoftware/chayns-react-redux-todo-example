import LOCALSTORAGE_KEY from '../../constants/localstorage';

// It's useful to define several functions for data interactions like get, post, update ... and split them in different directories
export default function postTodosToLocalStorage(todos) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
}
