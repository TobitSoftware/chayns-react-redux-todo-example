import React from 'react';
import ReactDOM from 'react-dom';
import immutable from 'immutable';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root';
import { getTodos } from './actions/todos';
import App from './components/App';

const reduxLogger = createLogger({
    duration: true
});

const middlewares = [thunk];

if (__DEV__ || __STAGING__) {
    const installDevTools = require('immutable-devtools');
    installDevTools(immutable);
    middlewares.push(reduxLogger);
}

// We create our redux store
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

// We enable immutable dev tools for a better console experience
if (__DEV__ || __STAGING__) {
    const installDevTools = require('immutable-devtools');
    installDevTools(immutable);
}

// We get the root element
const rootEl = document.getElementById('app');

// We render the given component into the root element
const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        rootEl
    );
};

/**
 * The init function is used to be sure, that chayns® will be ready until render() is called
 * @return {Promise.<void>}
 */
async function init() {
    try {
        // We wait until chayns® is ready
        await chayns.ready;

        // We dispatch getTodos to get the todos into our redux state
        store.dispatch(getTodos());

        // We render the App
        render(App);
    } catch (err) {
        console.warn('no chayns environment found', err);
    }
}

init();
