import LOCALSTORAGE_KEY from '../../constants/localstorage';

// It's useful to define several functions for data interactions like get, post, update ... and split them in different directories
async function getTodosFromLocalStorage() {
    return new Promise((resolve) => {
        const todos = localStorage.getItem(LOCALSTORAGE_KEY);
        if (todos) {
            resolve(JSON.parse(todos));
        } else {
            resolve(JSON.parse('[]'));
        }
    });
}

export default getTodosFromLocalStorage;
